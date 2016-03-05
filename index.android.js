import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  ActionSheetIOS
} from 'react-native'

class dormantCyberPathogen extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text onPress={this.showShareActionSheet} style={styles.button}>
          Click to show the Share ActionSheet
        </Text>
      </View>
    )
  }

  showShareActionSheet () {
    ActionSheetIOS.showShareActionSheetWithOptions({
      url: 'https://code.facebook.com',
      message: 'message to go with the shared url',
      subject: 'a subject to go in the email heading',
      excludedActivityTypes: [
        'com.apple.UIKit.activity.PostToTwitter'
      ]
    },
    (error) => {
      console.error(error);
    },
    (success, method) => {
      var text;
      if (success) {
        text = `Shared via ${method}`;
      } else {
        text = 'You didn\'t share';
      }
      this.setState({text});
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  },
  button: {
    marginBottom: 10,
    fontWeight: '500'
  }
})

AppRegistry.registerComponent('dormantCyberPathogen', () => dormantCyberPathogen)
