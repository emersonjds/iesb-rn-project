import React, { useState } from 'react';

import {
  Text,
  // TextInput,
  Image,
  Alert,
  KeyboardAvoidingView,
} from 'react-native';
import ButtonComponent from '../../components/ButtonComponent';
import { signInOnFirebaseAsync } from '../../services/firebaseApi';
import { CommonActions } from '@react-navigation/native';
import { TextInput } from 'react-native-paper';

import { View } from 'react-native'
const img = require('../../assets/iconTodo.png');

export const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = async () => {
    try {
      const user = await signInOnFirebaseAsync(email, password);
      Alert.alert('Bem vindo', `${user.email}`);
      setTimeout(() => {
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{ name: 'TaskList' }],
          }),
        );
      }, 2000);
    } catch (error) {
      Alert.alert('Login Failed', error.message);
    }
  };

  return (
    <>
      <View
        style={{
          flex: 2,
          paddingHorizontal: 40,
          justify: 'center',
          alignItems: 'center',
          paddingVertical: 20,
        }}>
        <Text style={{ marginTop: 25, fontWeight: 'bold' }}>My Todo</Text>
        <Image
          source={img}
          style={{ height: 300, width: 300, marginTop: 25 }}
        />
      </View>
      <View style={{ paddingHorizontal: 10, flex: 2 }}>
        <TextInput
          label='Email'
          value={email}
          onChangeText={text => setEmail(text)}
          autoCapitalize="none"
          style={{ backgroundColor: 'white', marginBottom: 15, width: 360, alignSelf: 'center' }}
          keyboardType={'email-address'}
          mode="outlined"
          theme={{ colors: { primary: '#594da7', underlineColor: 'transparent', } }}
        />
        <TextInput
          label='Senha'
          value={password}
          onChangeText={text => setPassword(text)}
          autoCapitalize="none"
          style={{ backgroundColor: 'white', marginBottom: 5, width: 360, alignSelf: 'center' }}
          secureTextEntry={true}
          mode="outlined"
          theme={{ colors: { primary: '#594da7', underlineColor: 'transparent', } }}
        />
        <ButtonComponent onPress={() => signIn()}>
          <Text style={{ color: '#fff', fontWeight: 'bold' }}>Sign In</Text>
        </ButtonComponent>

        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Text>Nao tem cadastro ainda ?!</Text>
          <Text onPress={() => navigation.navigate('Register')}>Registre-se</Text>
        </View>

      </View>

    </>
  );
};
