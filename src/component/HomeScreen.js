import { View, Text, SafeAreaView, StyleSheet, Image, Button, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { size } from '../config/size'


const HomeScreen = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#FF4B3A' }}>
            <View style={{
                backgroundColor: '#FFFFFF', width: 100,
                height: size.getHeightSize(100),
                marginLeft: 40,
                padding: 7,
                margin: 20,
                borderRadius: 50
            }}>
                <Image source={require('../../assets/bellocon.png')}
                    style={{ marginTop: 20, }}
                />
            </View>

            <View style={styles.contain}>
                <Text style={styles.show}>
                    Food for Everyone
                </Text>
            </View >

            <View style={{
                flexDirection: 'row', backgroundColor: '#FF470B'
            }}>
                <Image source={require('../../assets/toycon.png')}
                    style={{ height: size.getHeightSize(380), width: size.getWidthSize(255), margin: 3 }}
                />

                <View style={{ paddingRight: 30 }}>
                    <Image source={require('../../assets/toy2con.png')}
                        style={{ height: size.getHeightSize(380), width: size.getWidthSize(225), }}
                    />
                </View>

            </View>
<View style={{ 
    marginTop:30,
     backgroundColor:'white',
     height:size.getHeightSize(55),
     width:size.getWidthSize(300),
     marginLeft:40,
     borderRadius:20
     }}>
  <TouchableOpacity
  title="Get started"
  onPress={() => navigation.navigate ('Login')}>
    <Text style={{marginLeft:110, 
    marginTop:20,
    color:'#FF4B3A'
    }}>Get started</Text>
  </TouchableOpacity>
</View>

        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    show: {
        color: '#FFFFFF',
        fontSize: 55,
        fontWeight: 'bold',
    },
    contain: {
        marginBottom: 20,
        marginLeft: 50,


    }




});
export default HomeScreen