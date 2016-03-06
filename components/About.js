import React, {
  Component,
  Text,
  StyleSheet,
  Animated,
  Dimensions,
  Easing,
  View
} from 'react-native'

class About extends Component {
  constructor () {
    super()
    this.state = {
      showingAbout: false,
      size: new Animated.Value(26),
      radius: new Animated.Value(13),
      x: new Animated.Value(10),
      y: new Animated.Value(30),
      opacity: new Animated.Value(0)
    }
    return
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
          <Text style={styles.aboutButton}
            onPress={this.showAbout.bind(this)}>?</Text>
        </Animated.View>
        {this.state.showingAbout &&
          <Animated.View
            style={[styles.textView, {opacity: this.state.opacity}]}>
            <Text style={styles.text}>bla bla bla</Text>
          </Animated.View>
        }
      </View>
    )
  }

  showAbout () {
    if (!this.state.showingAbout) {
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
  }
}

const styles = StyleSheet.create({
  aboutView: {
    position: 'absolute',
    backgroundColor: '#B85667'
  },
  aboutButton: {
    color: '#F2F3CB',
    textAlign: 'center',
    paddingTop: 5,
    backgroundColor: 'transparent'
  },
  textView: {
    position: 'absolute',
    paddingTop: 22,
    backgroundColor: '#B85667'
  },
  text: {
    color: '#F2F3CB'
  }
})

export default About