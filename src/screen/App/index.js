import React, { useEffect } from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
import { CommonActions } from '@react-navigation/native'
import { currentFirebaseUser } from '../../services/firebaseApi';
import { Container, TitleLogin, Loading } from './styles';

const App = ({ navigation }) => {

  const resetNavigation = CommonActions.reset({
    index: 0,
    routes: [{ name: 'Login' }]
  })

  const verifyUserLogger = () => {

    setTimeout(async () => {
      try {
        const user = await currentFirebaseUser()
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{ name: 'TaskList' }]
          })
        )
        navigation.dispatch(resetNavigation)
        if (user) {
        }
      } catch (error) {
        navigation.dispatch(resetNavigation)
      }
    }, 2000);

  }

  useEffect(() => {
    verifyUserLogger();
  }, [])

  return (
    <Container style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TitleLogin>
        Carregando dados ...
      </TitleLogin>
      <Loading style={{ height: 50, width: 50 }} />
    </Container>
  )
}

export default App;