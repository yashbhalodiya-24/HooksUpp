import React, { useRef, useImperativeHandle, forwardRef, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

// Child Component
const CustomInput = forwardRef((props, ref) => {
  const [value, setValue] = useState('');
  const inputRef = useRef();

  // Expose methods using useImperativeHandle
  useImperativeHandle(ref, () => ({
    focusInput: () => {
      inputRef.current.focus();
    },
    clearInput: () => {
      setValue('');
    },
  }));

  return (
    <TextInput
      ref={inputRef}
      style={styles.input}
      value={value}
      onChangeText={(text) => setValue(text)}
      placeholder="Type something..."
    />
  );
});

const UseImperativeHandle = () => {
  const inputRef = useRef();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>useImperativeHandle Demo</Text>

      {/* Custom Input Field */}
      <CustomInput ref={inputRef} />

      {/* Buttons to trigger exposed methods */}
      <View style={styles.buttons}>
        <Button
          title="Focus Input"
          onPress={() => inputRef.current.focusInput()}
        />
        <Button
          title="Clear Input"
          onPress={() => inputRef.current.clearInput()}
        />
      </View>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
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
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
});

export default UseImperativeHandle;
