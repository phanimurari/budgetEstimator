import {Component} from 'react'


const COST_ERROR_MSG = "Please add valid cost of the item"

class BudgetSelector extends Component {
  state = { selectedItem : '', itemCost : ''}

  onSelectItem = event => {
    const selectedItem = event.target.value;
    this.setState({selectedItem})
  }

  renderSelectElementOptions = () => {

    const {itemsBudgetDetails} = this.props

    if(itemsBudgetDetails.length > 0) {

      const itemsOption = itemsBudgetDetails.map( item => <option key = {item.id}>{item.itemName}</option>)

      return itemsOption;

    }

  }

  onChangeCost = event => {

    const itemCost = parseInt(event.target.value)

    if(!isNaN(itemCost)) {
      this.setState({itemCost : itemCost})
    }
    else if(event.target.value === '') {
      this.setState({itemCost : ''})
    }
  }

  addCostOfItem = () => {
    const {onAddCostOfItem} = this.props
    const {selectedItem, itemCost} = this.state;
   
    if(!isNaN(typeof(itemCost))) {
      alert(COST_ERROR_MSG)
    }
    else {
      onAddCostOfItem(selectedItem, Number(itemCost))
    }
    this.setState({itemCost :''})
  }

  render() {

    const {itemCost} = this.state

    return (
      <div className = "budget-selector-container"> 
        <select className = "budget-input-container" onChange = {this.onSelectItem}>
        <option key ="select">Select Item</option>
        {this.renderSelectElementOptions()}
        </select>
        <div className ="budet-input-item-container">
        <input className = "budget-input-container" type='text' value = {itemCost} onChange = {this.onChangeCost} placeholder ="Cost of the Item"/>
        <button type = 'button'  className = "add-item-button" onClick = {this.addCostOfItem}>Add Cost</button>
      </div>
      </div>
    )
  }

}

export default BudgetSelector