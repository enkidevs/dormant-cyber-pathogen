import React, {
  Component,
  Linking,
  Text
} from 'react-native'
import {backgroundColor as color} from './colors'

class Link extends Component {
  render () {
    return (
      <Text onPress={this.handlePress.bind(this)} style={{borderBottomWidth: 1, borderBottomColor: color, textDecorationLine: 'underline', textDecorationColor: color}}>{this.props.children}</Text>
    )
  }

  handlePress () {
    Linking.openURL(this.props.href)
  }
}

Link.propTypes = {
  href: React.PropTypes.string,
  children: React.PropTypes.node
}

export default Link
