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

  setTheState = () => {

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
 <tr className = "table-row">
  {!isEdit && <>
<td className ="item-class">{nameOfItem}</td>
<td className ="item-class">{budget}</td>
<td className ="item-class">{itemCost}</td>
<td className ="item-class">{itemCost === 0 ? 0 :itemBudget - itemCost}</td>
<td className ="item-class">
<button type='button' className = "button" onClick = {this.onEditItemDetails}>Edit</button>
</td>
<td className ="item-class">
<button type='button' className = "button" onClick = {this.deleteItemIsClicked}>Delete</button>
</td>
</>}
{isEdit && <>
  <td> <input type='text' className ="item-class" value = {nameOfItem} onChange = {this.onChangeItemName}/> </td>
 <td > <input type = 'text' className ="item-class" value = {itemBudget} onChange = {this.onChangeItemBudget}/> </td> 
 <td > <input type="text" className ="item-class" value = {itemCost}  onChange = {this.onChangeItemCost}/> </td> 
 <td>{itemBudget -itemCost}</td>
  <td><button type = "button" className = "button" onClick = {this.onEditItemDetails}>Update</button> </td>
 <td> <button type='button' className = "button" onClick = {this.deleteItemIsClicked}>Delete</button> </td>
  </>
} </tr>)

}

}

export default BudgetItemDetails





