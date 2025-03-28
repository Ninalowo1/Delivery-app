import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Feather, FontAwesome } from '@expo/vector-icons'
import { size } from '../config/size'

const UpdateScreen = () => {
  const navigation = useNavigation();
  const [selectedDelivery, setSelectedDelivery] = useState(null)

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flexDirection: "row" }}>
          <TouchableOpacity onPress= {navigation.goBack} style={{}}>
        < Feather name={'chevron-left'} size={25} style={{padding:10}} />
        </TouchableOpacity>
        <View style={{ marginLeft: 90 }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Checkout</Text>
        </View>
      </View >
      <Text style={{
        margin: 35, fontSize: 20,
        fontWeight: 'bold'
      }}>
        Delivery
      </Text>
      <View style={{ flexDirection: 'row', paddingHorizontal: 15 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Address details</Text>
        <View style={{ paddingHorizontal: 130 }}>
          <Text style={{ fontSize: 20, color: '#FF4B3A' }}>change</Text>
        </View>
      </View>

      <View style={{
        marginLeft: 20, flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        height: size.getHeightSize(180),
        paddingTop: 18,
        borderRadius: 30,
        width: size.getWidthSize(325),
        marginTop: 30
      }}>


        <View style={{ marginLeft: 20 }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Adedire Adewumi</Text>

          <View style={styles.divider} />
          <View style={{ marginTop: 10 }}>
            <Text style={{ fontWeight: '500' }}>
              No 15 uti street off ovie palace</Text>

            <Text style={{ fontWeight: '500' }}>road effurun Ekiti state</Text>
            <View style={{}}>
              <View style={styles.divider} />
              <Text style={{ fontWeight: '500' }}>09011216570</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.method}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
          Delivery method
        </Text>


        <View style={{
          marginLeft: 2,
          flexDirection: 'row',
          backgroundColor: '#FFFFFF',
          height: size.getHeightSize(180),
          paddingTop: 18,
          borderRadius: 30,
          width: size.getWidthSize(325),
          marginTop: 30
        }}>
          <View style={{ marginLeft: 25 }}>
            <View style={{ marginTop: 25, flexDirection: 'row', alignItems: 'center', }}>
              <TouchableOpacity
                style={[
                  styles.circle,
                  selectedDelivery === 'Door Delivery' && styles.selectedCircle,
                ]}
                onPress={() => setSelectedDelivery('Door Delivery')}
              />

              <Text style={{ fontWeight: '500', fontSize: 20 }}>
                Door Delivery
              </Text>
            </View>
            <View style={styles.divider} />
            <View style={{ marginTop: 25, flexDirection: 'row', alignItems: 'center' }}>
              <TouchableOpacity
                style={[
                  styles.circle,
                  selectedDelivery === 'Pick up' && styles.selectedCircle,
                ]}
                onPress={() => setSelectedDelivery('Pick up')}
              />

              <Text style={{ fontWeight: '500', fontSize: 20 }}>  Pick up</Text>

            </View>
          </View>
        </View>


      </View>

      <View style={{flexDirection:'row', marginLeft:20, paddingTop:20}}>
  <Text  style={{fontSize:20, fontWeight:'400'}}>
    Total

  </Text>
  <View style={{marginHorizontal:115, 
  }}/>
  <Text style={{fontSize:20, fontWeight:'bold'}}>23,000</Text>
 
</View>
 <View style={{
        marginTop: 20,
        backgroundColor: '#FA4A0C',
        height: size.getHeightSize(55),
        width: size.getWidthSize(300),
        marginLeft: 40,
        borderRadius: 20
      }}>
        <TouchableOpacity
          title="Cart"
          onPress={() => navigation.navigate('Cart')}>
          <Text style={{
            marginLeft: 110,
            marginTop: 20,
            color: '#FFFFFF'
          }}>Proceed to payment</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({

  divider: {
    height: 1,
    backgroundColor: '#000',
    marginVertical: 10,
    width: size.getWidthSize(250),
  },
  method: {
    marginTop: 40,
    marginHorizontal: 15,
  },
  circle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 1,
    marginRight: 10,
    borderColor: '#FF4B3A',
  },

  selectedCircle: {
    backgroundColor: '#FF4B3A',
  },
})
export default UpdateScreen