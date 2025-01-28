import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import SelectionCard from './SelectionCard'



const Selection = () => {
  return (
   <ScrollView
   contentContainerStyle={{
    paddingHorizontal:15,
    
   }}
   horizontal
   showsHorizontalScrollIndicator={false}
   >
  
    {/*SelectionCard*/}
    <SelectionCard
    imgUrl="https://wallpaperaccess.com/full/767054.jpg"
    
    title="Veggie
     tomato mix"
    />
        <SelectionCard
        imgUrl="https://wallpaperaccess.com/full/767054.jpg"
    title="Drinks"
    />
        <SelectionCard
        imgUrl="https://th.bing.com/th/id/OIP.bejPmWStqSwDGK9HrrG-FwHaFz?rs=1&pid=ImgDetMain"
    title="Snacks"
    />
        <SelectionCard
        imgUrl="https://th.bing.com/th/id/OIP.SWVTmBw5LjxWf12Oqgrd4AHaFj?rs=1&pid=ImgDetMain"
    title="Sauce"
    />
   </ScrollView>
  )
}

export default Selection