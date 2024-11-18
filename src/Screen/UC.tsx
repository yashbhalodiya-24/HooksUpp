import { View, Text } from 'react-native'
import React, { createContext, useContext } from 'react'

const ThemeContext = createContext('light');

const UC = () => {
  const Theme = useContext(ThemeContext);
  return  <Text style ={{textAlign:'center',fontSize:20,color:'#000'}}>Theme : {Theme}</Text>;

  return (
    <View style={{marginTop:400}}>
     
    </View>
  )
}
       
export default UC