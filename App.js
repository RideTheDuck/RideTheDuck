import React, {useState} from 'react';
import {NavigationContainer} from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack";
import {createDrawerNavigator} from "@react-navigation/drawer"
import RenderComponents from "./components/renderComponents";
import About from "./components/about";
import Splash from "./components/splash";
import LoginScreen from "./components/User/LoginScreen";
import SignupScreen from "./components/User/SignupScreen";
import Icon from 'react-native-vector-icons/FontAwesome';
import {AuthContext} from "./components/User/AuthProvider"
import { Button, Modal, View, StyleSheet, TouchableOpacity, Text} from 'react-native';

const HomeStack = createStackNavigator();
const AboutStack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator()

console.disableYellowBox = true;

// const HomeStackScreen = ({ navigation }) => (
//   <HomeStack.Navigator
//     screenOptions={{ 
//       headerStyle: {
//           backgroundColor: '#546747'
//         },
//         headerTintColor: "#faab18",
//         headerTitleStyle: {
//           fontWeight: "bold"
//         }
//     }}>
//     <HomeStack.Screen
//       name="Ride The Duck"
//       component={RenderComponents}
//       options={{
//         title: "Ride The Duck",
//         headerRight: () => (
//           <Icon.Button name="bars" size={25} backgroundColor="#546747" onPress={() => navigation.openDrawer()}></Icon.Button>
//         )
//       }} />
//   </HomeStack.Navigator>
// )
// const AboutStackScreen = ({ navigation }) => (
//   <AboutStack.Navigator
//     screenOptions={{
//       headerStyle: {
//         backgroundColor: '#546747'
//       },
//       headerTintColor: "#faab18",
//       headerTitleStyle: {
//         fontWeight:"bold"
//       }
//     }}>
//     <AboutStack.Screen name="About" component={About} options={{
//       headerRight: () => (
//           <Icon.Button name="bars" size={25} backgroundColor="#546747" onPress={() => navigation.openDrawer()}></Icon.Button>
//         )
//     }}/>
//   </AboutStack.Navigator>
// )

const App = ({ navigate }) => {
  console.disableYellowBox = true;
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState("null");
 const [modalVisible, setModalVisible] = useState(false);
  // const authContext = React.useMemo(() => {
  //   return {
  //     login: () => {
  //       setIsLoading(false);
  //       setUserToken("null")
  //     },
  //     signup: () => {
  //       setIsLoading(false);
  //       setUserToken("null")
  //     },
  //     logout: () => {
  //       setIsLoading(false);
  //       setUserToken(null)
  //     }
  //   }
  // },[])

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2870)
  }, []);

  if (isLoading) {
    return <Splash/>
  }

  return (
    <AuthContext.Provider value={setUserToken}>
      <NavigationContainer>
        {/* {userToken ? (
          // <Drawer.Navigator>
          //   <Drawer.Screen name="Home" component={HomeStackScreen} />
          //   <Drawer.Screen name="About" component={AboutStackScreen} />
          // </Drawer.Navigator> 
          <Stack.Navigator>
            <Stack.Screen name="Home" component={RenderComponents} />
            <Stack.Screen name="About" component={About} />
          </Stack.Navigator>
        ) : ( */}
          <Stack.Navigator>
        {/* <Drawer.Navigator initialRouteName="Login">
        <Drawer.Screen name="Home" component={HomeStackScreen} />
        <Drawer.Screen name="About" component={AboutStackScreen} />
      </Drawer.Navigator> */}
        
        <Stack.Screen name="Login" component={LoginScreen}
          options={{
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
                headerStyle: {
                  backgroundColor: '#546747'
                },
                headerTintColor: "#faab18",
                headerTitleStyle: {
                  fontWeight: "bold"
                },
                // headerLeft: () => (
                //   <Icon.Button
                //     name="bars"
                //     size={25}
                //     backgroundColor="#546747"
                //     onPress={() => Login()}>
                //   </Icon.Button>
                // ),
                headerRight: () => (
                  <TouchableOpacity onPress={() => setModalVisible(true)} >
                    <Text style={modal.open}>About</Text>
                    {/* <Image 
                    source={require('./assets/rubber-duck.png')} 
                    style={{ width: 50, height: 50 }} /> */}
                  </TouchableOpacity>
                  // <Icon.Button
                  //   name="bars"
                  //   size={25}
                  //   backgroundColor="#546747"
                  // // onPress={() => props.navigation.navigate('About')}
                  // >
                  // </Icon.Button>
                )
              }
            }
          />
           <Stack.Screen name="About" component={About} />
        
              
        {/* <Stack.Screen name="Home" component={RenderComponents}
          options = {
          {
            title: "Ride The Duck",
              headerRight: () => (
              // {backgroundColor = "#546747"}
              <Icon.Button name="bars" size={25} backgroundColor="#546747"
              onPress={() => navigation.openDrawer()}
              ></Icon.Button>
            )
          }} 
        /> */}
        {/* <Stack.Screen name="Home" component={RenderComponent}/> */}
        {/* <Stack.Screen name="Flights" component={FlightsList}/> */}
      </Stack.Navigator>
      {/* )} */}
      {/* <Drawer.Navigator initialRouteName="Login">
        <Drawer.Screen name="Home" component={HomeStackScreen} />
        <Drawer.Screen name="About" component={AboutStackScreen} />
      </Drawer.Navigator> */}
      </NavigationContainer>
      <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={() => {setModalVisible(!modalVisible)}} >
          <View style={modal.modalContainer}>
            <View style={modal.modalView}>
              <Button  title = 'Close' style={modal.closeModal} onPress={() => setModalVisible (!modalVisible)} />
              <View style={modal.flights} showsVerticalScrollIndicator={false}>
                <About/>
              </View>
            </View>
          </View>
        </Modal>
   </AuthContext.Provider>
   
  )
}
const modal = StyleSheet.create({
  title: {
    marginLeft: 10,
    fontSize: 30,
    fontWeight: "bold",
    color: "gray"
  },
  open: {
    fontSize: 17,
    color: "#faab18",
    fontWeight: "400",
    marginTop: 10,
    marginRight: 10,
  },
  modalContainer: {
    flex: 1,
    display: "flex",
    flexDirection:"column",
  },
  modalView: {
    flex:1,
    width: "100%",
    display: "flex",
    flexDirection:"column",
    backgroundColor: "white",
    borderRadius: 0,
    paddingTop:50,
    paddingHorizontal: 10,
    backgroundColor: "white",
  },
  closeModal: {
    marginTop:150,
    borderRadius: 20
  },
  flights: {
   paddingBottom:100
  },
  quack: {
    textAlign:"center",
    flex: 1,
    display:"flex",
    width: "100%",
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    marginTop: 20,
    marginBottom:40
  }
});
export default App;