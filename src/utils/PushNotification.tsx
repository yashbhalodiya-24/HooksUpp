import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {PermissionsAndroid} from 'react-native';

PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);
export async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
    getFcmToken();
  }
}



const getFcmToken = async () => {
  try {
    // Check if FCM token is already stored in AsyncStorage
    let fcmToken = await AsyncStorage.getItem('fcmToken');
    if (!fcmToken) {
      console.log('No FCM token found, generating a new one...');
      
      // Get a new FCM token
      fcmToken = await messaging().getToken();
      if (fcmToken) {
        console.log('New generated FCM token:', fcmToken);

        // Store the new token in AsyncStorage
        await AsyncStorage.setItem('fcmToken', fcmToken);
      } else {
        console.log('Failed to generate FCM token.');
      }
    } else {
      console.log('Existing FCM token:', fcmToken);
    }
  } catch (error) {
    console.error('Error retrieving FCM token:', error);
  }
};


export const NotificationServices = ()=>{
  messaging().onNotificationOpenedApp(remoteMessage =>{
    console.log(
      'notification caused app to open from background state:',
      remoteMessage.notification,
    );
  });

messaging()
.getInitialNotification()
.then(remoteMessage => {
  if(remoteMessage){
    console.log('notification caused app to open from quit state',remoteMessage.notification,

    );

  }

});

};