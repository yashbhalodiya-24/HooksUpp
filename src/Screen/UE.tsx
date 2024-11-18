import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'

const UE = () => {
  const [secound,setSecound] = useState(0);
  useEffect(()=>{
    const interval = setInterval (()=>setSecound((s)=>s+1),1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <View style={{marginTop:400}}>
      <Text style ={{textAlign:'center',fontSize:20,color:'#000'}}>Time: {secound} secound</Text>
    </View>
  )
}

export default UE