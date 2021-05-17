import './App.css'
import BudgetDetailsEstimator from './components/BudgetDetailsEstimator'

const itemsBudgetDetails = [ {
  id : 1,
  itemName : "item1",
  budget : 1000,
  cost : 800
},{
id : 2,
itemName : "item2",
  budget : 2000,
  cost : 500
},]


const App = () => <BudgetDetailsEstimator itemsBudgetDetails = {itemsBudgetDetails}/>
export default App
