import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native'

import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    if (newTaskTitle) {
      const newTask = {
        id: new Date().getTime(),
        title: newTaskTitle,
        done: false
      }

      setTasks(oldTasks => [...oldTasks, newTask])
    }
  }

  function handleMarkTaskAsDone(id: number) {
    setTasks(oldTasks => {
      const newTasks = [...oldTasks]
      const newTaskIndex = newTasks.findIndex(task => task.id === id)
      newTasks[newTaskIndex].done = true

      return newTasks
    })
  }

  function handleRemoveTask(id: number) {
    setTasks(oldTasks => {
      const newTasks = [...oldTasks]
      const newTaskIndex = newTasks.findIndex(task => task.id === id)
      newTasks.splice(newTaskIndex, 1)

      return newTasks
    })
  }

  return (
    <View style={styles.body}>
      <Header />

      <TodoInput addTask={handleAddTask} />

      <MyTasksList 
        tasks={tasks} 
        onPress={handleMarkTaskAsDone} 
        onLongPress={handleRemoveTask} 
      />
    </View>
  )
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#fff'
  }
})