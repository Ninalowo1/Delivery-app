import { View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useContext, useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { Feather, FontAwesome } from '@expo/vector-icons'
import { size } from '../config/size';



const UserPage = () => {
  const navigation = useNavigation();
 
   const [selectedMethod, setSelectedMethod] = useState(null)

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])

  const paymentMethods = [
    { name: 'Credit Card', icon: 'credit-card', iconType: 'FontAwesome' },
    { name: 'Bank', icon: 'bank', iconType: 'FontAwesome' },
    { name: 'Paypal', icon: 'paypal', iconType: 'FontAwesome', color: '#0000ff' },
  ]

  return (
    <SafeAreaView>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity onPress={navigation.goBack} style={{}}>
        < Feather name={'chevron-left'} size={25} style={{margin:10}} />
        </TouchableOpacity>
        <View style={{ marginLeft: 90 }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>My profile</Text>
        </View>
      </View >
      <Text style={{
        margin: 35, fontSize: 20,
        fontWeight: 'bold'
      }}>
        Information
      </Text>
      <View style={{
        marginLeft: 20, flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        height: size.getHeightSize(150),
        paddingTop: 18,
        borderRadius: 30,
        width: size.getWidthSize(325),
      }}>

        <Image source={require('../../assets/Rectangle.png')} />
        <View style={{ marginLeft: 20 }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Adedire Adewumi</Text>
          <View style={{ marginTop: 10 }}>
            <Text style={{ fontWeight: '300' }}>wumi_lol@gmail.com</Text>
          </View>
          <View style={{ marginTop: 10 }}>
            <Text style={{ fontWeight: '300' }}>
              No 15 uti street off ovie palace</Text>
            <Text style={{ fontWeight: '300' }}>road effurun Ekiti state</Text>

          </View>
        </View>
      </View>
      <View style={{ padding: 40 }}>
        <Text style={{ fontSize: 25 }}>
          Payment Methood
        </Text>
      </View>
      <View style={{
        backgroundColor: '#FFFFFF', height: size.getHeightSize(200),
        padding: 23, margin: 17, borderRadius: 30,
      }}>
        {paymentMethods.map((method, index) => (

          <View key={index} style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center' }}>
            <TouchableOpacity
              style={[
                styles.circle,
                selectedMethod === method.name && styles.selectedCircle,
                ,
              ]}
              onPress={() => setSelectedMethod(method.name)}
            />
            {method.iconType === 'Feather' ? (
              <Feather name={method.icon} size={25} style={{ marginHorizontal: 14 }} />
            ) : (
              <FontAwesome name={method.icon} size={25} style={[{ marginHorizontal: 14 },
              method.name === 'Paypal' && { color: method.color }]} />


            )}
            <Text style={{ fontSize: 20 }}>{method.name}</Text>
          </View>
        ))}
      </View>
      <View style={{
        marginTop: 90,
        backgroundColor: '#FA4A0C',
        height: size.getHeightSize(55),
        width: size.getWidthSize(300),
        marginLeft: 40,
        borderRadius: 20,
        marginTop: 50,

      }}>
        <TouchableOpacity
          title="Update"
          onPress={() => navigation.navigate('Update')}>
          <Text style={{
            marginLeft: 110,
            marginTop: 20,
            color: '#FFFFFF',
            
          }}>Update</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  circle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 1,
    marginRight: 10,
    borderColor: `#FF4B3A`
  },
  selectedCircle: {
    backgroundColor: '#FF4B3A',
  }
})
export default UserPage

