import {Component} from 'react'

import './index.css'

class BudgetSelector extends Component {
  state = { selectedItem : '', itemCost : ''}

  onSelectItem = event => {
    const selectedItem = event.target.value;
    this.setState({selectedItem})
  }

  renderSelectElement = () => {

    const {itemsBudgetDetails} = this.props

    return <select className = "selector-element" onChange = {this.onSelectItem}>
    <option key ="select">Select Item</option>
    {itemsBudgetDetails.map( item => <option key = {item.id}>{item.itemName}</option>)}
    </select>
  }

  onChangeCost = event => {

    const itemCost = event.target.value

    this.setState({itemCost})

  }

  addCostOfItem = () => {
    const {onAddCostOfItem} = this.props
    const {selectedItem, itemCost} = this.state;
    if(itemCost !== '') {
      onAddCostOfItem(selectedItem, Number(itemCost))
      this.setState({itemCost :''})
    }
  }

  

  render() {

    const {itemCost} = this.state

    return (
      <div className = "budget-selector-container">
        {this.renderSelectElement()}
        <input className = "budget-input-element" type='text' value = {itemCost} onChange = {this.onChangeCost} placeholder ="Cost of the Item"/>
        <button type = 'button'  className = "add-iten-button" onClick = {this.addCostOfItem}>Add Cost</button>
      </div>
    )
  }

}

export default BudgetSelector