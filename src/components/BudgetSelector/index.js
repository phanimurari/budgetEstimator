import {Component} from 'react'


class BudgetSelector extends Component {
  state = { selectedItem : '', itemCost : ''}

  renderSelectElement = () => {
    return <select>
      <option>Item 1</option>
      <option>Item 2</option>
    </select>
  }


  render() {
    return (
      <div>
        {this.renderSelectElement()}
        <button type = 'button' >Add</button>
      </div>
    )
  }

}

export default BudgetSelector