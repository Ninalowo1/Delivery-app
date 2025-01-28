import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { size } from '../config/size'
import { Feather } from '@expo/vector-icons'
import { SafeAreaView } from 'react-native-safe-area-context'

const HeartPage = () => {

  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])

  return (
    <SafeAreaView style={{ flex: '1', }}>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ marginLeft: 15 }}>
          < Feather name={'chevron-left'} size={20} />
        </View>

        <View style={{ marginLeft: 300 }}>
          < Feather name={'heart'} size={20} />
        </View>
      </View>
      <View style={{ padding: 60 }}>
        <Image source={require('../../assets/foodcon.png')}
          style={{ height: size.getHeightSize(300), width: size.getWidthSize(255), }}
        />
        <View style={{ marginHorizontal: '25' }} >
          <Text style={{ fontSize: '20', fontWeight: 'bold' }}>
            Vegitable tomato mix </Text>
          <Text></Text>

        </View>
        <View style={{ marginHorizontal: '95' }}>
          <Text style={{ fontSize: '20', fontWeight: 'bold', color: '#FF470B' }}>
            1,900 </Text>
        </View>

      </View >


      <View style={{ marginLeft: '30', paddingBottom: 20 }}>
        <Text>Delivery info</Text>
        <Text style={{ fontSize: '16', fontWeight: '200' }}>Delivered between monday aug and
        </Text>
        <Text style={{ fontSize: '16', fontWeight: '200' }}> thursday 20 from 8pm to 91:32 pm</Text>
      </View>

      <View style={{ marginLeft: '30' }}>
        <Text>Return policy</Text>
        <Text style={{
          fontSize: '16',
          fontWeight: '200'
        }}>All our foods are double checked before
        </Text>
        <Text style={{
          fontSize: '16',
          fontWeight: '200'
        }}>
          leaving our stores so by any case you
        </Text>
        <Text style={{
          fontSize: '16',
          fontWeight: '200'
        }}>found a broken food please contact our
        </Text>
        <Text style={{
          fontSize: '16',
          fontWeight: '200'
        }}>
          hotline immediately.
        </Text>
      </View>

      <View style={{
        marginTop: 30,
        backgroundColor: '#FF4B3A',
        height: size.getHeightSize(55),
        width: size.getWidthSize(300),
        marginLeft: 40,
        borderRadius: 20
      }}>
        <TouchableOpacity
          title="Get started"
          onPress={() => navigation.navigate('Login')}>
          <Text style={{
            marginLeft: 110,
            marginTop: 20,
            color: 'white'
          }}>Add to cart</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default HeartPage