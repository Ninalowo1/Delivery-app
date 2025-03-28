import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

const HistoryPage= () => {
 const navigation = useNavigation();

  return (
    <SafeAreaView>
          <TouchableOpacity onPress={navigation.goBack} style={{}}>
            < Feather name={'chevron-left'} size={25}  style ={{ }}/>
            </TouchableOpacity>
    </SafeAreaView>
  )
}

export default HistoryPage