import React, {
  Component,
  Text,
  Dimensions
} from 'react-native'
import {color} from './colors'

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
    const {width} = Dimensions.get('window')
    return (
      <Text style={{width, color, textAlign: 'center', position: 'absolute', bottom: 100}}>
        {((Math.pow(2, (this.state.date - 1457393526982) / 777600000) - 1) * 400000 + 18000).toFixed(0)} infected already
      </Text>
    )
  }
}

export default Counter
