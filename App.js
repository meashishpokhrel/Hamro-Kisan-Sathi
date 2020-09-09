import React from 'react'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {View,Text,StyleSheet, Image} from "react-native";

import {createBottomTabNavigator} from 'react-navigation-tabs'
import BottomTabA from './component/AppTabNavigator/HomeTab'
import BottomTabB from './component/AppTabNavigator/RefreshTab'
import BottomTabC from './component/AppTabNavigator/ExitTab'
import { Ionicons } from '@expo/vector-icons';



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
      TabC: BottomTabC,
  }),

},
{
defaultNavigationOptions: ({navigation}) =>({
tabBarIcon: ({focused, horizontal,tintColor }) => {
  const {routeName} = navigation.state
  let IconComponent = Ionicons
  let iconName
  if (routeName === 'Home'){
      iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline'
  }else if (routeName === 'Refresh'){
      iconName = focused ? 'ios-list-box' : 'ios-list'
  }
  else if (routeName === 'Exit'){
    iconName = focused ? 'ios-list-box' : 'ios-list'
}

  return <IconComponent name = {iconName} size = {25} color = {tintColor}></IconComponent>
}
}),

tabBarOptions:{
  activeTintColor: '#fff',
  activeBackgroundColor: '#f4511e',

  keyboardHidesTabBar: false,
  tabStyle: {
      backgroundColor: '#f4511e'
  },

  labelStyle: {
      fontSize: 12,
  }
}
}
)

  


const App = createAppContainer(tabNavigator)

export default App

