import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {id: countryAndCapitalsList[0].country}

  onChangeOption = event => {
    const result = countryAndCapitalsList.filter(
      eachItem => eachItem.id === event.target.value,
    )
    this.setState({id: result[0].country})
  }

  render() {
    const {id} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Countries and Capitals</h1>
          <select className="select" onChange={this.onChangeOption}>
            {countryAndCapitalsList.map(eachList => (
              <option key={eachList.id} value={eachList.id} className="option">
                {eachList.capitalDisplayText}
              </option>
            ))}
          </select>
          <span className="span"> is capital of which country?</span>
          <p className="para">{id}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
