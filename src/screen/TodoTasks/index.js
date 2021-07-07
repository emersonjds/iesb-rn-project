import React, { useState, useEffect } from 'react';

import { readTasksFromFirebaseAsync } from '../../services/firebaseApi'
import TaskListView from "../../components/TaskListView";
import { ButtonTodo, Container } from './styles'

const ToDoTasks = ({ navigation }) => {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    readTasksFromFirebaseAsync(_fetchTasks)
  }, [])

  const _fetchTasks = (tasks) => {
    const tasksTodos = tasks.filter(t => !t.isDone);
    setTasks(tasksTodos);
  }

  const _goToTask = () => {
    navigation.navigate('Task')
  }

  return (
    <>
      <Container>
        <TaskListView tasks={tasks} />
        <ButtonTodo onPress={() => _goToTask()} />
      </Container>
    </>
  );
}


export default ToDoTasks
