import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { createStackNavigator, createAppContainer, createBottomTabNavigator, createMaterialTopTabNavigator } from "react-navigation";
import TodoScreen from './screens/Todo'
import SwapiScreen from './screens/Swapi'
import TodoDetailScreen from './screens/TodoDetail'

import TodoStackNavigation from './navigations/todo'

// const AppNavigator = createStackNavigator({
//   Todo: {
//     screen: TodoScreen
//   },
//   Swapi: {
//     screen: SwapiScreen
//   }
// }, {
//   initialRouteName: 'Todo'
// })

// const AppNavigator = createBottomTabNavigator({
//   Todo: {
//     screen: TodoScreen
//   },
//   Swapi: {
//     screen: SwapiScreen
//   }
// })

const AppNavigator = createBottomTabNavigator({
  Todo: TodoStackNavigation,
  Swapi: {
    screen: SwapiScreen
  }
})




export default function App() {
  const Route = createAppContainer(AppNavigator)
 return <Route />
}


