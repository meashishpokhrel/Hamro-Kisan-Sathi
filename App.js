import React from 'react'

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
      "Hamro Kisan Sathi": BottomTabB,
      HomeTab: BottomTabA,
  }) ,

  Refresh: createStackNavigator({
    "Hamro Kisan Sathi Latest": BottomTabB,
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

// import React, {Component} from "react"

// import FirebaseData from "./components/Carousel";


// import {createAppContainer} from 'react-navigation'
// import {createStackNavigator} from 'react-navigation-stack'
// import {View,Text,StyleSheet, Image, BackHandler, AsyncStorage} from "react-native";
// import {createBottomTabNavigator} from 'react-navigation-tabs'
// // import HomeTab from "./components/HomeTab"
// import BottomTabB from './components/RefreshTab'
// import BottomTabC from './components/ExitTab'
// class Welcome extends Component{
//     render(){
//         return(
            
//             <View>
//                 <Text>Ashish Compoents using</Text>
                
                
//             </View>

//         )
//     }
// }

// export default Welcome;