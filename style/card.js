import React from 'react';
import { StyleSheet } from "react-native"

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
        backgroundColor: "white",
        padding: 10,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        display: "flex",
        flex: 1,
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        position: "relative",
    },
    ratingBox: {
        display: "flex",
        alignSelf: "flex-end",
        fontWeight: "bold",
        position: "relative",
        top: -20,
        borderRadius: 10,
        borderColor: '#faab18',
        borderWidth: 3,
        width: "auto",
        backgroundColor: "#faab18",
        marginEnd: 15
    },
    rating: {
        color: "#546747",
        fontWeight: "bold",
        width: "auto",
        fontSize: 15,
        marginHorizontal: 10,
        marginVertical: 5,
    },
    info: {
        position: "relative",
        top: -28,
        flex: 1
    },
    name: {
        fontSize: 25,
        fontWeight: "bold",
    },
    text: {
        marginTop: 5,
        fontSize: 16,
        fontWeight: "400",
    },
    link: {
        marginTop: 5,
        fontSize: 14,
        fontWeight: "normal",
        color: "#546747"
    },
    moreInfo: {
        position: "relative",
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        justifyContent: "space-between"
    },
    icon: {
        fontSize: 15,
        color: "#546747"
    },
    infoButton: {
        position: "relative",
        top: -10,
        width: "100%",
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        borderWidth: 2,
        borderColor: "#faab18",
        backgroundColor: "white",
    },
    infoTextButton: {
        fontSize: 15,
        color: "#546747",
        fontWeight: "bold"
    },
    directionButton: {
        flex: 2,
        width: "100%",
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        backgroundColor: "#faab18",
    },
    direction: {
        fontSize: 15,
        color: "#546747",
        fontWeight: "bold"
    },
    phoneButton: {
        display: "flex",
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        backgroundColor: "#faab18",
        marginLeft: 10
    },
    phoneIcon: {
        fontSize: 25,
        color: "#546747"
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
module.exports = styles;