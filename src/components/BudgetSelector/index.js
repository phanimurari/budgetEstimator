import {Component} from 'react'


class BudgetSelector extends Component {
  state = { selectedItem : '', itemCost : ''}

  onSelectItem = event => {
    const selectedItem = event.target.value;
    this.setState({selectedItem})
  }

  renderSelectElement = () => {

    const {itemsBudgetDetails} = this.props

    return <select  onChange = {this.onSelectItem}>
    <option key ="select">select</option>
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
    }
  }

  

  render() {

    const {itemCost} = this.state

    return (
      <div>
        {this.renderSelectElement()}
        <input type='text' value = {itemCost} onChange = {this.onChangeCost} placeholder ="cost"/>
        <button type = 'button'  onClick = {this.addCostOfItem}>Add</button>
      </div>
    )
  }

}

export default BudgetSelector