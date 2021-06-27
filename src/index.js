import React from 'react';

import { Text, View, SafeAreaView } from "react-native";
import { Login } from "./screen/Login";
import { Register } from "./screen/Register";

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Login />
      <Register />
    </SafeAreaView>
  );
};

export default App;
