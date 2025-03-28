import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import Selection from './Selection'
import { size } from '../config/size'
import CartCard from './CartCard'
import { useNavigation } from '@react-navigation/native'
import { Feather, FontAwesome } from '@expo/vector-icons'
import { SafeAreaView } from 'react-native-safe-area-context'





const CartScreen = () => {
  const [isPressed, setIsPressed] = useState(false);


    

    const navigation = useNavigation();


    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])
   
  return (
   
     
      
     <SafeAreaView>
      <TouchableOpacity onPress= {navigation.goBack} style={{}}>
      < Feather name={'chevron-left'} size={25} style={{margin:14}} />
      </TouchableOpacity>
      <CartCard/>



      </SafeAreaView>
      

      
      
     
      
      
    
   
  )
}

export default CartScreen