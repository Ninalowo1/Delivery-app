import { View, Text, SafeAreaView, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { size } from '../config/size'


const SeeCard = ({ title, imgUrl }) => {
    return (


        <View style={{ margin:10,}}>
             <TouchableOpacity>
            <View
           
        style={{ height: size.getHeightSize(220), 
            width: size.getWidthSize(130), 
            borderRadius: 70, backgroundColor:'white',  }} >
               
            <Image
            source={{
                    uri: imgUrl
                }} style={{ height: size.getHeightSize(100), 
                width: size.getWidthSize(100), 
                borderRadius: 70,
                 marginLeft: 15,}}
               />
              
            <View style={{ marginLeft: 20, marginTop: 60 }}>
              
                   <Text>{title}</Text>
            </View>
           
            </View>
            </TouchableOpacity>
        </View>


    )
}

export default SeeCard