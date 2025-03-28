import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CardSelection from './CardSelection'

const CartCard = () => {
  return (
    <ScrollView
    contentContainerStyle={{
     paddingVertical:15,
     
    }}
    vertical
    showsVerticalScrollIndicator={false}
    >
   
     {/*CardSelection*/}
     <CardSelection
      id="1"
     imgUrl="https://wallpaperaccess.com/full/767054.jpg"
     
     title="Veggie tomato mix"
     />
         <CardSelection
          id="2"
         imgUrl="https://wallpaperaccess.com/full/767054.jpg"
     title="Fish with mix orange....."
     />
         <CardSelection
          id="3"
         imgUrl="https://th.bing.com/th/id/OIP.bejPmWStqSwDGK9HrrG-FwHaFz?rs=1&pid=ImgDetMain"
     title="Snacks"
     />
         <CardSelection
          id="4"
         imgUrl="https://th.bing.com/th/id/OIP.SWVTmBw5LjxWf12Oqgrd4AHaFj?rs=1&pid=ImgDetMain"
     title="Sauce"
     />
     
    </ScrollView>
  )
}

export default CartCard