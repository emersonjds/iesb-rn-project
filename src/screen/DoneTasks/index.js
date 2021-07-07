import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import TaskListView from '../../components/TaskListView';
import { readTaskFromFirebaseAsync } from "../../services/firebaseApi";

const DoneTasks = () => {
  const [tasks, setTasks] = useState([]);

  const _fetchTasks = tasks => {
    const tasksTodos = tasks.filter(t => !t.isDone);
    setTasks(tasksTodos);
  };

  useEffect(() => {
    readTaskFromFirebaseAsync(_fetchTasks);
  }, []);

  return (
    <>
      <View style={{ paddingLeft: 10, paddingRight: 10, flex: 1 }}>
        <TaskListView tasks={tasks} />
      </View>
    </>
  );
};

export default DoneTasks;
