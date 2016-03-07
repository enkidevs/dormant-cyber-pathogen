import React, {
  Component,
  StyleSheet,
  Text,
  Animated,
  ActionSheetIOS,
  Dimensions
} from 'react-native'
import {color, backgroundColor} from './colors'

class Share extends Component {
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
        <Text onPress={this.showShareActionSheet} style={styles.button}>
          SPREAD THE PATHOGEN
        </Text>
      </Animated.View>
    )
  }

  showShareActionSheet () {
    ActionSheetIOS.showShareActionSheetWithOptions({
      url: 'https://code.facebook.com',
      message: 'message to go with the shared url',
      subject: 'a subject to go in the email heading'
    },
    (error) => {
      console.error(error)
    },
    (success, method) => {
      if (success) {
        console.log(`Shared via ${method}`)
      } else {
        console.log('You didn\'t share')
      }
    })
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

export default Share
