import React, { Component } from 'react';
import {NavigationContainer} from "@react-navigation/native"
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "@react-navigation/stack";
import {createDrawerNavigator} from "@react-navigation/drawer"
import RenderComponents from "./components/renderComponents";
import About from "./components/about";
import Icon from 'react-native-vector-icons/FontAwesome';
import { registerRootComponent } from "expo";

const HomeStack = createStackNavigator();
const AboutStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStackScreen = ({ navigation }) => (
  <HomeStack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#546747' } }}>
    <HomeStack.Screen name="Home" component={RenderComponents} options={{title: "Home"}}/>
  </HomeStack.Navigator>
)
const AboutStackScreen = ({ navigation }) => (
  <AboutStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: '#546747'
    },
    headerTintColor: "#faab18",
    headerTitleStyle: {
      fontWeight:"bold"
    }
  }}>
    <AboutStack.Screen name="About" component={About} options={{}}/>
  </AboutStack.Navigator>
)
const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="RenderComponents">
        <Drawer.Screen name="Home" component={HomeStackScreen} />
        <Drawer.Screen name="About" component={AboutStackScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default App;