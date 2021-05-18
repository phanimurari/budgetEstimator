import "./index.css"

const BudgetDetails = props => {

  const {itemsBudgetDetails} = props;

const deleteBudgetItem = (id) => {
  console.log("delete Button clicked")
}

const renderItems = () => {

  const listOfBudgetItems = itemsBudgetDetails.map(item => <li key = {item.id} className = "budget-item-container">
  
  <p className = "budget-item">{item.itemName}</p>
  <p className = "budget-item">{item.budget}</p>
  <p className = "budget-item">{item.cost}</p>
  <p className = "budget-item">{item.cost === 0 ? 0 :item.budget - item.cost}</p>
  <button type='button'>Edit</button>
  <button type='button' onClick = {deleteBudgetItem}>Delete</button>
  </li>)

return listOfBudgetItems
}

  return <ul>
    {renderItems()}
  </ul>
}
  

export default BudgetDetails