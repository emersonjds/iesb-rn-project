import React, { useState } from 'react';

import { Text, TextInput, KeyboardAvoidingView } from 'react-native';
import ButtonComponent from '../../components/ButtonComponent';

const img = require('../../assets/iconTodo.png');

export const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <KeyboardAvoidingView
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>New User</Text>
      <TextInput
        style={{ marginBottom: 20, marginTop: 20 }}
        placeholder="Email"
        onChangeText={text => setEmail(text)}
        value={email}
        keyboardType={'email-address'}
        autoCapitalize="none"
      />
      <TextInput
        style={{ marginBottom: 20 }}
        placeholder="Senha"
        onChangeText={text => setPassword(text)}
        secureTextEntry={true}
        value={password}
      />

      <ButtonComponent>
        <Text style={{ color: '#fff', fontWeight: 'bold' }}>Register User</Text>
      </ButtonComponent>
    </KeyboardAvoidingView>
  );
};
