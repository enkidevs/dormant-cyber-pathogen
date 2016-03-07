import Speech from 'react-native-speech'

export default function (text) {
  Speech.speak({
    text,
    voice: 'en-US'
  }).then((started) => {
    console.log(started)
  }).catch((error) => {
    console.log(error)
  })
}
