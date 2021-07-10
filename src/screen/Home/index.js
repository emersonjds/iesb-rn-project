import React from 'react';
import { View, Text, Button } from 'react-native';

// import { Container } from './styles';

import { signOut } from '../../services/firebaseApi';

const Home = ({ navigation }) => {
  const signOutApp = () => {
    signOut();
    navigation.navigate('Login');
  };
  return (
    <View>
      <Text>Home</Text>
      <Button title="Sair" onPress={() => signOutApp()} />
    </View>
  );
};

export default Home;
