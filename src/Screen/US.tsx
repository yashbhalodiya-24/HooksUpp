/*
1. useState :-
      -> Used to add state to a functional component.
      -> Allows you to declare state variables and provides a function to update them.
*/


import { View, Text, Button, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'

const US = () => {
  const [count,setCount]=useState(0);
  return (
    <View style={{marginTop:400}}>
      <Text style ={{justifyContent:'center',textAlign:'center',margin:40,fontSize:30}}>count:{count}</Text>
      {/* <Button  title="Counter" onPress={()=>setCount(count+1)}  /> */}
      <View>
        <TouchableOpacity onPress={()=>setCount(count+1)} style={{backgroundColor:'#000',paddingTop:20,paddingBottom:20,marginLeft:40,marginRight:40}}><Text style ={{textAlign:'center',fontSize:20,color:'#fff'}}>Counter</Text></TouchableOpacity></View>
    </View>
  )
}

export default US