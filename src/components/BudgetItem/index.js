import {Component} from 'react'


class BudgetItem extends Component {
  state  = {item: '', itemBudget : ''}


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

      const addedItem = {
        itemName: item,
        budget: itemBudget,
        cost
      }
      onAddBudgetItem(addedItem)

    }
    
  }

render() {

  const {item, itemBudget} = this.state

  return (<div>
    <input type="input" value = {item} onChange = {this.onChangeItem}/>
    <input type="input" value = {itemBudget} onChange = {this.onChangeItemBudget}/>
    <button type="button" onClick = {this.onAddBudgetItem}>Add</button>
  </div>)
}

}


export default BudgetItem