import React, { useState, useEffect } from 'react';

import { View, Alert, Switch, Text } from 'react-native';
import ButtonComponent from '../../components/ButtonComponent';
import { writeTaskOnFirebaseAsync } from '../../services/firebaseApi';
import { Container, Input, SwitchContainer, SwitchText } from './styles';

const Task = ({ navigation, route }) => {

  const [key, setKey] = useState('');
  const [title, setTitle] = useState('');
  const [resume, setResume] = useState('');
  const [priority, setPriority] = useState(true);
  const [isDone, setIsDone] = useState(false);

  const initialGetdata = async () => {
    const { task } = await route.params;
    if (task) {
      setKey(task?.key);
      setTitle(task?.title);
      setResume(task?.resume);
      setPriority(task?.priority);
      setIsDone(task?.isDone);
    }
  };

  const _saveTaskAsync = async () => {
    let task = {
      key,
      title,
      resume,
      priority,
      isDone,
    };

    try {
      await writeTaskOnFirebaseAsync(task);
      navigation.goBack();
    } catch (error) {
      Alert.alert('error on saving task ', error.message);
    }
  };

  useEffect(() => {
    initialGetdata();
  }, []);

  return (
    <Container>
      <Input
        placeholder="Title"
        onChangeText={value => setTitle(value)}
        value={title}
      />
      <Input
        style={{ height: 100 }}
        placeholder="Resume"
        multiple={true}
        numberOfLines={4}
        value={resume}
        onChangeText={value => setResume(value)}
      />
      <SwitchContainer>
        <Switch value={priority} onValueChange={value => setPriority(value)} />
        <SwitchText>High Priority</SwitchText>
      </SwitchContainer>
      <SwitchContainer>
        <Switch value={isDone} onValueChange={value => setIsDone(value)} />
        <SwitchText>Is Done?</SwitchText>
      </SwitchContainer>

      <ButtonComponent onPress={() => _saveTaskAsync()}>
        <Text style={{ color: '#fff', fontWeight: 'bold' }}>Salvar</Text>
      </ButtonComponent>
    </Container>
  );
};

export default Task;
