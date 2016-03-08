import React, {
  Component,
  Image,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Dimensions
} from 'react-native'

import Speech from './SpeakFunction'

const quotes = [
  'Make America Great Again!',
  'The point is, you can never be too greedy.',
  'My IQ is one of the highest — and you all know it! Please don\'t feel so stupid or insecure; it\'s not your fault.',
  'You know, it really doesn’t matter what the media write as long as you’ve got a young, beautiful piece of ass.',
  'All of the women on The Apprentice flirted with me – consciously or unconsciously. That’s to be expected.',
  'One of they key problems today is that politics is such a disgrace. Good people don’t go into government.',
  'The beauty of me is that I’m very rich.',
  'It’s freezing and snowing in New York – we need global warming!',
  'I have never seen a thin person drinking Diet Coke.'
]

class Virus extends Component {
  constructor () {
    super()
    this.state = {
      showLoop: false,
      tap: 0
    }
    return
  }

  render () {
    const {width, height} = Dimensions.get('window')
    const imageHeight = Math.min(400, height - 117 - 162)
    const imageWidth = imageHeight / 400 * 275
    const left = (width - imageWidth) / 2
    return (
      <View style={{position: 'relative', width}}>
        <TouchableWithoutFeedback style={styles.wrapper} onPress={this.handlePress.bind(this)}>
          <Image style={[styles.image, {opacity: this.state.showLoop ? 0 : 1, height: imageHeight, width: imageWidth, left}]}
            onLoadEnd={() => setTimeout(() => this.setState({showLoop: true}), 2700)}
            source={require('../images/intro_opti.gif')}/>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback style={styles.wrapper} onPress={this.handlePress.bind(this)}>
          <Image style={[styles.image, {opacity: this.state.showLoop ? 1 : 0, height: imageHeight, width: imageWidth, left}]}
            source={require('../images/loop_opti.gif')}/>
        </TouchableWithoutFeedback>
      </View>
    )
  }

  handlePress () {
    this.setState({tap: this.state.tap + 1}, () => {
      if (this.state.tap >= 9) {
        Speech(quotes[this.state.tap % quotes.length])
      }
    })
  }
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    top: 0
  },
  image: {
    position: 'absolute',
    top: 0
  }// ,
  // text: {
  //   fontSize: 20,
  //   textAlign: 'center',
  //   margin: 20,
  //   color
  // }
})

export default Virus
