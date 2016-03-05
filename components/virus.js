var React = require('react-native')
var ReactART = React.ART

var {
    Group,
    Shape,
    Surface
} = ReactART

var MOUSE_UP_DRAG = 0.978
var BASE_VEL = 0.15
/**
 * An animated SVG component.
 */
var VectorWidget = React.createClass({
  /**
   * Initialize state members.
   */
  getInitialState () {
    return {degrees: 0, velocity: 0, drag: MOUSE_UP_DRAG}
  },
  /**
   * When the component is mounted into the document - this is similar to a
   * constructor, but invoked when the instance is actually mounted into the
   * document. Here's, we'll just set up an animation loop that invokes our
   * method. Binding of `this.onTick` is not needed because all React methods
   * are automatically bound before being mounted.
   */
  componentDidMount () {
    this._interval = window.setInterval(this.onTick, 20)
  },
  componentWillUnmount () {
    window.clearInterval(this._interval)
  },
  onTick () {
    var nextDegrees = this.state.degrees + BASE_VEL + this.state.velocity
    var nextVelocity = this.state.velocity * this.state.drag
    this.setState({degrees: nextDegrees, velocity: nextVelocity})
  },

  render () {
    return (
      <Surface
        width={100}
        height={100}>
        {this.renderGraphic(this.state.degrees)}
      </Surface>
    )
  },

  renderGraphic (rotation) {
    return (
      <Group x={0} y={0}>
        <Shape fill='#B85667' d={HEAD_PATH} />
        <Shape fill='#B85667' d={LEFT_LEG_PATH} />
        <Shape fill='#B85667' d={UPPER_LEFT_LEG_PATH} />
        <Shape fill='#B85667' d={RIGHT_LEG_PATH} />
        <Shape fill='#B85667' d={UPPER_RIGHT_LEG_PATH} />
        <Shape fill='#B85667' d={BODY_1_PATH} />
        <Shape fill='#B85667' d={BODY_2_PATH} />
        <Shape fill='#B85667' d={BODY_3_PATH} />
        <Shape fill='#B85667' d={BODY_4_PATH} />
        <Shape fill='#B85667' d={BODY_5_PATH} />
      </Group>
    )
  }
})

const HEAD_PATH = 'M57.61,8.12H42.05l-7.78,13.57l7.78,13.57H57.61l7.779-13.57L57.61,8.12z M47.87,29.57c-1.03,0.93-0.77,2.22-0.77,2.22  c-0.01,0.14-0.01,0.28-0.01,0.42H45.4c0-2.26,1.02-3.77,2.04-4.71c0.41,0.3,0.78,0.53,1.05,0.68l0.05,0.03  c0.17,0.09,0.32,0.15,0.43,0.21C48.6,28.7,48.21,29.08,47.87,29.57z M52.58,32.21c0-0.14-0.01-0.28-0.021-0.42  c0.2-0.87-0.76-2.22-0.76-2.22s0,0-0.01,0c-0.33-0.5-0.73-0.87-1.1-1.15c-0.59-0.46-1.1-0.66-1.15-0.68  c-0.04-0.01-0.29-0.11-0.64-0.3c-0.4-0.21-0.93-0.55-1.45-1.03c-1.03-0.94-2.05-2.45-2.05-4.72s1.02-3.77,2.05-4.72  c0.62,0.48,1.2,0.78,1.52,0.92c-0.26,0.2-0.53,0.44-0.78,0.74c-0.69,0.68-1.14,1.79-1.14,3.04c0,1.05,0.32,2.01,0.84,2.69  c0.01,0.01,0.01,0.01,0.02,0.02c0.33,0.47,0.71,0.83,1.07,1.11c0.6,0.46,1.13,0.67,1.14,0.67c0.04,0.02,0.29,0.11,0.65,0.3v0.01  c0.4,0.21,0.92,0.54,1.45,1.03c1.03,0.94,2.04,2.45,2.04,4.71H52.58z M52.22,26.41c-0.33-0.26-0.68-0.49-1.05-0.69  c-0.19-0.1-0.35-0.18-0.47-0.23c0.359-0.28,0.75-0.65,1.08-1.13h-0.04c0.149-0.21,0.29-0.43,0.41-0.68h0.01  c0.12-0.26,0.22-0.55,0.3-0.87h-0.01c0.09-0.36,0.13-0.75,0.13-1.14c0-1.06-0.32-2.02-0.84-2.7c-0.38-0.53-0.82-0.93-1.22-1.21  c-0.21-0.15-0.41-0.26-0.57-0.35l-0.57-0.26c-0.29-0.12-0.94-0.44-1.63-1c-1.12-0.92-2.35-2.49-2.35-4.98h1.66  c0.01,0.39,0.06,0.76,0.15,1.12c0,0.01,0,0.03,0.01,0.04c0,0.02,0.01,0.04,0.01,0.06c0.07,0.28,0.17,0.53,0.28,0.77  c0.11,0.25,0.25,0.47,0.39,0.67h-0.01c0.87,1.27,2.15,1.78,2.23,1.81c0.17,0.06,4.14,1.57,4.14,6.05  C54.26,23.96,53.25,25.46,52.22,26.41z M52.22,15.88c-0.63-0.47-1.2-0.77-1.53-0.91c0.28-0.22,0.59-0.49,0.86-0.83  c0.641-0.7,1.061-1.77,1.09-2.97h1.62C54.26,13.44,53.25,14.94,52.22,15.88z'
const LEFT_LEG_PATH = 'M39.271,61.106 L17.544,47.528 L0.445,76.913 L18.35,50.569 L39.271,63.336z'
const UPPER_LEFT_LEG_PATH = 'M39.271,65.261 L26.095,66.982 L6.682,83.194 L28.006,68.808 L39.271,67.491z'
const RIGHT_LEG_PATH = 'M60.73,65.261 L73.906,66.982 L93.319,83.194 L71.995,68.808 L60.73,67.491z'
const UPPER_RIGHT_LEG_PATH = 'M60.73,61.106 L82.457,47.528 L99.556,76.913 L81.651,50.569 L60.73,63.336z'
const BODY_1_PATH = 'M43.496,36.991 L56.371,36.991 L56.371,41.449 L43.496,41.449z'
const BODY_2_PATH = 'M43.496,43.07 L56.371,43.07 L56.371,47.528 L43.496,47.528z'
const BODY_3_PATH = 'M43.496,49.352 L56.371,49.352 L56.371,53.81 L43.496,53.81z'
const BODY_4_PATH = 'M43.496,55.434 L56.371,55.434 L56.371,59.892 L43.496,59.892z'
const BODY_5_PATH = 'M41.283,61.918 L58.584,61.918 L58.584,66.376 L41.283,66.376z'

module.exports = VectorWidget
