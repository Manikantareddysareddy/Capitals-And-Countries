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
const Option = props => {
  const {Details} = props
  const {id, capitalDisplayText, country} = Details
  return (
    <option className="value-style" value={id}>
      {capitalDisplayText}
    </option>
  )
}

class Capitals extends Component {
  state = {
    id: countryAndCapitalsList[0].id,
  }

  onChangeCapital = event => {
    const {id} = this.state

    this.setState({id: event.target.value})
  }

  render() {
    const {id} = this.state
    const countryItem = countryAndCapitalsList.find(each => each.id === id)
    const {country} = countryItem

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Countries And Capitals</h1>
          <div>
            <select
              className="select-style"
              id="selection"
              onChange={this.onChangeCapital}
            >
              {countryAndCapitalsList.map(item => (
                <Option Details={item} key={item.id} />
              ))}
            </select>
            <label className="label-El" htmlFor="selection">
              {' '}
              is capital of which country?
            </label>
          </div>
          <p className="para">{country}</p>
        </div>
      </div>
    )
  }
}
export default Capitals
