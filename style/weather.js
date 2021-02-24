import React from 'react';
import { StyleSheet } from "react-native"

const weather = StyleSheet.create({
    container: {
        backgroundColor: "white",
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        flexWrap: "wrap",
        alignContent: "center",
        padding:10
    },
    image: {
        width: "100%",
        alignItems: "center",
    },
    info: {
        width: "100%"
    },
    state: {
       fontSize: 20,
        alignSelf: "center",
        color: "#546747",
        fontWeight: "bold"
    },
    degrees: {
        fontSize: 30,
        alignSelf: "center",
        color: "#546747",
        fontWeight: "bold"
    },
    condition: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        margin:10
    },
    text: {
        fontSize: 12,
        fontWeight: "400",
        alignSelf: "center",
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
    advisoryExt: {
        marginTop: 10,
        backgroundColor: "#f2dede",
        padding: 5,
        borderBottomRightRadius: 10,
        borderColor: "#ebccd1",
        borderWidth: 2,
        borderTopWidth:4,
    },
    extRisk: {
        color: "#a94442",
        fontWeight: "600",
        fontSize: 14,
    },
    advisoryHigh: {
        marginTop: 10,
        backgroundColor: "#fcf8e3",
        padding: 5,
        borderBottomRightRadius: 10,
        borderColor: "#faebcc",
        borderWidth: 2,
        borderTopWidth: 4,
    },
    highRisk: {
        color: "#8a6d3b",
        fontWeight: "600",
        fontSize: 14,
    },
    advisoryMed: {
        marginTop: 10,
        backgroundColor: "#d9edf7",
        padding: 5,
        borderBottomRightRadius: 10,
        borderColor: "#bce8f1",
        borderWidth: 2,
        borderTopWidth: 4,
    },
    medRisk: {
        color: "#31708f",
        fontWeight: "600",
        fontSize: 14,
    },
    advisoryLow: {
        marginTop: 10,
        backgroundColor: "#dff0d8",
        padding: 5,
        borderBottomRightRadius: 10,
        borderColor: "#d6e9c6",
        borderWidth: 2,
        borderTopWidth: 4,
    },
    lowRisk: {
        color: "#3c763d",
        fontWeight: "600",
        fontSize: 14,
    },
})
module.exports = weather;