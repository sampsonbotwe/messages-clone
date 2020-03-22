import * as actionTypes from './actionTypes';

import {PermissionsAndroid} from 'react-native';
import SmsAndroid from 'react-native-get-sms-android';

const requestSMSPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_SMS,
      {
        title: 'SMS Permission',
        message:
          'Messages needs access to your SMS, so you can read your messages.',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('You can use the sms');
    } else {
      console.log('SMS permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
};

export const getMessages = () => {
  return dispatch => {
    const filter = {
      maxDate: Date.now(), // timestamp (in milliseconds since UNIX epoch)
      indexFrom: 0, // start from index 0
      maxCount: 100,
    };

    requestSMSPermission().then(() =>
      SmsAndroid.list(
        JSON.stringify(filter),
        fail => {
          console.log('Failed with this error: ' + fail);
        },
        (count, smsList) => {
          dispatch({
            type: actionTypes.GET_MESSAGES,
            messages: JSON.parse(smsList),
          });
        },
      ),
    );
  };
};
