import { View, Text, ScrollView, TouchableOpacity, StyleSheet, TextInput} from 'react-native'
import React from 'react'
import SeeCard from './SeeCard'
import { size } from '../config/size'



const SeeItem=   () => {
  return (
   
    <ScrollView contentContainerStyle={{flexDirection:'row',  backgroundColor:'#f0ffff',}}>

   <View style={{flexDirection:'column', justifyContent:'space-between',paddingBottom:80, flex:1,}}>
  <View style={{paddingLeft:80, }}>
     <Text style={{fontSize:20, fontWeight:'bold'}}> Found 8 items</Text>
  
  </View>
 {/*SeeCard*/}
 <SeeCard
    imgUrl="https://wallpaperaccess.com/full/767054.jpg"
    
    title="Veggie
     tomato mix"
    />
        <SeeCard
        imgUrl="https://wallpaperaccess.com/full/767054.jpg"
    title="Drinks"
    />
        <SeeCard
        imgUrl="https://th.bing.com/th/id/OIP.bejPmWStqSwDGK9HrrG-FwHaFz?rs=1&pid=ImgDetMain"
    title="Snacks"
    />
        <SeeCard
        imgUrl="https://th.bing.com/th/id/OIP.SWVTmBw5LjxWf12Oqgrd4AHaFj?rs=1&pid=ImgDetMain"
    title="Sauce"
    />
    </View>

    <View style={{paddingTop:80, marginRight:20}}>
      <SeeCard
    imgUrl="https://wallpaperaccess.com/full/767054.jpg"
    
    title="Veggie
     tomato mix"
    />
        <SeeCard
        imgUrl="https://wallpaperaccess.com/full/767054.jpg"
    title="Drinks"
    />
        <SeeCard
        imgUrl="https://th.bing.com/th/id/OIP.bejPmWStqSwDGK9HrrG-FwHaFz?rs=1&pid=ImgDetMain"
    title="Snacks"
    />
        <SeeCard
        imgUrl="https://th.bing.com/th/id/OIP.SWVTmBw5LjxWf12Oqgrd4AHaFj?rs=1&pid=ImgDetMain"
    title="Sauce"
    />  
  
    
       </View>
       


    </ScrollView>
    
  )
}

export default SeeItem