import { View, Text, SafeAreaView, Image,ScrollView, StyleSheet , TextInput } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { size } from '../config/size';
import SeeItem from './SeeItem';
import { Feather } from '@expo/vector-icons'




const SeeMore = () => {
 const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])

  return (
   
    <View style={{}}>
 
   <View style={{  flexDirection: 'row',
    paddingRight: 40,
    margin: 30,
    paddingTop:20,
     }}>
      
            < Feather name={'chevron-left'} size={25}  style ={{ }}/>
            
             <TextInput style={{fontSize: 17,  textAlign:'center', marginLeft:97}}
               placeholder="search"
             />
      </View>     
<SeeItem/>

    </View>
 
  )
}

export default SeeMore