import React, {
  Component,
  StyleSheet,
  Text,
  Animated,
  Dimensions
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
        <Text onPress={share} style={styles.button}>
          SPREAD THE PATHOGEN
        </Text>
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
    backgroundColor: color,
    lineHeight: 50
  }
})

export default ShareButton
