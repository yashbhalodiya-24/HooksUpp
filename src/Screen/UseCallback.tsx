import React, { useState, useCallback } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const UseCallback = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  // Memoized function to increment Count 1
  const incrementCount1 = useCallback(() => {
    setCount1((prevCount) => prevCount + 1);
  }, []); // No dependencies, so this function never changes

  // Memoized function to increment Count 2
  const incrementCount2 = useCallback(() => {
    setCount2((prevCount) => prevCount + 1);
  }, []); // No dependencies, so this function never changes

  // console.log('App rendered'); // To demonstrate renders

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>useCallback Demo</Text>

      {/* Counter 1 */}
      <View style={styles.counterContainer}>
        <Text style={styles.counterText}>Counter 1: {count1}</Text>
        <Button title="Increment Counter 1" onPress={incrementCount1} />
      </View>

      {/* Counter 2 */}
      <View style={styles.counterContainer}>
        <Text style={styles.counterText}>Counter 2: {count2}</Text>
        <Button title="Increment Counter 2" onPress={incrementCount2} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  counterContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  counterText: {
    fontSize: 20,
    marginBottom: 10,
  },
});

export default UseCallback;
