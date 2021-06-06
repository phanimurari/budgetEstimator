import {Component} from 'react'
import "./index.css"

import Table from 'react-bootstrap/Table'

import  BudgetItemDetails from '../BudgetItemsDetails/index'

class   BudgetDetails extends Component {

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

    return(
<Table responsive className ="items-table-container">
  <thead>
    <tr>
        <th>Item</th>
        <th>Budget</th>
        <th>Cost</th>
        <th>Deviation</th>
    </tr>
  </thead>
  <tbody>
  {this.renderItems()}
  </tbody>
</Table>)
}
}



export default BudgetDetails



