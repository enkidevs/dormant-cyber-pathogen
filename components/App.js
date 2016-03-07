import React, {
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native'
import {color, backgroundColor} from './colors'

import Virus from './Virus'
import About from './About'
import Share from './ShareButton'
import Counter from './Counter'

class App extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          You have been infected by a Lying-Dormant Cyber Pathogen™
        </Text>
        <Virus />
        <Counter />
        <Share />
        <About />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 20,
    marginTop: 70,
    color
  }
})

export default App
