import { StatusBar } from 'expo-status-bar';
import { Text, View, StyleSheet, SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import HomeScreen from './src/component/HomeScreen';
import LoginScreen from './src/component/LoginScreen';
import SelectScreen from './src/component/SelectScreen';
import HeartPage from './src/component/HeartPage';
import UserPage from './src/component/UserPage';
import HistoryPage from './src/component/HistoryPage';
import HomePage from './src/component/HomePage';
import SeeMore from './src/component/SeeMore';
import UpdateScreen from './src/component/UpdateScreen';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
     <Stack.Screen name="Login" component={LoginScreen}/> 
     <Stack.Screen name="Select" component={SelectScreen}/> 
     <Stack.Screen name="Heart" component={HeartPage}/> 
     <Stack.Screen name="User" component={UserPage}/> 
     <Stack.Screen name="History" component={HistoryPage}/> 
     <Stack.Screen name="SeeMore" component={SeeMore}/> 
     <Stack.Screen name="Update" component={UpdateScreen}/> 
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({

    
    
    
  
});

