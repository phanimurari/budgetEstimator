import "./index.css"

const BudgetDetails = props => {

  const {itemsBudgetDetails} = props;

const renderItems = () => {

  const listOfBudgetItems = itemsBudgetDetails.map(item => <li key = {item.id} className = "budget-item-container">
  
  <p className = "budget-item">{item.itemName}</p>
  <p className = "budget-item">{item.budget}</p>
  <p className = "budget-item">{item.cost}</p>
  <p className = "budget-item">{item.budget - item.cost}</p>
  </li>)

return listOfBudgetItems
}

  return <ul>
    {renderItems()}
  </ul>
}
  

export default BudgetDetails