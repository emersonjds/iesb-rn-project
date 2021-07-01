import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity } from 'react-native';

import { readTasksFromFirebaseAsync } from '../../services/firebaseApi'
import TaskListView from "../../components/TaskListView";

const ToDoTasks = ({ navigation }) => {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    readTasksFromFirebaseAsync(_fetchTasks)
  }, [])

  const _fetchTasks = (tasks) => {
    const tasksTodos = tasks.filter(t => !t.isDone)
    setTasks({ tasks: tasksTodos })
  }
  const _goToTask = () => {
    navigation.navigate('Task')
  }

  return (
    <>
      {/* eslint-disable-next-line react-native/no-inline-styles */}
      <View style={{
          flex: 1,
          paddingHorizontal: 20,
      }}>
        <TaskListView tasks={tasks}/>
        <TouchableOpacity
          onPress={() => _goToTask()}
          style={{
            height: 50,
            width: 50,
            borderRadius: 50,
            backgroundColor: 'blue',
            bottom: 20,
            right: 20,
            position: 'absolute',
          }}
        />
      </View>
    </>
  );
}


export default ToDoTasks
