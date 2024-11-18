import { View, Text, Appearance } from 'react-native';
import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import UE from '../Screen/UE';
import { NavigationContainer } from '@react-navigation/native';
import UC from '../Screen/UC';


const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
   
    <NavigationContainer>
    {/* <Stack.Navigator> */}
      <Stack.Screen name='UE' component={UE} options={{  headerShown: true }} />
      <Stack.Screen name='UC' component={UC} options={{  headerShown: true }} />

    {/* </Stack.Navigator> */}
  </NavigationContainer>
 
  );





  ;
}





export default AppNavigator;



