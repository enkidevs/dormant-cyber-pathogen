import React, {
  Component,
  Text,
  StyleSheet,
  Animated,
  Dimensions,
  Easing,
  View,
  ScrollView
} from 'react-native'
import {color as backgroundColor, backgroundColor as color} from './colors'

class About extends Component {
  constructor () {
    super()
    this.state = {
      showingAbout: false,
      size: new Animated.Value(0),
      radius: new Animated.Value(0),
      x: new Animated.Value(23),
      y: new Animated.Value(43),
      opacity: new Animated.Value(0)
    }
    return
  }

  componentDidMount () {
    Animated.spring(
      this.state.size,
      {toValue: 26, tension: 1.2, friction: 2.5},
    ).start()
    Animated.spring(
      this.state.radius,
      {toValue: 13, tension: 1.2, friction: 2.5},
    ).start()
    Animated.spring(
      this.state.x,
      {toValue: 10, tension: 1.2, friction: 2.5},
    ).start()
    Animated.spring(
      this.state.y,
      {toValue: 30, tension: 1.2, friction: 2.5},
    ).start()
  }

  render () {
    const {height, width} = Dimensions.get('window')
    return (
      <View style={{position: 'absolute', width, height, top: 0, left: 0}}>
        <Animated.View
          style={[styles.aboutView, {
            top: this.state.y,
            right: this.state.x,
            width: this.state.size,
            height: this.state.size,
            borderRadius: this.state.radius}]}>
          <Text style={styles.aboutButton} onPress={this.showAbout.bind(this)}>?</Text>
        </Animated.View>
        <Animated.View
          pointerEvents={this.state.showingAbout ? 'auto' : 'none'}
          style={[styles.textView, {width, height}, {opacity: this.state.opacity}]}>
          <ScrollView style={{width, height, paddingTop: 22}}>
            <Text style={styles.text}>bla bla bla</Text>
            <Text style={styles.text}>bla bla bla</Text>
            <Text style={styles.text}>bla bla bla</Text>
            <Text style={styles.text}>bla bla bla</Text>
          </ScrollView>
          <Text style={styles.closeButton} onPress={this.hideAbout.bind(this)}>x</Text>
        </Animated.View>
      </View>
    )
  }

  showAbout () {
    if (this.state.showingAbout) { return }
    const {height, width} = Dimensions.get('window')
    const change = 2 * Math.max(height, width) + 40
    const config = {
      easing: Easing.quad,
      duration: 200
    }
    Animated.timing(
      this.state.size,
      Object.assign({}, config, {toValue: change}),
    ).start()
    Animated.timing(
      this.state.radius,
      Object.assign({}, config, {toValue: change / 2}),
    ).start()
    Animated.timing(
      this.state.x,
      Object.assign({}, config, {toValue: -change / 2 + 10}),
    ).start()
    Animated.timing(
      this.state.y,
      Object.assign({}, config, {toValue: -change / 2 + 30}),
    ).start()
    Animated.timing(
      this.state.opacity,
      {toValue: 1, delay: 200, duration: 200},
    ).start()
    this.setState({showingAbout: true})
  }

  hideAbout () {
    if (!this.state.showingAbout) { return }
    const config = {
      easing: Easing.quad,
      delay: 200,
      duration: 200
    }
    Animated.timing(
      this.state.size,
      Object.assign({}, config, {toValue: 26}),
    ).start()
    Animated.timing(
      this.state.radius,
      Object.assign({}, config, {toValue: 13}),
    ).start()
    Animated.timing(
      this.state.x,
      Object.assign({}, config, {toValue: 10}),
    ).start()
    Animated.timing(
      this.state.y,
      Object.assign({}, config, {toValue: 30}),
    ).start()
    Animated.timing(
      this.state.opacity,
      {toValue: 0, duration: 200},
    ).start()
    this.setState({showingAbout: false})
  }
}

const styles = StyleSheet.create({
  aboutView: {
    position: 'absolute',
    backgroundColor
  },
  aboutButton: {
    color,
    textAlign: 'center',
    position: 'relative',
    height: 44,
    width: 44,
    left: -9,
    top: -9,
    paddingTop: 14,
    backgroundColor: 'transparent'
  },
  textView: {
    position: 'absolute',
    backgroundColor
  },
  text: {
    color
  },
  closeButton: {
    position: 'absolute',
    textAlign: 'center',
    height: 44,
    width: 44,
    top: 21,
    right: 1,
    paddingTop: 14,
    color
  }
})

export default About
