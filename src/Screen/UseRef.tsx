/*
4. useRef :-
      -> Provides a way to persist values between renders without causing re-renders.
      -> Commonly used to access and manipulate DOM elements or store mutable values.
*/

import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native'
import React, { useRef } from 'react';

const UseRef = () => {
  const inputRef = useRef(null);
  return (
    <View style={{marginTop:400}}>
  <TextInput ref={inputRef} placeholder="Type here" placeholderTextColor="#fff" style={{elevation:1 , paddingTop:20,paddingBottom:20,backgroundColor:'#025', paddingLeft:20,paddingRight:20,color:'#fff'}}/>
  {/* <Button title="Focus the text input" onPress={() => inputRef.current.focus()} /> */}

  <TouchableOpacity onPress={() => inputRef.current.focus()} style={{backgroundColor:'#000',paddingTop:20,paddingBottom:20,marginLeft:40,marginRight:40,margin:20}}><Text style ={{textAlign:'center',fontSize:20,color:'#fff'}}>Focus the text input</Text></TouchableOpacity>
        </View>
  )
}

export default UseRef