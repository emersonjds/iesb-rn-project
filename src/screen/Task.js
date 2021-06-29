import React, { useState, useEffect } from 'react';

import { View, Text, Alert } from 'react-native';
import { writeTaskOnFirebaseAsync } from '../services/firebaseApi';

const Task = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [resume, setResume] = useState('');
  const [priority, setPriority] = useState(true);
  const [isDone, setIsDone] = useState(false);

  const _saveTaskAsync = async () => {
    let task = {
      title,
      resume,
      priority,
      isDone,
    };

    try {
      await writeTaskOnFirebaseAsync(task);
      navigation.goBack();
    } catch (error) {
      Alert.alert('error saving', error.message);
    }
  };

  return <View style={{ flex: 1, flexDirection: 'column', padding: 20 }} />;
};

export default Task;
