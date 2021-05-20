import {Component} from 'react'
import BudgetCalculations from '../BudgetCalculations'
import BudgetDetails from '../BudgetDetailsComponent'
import BudgetItem from '../BudgetItem'
import BudgetSelector from '../BudgetSelector'
import './index.css'

class BudgetDetailsEstimator extends Component {

  state = {itemsBudgetDetails : []}


  componentDidMount() {
    const itemsBudgetDetails = JSON.parse(localStorage.getItem("itemsBudgetDetails"));
    if(itemsBudgetDetails !== null) {
      this.setState({itemsBudgetDetails })  
    }
    else {
      this.setState({itemsBudgetDetails : []})
    }
  }

onAddBudgetItem = (addedItem) => {
  
   let {itemsBudgetDetails} = this.state

  itemsBudgetDetails.push(addedItem)

  this.onSettingItemsBudgetDetails(itemsBudgetDetails)

}

onAddCostOfItem = (itemName, itemCost) => {
  
  const {itemsBudgetDetails} = this.state


  const updatedCostOfItem = itemsBudgetDetails.map( item => {
    if(item.itemName === itemName) {
      item.cost = itemCost
    }
    return item
  })

  this.onSettingItemsBudgetDetails(updatedCostOfItem)
}


onDeleteBudgetEstimator = (id) => {

  let {itemsBudgetDetails} = this.state

  const updatedFilteredItems = itemsBudgetDetails.filter( item => {
    if(item.id !==id) {
      return item
    }
  })

  this.onSettingItemsBudgetDetails(updatedFilteredItems)

}


onEditedItemsBudgetDetails = (editedItem) => {

  let {itemsBudgetDetails} = this.state


  const updatedFilteredItems = itemsBudgetDetails.filter( item => {
    if(item.id ===editedItem.id) {
      item.itemName = editedItem.itemName
      item.budget = editedItem.budget
      item.cost = editedItem.cost
    }
    return item
  })

  this.onSettingItemsBudgetDetails(updatedFilteredItems)


}

onSettingItemsBudgetDetails = (itemsBudgetDetails) =>{
  this.setState({itemsBudgetDetails})
  
  const itemsBudgetDetailsInString = JSON.stringify(itemsBudgetDetails)

  localStorage.setItem("itemsBudgetDetails", itemsBudgetDetailsInString);
}


  render() {

    const {itemsBudgetDetails} =  this.state

    
      return (
        <div className = "budget-estimator-container">
        <h1>Budget Estimator</h1>
        <BudgetItem onAddBudgetItem = {this.onAddBudgetItem}/>
        <BudgetSelector itemsBudgetDetails = {itemsBudgetDetails} onAddCostOfItem ={this.onAddCostOfItem} />
        <BudgetDetails onEditedItemsBudgetDetails = {this.onEditedItemsBudgetDetails} itemsBudgetDetails = {itemsBudgetDetails} onDeleteBudgetEstimator = {this.onDeleteBudgetEstimator}/>
        <BudgetCalculations itemsBudgetDetails = {itemsBudgetDetails}/>
        </div>
      )
    }

    

}


export default BudgetDetailsEstimator