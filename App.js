import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'//add container libraries
import { createStackNavigator } from "@react-navigation/stack";//add navigation container for all pages in app

import login from './screens/login'
import register from './screens/register'
import details from './screens/details'
import account from './screens/account'

const Stack=createStackNavigator()//instance navigator

function MyStack(){//function for screens
  return(
    <Stack.Navigator>

      <Stack.Screen name="details" component={details}/>  
      <Stack.Screen name="register" component={register}/> 
      <Stack.Screen name="login" component={login}/>
      <Stack.Screen name="account" component={account} />

    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
