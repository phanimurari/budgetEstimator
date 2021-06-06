import './index.css'

import Table from 'react-bootstrap/Table'

const BudgetCalculations = props => {

  const {itemsBudgetDetails} = props

  let totalBudgetOfItems = 0;
  let totalCostOfItems = 0;

  const totalItems = () => {
    return itemsBudgetDetails.length
  }

  const totalBudget = () => {


    itemsBudgetDetails.forEach(item => {
      totalBudgetOfItems = totalBudgetOfItems + Number(item.budget)
    })

    return totalBudgetOfItems


  }

  const totalCost = () => {

    itemsBudgetDetails.forEach(item => {
      totalCostOfItems = totalCostOfItems + Number(item.cost)
    })

    return totalCostOfItems

  }


  const deviation = () => {
    return totalBudgetOfItems - totalCostOfItems

  }


  return(
    <Table responsive className = "budget-calculations-container">
      <thead>
        <tr>
            <th>Total Items</th>
            <th>Total Budget</th>
            <th>Total Cost</th>
            <th>Deviation</th>
        </tr>
      </thead>
  
      <tr>
        <td>{totalItems()}</td>
        <td> {totalBudget()}</td>
        <td> {totalCost()}</td>
        <td> {deviation()}</td>
      </tr>
  
      <tbody>
      </tbody>
    </Table>)
  
}









export default BudgetCalculations