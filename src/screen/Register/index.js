import React, { useState } from 'react';

import { Text, KeyboardAvoidingView, Alert } from 'react-native';
import ButtonComponent from '../../components/ButtonComponent';
import { createUserOnFirebaseAsync } from '../../services/firebaseApi';
import { TextInput } from 'react-native-paper';

import { View } from 'react-native';

export const Register = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const _createUserAsync = async () => {
    try {
      const user = await createUserOnFirebaseAsync(email, password);

      Alert.alert(
        'User Created!',
        `User ${user.email} has succesfuly been created!`,
      );

      setTimeout(() => {
        navigation.navigate('Login');
      }, 2000);
    } catch (error) {
      Alert.alert('Create User Failed!', error.message);
    }
  };

  return (
    <>
      <View
        style={{
          flex: 1,
          paddingHorizontal: 20,
          justify: 'center',
          alignItems: 'center',
          paddingVertical: 20,
        }}>
        <Text style={{ marginBottom: 20 }}>Cadastro</Text>
        <TextInput
          label='Email'
          value={email}
          onChangeText={text => setEmail(text)}
          autoCapitalize="none"
          style={{
            backgroundColor: 'white',
            marginBottom: 15,
            width: '100%',
            alignSelf: 'center'
          }}
          keyboardType={'email-address'}
          mode="outlined"
          theme={{ colors: { primary: '#594da7', underlineColor: 'transparent', } }}
        />
        <TextInput
          label='Senha'
          value={password}
          onChangeText={text => setPassword(text)}
          autoCapitalize="none"
          style={{
            backgroundColor: 'white',
            marginBottom: 5,
            width: '100%',
            alignSelf: 'center'
          }}
          secureTextEntry={true}
          mode="outlined"
          theme={{ colors: { primary: '#594da7', underlineColor: 'transparent', } }}
        />
        <ButtonComponent onPress={_createUserAsync}>
          <Text style={{ color: '#fff', fontWeight: 'bold' }}>Finalizar Cadastro</Text>
        </ButtonComponent>
      </View>
    </>
  );
};
