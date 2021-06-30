import React, { useState, useEffect } from 'react';

import { View, Alert, Switch } from 'react-native';
import { writeTaskOnFirebaseAsync } from '../../services/firebaseApi';
import { Container, Input } from './styles';

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

  return (
    <Container>
      <Input
        placeholder="Title"
        onChangeText={(value) => setTitle(value)}
        value={title}
      />
      <Input
        style={{ height: 100 }}
        placeholder="Resume"
        multiple={true}
        numberOfLines={4}
        value={resume}
        onChangeText={(value) => setResume(value)}
      />
      <SwitchContainer>
        <Switch value={priority}
          onValueChange={(value) => setPriority(value)} />
        <SwitchText>High Priority</SwitchText>
      </SwitchContainer>
      <SwitchContainer>
        <Switch value={isDone}
          onValueChange={(value) => setIsDone(value)} />
        <SwitchText>Is Done?</SwitchText>
      </SwitchContainer>

      <ButtonComponent onPress={_saveTaskAsync()}>
        <Text>Salvar</Text>
      </ButtonComponent>

    </Container>


  );
};

export default Task;
