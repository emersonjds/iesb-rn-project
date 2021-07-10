import React, { useState, useEffect } from 'react';

import { Alert, Switch } from 'react-native';
import ButtonComponent from '../../components/ButtonComponent';
import { writeTaskOnFirebaseAsync } from '../../services/firebaseApi';
import {
  Container,
  SwitchContainer,
  SwitchText,
  TextButton,
  Input,
} from './styles';
import { TextInput } from 'react-native-paper';

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
      <TextInput
        label="Nome da Tarefa"
        value={title}
        onChangeText={text => setTitle(text)}
        placeholder="Title"
        multiple={true}
        numberOfLines={4}
        style={{
          backgroundColor: 'white',
          marginBottom: 15,
          width: 360,
          alignSelf: 'center',
        }}
        mode="outlined"
        theme={{
          colors: { primary: '#594da7', underlineColor: 'transparent' },
        }}
      />

      <TextInput
        label="Descrição"
        value={resume}
        onChangeText={text => setResume(text)}
        placeholder="Resume"
        multiple={true}
        numberOfLines={4}
        style={{
          backgroundColor: 'white',
          marginBottom: 15,
          width: 360,
          alignSelf: 'center',
        }}
        mode="outlined"
        theme={{
          colors: { primary: '#594da7', underlineColor: 'transparent' },
        }}
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
        <TextButton>Salvar</TextButton>
      </ButtonComponent>
    </Container>
  );
};

export default Task;
