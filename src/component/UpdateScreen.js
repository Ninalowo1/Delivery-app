import { View, Text, SafeAreaView, StyleSheet} from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'


const UpdateScreen = () => {
const navigation = useNavigation();
    useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: false,
      })
    }, [])
  return (
    <SafeAreaView>
      <Text style={{fontSize:30, fontWeight:'bold'}}> Hello world :)) </Text>
    </SafeAreaView>
  )
}

export default UpdateScreen