import {Image, StyleSheet, Text, View} from "react-native";
import React from "react";


export default function SearchBar() {
    return(
        <View style={searchStyles.searchContainer}>
            <Text style={searchStyles.searchText}>Search</Text>
            <Image source={require("../assets/search_icon.png")} style={searchStyles.searchIcon}/>
        </View>
    )
}

const searchStyles = StyleSheet.create({
    searchContainer : {
        backgroundColor: '#FBFDFF',
        height: 50,
        display: 'flex',
        // width: '100%',
        borderRadius: 16,
        // borderColor: 'red',
        // borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        // margin: '6%',
        marginVertical: 16,
        padding: 8,
        justifyContent: 'space-between'
    },
    menuIcon : {
        width: 18,
        height: 21,
    },
    profileIcon : {
        width: 56,
        height: 56,
    },
    homeText: {
        fontSize: 24,
        fontWeight: "600",
    },
    searchIcon : {
        width: 24,
        height: 24
    },
    searchText: {
        fontSize: 14,
        fontWeight: "800",
    },


})
