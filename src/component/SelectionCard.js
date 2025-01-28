import { View, Text, StyleSheet, Image, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { size } from '../config/size'

const SelectionCard = ({ title, imgUrl }) => {
  return (
    
    <TouchableOpacity style={{ height: size.getHeightSize(250),
     width: size.getWidthSize(200), 
     marginTop:20, 
     backgroundColor: "#f0ffff", 
     margin:10,
     borderRadius:20,
     flex:1
     }} >
  <SafeAreaView style={{paddingBottom:'30'}}>
      <Image source={{
        uri: imgUrl


      }} style={{ height: size.getHeightSize(140), width: size.getWidthSize(140), borderRadius:70, marginLeft:25}} />
      
      <Text style={{marginLeft:70, fontWeight:'bold',
        fontSize:17,

      }}> {title}</Text>
</SafeAreaView>
    </TouchableOpacity>
  )
}



const styles = StyleSheet.create({
  show: {

  }





})
export default SelectionCard