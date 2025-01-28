import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, TextInput, ScrollView, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { size } from '../config/size'

const LoginScreen = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])


    return (

        <View>
           
                
            <View style={styles.contain} >
            
                <TouchableOpacity activeOpacity={0.5}>
                    <Text style={{ marginTop: 350,
                     marginLeft: 50, 
                        fontWeight: 'bold',
                        borderBottomWidth:6,
                         fontSize:20, }}>Login
                         </Text>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.5}>
                    <Text style={{ marginTop: 350, 
                        marginLeft: 150, 
                        fontWeight: 'bold', 
                        fontSize: 20, }}>Sign-up
                        </Text>
                </TouchableOpacity>
            </View>
            <View style={{ marginLeft: 40, 
                fontSize: 20, }}>

                <ScrollView>
                    <TextInput
                        style={styles.input}
                        placeholder="Email address"
                    />

                    <TextInput

                        style={styles.output}
                        placeholder="Password"

                    />
                </ScrollView>
            </View>
            <TouchableOpacity style={{ marginTop: 100 }}
                activeOpacity={0.5}>
                <Text style={{marginLeft:20,color:'#FF4B3A', fontWeight:'bold' }}>
                    Forget Passcode
                </Text>
            </TouchableOpacity>

            <View style={{ 
            marginTop:90,
             backgroundColor:'#FA4A0C',
             height:size.getHeightSize(55),
             width:size.getWidthSize(300),
             marginLeft:40,
             borderRadius:20
             }}>
          <TouchableOpacity
          title="Login"
          onPress={() => navigation.navigate ('Select')}>
            <Text style={{marginLeft:110, 
            marginTop:20,
            color:'#FFFFFF'
            }}>Login</Text>
          </TouchableOpacity>
        </View>
        </View>
      

    )
}


const styles = StyleSheet.create({
    contain: {
        height: size.getHeightSize(400),
        width: size.getWidthSize(370),
        backgroundColor: 'white',
        marginBottom: 50,
        flexDirection: 'row',
        borderRadius: 20,

    },
    input: {
        fontWeight: 'bold'
    },

    output: {
        fontWeight: 'bold',
        marginTop: 50,
        
    }




});
export default LoginScreen