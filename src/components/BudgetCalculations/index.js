import './index.css'

const BudgetCalculations = props => {

  const {itemsBudgetDetails} = props

  let totalBudgetOfItems = 0;
  let totalCostOfItems = 0;

  const totalItems = () => {
    return itemsBudgetDetails.length
  }

  const totalBudget = () => {


    itemsBudgetDetails.map(item => {
      totalBudgetOfItems = totalBudgetOfItems + item.budget
    })

    return totalBudgetOfItems


  }

  const totalCost = () => {

    itemsBudgetDetails.map(item => {
      totalCostOfItems = totalCostOfItems + item.cost
    })

    return totalCostOfItems

  }


  const deviation = () => {
    return totalBudget() - totalCost()

  }

  return(
    <div className = "budget-calculations-container">
  <p className = "calculated-item">Total Items : {totalItems()}</p>
  <p className = "calculated-item">Total Budget: {totalBudget()}</p>
<p className = "calculated-item">Total Cost : {totalCost()}</p>
<p className = "calculated-item">Deviation : {deviation()}</p>
    </div>
  )

}


export default BudgetCalculations