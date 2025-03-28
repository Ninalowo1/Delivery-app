import { View, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import SeeCard from './SeeCard'

const SeeItem = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.column}>
        <SeeCard
          imgUrl="https://simplot-media.azureedge.net/-/media/foundation/recipes/tf_south-african-fried-chicken-with-slap-chips_253.jpg?rev=808c973fe98c430883e5d20cc024edf8&hash=507BDDA5D4E97CAB035854C06E023216"
          title="Chicken and chips"
        />
        <SeeCard
          imgUrl="https://www.theworldbucketlist.com/wp-content/uploads/2021/04/eclairs-2903014-1920-1536x1024.jpg"
          title="Pastries"
        />
        <SeeCard
          imgUrl="https://th.bing.com/th/id/OIP.r--JtsZAFIm4ETmLxcYL1QHaEo?rs=1&pid=ImgDetMain"
          title="Semo and soup"
        />
        <SeeCard
          imgUrl="https://th.bing.com/th/id/OIP.bejPmWStqSwDGK9HrrG-FwHaFz?rs=1&pid=ImgDetMain"
          title="Snacks"
        />
      </View>
      <View style={styles.column}>
        <SeeCard
          imgUrl="https://th.bing.com/th/id/OIP.eWw0kGyREfAvQaMZKYomGwHaE8?rs=1&pid=ImgDetMain"
          title="Drinks"
        />
        <SeeCard
          imgUrl="https://th.bing.com/th/id/OIP.3tZTI2yR_naPhS5CKOsekAAAAA?rs=1&pid=ImgDetMain"
          title="Moi-moi"
        />
        <SeeCard
          imgUrl="https://th.bing.com/th/id/OIP.SWVTmBw5LjxWf12Oqgrd4AHaFj?rs=1&pid=ImgDetMain"
          title="Source"
        />
        <SeeCard
          imgUrl="https://th.bing.com/th/id/OIP.h1wimxZ2pwu68py5kcZhKAHaJ_?rs=1&pid=ImgDetMain"
          title="Cake"
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  column: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
})

export default SeeItem