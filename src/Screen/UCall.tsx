/*
2. useCallback :-
        -> Memoizes callback functions, ensuring they are only recreated when dependencies change.
        -> Helps optimize child components that rely on functions passed as props.
*/


import { View, Text, Button } from 'react-native'
import React, { useCallback, useState } from 'react'

const  Counter=({ onIncrease })=> {
return <Button title="Increase" onPress={onIncrease} />;
};

const UCall = () => {
const [count,setCount] =useState(0)

const handleIncrease = useCallback(()=>{
  setCount((prevCount ) => prevCount  +1)
},[]);
  return (
    <View>
      <Counter onIncrease={handleIncrease} />
      <Text>Count: {count}</Text>
    </View>
  )
}

export default UCall