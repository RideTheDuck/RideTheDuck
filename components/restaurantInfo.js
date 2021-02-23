import React from 'react';
import { View, Text, Image,TouchableOpacity, Linking } from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome';
import Communications from 'react-native-communications';
const styles = require('../style/card');

const RestaurantInfo = ({ result }) => {
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
          <Text style={styles.link} ></Text>
        </View>
        <View style={styles.moreInfo}>
          <View style={{display:"flex", flexDirection:"row"}}>
            <TouchableOpacity style={styles.infoButton} onPress={() => Linking.openURL(`https://m.yelp.co.uk/biz/${result.alias}`)}>
              <Text style={styles.infoTextButton}>More Info...</Text>
              </TouchableOpacity>
          </View>
          <View style={{ display: "flex", flexDirection: "row", flex:1 }}>
            <TouchableOpacity style={styles.directionButton} onPress={() => Linking.openURL(`https://m.yelp.co.uk/biz/${result.alias}#directions`)}>
              <Text style={styles.direction}>Directions</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.phoneButton} onPress={ () => Communications.phonecall(result.phone, true)}>
              <Icon name="phone" style={styles.phoneIcon}/>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )

};

export default RestaurantInfo;