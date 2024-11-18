import { View, Text } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'

const ULE = () => {
  const [width,setWidth] =useState(0);
  useLayoutEffect(()=>{
    setWidth(200);
  },[]);
  return (
     <View style={{ width, height: 100, backgroundColor: 'blue' }} />
  )
  }

export default ULE