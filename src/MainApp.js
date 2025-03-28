import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import HomeScreen from './component/HomeScreen'
import LoginScreen from './component/LoginScreen'
import SelectScreen from './component/SelectScreen'
import HeartPage from './component/HeartPage'
import UserPage from './component/UserPage'
import HistoryPage from './component/HistoryPage'
import HomePage from './component/HomePage'
import SeeMore from './component/SeeMore'
import UpdateScreen from './component/UpdateScreen'
import CartScreen from './component/CartScreen'
import { Feather, FontAwesome } from '@expo/vector-icons'


const Stack = createNativeStackNavigator()

const StackNavigator = () => {
  return (
   
      <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false, 
      }}
    >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Select" component={SelectScreen} />
        <Stack.Screen name="Heart" component={HeartPage} />
        <Stack.Screen name="User" component={UserPage} />
        <Stack.Screen name="History" component={HistoryPage} />
        <Stack.Screen name="SeeMore" component={SeeMore} />
        <Stack.Screen name="Update" component={UpdateScreen} />
        <Stack.Screen name="Cart" component={CartScreen} />
      </Stack.Navigator>
    
  )
}

const Drawer = createDrawerNavigator()
const MainApp = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          drawerPosition: 'left', 
          headerShown: false, 
          swipeEnabled: false,
          drawerStyle:{
            backgroundColor:'#FF4B3A'
          },
          drawerActiveTintColor:'white',
          drawerInactiveTintColor:'white',
          
        }}
      >
          <Drawer.Screen
          name="Home"
          component={StackNavigator}
          options={{
            drawerIcon: ({ color, size }) => (
              <Feather name="home" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Profile"
          component={UserPage}
          options={{
            drawerIcon: ({ color, size }) => (
              <Feather name="user" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Order"
          component={HistoryPage}
          options={{
            drawerIcon: ({ color, size }) => (
              <Feather name="shopping-bag" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Offer and Promo"
          component={SeeMore}
          options={{
            drawerIcon: ({ color, size }) => (
              <Feather name="tag" size={size} color={color} />
            ),
          }}
        />
          <Drawer.Screen
          name="Privacy Policy"
          component={UpdateScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <Feather name="lock" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Security"
          component={CartScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <Feather name="shield" size={size} color={color} />
            ),
          }}
        />
       
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default MainApp
