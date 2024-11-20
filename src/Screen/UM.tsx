import React, { useState, useMemo } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';

// Factorial function (expensive computation for demo)
const calculateFactorial = (n) => {
  // console.log('Factorial calculation running...');
  if (n < 0) return 0;
  if (n === 0) return 1;
  return n * calculateFactorial(n - 1);
};

const UM = () => {
  const [number, setNumber] = useState(0);
  const [input, setInput] = useState('');

  // Use useMemo to optimize factorial computation
  const factorial = useMemo(() => calculateFactorial(number), [number]);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>useMemo Example</Text>

      {/* Input for Number */}
      <Text style={styles.label}>Enter a Number:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        onChangeText={(value) => setNumber(Number(value))}
        placeholder="Enter number"
      />

      {/* Display Factorial */}
      <Text style={styles.result}>Factorial: {factorial}</Text>

      {/* Unrelated State Input */}
      <Text style={styles.label}>Unrelated Input:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(value) => setInput(value)}
        placeholder="Type something"
      />
      <Text>Typed Text: {input}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginTop: 20,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    width: '100%',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  result: {
    fontSize: 18,
    marginTop: 20,
    color: 'green',
  },
});

export default UM;
