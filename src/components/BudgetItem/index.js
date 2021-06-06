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
    if(item !== "" && itemBudget !== ""  && !isNaN(itemBudget)) {

      this.setState({item : '', itemBudget: '', id : new Date()})

      const addedItem = {
        id : new Date(),
        itemName: item,
        budget: Number(itemBudget),
        cost
      }
      onAddBudgetItem(addedItem)
    }
    else {
      alert("Please give the valid items details");
    }
    
  }

render() {

  const {item, itemBudget} = this.state

  return (<div className = "budget-items-container">
    <div className ="budet-input-item-container">
       <input  type="input" className ="budget-input-container" value = {item} placeholder = "Name of the Item" onChange = {this.onChangeItem}/>
    </div>
    <div className ="budet-input-item-container">
      <input type="input" className ="budget-input-container" value = {itemBudget} placeholder = "Budget of the Item" onChange = {this.onChangeItemBudget}/>
      <button className = "add-item-button"type="button" onClick = {this.onAddBudgetItem}>Add Item</button>
    </div>
  </div>)

}

}


export default BudgetItem




