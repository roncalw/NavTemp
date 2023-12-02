import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

//navigation needs a type associated with it
import {NativeStackScreenProps} from '@react-navigation/native-stack'
import { MainStackParamList } from '../types/navigation'

const Home = ({navigation}:
  //Add the type for navigation here that is using the above two imports
  NativeStackScreenProps<MainStackParamList>) => {
  return (
    <View>
      <Text>Home</Text>
      <Button
        title='Go to Details'
        onPress={() => navigation.navigate('Details',
        {title: 'CodeFest'})
      }
      />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})