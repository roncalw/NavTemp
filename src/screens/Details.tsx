import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {useRoute} from '@react-navigation/native'

//navigation needs a type associated with it
import {NativeStackScreenProps} from '@react-navigation/native-stack'
import { DertailsScreemRouteProp, MainStackParamList } from '../types/navigation'

const Details = ({navigation}:
  //Add the type for navigation here that is using the above two imports
  NativeStackScreenProps<MainStackParamList>) => {

  //Pass in the type for useRoute to use for the route.params.title
  //NOTE: The type is created in the navigation.ts file
  const route = useRoute<DertailsScreemRouteProp>()

  return (
    <View>
      <Text>Details</Text>
      <Text>{route.params.title}</Text>
    </View>
  )
}

export default Details

const styles = StyleSheet.create({})