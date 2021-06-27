import React, { useState } from 'react';

import { Text, TextInput, KeyboardAvoidingView, Alert } from 'react-native';
import ButtonComponent from '../../components/ButtonComponent';
import { createUserOnFirebaseAsync } from '../../services/firebaseApi';

export const Register = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const _createUserAsync = async () => {
    try {
      const user = await createUserOnFirebaseAsync(
        email,
        password
      );

      console.log(user)
      Alert.alert(
        'User Created!',
        `User ${user.email} has succesfuly been created!`,
      );

      setTimeout(() => {
        navigation.navigate('Login')
      }, 2000)

    } catch (error) {
      Alert.alert('Create User Failed!', error.message);
    }
  }

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

      <ButtonComponent onPress={_createUserAsync}>
        <Text style={{ color: '#fff', fontWeight: 'bold' }}>Register User</Text>
      </ButtonComponent>
    </KeyboardAvoidingView>
  );
};
