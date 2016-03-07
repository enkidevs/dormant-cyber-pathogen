import React, {
  Component,
  StyleSheet,
  Text,
  Animated,
  Dimensions,
  TouchableOpacity
} from 'react-native'
import share from './ShareFunction'
import {color, backgroundColor} from './colors'

class ShareButton extends Component {
  constructor () {
    super()
    this.state = {
      bottom: new Animated.Value(-100)
    }
    return
  }

  componentDidMount () {
    Animated.spring(
      this.state.bottom,
      {toValue: -20, tension: 1.2, friction: 2.5},
    ).start()
  }

  render () {
    const {width} = Dimensions.get('window')
    return (
      <Animated.View
        style={[styles.buttonWrapper, {bottom: this.state.bottom, width}]}>
        <TouchableOpacity onPress={share} style={styles.touchable}>
          <Text style={styles.button}>
            SPREAD THE PATHOGEN
          </Text>
        </TouchableOpacity>
      </Animated.View>
    )
  }
}

const styles = StyleSheet.create({
  buttonWrapper: {
    position: 'absolute',
    height: 100
  },
  button: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '500',
    height: 100,
    color: backgroundColor,
    lineHeight: 50,
    backgroundColor: color
  },
  touchable: {
    height: 100
  }
})

export default ShareButton
