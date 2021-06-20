import {Component} from 'react'
import "./index.css"

import Table from 'react-bootstrap/Table'

import  BudgetItemDetails from '../BudgetItemsDetails/index'


const NO_ITEMS_ADDED = "https://res.cloudinary.com/imphanimurari/image/upload/c_thumb,w_200,g_face/v1624200466/BudgetEstimator/empty_zhpgis.jpg"


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


renderAddedItems = () => {
  return(
    <Table responsive className ="items-table-container">
      <thead>
        <tr>
            <th className ="table-head-item">Item</th>
            <th className ="table-head-item">Budget</th>
            <th className ="table-head-item">Cost</th>
            <th className ="table-head-item">Deviation</th>
            <th className ="table-head-item">Actions</th>
        </tr>
      </thead>
      <tbody>
      {this.renderItems()}
      </tbody>
    </Table>)
}



renderNoItemsAdded = () => {
  return <div className = 'items-not-added'>

<p className ="no-items-found-text">No Items Added</p>
<img src = {NO_ITEMS_ADDED} alt ="no-items-found" />

  </div>
}

renderBasedOnNumberOfItems  = () => {
  const {itemsBudgetDetails} = this.props
return  itemsBudgetDetails.length === 0 ? this.renderNoItemsAdded() : this.renderAddedItems();
}


  render() {

return(this.renderBasedOnNumberOfItems())
}
}



export default BudgetDetails



