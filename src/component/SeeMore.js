import { View, Text, SafeAreaView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'


const SeeMore = () => {
 const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])

  return (
    <SafeAreaView>
        <View>
            <Text>Spicy chieckns</Text>
            </View>


    </SafeAreaView>
  )
}

export default SeeMore