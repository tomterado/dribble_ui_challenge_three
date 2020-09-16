import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React from "react";


export default function FloatingMenu({navigation, secondPage, selectedBuy}) {



    return(
        <TouchableOpacity
            onPress={() => !secondPage ? navigation.navigate("Explore") : null}
            style={{height: 70, width: 100,
                backgroundColor: 'rgba(197,197,197,0.2)',
                position: 'absolute',
                justifyContent: 'center',
                alignItems: 'center',
                bottom: 0,
                left: secondPage ? 130: 115,
                zIndex: 10,
                borderTopLeftRadius: 24,
                borderTopRightRadius: 24,
            }}>
            {
                selectedBuy && selectedBuy.length ?
                    <View
                        style={{height: 20,
                            zIndex: 99,
                            justifyContent: 'center',
                            // alignItems: 'center',
                            width: 20,
                            position: 'absolute',
                            top: 0,
                            left:60,
                            backgroundColor: 'red',
                            borderRadius: 10}}>
                        <Text style={{color: '#FFFFFF', marginLeft: 3, fontSize: 12,}}> {selectedBuy.length}</Text>
                    </View> : null
            }

            { selectedBuy && selectedBuy.length ?
                <Image source={require("../assets/cart_Black.png")}
                       style={{width: 52, height: 43}}
                /> :
                <Image source={require("../assets/bubbleButton.png")}
                       style={{width: 52, height: 43}}
                />

            }


        </TouchableOpacity>
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
        marginVertical: 8,
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
