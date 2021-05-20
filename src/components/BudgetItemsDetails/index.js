import {Component} from 'react'

class BudgetItemDetails extends Component {

  constructor(props) {
    super(props)
    this.state = {isEdit : false,
       itemName : this.props.item.itemName, itemCost: this.props.item.cost,
       itemBudget : this.props.item.budget,
      id: this.props.item.id}
  }


  deleteItemIsClicked = () => {
    const {item, deleteBudgetItem} = this.props
    deleteBudgetItem(item.id)
  }

  onEditItemDetails = () => {

    const{isEdit} = this.state
    this.setState({isEdit : !isEdit})

    if(isEdit) {

    const { itemName, itemBudget, itemCost, id} = this.state
    const {onEditedItemsBudgetDetails} = this.props

    const editedItem = {
      id,
      itemName, 
      budget : itemBudget,
      cost : itemCost
    }

    onEditedItemsBudgetDetails(editedItem)
    
  }
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

    console.log(item, 'the item')

   const {isEdit, itemName, itemBudget, itemCost} = this.state


   console.log(isEdit, itemName, itemBudget)

   return (
 <li className = "budget-item-container">
  {!isEdit && <>
<p className = "budget-item">{itemName}</p>
<p className = "budget-item">{itemBudget}</p>
<p className = "budget-item">{itemCost}</p>
<p className = "budget-item">{itemCost === 0 ? 0 :item.budget - item.cost}</p>
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