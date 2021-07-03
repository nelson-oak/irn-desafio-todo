import React, { useMemo, useState } from 'react';
import { Appearance, Image, Platform, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';

import checkIcon from '../assets/icons/Check.png';

interface TodoInputProps {
  addTask: (task: string) => void;
}

export function TodoInput({ addTask }: TodoInputProps) {
  const [task, setTask] = useState('');
  
  const isDarkTheme = useMemo(() => {
    return Appearance.getColorScheme() === 'dark'
  }, [])

  function handleAddNewTask() {
    addTask(task)
    setTask('')
  }

  return (
    <View style={[
      styles.inputContainer,
      Platform.OS === 'ios' ? styles.inputIOSShadow : styles.inputAndroidShadow,
      isDarkTheme && styles.inputContainerDark
    ]}>
      <TextInput 
        style={[
          styles.input,
          isDarkTheme && styles.inputDark
        ]} 
        placeholder="Adicionar novo todo..."
        placeholderTextColor="#888"
        returnKeyType="send"
        value={task}
        onChangeText={setTask}
        onSubmitEditing={handleAddNewTask}
      />
      <TouchableOpacity
        testID="add-new-task-button"
        activeOpacity={0.7}
        style={[
          styles.addButton,
          isDarkTheme && styles.addButtonDark
        ]}
        onPress={handleAddNewTask}
      >
        <Image source={checkIcon} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: '#F5F4F8',
    borderRadius: 5,
    marginTop: -25,
    marginHorizontal: 40,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputContainerDark: {
    backgroundColor: '#212136'
  },
  input: {
    flex: 1,
    backgroundColor: '#F5F4F8',
    color: '#000',
    paddingLeft: 12,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  inputDark: {
    backgroundColor: '#212136',
    color: '#E1E1E6'
  },
  inputIOSShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84
  },
  inputAndroidShadow: {
    elevation: 5
  },
  addButton: {
    backgroundColor: '#3FAD27',
    height: 50,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  addButtonDark: {
    backgroundColor: '#565BFF'
  }
});