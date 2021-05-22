import {Component} from 'react'

class BudgetItemDetails extends Component {

state = {isEdit : false,
    nameOfItem : '', itemCost: '',
    itemBudget : '',
   id: ''}

  constructor(props) {
    super(props)

    console.log('constructor');

    this.state = {isEdit : false,
      nameOfItem : this.props.item.itemName, itemCost: this.props.item.cost,
      itemBudget : this.props.item.budget,
     id: this.props.item.id}

  }
  componentWillReceiveProps(nextProps) {
    
    const {item} = nextProps

    
    this.setState = {
      nameOfItem : this.props.item.itemName, itemCost: this.props.item.cost,
      itemBudget : this.props.item.budget,
     id: this.props.item.id}

    }

  setStateOfItemDetails = () => {

    const {item} = this.props
    this.state ={
      nameOfItem : item.itemName, itemCost: item.cost,
      itemBudget : item.budget,
     id: item.id}
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

    const {item, deleteBudgetItem} = this.props

   const {isEdit, nameOfItem, itemBudget, itemCost} = this.state

   const {itemName, budget, cost} = item

   return (
 <li className = "budget-item-container">
  {!isEdit && <>
<p className = "budget-item">{nameOfItem}</p>
<p className = "budget-item">{budget}</p>
<p className = "budget-item">{itemCost}</p>
<p className = "budget-item">{itemCost === 0 ? 0 :itemBudget - itemCost}</p>
<button type='button' onClick = {this.onEditItemDetails}>Edit</button>
<button type='button' onClick = {this.deleteItemIsClicked}>Delete</button>
</>}
 {isEdit && <>
 <input type='text' value = {nameOfItem} onChange = {this.onChangeItemName}/>
 <input type = 'text' value = {itemBudget} onChange = {this.onChangeItemBudget}/>
 <input type="text" value = {itemCost} onChange = {this.onChangeItemCost}/>
 <button type = "button" onClick = {this.onEditItemDetails}>Update</button>
 <button type='button' onClick = {this.deleteItemIsClicked}>Delete</button>
 </>}
</li>)}
    
}


export default BudgetItemDetails