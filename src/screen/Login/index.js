import React, {useState} from 'react';

import { Text, View, TextInput, Image, Alert } from "react-native";
import ButtonComponent from "../../components/ButtonComponent";

const img = require('../../assets/iconTodo.png')

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

  const createTwoButtonAlert = () =>
    Alert.alert(
      "Dados",
      `${email}`,
    );


  return (
    <>
      <View style={{flex: 1, paddingHorizontal: 20, justify: 'center', alignItems: 'center', paddingVertical: 20}}>
        <Text style={{marginTop: 25}}>
          My Todo
        </Text>
        <Image source={img} style={{height: 300, width: 300, marginTop: 25}}/>
      <TextInput
        placeholder="Email"
        onChangeText={text => setEmail(text)}
      >

      </TextInput>
        <ButtonComponent onPress={createTwoButtonAlert}>
          <Text>
            Sign In
          </Text>
        </ButtonComponent>
      </View>


    </>

  );
};
