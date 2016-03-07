import {
  ActionSheetIOS
} from 'react-native'

export default function () {
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
