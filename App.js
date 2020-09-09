import React from 'react'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {View,Text,StyleSheet, Image, BackHandler} from "react-native";

import {createBottomTabNavigator} from 'react-navigation-tabs'
import BottomTabA from './component/AppTabNavigator/HomeTab'
import BottomTabB from './component/AppTabNavigator/RefreshTab'
import BottomTabC from './component/AppTabNavigator/ExitTab'
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 



// import Home from './screen/Home'


// const stackNavigator = createStackNavigator({
//   "Hamro Kishan Sathi":Home
// })


const tabNavigator = createBottomTabNavigator({
  Home: createStackNavigator({
      "Hamro Kisan Sathi": BottomTabA,
      HomeTab: BottomTabA,
  }) ,

  Refresh: createStackNavigator({
    "Hamro Kisan Sathi": BottomTabA,
  }),
  Exit: createStackNavigator({
      Exit: BottomTabC,
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
  }else if (routeName === 'Refresh'){
      iconName = focused ? 'ios-refresh-circle' : 'md-refresh-circle'
  }
  else if (routeName === 'Exit'){
    iconName = focused ? 'md-exit' : 'ios-exit';
    // BackHandler.exitApp();
}

  return <IconComponent name = {iconName} size = {25} color = {tintColor}></IconComponent>
}
}),

tabBarOptions:{
  activeTintColor: '#463eb6',
  activeBackgroundColor: '#f4511e',

  keyboardHidesTabBar: false,
  tabStyle: {
      backgroundColor: '#8bfab9'
  },

  labelStyle: {
      fontSize: 12,
  }
}
}
)

  


const App = createAppContainer(tabNavigator)

export default App

