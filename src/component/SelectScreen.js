import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'
import { size } from '../config/size'
import Selection from './Selection'






const SelectScreen = () => {
  const navigation = useNavigation()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])


  return (

    <SafeAreaView style={{backgroundColor:'#f5f5dc', flex: 1}}>

      <View style={{ flexDirection: 'row' }}>
        <View style={{ marginLeft: 20 }}>
        <TouchableOpacity onPress={() => navigation.openDrawer()} style={{ marginLeft: 1 }}>
          < Feather name={'align-left'} size={25} />
        </TouchableOpacity>
        </View>
        <View style={{ marginLeft: 280 }}>
          < Feather name={'shopping-cart'} size={25} />
        </View>
      </View>
      <View style={{ paddingTop: 50, marginLeft: 20, }}>
        <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Delicious </Text>
        <Text style={{ fontSize: 30, fontWeight: 'bold' }}>food for you</Text>
      </View>
      <View style={{
        flexDirection: 'row',
        marginTop: 50,
        backgroundColor: '#d3d3d3',
        width: size.getWidthSize(200),
        height: size.getHeightSize(40),
        marginLeft: 30,
        borderRadius: 20
      }}>
        <View style={{ marginTop: 9, marginLeft: 5 }}>
          < Feather name={'search'} size={20} />
        </View>
        <View style={{ marginTop: 9, marginLeft: 14, }}>
          <TextInput style={{ fontSize: 17 }}
            placeholder="search"
          />
        </View>
      </View>

      <ScrollView horizontal={true} style={{ marginLeft: 40, marginTop: 40, }}>

        <View style={{ marginRight: 50, }}>
          <Text style>Food</Text>
        </View>
        <View style={{ marginRight: 40 }}>
          <Text>Drinks</Text>
        </View>
        <View style={{ marginRight: 30 }}>
          <Text>Snacks</Text>
        </View>
        <View style={{ marginRight: 20 }}>
          <Text>Sauce</Text>

        </View>

      </ScrollView>



      <TouchableOpacity
      
        onPress={() => navigation.navigate('SeeMore')}>
        <Text style={{ marginStart: '270', marginTop: '40', color: '#FF4B3A' }}>see more</Text>
      </TouchableOpacity>





      <Selection />


      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: '80', paddingHorizontal: 10 }}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')} >
          < Feather name={'home'} size={30} color={"black"} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Heart')} >
          < Feather name={'heart'} size={30} color={"black"} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('User')} >
          < Feather name={'user'} size={30} color={"black"} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('History')} >
          < Feather name={'clock'} size={30} color={"black"} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default SelectScreen

const styles = StyleSheet.create({})