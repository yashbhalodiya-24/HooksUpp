import React, { useState, useInsertionEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const UseInsertionEffect = () => {
  const [color, setColor] = useState('blue');
  const [styles, setStyles] = useState({});

  // Simulating a style update during the "insertion" phase
  useInsertionEffect(() => {
    // console.log('useInsertionEffect: Injecting styles');
    setStyles({ backgroundColor: color });
  }, [color]);

  return (
    <View style={{ flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,}}>
      <Text style={{fontSize: 18,
    color: 'white',
    marginBottom: 20,}}>Background color is {color}</Text>
      <Button title="Change to Red" onPress={() => setColor('red')} />
      <Button title="Change to Green" onPress={() => setColor('green')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 18,
    color: 'white',
    marginBottom: 20,
  },
});

export default UseInsertionEffect;
