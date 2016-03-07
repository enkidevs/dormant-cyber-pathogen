import React, {
  Component,
  TouchableHighlight,
  Linking
} from 'react-native'

class Link extends Component {
  render () {
    return (
      <TouchableHighlight onPress={this.handlePress.bind(this)}>
        {this.props.children}
      </TouchableHighlight>
    )
  }

  handlePress () {
    Linking.openURL(this.props.href)
  }
}

Link.propTypes = {
  href: React.propTypes.string,
  children: React.propTypes.node
}

export default Link
