import React from 'react';
import {
    StyleSheet
} from "react-native"

const search = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 40,
        borderColor: 'gray',
        borderWidth: 2,
        paddingLeft: 10,
        borderRadius: 100,
        margin: 10,
        backgroundColor: "white",
        borderColor: "#faab18",
    },
    icon: {
        fontSize: 20,
        color: "#faab18",
        alignSelf: "center",
        marginRight: 10
    },
    input: {
        fontSize: 20,
        flex:1
    }
})
module.exports = search;