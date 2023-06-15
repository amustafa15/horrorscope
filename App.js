import React, { useState, useEffect} from "react"
import {NavigationContainer} from '@react-navigation/native'

import MyStack from "./components/MyStack/MyStack";

import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <NavigationContainer>
      {/* <SignupStackContainer /> */}
      <MyStack />
    </NavigationContainer> 
)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
