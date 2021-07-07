import React, { useEffect, useState } from 'react';
import { readTaskFromFirebaseAsync } from "../../services/firebaseApi";
import TaskListView from '../../components/TaskListView';
import { ButtonTodo, Container } from './styles';

const ToDoTasks = ({ navigation }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    readTaskFromFirebaseAsync(_fetchTasks);
  }, []);

  // eslint-disable-next-line no-shadow
  const _fetchTasks = tasks => {
    const tasksTodos = tasks.filter(t => !t.isDone);
    setTasks(tasksTodos);
  };

  const _goToTask = () => {
    navigation.navigate('Task');
  };

  return (
    <>
      <Container>
        <TaskListView tasks={tasks} navigation={navigation} />
        <ButtonTodo onPress={() => _goToTask()} />
      </Container>
    </>
  );
};

export default ToDoTasks;
