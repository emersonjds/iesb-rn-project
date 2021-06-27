import React from 'react';

import { Text, View, SafeAreaView } from "react-native";
import { Login } from "./screen/Login";

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Login />
    </SafeAreaView>
  );
};

export default App;
