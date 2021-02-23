import React from 'react';
import {NavigationContainer} from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack";
import {createDrawerNavigator} from "@react-navigation/drawer"
import RenderComponents from "./components/renderComponents";
import About from "./components/about";
import Splash from "./components/splash";
import LoginScreen from "./components/User/LoginScreen";
import SignupScreen from "./components/User/SignupScreen";
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeStack = createStackNavigator();
const AboutStack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator()

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
    <AboutStack.Screen name="About" component={About} options={{
      headerRight: () => (
          <Icon.Button name="bars" size={25} backgroundColor="#546747" onPress={() => navigation.openDrawer()}></Icon.Button>
        )
    }}/>
  </AboutStack.Navigator>
)


const App = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState("null");

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000)
  }, []);

  if (isLoading) {
    return <Splash/>
  }

  return (
    <NavigationContainer>
      {userToken ? (
        <Drawer.Navigator>
          <Drawer.Screen name="Home" component={HomeStackScreen} />
          <Drawer.Screen name="About" component={AboutStackScreen} />
        </Drawer.Navigator> 
      ) : (
          <Stack.Navigator>
        {/* <Drawer.Navigator initialRouteName="Login">
        <Drawer.Screen name="Home" component={HomeStackScreen} />
        <Drawer.Screen name="About" component={AboutStackScreen} />
      </Drawer.Navigator> */}
        
        <Stack.Screen name="Login" component={LoginScreen}
          screenOptions={{
          headerStyle: {
            backgroundColor: '#546747'
          },
          headerTintColor: "#faab18",
          headerTitleStyle: {
            fontWeight:"bold"
          }
        }}
        />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Home" component={RenderComponents}
          options = {
          {
            title: "Ride The Duck",
            //   headerRight: () => (
            //   // {backgroundColor = "#546747"}
            //   <Icon.Button name="bars" size={25} backgroundColor="#546747"
            //   onPress={() => navigation.openDrawer()}
            //   ></Icon.Button>
            // )
          }} 
        />
        {/* <Stack.Screen name="Home" component={RenderComponent}/> */}
        {/* <Stack.Screen name="Flights" component={FlightsList}/> */}
      </Stack.Navigator>
      )}
      {/* <Drawer.Navigator initialRouteName="Login">
        <Drawer.Screen name="Home" component={HomeStackScreen} />
        <Drawer.Screen name="About" component={AboutStackScreen} />
      </Drawer.Navigator> */}
      
      <Stack.Screen name="About" component={About} />
    </NavigationContainer>
  )
}

export default App;