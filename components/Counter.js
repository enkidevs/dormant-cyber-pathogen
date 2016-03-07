import React, {
  Component,
  Text
} from 'react-native'

class Counter extends Component {
  constructor () {
    super()
    this.state = {
      date: Date.now()
    }

    this._timeout = setInterval(() => this.setState({date: Date.now()}), 1000)

    return
  }

  componentWillUnmount () {
    clearInterval(this._timeout)
  }

  render () {
    return (
      <Text>
        {Math.pow(2, this.state.date - 1457393526982) / 2} infected already
      </Text>
    )
  }
}

export default Counter
