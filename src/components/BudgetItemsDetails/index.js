import {Component} from 'react'

class BudgetItemDetails extends Component {

  state = {isEdit : false, itemName : '', itemBudget : '', itemCost : ''}

  deleteItemIsClicked = () => {
    const {item, deleteBudgetItem} = this.props
    deleteBudgetItem(item.id)
  }

  onEditItemDetails = () => {

    const{isEdit} = this.state
    this.setState({isEdit : !isEdit})

    
  }

  onChangeItemName = (event) => {
    this.setState({itemName : event.target.value})
  }

  onChangeItemBudget = event => {

    this.setState({itemBudget : event.target.value})
  }


  onChangeItemCost = event => {
    this.setState({itemCost : event.target.value})
  }

  render() {

    const {item, deleteBudgetItem} = this.props

   const {isEdit, itemName, itemBudget, itemCost} = this.state

   return (
 <li className = "budget-item-container">
  {!isEdit && <>
<p className = "budget-item">{item.itemName}</p>
<p className = "budget-item">{item.budget}</p>
<p className = "budget-item">{item.cost}</p>
<p className = "budget-item">{item.cost === 0 ? 0 :item.budget - item.cost}</p>
<button type='button' onClick = {this.onEditItemDetails}>Edit</button>
<button type='button' onClick = {this.deleteItemIsClicked}>Delete</button>
</>}
 {isEdit && <>
 <input type='text' value = {itemName} onChange = {this.onChangeItemName}/>
 <input type = 'text' value = {itemBudget} onChange = {this.onChangeItemBudget}/>
 <input type="text" value = {itemCost} onChange = {this.onChangeItemCost}/>
 <button type = "button" onClick = {this.onEditItemDetails}>Update</button>
 <button type='button' onClick = {this.deleteItemIsClicked}>Delete</button>
 </>}
</li>)}
    


}


export default BudgetItemDetails