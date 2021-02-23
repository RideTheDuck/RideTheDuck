import React from 'react';
import { View, StyleSheet, Image, Text } from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome';
const About = ({navigation}) => {
  return (
    <View style={about.container}>
      <Text style={about.title}>Ride The Duck</Text>
      <Image style={about.duck} source={require('./img/rubber-duck.png')} />
        <Text style={about.version}>Version: 1.0.0</Text>
      <Text style={about.dev}>Developed at Makers by:</Text>
      <View style={about.authors}>
        <View style={about.badge}>
          <Text style={about.badgeText}>
            <Icon name="github" style={about.icon}/> Ara
          </Text>
        </View>
        <View style={about.badge}>
          <Text style={about.badgeText}>
            <Icon name="github" style={about.icon}/> Javi
          </Text>
        </View>
        <View style={about.badge}>
          <Text style={about.badgeText}>
            <Icon name="github" style={about.icon}/> Luke
          </Text>
        </View>
        <View style={about.badge}>
          <Text style={about.badgeText}>
            <Icon name="github" style={about.icon}/> Ben
          </Text>
        </View>
      </View>
      <Text style={about.version}><Icon name="envelope" style={about.icon}/> ridetheduck2021@gmail.com</Text>
      <Text style={about.version}> Copyright <Icon name="copyright" style={about.icon}/>  2021</Text>
    </View> 
  )
};

const about = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column"
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
    marginVertical:20,
    fontWeight: "bold",
    color: "#546747",
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
  },
  duck: {
    height:200,
    width: 200,
    alignSelf: "center",
  },
  version: {
    fontSize: 18,
    marginVertical:10,
    fontWeight: "400",
    alignSelf: "center",
  },
  dev: {
    margin:10,
    fontSize: 20,
    alignSelf: "center",
    color: "#546747",
    fontWeight: "bold"
  },
  authors: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10
  },
  badge: {
    borderRadius: 10,
      borderColor: '#faab18',
      borderWidth: 3,
      backgroundColor: "#faab18",
      fontSize: 10,
  },
  badgeText: {
    color: "#546747",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    marginHorizontal: 15,
    marginVertical: 5,
  },
  icon: {
    fontSize: 20,
  }
  // badge: {
  //   borderRadius: 10,
  //   borderColor: '#faab18',
  //   borderWidth: 3,
  //   backgroundColor: "#faab18",
  //   fontSize: 10,
  // },
  // badgeText: {
  //   color: "red",
  //   fontWeight: "bold",
  //   textAlign: "center",
  //   width: "auto",
  //   fontSize: 10,
  //   marginHorizontal: 10,
  //   marginVertical: 5,
  //   flex: 1
  // },
  // icon: {
  //   fontSize: 15,
  //   color: "#546747"
  // },
})

export default About;