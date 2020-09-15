import React, {useEffect} from 'react'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {View,Text,StyleSheet, Image, BackHandler, AsyncStorage} from "react-native";

import {createBottomTabNavigator} from 'react-navigation-tabs'
import BottomTabA from "./components/HomeTab"
import BottomTabB from './components/RefreshTab'
import BottomTabC from './components/ExitTab'
import Ionicons from 'react-native-vector-icons/Ionicons';



const tabNavigator = createBottomTabNavigator({
  Home: createStackNavigator({
      "Khukhure": BottomTabA,
      HomeTab: BottomTabA,
  }) ,

  "See All Rates": createStackNavigator({
    "All Available Rates ": BottomTabB,
  }),
  "Contact Us": createStackNavigator({
      "Contact Us": BottomTabC,
  }),

},
{
defaultNavigationOptions: ({navigation}) =>({
tabBarIcon: ({focused, horizontal,tintColor }) => {
  const {routeName} = navigation.state
  let IconComponent = Ionicons
  let iconName
  if (routeName === 'Home'){
      iconName = focused ? 'ios-home' : 'md-home'
  }else if (routeName === 'See All Rates'){
      iconName = focused ? 'list-circle-sharp' : 'list-circle-outline'
  }
  else if (routeName === 'Contact Us'){
    iconName = focused ? 'md-call-sharp' : 'md-call-outline';
    // BackHandler.exitApp();
}

  return <IconComponent name = {iconName} size = {25} color = {tintColor}></IconComponent>
}
}),

tabBarOptions:{
  activeTintColor: '#ffffff',
  activeBackgroundColor: '#f4511e',

  keyboardHidesTabBar: false,
  tabStyle: {
      backgroundColor: '#253cae'
  },

  labelStyle: {
      fontSize: 12,
  }
}
}
)

const App = createAppContainer(tabNavigator)

export default App
