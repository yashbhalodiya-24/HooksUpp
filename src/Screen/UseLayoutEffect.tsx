/*
7. useLayoutEffect :-
          -> Similar to useEffect, but it fires synchronously after all DOM changes.
          -> Useful for performing measurements or DOM manipulations immediately after layout.
*/

import { View, Text } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'

const UseLayoutEffect = () => {
  const [width,setWidth] =useState(0);
  useLayoutEffect(()=>{
    setWidth(200);
  },[]);
  return (
     <View style={{ width, height: 100, backgroundColor: 'blue' }} />
  )
  }

export default UseLayoutEffect