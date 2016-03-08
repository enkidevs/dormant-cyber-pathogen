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
import Link from './Link'
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
      <View style={{position: 'absolute', width, height, top: 0, left: 0}} pointerEvents='box-none'>
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
            <Text style={styles.title}>What is the Dormant Cyber Pathogen?</Text>
            <Text style={styles.text}>A <Link href='http://www.theguardian.com/technology/2016/mar/04/san-bernardino-da-baffles-security-community-lying-dormant-cyber-pathogen-iphone'>‘cyber pathogen’</Link> that <Link href='http://www.theguardian.com/technology/2016/mar/04/san-bernardino-da-baffles-security-community-lying-dormant-cyber-pathogen-iphone'>‘lies dormant’</Link> within an iPhone previously owned by the terrorists that attacked San Bernardino in December 2015 is about to unleash chaos onto the county’s infrastructure. Well, according to San Bernardino’s DA.</Text>
            <Text style={styles.text}>But don’t worry. Unless we’re talking about an episode of CSI: Cyber, it probably isn’t. And I’d hope that even CSI: Cyber wouldn’t introduce something that sounds so silly, given that the top result on Google for ‘cyber pathogen’ was previously <Link href='https://twitter.com/JZdziarski/status/705582216051597312'>Harry Potter fiction</Link>. </Text>

            <Text style={styles.title}>Sound stupid. Why should I care about it?</Text>

            <Text style={styles.text}>San Bernardino's DA claims <Link href='http://arstechnica.com/tech-policy/2016/03/what-is-a-lying-dormant-cyber-pathogen-san-bernardino-da-wont-say/'>Apple must assist the FBI in unlocking the phone because an alleged security threat might have been "introduced by its product and concealed by its operating system."</Link></Text>

            <Text style={styles.text}>However, Ars Technica quoted iPhone forensics expert Jonathan Zdziarski saying the DA’s warning equates to a “magical unicorn might exist on this phone”. </Text>

            <Text style={styles.text}>In fact, the entire tech has ridiculed law enforcement for their statements regarding the ongoing Apple court battle where press releases are often putting marketing ahead of technical correctness.</Text>

            <Text style={styles.text}> “Cyber pathogens are so unspeakably dangerous that the open research community has wisely never published a single paper about them.” - ‎<Link href='https://twitter.com/mattblaze'>@mattblaze</Link></Text>

            <Text style={styles.title}> I installed this app and it says I’m infected! Is this bad?</Text>

            <Text style={styles.text}>No. We wondered how long it would take for a real Cyber Pathogen to spread across the world. Unfortunately, just like the iPhone in Apple vs. FBI, this Cyber Pathogen does absolutely nothing of harm. Well, unless you find the secret button - but then it’s only harmful to your sanity.</Text>

            <Text style={styles.title}> So, what’s the point?</Text>

            <Text style={styles.text}>Education is important. In this case, as with many others, it is clear law enforcement had no access to anyone with real expertise (or, simply chose not to consult them) before releasing statements that to the informed sound silly, but to the uninformed sound scary.</Text>

            <Text style={styles.text}>Wilful ignorance on security is wilful neglect for our safety and privacy.</Text>
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
    color,
    fontSize: 15,
    lineHeight: 20,
    margin: 12
  },
  closeButton: {
    position: 'absolute',
    textAlign: 'center',
    height: 44,
    width: 44,
    top: 21,
    right: 1,
    paddingTop: 14,
    color,
    backgroundColor: 'transparent'
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 20,
    color
  }
})

export default About
