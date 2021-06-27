import React, { useState } from 'react';

import { Text, View, TextInput, Image, Alert } from 'react-native';
import ButtonComponent from '../../components/ButtonComponent';

const img = require('../../assets/iconTodo.png');

export const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const createTwoButtonAlert = () => Alert.alert('Dados', `${email}`);

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
        />

        <ButtonComponent onPress={createTwoButtonAlert}>
          <Text style={{ color: '#fff', fontWeight: 'bold' }}>Sign In</Text>
        </ButtonComponent>

        <Text>Nao tem cadastro ainda ?!</Text>
        <Text onPress={() => navigation.navigate('Register')}>Registre-se</Text>
      </View>
    </>
  );
};
