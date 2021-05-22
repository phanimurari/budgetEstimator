import {Component} from 'react'

import './index.css'

class BudgetItem extends Component {
    state =  {item: '', itemBudget : '', id : ''}
  

  onChangeItem = (event) => {

    const item = event.target.value;
    this.setState({item})

  }

  onChangeItemBudget = (event) => {

    const itemBudget = event.target.value
    this.setState({itemBudget})

  }

  onAddBudgetItem = () => {
    const {onAddBudgetItem} = this.props
    const{item, itemBudget} = this.state;
    const cost = 0;
    if(item !== "" && itemBudget !== "") {

      this.setState({item : '', itemBudget: '', id : new Date()})

      const addedItem = {
        id : new Date(),
        itemName: item,
        budget: Number(itemBudget),
        cost
      }


      onAddBudgetItem(addedItem)


    }
    
  }

render() {

  const {item, itemBudget} = this.state

  return (<div className = "budget-item-inputs-container">
    <input className = "budget-input-element" type="input" value = {item} placeholder = "Name of the Item" onChange = {this.onChangeItem}/>
    <input className = "budget-input-element" type="input" value = {itemBudget} placeholder = "Budget of the Item" onChange = {this.onChangeItemBudget}/>
    <div className = "button-container">
      <button className = "add-iten-button"type="button" onClick = {this.onAddBudgetItem}>Add Item</button>
    </div>
  </div>)
}

}


export default BudgetItem