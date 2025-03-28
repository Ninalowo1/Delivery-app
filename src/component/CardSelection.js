import { View, Text, SafeAreaView, Image, StyleSheet, TouchableOpacity, Touchable } from 'react-native'
import React, { useState } from 'react'
import { size } from '../config/size'
import { Feather , FontAwesome} from '@expo/vector-icons'
import { useDispatch, useSelector } from 'react-redux'
import { addToBasket, removeFromBasket,  selectBasketItemsWithId } from '../features/basketSlice'
import { Swipeable } from 'react-native-gesture-handler'

const CardSelection = ({id, title, imgUrl, price = 1500  }) => {
     const [isPressed, setIsPressed] = useState(false);
     const items = useSelector(state => selectBasketItemsWithId(state, id)); 
     const dispatch = useDispatch();
    
   
     const addItemToBasket =() => {;
        
        dispatch(addToBasket({id,title, imgUrl}));  
     }

     const removeItemFromBasket = () => {
      if (items.length > 0) {
        dispatch(removeFromBasket({ id }))
      }
    }
    const renderRightActions = () => (
      <View style={styles.loveIconContainer}>
        <FontAwesome name="heart" size={30} color="red" />
      </View>
)

const totalPrice = items.length * price
  return (
   

    
  

    <Swipeable renderRightActions={renderRightActions}>
    <SafeAreaView style={styles.container}>



     <TouchableOpacity onPress={() => setIsPressed(!isPressed)}>
        <View style={styles.show}>
    <Image source={{ 
        uri: imgUrl


      }} style={{ height: size.getHeightSize(100), 
        width: size.getWidthSize(100),
         borderRadius:70,
       marginLeft:25, marginTop:13}} />

      <Text style={{paddingTop:50, paddingLeft:20}}>{title}</Text>



     
      </View>

     
          {isPressed && (
        
            <View  style={styles.iconContainer}>
                <View style={{  flexDirection:'row',}}>
                <TouchableOpacity onPress={removeItemFromBasket}>
                <Feather name={'minus'} size={25} style={{color:'white' }} />
                </TouchableOpacity>
                <Text  style={{paddingLeft:12, marginTop:5}}>{items.length}</Text>
                <View style={{  height: 27,
        width: 27,
        borderRadius: 20,
        backgroundColor: '#FF4B3A', 
        marginLeft:17,
      }}>
                <TouchableOpacity onPress={addItemToBasket} >
                   <View style={{}}>
                <Feather name={'plus'} size={25} style={{color:'white'}} />
                </View>
                    </TouchableOpacity>   

                    </View>       
                   
                      </View>
                    
                      
                </View>
          )}
          <View style={{}}>
           <Text style={styles.totalPrice}>₦{totalPrice}</Text>
           </View>
        </TouchableOpacity>
</SafeAreaView> 
</Swipeable>  
  )
}

const styles=StyleSheet.create({

    container:{
        

    },
    show:{
      margin:20,
 height: size.getHeightSize(140),
    width: size.getWidthSize(350), 
    borderRadius: 40,
         backgroundColor:'white',
         flexDirection:'row',
         marginLeft:10,
    },
    iconContainer: {
      height: 27,
      width: 27,
      borderRadius: 20,
      backgroundColor: '#FF4B3A', 
      marginHorizontal:25
    },
    loveIconContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      
      width: 80,
      height: '100%',
      borderTopLeftRadius: 40,
      borderBottomLeftRadius: 40,
    },
    totalPrice: {
marginRight: 10,
      fontSize: 16,
      fontWeight: 'bold',
      color: '#FF4B3A',
      marginLeft: 'auto',
      alignContent:'center'
      
    },
})

export default CardSelection