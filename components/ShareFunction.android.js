import Share from 'react-native-share'

export default function () {
  Share.open({
    share_URL: 'https://code.facebook.com',
    share_text: 'message to go with the shared url',
    title: 'a subject to go in the email heading'
  }, (e) => {
    console.log(e)
  })
}
