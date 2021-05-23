import {Component} from 'react'

import './index.css'

class BudgetItemDetails extends Component {

  constructor(props) {
    super(props)

    this.state = {isEdit : false,
      nameOfItem : this.props.item.itemName, itemCost: this.props.item.cost,
      itemBudget : this.props.item.budget,
     id: this.props.item.id}

  }
  componentWillReceiveProps() {
    
    this.setState({
      nameOfItem : this.props.item.itemName, itemCost: this.props.item.cost,
      itemBudget : this.props.item.budget,
     id: this.props.item.id})

  }

  deleteItemIsClicked = () => {
    const {item, deleteBudgetItem} = this.props
    deleteBudgetItem(item.id)
  }

  onEditItemDetails = () => {

    const{isEdit} = this.state
    this.setState({isEdit : !isEdit})

    if(isEdit) {

    const { nameOfItem, itemBudget, itemCost, id} = this.state
    const {onEditedItemsBudgetDetails} = this.props

    const editedItem = {
      id,
      itemName :  nameOfItem,
      budget : itemBudget,
      cost : itemCost
    }

    onEditedItemsBudgetDetails(editedItem)
    
  }
}

  onChangeItemName = (event) => {

    console.log(event.target.value);

    this.setState({nameOfItem : event.target.value})
  }

  onChangeItemBudget = event => {

    this.setState({itemBudget : event.target.value})
  }


  onChangeItemCost = event => {
    this.setState({itemCost : event.target.value})
  }

  render() {

    const {item} = this.props

   const {isEdit, nameOfItem, itemBudget, itemCost} = this.state

   const {budget} = item

   return (
 <li className = "budget-item-container">
  {!isEdit && <>
<p className = "budget-item">{nameOfItem}</p>
<p className = "budget-item">{budget}</p>
<p className = "budget-item">{itemCost}</p>
<p className = "budget-item">{itemCost === 0 ? 0 :itemBudget - itemCost}</p>
<button type='button' className = "button" onClick = {this.onEditItemDetails}>Edit</button>
<button type='button' className = "button" onClick = {this.deleteItemIsClicked}>Delete</button>
</>}
 {isEdit && <>
 <input type='text' value = {nameOfItem} className = "input" onChange = {this.onChangeItemName}/>
 <input type = 'text' value = {itemBudget} className = "input" onChange = {this.onChangeItemBudget}/>
 <input type="text" value = {itemCost}  className = "input" onChange = {this.onChangeItemCost}/>
 <button type = "button" className = "button" onClick = {this.onEditItemDetails}>Update</button>
 <button type='button' className = "button" onClick = {this.deleteItemIsClicked}>Delete</button>
 </>}
</li>)}
    
}


export default BudgetItemDetails
