import React from 'react';
import { StyleSheet } from "react-native"

const city = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        marginHorizontal: 10,
    },
    title: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10
    },
    capital: {
        fontSize: 30,
        fontWeight: "bold",
        marginLeft: 10,
        color: "#546747"

    },
    nativeName: {
        fontSize: 20,
        fontWeight: "400",
        color: "gray",
        marginBottom: 2,
        marginLeft: 10,
        alignSelf: "flex-end"
    },
    highlights: {
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
        fontSize: 15,
    
    },
    badgeText: {
        color: "#546747",
        fontWeight: "bold",
        textAlign:"center",
        width:"auto",
        fontSize: 15,
        marginHorizontal: 10,
        marginVertical: 5,
        flex:1
    },
    icon: {
        fontSize: 15,
        color: "#546747"
    },
    box: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10
    },
    map: {
        flex: 1,
        width: 100,
        height: 150
    },
    weather: {
        flex: 1,
    }


});
module.exports = city;