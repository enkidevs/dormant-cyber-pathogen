import React, {
  Component,
  StyleSheet,
  Text,
  View,
  ActionSheetIOS
} from 'react-native'

import Virus from './Virus'
import About from './About'

class App extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          You have been infected by a Dormant Cyber Pathogen™
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
    backgroundColor: '#F2F3CB'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    marginTop: 70,
    color: '#B85667'
  },
  button: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 0,
    fontWeight: '500',
    height: 80,
    color: '#F2F3CB',
    backgroundColor: '#B85667',
    lineHeight: 50,
    alignSelf: 'stretch'
  }
})

export default App
