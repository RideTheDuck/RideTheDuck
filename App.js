import React from 'react';
import {NavigationContainer} from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack";
import {createDrawerNavigator} from "@react-navigation/drawer"
import RenderComponents from "./components/renderComponents";
import About from "./components/about";
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeStack = createStackNavigator();
const AboutStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStackScreen = ({ navigation }) => (
  <HomeStack.Navigator
    screenOptions={{ 
      headerStyle: {
          backgroundColor: '#546747'
        },
        headerTintColor: "#faab18",
        headerTitleStyle: {
          fontWeight: "bold"
        }
    }}>
    <HomeStack.Screen
      name="Ride The Duck"
      component={RenderComponents}
      options={{
        title: "Ride The Duck",
        headerRight: () => (
          <Icon.Button name="bars" size={25} backgroundColor="#546747" onPress={() => navigation.openDrawer()}></Icon.Button>
        )
      }} />
  </HomeStack.Navigator>
)
const AboutStackScreen = ({ navigation }) => (
  <AboutStack.Navigator
    screenOptions={{
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