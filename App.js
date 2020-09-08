import React from 'react'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {View,Text,StyleSheet, Image} from "react-native";

import Home from './screen/Home'

const stackNavigator = createStackNavigator({
  "Hamro Kishan Sathi":Home
})

const App = createAppContainer(stackNavigator)

export default App
