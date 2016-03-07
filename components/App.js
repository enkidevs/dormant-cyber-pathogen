import React, {
  Component,
  StyleSheet,
  Text,
  View,
  ActionSheetIOS
} from 'react-native'
import {color, backgroundColor} from './colors'

import Virus from './Virus'
import About from './About'

class App extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          You have been infected by a Lying-Dormant Cyber Pathogen™
        </Text>
        <Virus />
        <Text onPress={this.showShareActionSheet} style={styles.button}>
          SPREAD THE PATHOGEN
        </Text>
        <About />
      </View>
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
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 20,
    marginTop: 70,
    color
  },
  button: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 0,
    fontWeight: '500',
    height: 80,
    color: backgroundColor,
    backgroundColor: color,
    lineHeight: 50,
    alignSelf: 'stretch'
  }
})

export default App
