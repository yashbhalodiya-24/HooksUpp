/*
5. useMemo :-
      -> Memoizes expensive calculations, improving performance by recalculating only when dependencies change.
*/


import { View, Text, TouchableOpacity } from 'react-native'
import React, { useMemo, useState } from 'react'

const UM = () => {
  const [count, setCount] = useState(0);
  const expensiveValue = useMemo (()=>{
return count*2;
  },[count]);
  return (
    <View>
      <Text>expensiveValue:{expensiveValue}</Text>
      <TouchableOpacity onPress={() => setCount(count + 1)} style={{backgroundColor:'#000',paddingTop:20,paddingBottom:20,marginLeft:40,marginRight:40,margin:20}}><Text style ={{textAlign:'center',fontSize:20,color:'#fff'}}>Increase</Text></TouchableOpacity>
    </View>
  )
}

export default UM