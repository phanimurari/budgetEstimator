import {Component} from 'react'

import './index.css'

const ADD_CONST = "Add Cost"
const ADD_BUDGET = "Add Budget"

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
    const { nameOfItem, itemBudget, itemCost, id} = this.state
    const {onEditedItemsBudgetDetails} = this.props
    const itemCostInNumber = parseInt(itemCost);
    const itemBudgetInNumber = parseInt(itemBudget);

    let updatedItemCost = itemCost;
    let updateBudgetItemCost = itemBudgetInNumber;

     if(isNaN(itemCostInNumber) || itemCostInNumber === 0) {
      updatedItemCost = ADD_CONST
     }

     if(isNaN(itemBudgetInNumber) || itemBudgetInNumber === 0) {
       updateBudgetItemCost = ADD_BUDGET
     }
     
    const editedItem = {
      id,
      itemName :  nameOfItem,
      budget : updateBudgetItemCost,
      cost : updatedItemCost
    }

    this.setState({itemCost : updatedItemCost, itemBudget : updateBudgetItemCost})
    onEditedItemsBudgetDetails(editedItem)
}

  onChangeItemName = (event) => {
    this.setState({nameOfItem : event.target.value})
  }

  onChangeItemBudget = event => {

    this.setState({itemBudget : event.target.value})
  }


  onChangeItemCost = event => {
    this.setState({itemCost : event.target.value})
  }

  renderItemDeviation = () => {

    const {itemBudget, itemCost} = this.state
    const itemCostInNumber = parseInt(itemCost)
    const itemBudgetInNumber =  parseInt(itemBudget)
    let deviationAmount = '-'
    let deviationAmountClass = 'positive-deviation'

    if(!isNaN(itemCostInNumber) && !isNaN(itemBudgetInNumber)) {
      deviationAmount = itemBudget - itemCost
      if(deviationAmount < 0) {
        deviationAmountClass = "negative-deviation"
      }
    }

    return <td className ={deviationAmountClass}>{deviationAmount}</td>

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
{itemCost === ADD_CONST  || itemBudget === ADD_BUDGET ? '-' : this.renderItemDeviation()}
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
 {itemCost === ADD_CONST  || itemBudget === ADD_BUDGET  ? '-' : this.renderItemDeviation()}
  <td><button type = "button" className = "button" onClick = {this.onEditItemDetails}>Update</button> </td>
 <td> <button type='button' className = "button" onClick = {this.deleteItemIsClicked}>Delete</button> </td>
  </>
} </tr>)

}

}

export default BudgetItemDetails





