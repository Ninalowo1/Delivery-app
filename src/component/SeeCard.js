import { View, Text, SafeAreaView, Image, StyleSheet } from 'react-native'
import React from 'react'
import { size } from '../config/size'

const SeeCard = ({ title, imgUrl }) => {
    return (


        <SafeAreaView style={{margin:10}}>
            <View
        style={{ height: size.getHeightSize(210), 
            width: size.getWidthSize(150), 
            borderRadius: 70, backgroundColor:'white'}} >
<Image source={{
                    uri: imgUrl
                }} style={{ height: size.getHeightSize(100), 
                width: size.getWidthSize(100), 
                borderRadius: 70,
                 marginLeft: 25, flexDirection:'row'}}
               />
            <View >
              
                   <Text>{title}</Text>
            </View>
            </View>
        </SafeAreaView>


    )
}

export default SeeCard