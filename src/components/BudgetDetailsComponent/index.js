import {Component} from 'react'
import "./index.css"

import  BudgetItemDetails from '../BudgetItemsDetails/index'

class BudgetDetails extends Component {

deleteBudgetItem = (id) => {
  const { onDeleteBudgetEstimator} = this.props

  onDeleteBudgetEstimator(id)

}


renderItems = () => {

  const {itemsBudgetDetails, onEditedItemsBudgetDetails} = this.props;

  const listOfBudgetItems = itemsBudgetDetails.map(item => <BudgetItemDetails onEditedItemsBudgetDetails = {onEditedItemsBudgetDetails} key = {item.id} item = {item} deleteBudgetItem = {this.deleteBudgetItem} onEditItemDetails = {this.onEditItemDetails}/>)

  return listOfBudgetItems
}


  render() {

    return( <ul>
      {this.renderItems()}
    </ul>)
  }
    
  }



export default BudgetDetails