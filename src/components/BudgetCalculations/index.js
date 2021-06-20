import Table from 'react-bootstrap/Table'

import './index.css'


const BudgetCalculations = props => {

  const {itemsBudgetDetails} = props

  let totalBudgetOfItems = 0;
  let totalCostOfItems = 0;

  const totalItems = () => {
    return itemsBudgetDetails.length
  }

  const totalBudget = () => {


    itemsBudgetDetails.forEach(item => {

      const itemBudgetInNumber = parseInt(item.budget)
      
      if(!isNaN(itemBudgetInNumber)){
       
        totalBudgetOfItems = totalBudgetOfItems + Number(item.budget)
      }
    })
    return totalBudgetOfItems
  }

  const totalCost = () => {

    itemsBudgetDetails.forEach(item => {
      const itemCostInNumber = parseInt(item.cost)
      if(!isNaN(itemCostInNumber)) {
        console.log(isNaN(itemCostInNumber))
        totalCostOfItems = totalCostOfItems + Number(item.cost)
      }
     
    })
    return totalCostOfItems
  }


  const deviation = () => {
    const deviation = totalBudgetOfItems - totalCostOfItems
    const deviationClass = deviation >= 0 ? "postive-deviation" : "negative-deviation"
    return <td className = {deviationClass}>{deviation}</td>
  }


  return(
    <Table responsive >
      <thead>
        <tr className ="table-head">
            <th>Total Items</th>
            <th>Total Budget</th>
            <th>Total Cost</th>
            <th>Deviation</th>
        </tr>
      </thead>

      <tbody>

      <tr>
        <td className = "budget-item">{totalItems()}</td>
        <td className = "budget-item" > {totalBudget()}</td>
        <td className = "budget-item" > {totalCost()}</td>
      {deviation()}
      </tr>
  
      </tbody>
    </Table>)
  
}









export default BudgetCalculations