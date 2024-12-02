import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import UseState from './src/Screen/UseState';
import UseEffect from './src/Screen/UseEffect';
import UseContext from './src/Screen/UseContext';
import UseRef from './src/Screen/UseRef';
import UseMemo from './src/Screen/UseMemo';
import UseCallback from './src/Screen/UseCallback';
import UseLayoutEffect from './src/Screen/UseLayoutEffect';
import UseImperativeHandle from './src/Screen/UseImperativeHandle';
import UseInsertionEffect from './src/Screen/UseInsertionEffect';
import {NotificationServices, requestUserPermission} from './src/utils/PushNotification';
import messaging from '@react-native-firebase/messaging';

const App = () => {
  useEffect(()=>{
    requestUserPermission();
    NotificationServices();
  },[]);
  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      console.log('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    return unsubscribe;
  }, []);
  return (

    // <UseState/>
    // <UseEffect/>
    // <UseContext/>
    // <UseRef/>
    <UseMemo/>
  //  < UseCallback/>
  // <UseLayoutEffect/>
  // <UseImperativeHandle/>
  // <UseInsertionEffect/>
    
  )
}

export default App