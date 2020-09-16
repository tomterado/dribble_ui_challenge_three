import {Image, StyleSheet, Text, View, ScrollView} from "react-native";
import React from "react";
import {categoryBubbles, exploreAvailabilitiesData} from "../globals"


export default function CategoriesRow() {
    return(
        <ScrollView
            decelerationRate={0}
            snapToInterval={1000} //your element width
            snapToAlignment={"center"}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={rowStyles.categoriesContainer}>
            {
                exploreAvailabilitiesData.map((ele, ind) => {
                    return(
                        <View key={ind.toString()} style={[rowStyles.categoryBubble]}>
                            <Text style={rowStyles.emojiText}>{ele.emoji}</Text>
                            <Text style={rowStyles.categoryText}>{ele.type}</Text>
                        </View>
                    )
                })
            }
        </ScrollView>
    )
}

const rowStyles = StyleSheet.create({
    categoriesContainer : {
        marginVertical: 8,
        height: 120,
        // display: 'flex',
        // width: '100%',
        borderRadius: 16,
        borderColor: 'red',
        // borderWidth: 1,
        flexDirection: 'row',
        // alignItems: 'center',
        // margin: '6%',
        // padding: 8,
        // justifyContent: 'space-between'
    },
    categoryBubble : {
        marginHorizontal: 8,
        height: 100,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.10,
        shadowRadius: 9.46,

        elevation: 9,

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
    emojiText: {
        fontSize: 48,
        marginBottom: 8,
        fontWeight: "600",
    },

    categoryText: {
        fontSize: 14,
        fontWeight: "600",
    },

})

