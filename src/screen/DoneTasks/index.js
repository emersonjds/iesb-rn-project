import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import TaskListView from '../../components/TaskListView';
import { readTasksFromFirebaseAsync } from '../../services/firebaseApi';

// import { Container } from './styles';

const DoneTasks = ({ navigation }) => {
  const [tasks, setTasks] = useState('');

  // eslint-disable-next-line no-shadow
  const _fetchTasks = tasks => {
    const tasksTodos = tasks.filter(t => !t.isDone);
    setTasks(tasksTodos);
  };

  useEffect(() => {
    readTasksFromFirebaseAsync(_fetchTasks);
  }, []);
  return (
    <>
      <View style={{ paddingLeft: 10, paddingRight: 10, flex: 1 }}>
        <TaskListView tasks={tasks} navigation={navigation} />
      </View>
    </>
  );
};

export default DoneTasks;
