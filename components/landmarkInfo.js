import React from 'react';
import { View, Text, Image, StyleSheet, Linking, Button,TouchableOpacity } from "react-native"
import { Feather } from "@expo/vector-icons";
import Icon from 'react-native-vector-icons/FontAwesome';

const LandmarkInfo = ({ result }) => {
  let call = () => {
    let phoneNumber = result.phone
    if (Platform.OS !== "android") {
      phoneNumber = `telprompt:${phoneNumber}`;
      console.log("Calling in iphone")
    } else {
      phoneNumber = `tel:${phoneNumber}`;
      console.log("Calling in android")
    }
    Linking.canOpenURL(phoneNumber)
  };
  // let direction = () => {
  //   if (result.alias) {
  //    <TouchableOpacity style={styles.directionButton} onPress={() => Linking.openURL(`https://www.yelp.com/map/${result.alias}`)}>
  //       <Text style={styles.direction}>Directions</Text>
  //     </TouchableOpacity>
  //   } else {
  //     phoneNumber = `tel:${phoneNumber}`;
  //     console.log("Calling in android")
  //   }
  //   Linking.canOpenURL(phoneNumber)
  // };
  return (
    <View style={styles.card}>
      <View style={styles.imageBox}>
        <Image style={styles.image} source={{ uri: result.image_url }} />
      </View>
      <View style={styles.ratingBox}>
        <Text style={styles.rating}>
          <Icon name="star" style={styles.icon} /> {result.rating}
        </Text>
      </View>
      <View style={styles.cardInfo}>
        <View style={styles.info}>
          <Text style={styles.name}>{result.name}</Text>
          <Text style={styles.text}>{result.review_count} reviews</Text>
          <Text style={styles.text}>{result.is_close ? "Close" : "Open"}</Text>
          <Text style={styles.link} onPress={() => Linking.openURL(`${result.url}`)}>More Info...</Text>
        </View>
        <View style={styles.moreInfo}>
          <TouchableOpacity style={styles.directionButton} onPress={() => Linking.openURL(`https://www.yelp.com/map/${result.alias}`)}>
            <Text style={styles.direction}>Directions</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.phoneButton} onPress={() => call()}>
            <Icon name="phone" style={styles.phoneIcon}/>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )

};

const styles = StyleSheet.create({
  card: {
    margin: 10,
    borderRadius: 10,
    borderColor: '#faab18',
    borderWidth: 2,
    shadowOffset: {
       width: 0,
       height: 3
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    width: 250,
    flex: 1,
    backgroundColor: "white",
  },
  cardInfo: {
    backgroundColor:"white",
    padding: 10,
    borderBottomRightRadius:10,
    borderBottomLeftRadius: 10,
    display: "flex",
    flex: 1,
    display:"flex",
    flexDirection:"column",
    flexWrap: "wrap",
    position: "relative",
  },
  ratingBox: {
    display: "flex",
    alignSelf: "flex-end",
    color: "#faab18",
    fontWeight: "bold",
    position: "relative",
    top: -20,
    borderRadius: 10,
    borderColor: '#faab18',
    borderWidth: 3,
    width: "auto",
    backgroundColor: "#faab18",
    marginEnd:15
  },
  rating: {
    color: "white",
    fontWeight: "bold",
    width: "auto",
    fontSize: 15,
    marginHorizontal: 10,
    marginVertical: 5,
   
  },
  info: {
    position: "relative",
    top: -28,
    flex:1
  },
  name: {
    fontSize: 25,
    fontWeight: "bold",
  },
  text: {
    marginTop:5,
    fontSize: 16,
    fontWeight: "bold",
  },
  link: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: "normal",
    color:"blue"
  },
  moreInfo: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent:"space-between"
  },
  icon: {
    fontSize: 15,
    color:"white"
  },
  directionButton: {
    flex:2,
    width: "100%",
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    
    backgroundColor: "#faab18",
  },
  direction: {
    fontSize: 15,
    color: "white",
    fontWeight: "bold"
  },
  phoneButton: {
    display: "flex",
    width:40,
    height:40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    backgroundColor: "#faab18",
    marginLeft:10
  },
  phoneIcon: {
    fontSize: 25,
    color: "white"
  },
  imageBox: {
    borderBottomWidth: 6,
    borderColor: '#faab18',
    width: "auto",
    height: 120,
    
  },
  image: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    width: "auto",
    height: "100%",
  }
})

export default LandmarkInfo;