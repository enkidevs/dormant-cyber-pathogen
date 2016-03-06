import React, {
  Component,
  Image,
  StyleSheet
} from 'react-native'

class Virus extends Component {
  constructor () {
    super()
    this.state = {showLoop: false}
    return
  }

  render () {
    return (
      <Image style={styles.image}
        onLoadEnd={() => setTimeout(() => this.setState({showLoop: true}), 2700)}
        source={this.state.showLoop ? require('../images/loop.gif') : require('../images/intro.gif')}/>
    )
  }
}

const styles = StyleSheet.create({
  image: {
    width: 400,
    height: 400
  }
})

export default Virus
