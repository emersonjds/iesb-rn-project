import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';

// import { Container } from './styles';

const ToDoTasks = ({ navigation }) => {

  const _goToTask = () => {
    navigation.navigate('Task')
  }

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity onPress={_goToTask} style={styles.floatButton} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, paddingLeft: 10, paddingRight: 10
  }, icon: {
    width: 26,
    height: 26
  },
  img: {
    width: 50,
    height: 50
  },
  floatButton: {
    position: 'absolute',
    right: 20,
  }
});

export default ToDoTasks
