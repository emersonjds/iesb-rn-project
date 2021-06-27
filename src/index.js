import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import Routes from './routes';
import { NavigationContainer } from '@react-navigation/native';
import { initializeFirebase } from '../src/services/firebaseApi';


const wrappedRoutes = () => {

  const startFirebase = async () => {
    console.log('inicializado firebase', initializeFirebase);
    await initializeFirebase()
  }

  useEffect(() => {
    startFirebase()
  }, [])

  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1 }}>
        <Routes />
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default wrappedRoutes;
