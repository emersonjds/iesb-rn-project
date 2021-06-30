import React from 'react';
import { View, TouchableOpacity } from 'react-native';

const ToDoTasks = ({ navigation }) => {

  const _goToTask = () => {
    navigation.navigate('Task')
  }

  return (
    <>
      <View style={{
        flex: 1,
        paddingHorizontal: 20,


      }}>
        <TouchableOpacity
          onPress={() => _goToTask()}
          style={{
            height: 50,
            width: 50,
            borderRadius: 50,
            backgroundColor: 'blue',
            bottom: 20,
            right: 20,
            position: 'absolute',
          }}
        />
      </View>
    </>
  );
}


export default ToDoTasks
