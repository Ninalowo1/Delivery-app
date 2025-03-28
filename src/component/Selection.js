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
    imgUrl="https://theawesomedaily.com/wp-content/uploads/2016/09/pictures-of-pizza-23-1.jpg"
    
    title="Pizza"
    />
        <SelectionCard
        imgUrl="https://th.bing.com/th/id/R.423965dd29f72e41ee4339de22994aff?rik=%2foDCfFdkLR3F%2fw&riu=http%3a%2f%2fimages6.fanpop.com%2fimage%2fphotos%2f36700000%2fFood-image-food-36721758-2560-1600.jpg&ehk=%2fzz%2bS7VmkplNWZiU3ZZHtYDLgQQxyxgD2SXZVGoUgRk%3d&risl=&pid=ImgRaw&r=0"
    title="Dessert"
    />
        <SelectionCard
        imgUrl="https://www.theworldbucketlist.com/wp-content/uploads/2021/04/eclairs-2903014-1920-1536x1024.jpg"
    title="Pastries"
    />
        <SelectionCard
        imgUrl="https://th.bing.com/th/id/OIP.SWVTmBw5LjxWf12Oqgrd4AHaFj?rs=1&pid=ImgDetMain"
    title="Sauce"
    />
    
   </ScrollView>
  )
}

export default Selection