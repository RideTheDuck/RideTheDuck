import React, { Component } from 'react';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import RenderComponents from "./components/renderComponents";
import Icon from 'react-native-vector-icons/FontAwesome';
import { registerRootComponent } from "expo";

const navigator = createStackNavigator(
  {
    RenderComponents: RenderComponents
  },
  {
    initialRouteName: "RenderComponents",
    defaultNavigationOptions: ({ navigation }) => {
      // title: "Ride the Duck 🦆",
      // icon: "icon",
      // headerTintColor: "#faab18",
      //   headerStyle: {
      //     backgroundColor: '#546747'
      //   },
      return {
        title: "Ride the Duck 🦆",
        headerRight: ( < Icon style = { { paddingRight: 10 } }
          onPress = { () => navigation.openDrawer() }
          name = "bars" size = { 30  }
          />
        ),
        headerTintColor: "#faab18",
        headerStyle: {
          backgroundColor: '#546747'
        },
      };
    }
  }
);

export default createAppContainer(navigator);