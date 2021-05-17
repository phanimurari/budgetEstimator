import {Component} from 'react'
import BudgetDetails from '../BudgetDetailsComponent'
import BudgetItem from '../BudgetItem'
import BudgetSelector from '../BudgetSelector'
import './index.css'

class BudgetDetailsEstimator extends Component {

  state = {itemsBudgetDetails : []}


  componentDidMount() {
    const {itemsBudgetDetails} = this.props;
    this.setState({itemsBudgetDetails })
  }

onAddBudgetItem = (addedItem) => {
  
  const {itemsBudgetDetails} = this.props

  const updatedItemsBudgetDetails = [...itemsBudgetDetails, addedItem];

  this.setState({itemsBudgetDetails})
}


  render() {

    const {itemsBudgetDetails} = this.state;

    return (
      <div className = "budget-estimator-container">
      <h1>Budget Estimator</h1>
      <BudgetItem onAddBudgetItem = {this.onAddBudgetItem}/>
      <BudgetSelector />
      <BudgetDetails itemsBudgetDetails = {itemsBudgetDetails}/>
      </div>
    )
  }

}


export default BudgetDetailsEstimator