//This is where all the screens are placed for the RootNavigator to use
import { Settings, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

//Impart app screens here
import Home from '../screens/Home'
import Details from '../screens/Details'
import AppSettings from '../screens/AppSettings'
import { MainStackParamList } from '../types/navigation'

//Stack will receive a MainStackParamList Type
//So you have have to add a generic for the type
const Stack = createNativeStackNavigator<MainStackParamList>()

const MainStack = () => {
  return (
    //All screens need to be inside the Stack
    <Stack.Navigator>
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='Details' component={Details} />
      <Stack.Screen name='AppSettings' component={AppSettings} />
    </Stack.Navigator>
  )
}

export default MainStack

const styles = StyleSheet.create({})