import React, { useState } from 'react';

import { Text, View, TextInput, Image, Alert, KeyboardAvoidingView, Button } from 'react-native';
import ButtonComponent from '../../components/ButtonComponent';
import { signInOnFirebaseAsync } from '../../services/firebaseApi';
import { CommonActions } from '@react-navigation/native';

const img = require('../../assets/iconTodo.png');

export const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = async () => {
    try {
      const user = await signInOnFirebaseAsync(email, password);
      Alert.alert('Bem vindo', `${user.email}`)
      setTimeout(() => {
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{ name: 'TaskList' }],
          }),
        )
      }, 2000);
    } catch (error) {
      Alert.alert('Login Failed', error.message);
    }
    console.log('Emerson')
  }

  return (
    <>
      <KeyboardAvoidingView
        style={{
          flex: 1,
          paddingHorizontal: 20,
          justify: 'center',
          alignItems: 'center',
          paddingVertical: 20,
        }}>
        <Text style={{ marginTop: 25, fontWeight: 'bold' }}>My Todo</Text>
        <Image
          source={img}
          style={{ height: 300, width: 300, marginTop: 25 }}
        />
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

        {/* <Button title="Entrar" onPress={() => signIn()} /> */}

        <ButtonComponent onPress={() => signIn()}>
          <Text style={{ color: '#fff', fontWeight: 'bold' }}>Sign In</Text>
        </ButtonComponent>

        <Text>Nao tem cadastro ainda ?!</Text>
        <Text onPress={() => navigation.navigate('Register')}>Registre-se</Text>
      </KeyboardAvoidingView>
    </>
  );
};
