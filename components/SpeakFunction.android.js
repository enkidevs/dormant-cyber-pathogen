import Speech from 'react-native-android-speech'

export default function (text) {
  Speech.speak({
    text,
    forceStop: false,
    language: 'en'
  }).then((isSpeaking) => {
    console.log(isSpeaking)
  }).catch((error) => {
    console.log(error)
  })
}
