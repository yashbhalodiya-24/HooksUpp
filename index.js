import { registerRootComponent } from 'expo';

import App from './App';
import messaging from '@react-native-firebase/messaging';
// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately

messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log('message handle in the background',remoteMessage);
});
registerRootComponent(App);
