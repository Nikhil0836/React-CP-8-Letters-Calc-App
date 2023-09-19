// Write your code here.
import './index.css'

import {Component} from 'react'

class LettersCalculatorApp extends Component {
  state = {inputValue: ''}

  countValue = event => {
    this.setState({
      inputValue: event.target.value,
    })
  }

  render() {
    const {inputValue} = this.state

    const totalCount = inputValue.length

    return (
      <div className="bg-container">
        <div className="card-container">
          <div className="input-card-container">
            <h1 className="heading">Calculate the Letters you enter</h1>
            <div>
              <label className="describe" htmlFor="labelText">
                Enter the phrase
              </label>
              <input
                id="labelText"
                type="text"
                placeholder="Calculator"
                className="input-card"
                onChange={this.countValue}
                value={inputValue}
              />
            </div>
            <p className="count-card">No.of letters: {totalCount}</p>
          </div>
          <div className="img-card">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
              alt="letters calculator"
              className="image"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculatorApp
