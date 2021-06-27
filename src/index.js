import React from 'react';
import { SafeAreaView } from 'react-native';
import Routes from './routes';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      {/* eslint-disable-next-line react-native/no-inline-styles */}
      <SafeAreaView style={{ flex: 1 }}>
        <Routes />
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
