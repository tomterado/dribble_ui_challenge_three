import {TouchableOpacity, StyleSheet, Text, View, ScrollView} from "react-native";
import React, { useState, useEffect} from 'react'
import {categoryBubbles, recommendationData} from "../globals"


export default function SelectionFood({selectedBuy,setSelected, setSelectedBuy, selected, selectID, setSelectID }) {

    const [addedtoCart, setAddToCart] = useState(new Array(recommendationData.length).fill(false))
/*
    const [addCartButton, setAddCartButton] = useState()
*/

    useEffect(() => {
        // Update the document title using the browser API
        // console.log('UseEffect addCart', addedtoCart)
        // console.log('setSelectedBuy DATA', selectedBuy)
        // console.log('setSelectedBuy LEN', selectedBuy.length)
    },[selectedBuy, addedtoCart]);



    const buyButton = (data, indexSelected) => {
        return(
            <TouchableOpacity
                onPress={() => {
                    let temp2 = [...addedtoCart]

                    //Really inefficent - to revists.
                    // console.log('data', data)
                    let temp = [...selectedBuy]
                    if(selectedBuy && !selectedBuy.length){
                        temp.push(data)
                    } else {
                        let mappingCheck = selectedBuy.map(ele => ele.id)
                         if (mappingCheck.includes(indexSelected)) {
                             let test = temp.map((ele) =>  ele.id)
                             const index = temp.indexOf(test);
                             temp.splice(index, 1);
                         } else {
                             temp.push(data)
                         }
                    }

                    setSelectedBuy(temp)


                    temp2[indexSelected] = ! temp2[indexSelected]
                    setAddToCart(temp2)


                }}
                // style={buyStyles.buyButtonSelected :  buyStyles.buyButtonUnselected}>
                style={addedtoCart[indexSelected] ?  buyStyles.buyButtonSelected : buyStyles.buyButtonUnselected }>
                <Text style={addedtoCart[indexSelected] ? buyStyles.addCartFont : buyStyles.buyFont}>
                    {addedtoCart[indexSelected] ? "Added" : "Buy"}
                </Text>
            </TouchableOpacity>
        )
    }

    return(
        <View
            // horizontal={true}
            // showsVerticalScrollIndicator={false}
            style={buyStyles.buyContainer}
        >
            {
                recommendationData.map((ele, ind) => {
                    return(
                        <View key={ind.toString()} style={[buyStyles.buyBubble, {backgroundColor: ele.color}]}>
                            <Text style={buyStyles.emojiText}>{ele.emoji}</Text>
                            <Text style={buyStyles.categoryText}>{ele.price}</Text>
                            <Text style={buyStyles.categoryText}>{ele.type}</Text>
                            {buyButton(ele, ind)}
                        </View>
                    )
                })
            }
        </View>
    )
}

const buyStyles = StyleSheet.create({
    buyContainer : {
        // marginVertical: 32,
        // height: '100%',
        display: 'flex',
        // backgroundColor:"#000000",
        borderRadius: 16,
        borderColor: 'red',
        // borderWidth: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        // margin: '6%',
        // padding: 8,
        justifyContent: 'center'
    },
    buyBubble : {
        // marginHorizontal: 8,
        marginRight:16,
        marginBottom: 16,
        height: 200,
        width: 140,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#FFFFFF',
        borderRadius: 16,
        // shadowColor: "#000000",
        // shadowOffset: {
        //     width: 0,
        //     height: 4,
        // },
        // shadowOpacity: 0.10,
        // shadowRadius: 9.46,
        //
        // elevation: 9,
    },
    profileIcon : {
        width: 56,
        height: 56,
    },

    buyFont : {
        color: '#000000'
    },
    addCartFont : {
       color: '#FFFFFF'
    },
    buyButtonUnselected: {
        marginTop: 16,
        height: 35,
        backgroundColor: 'transparent',
        width: 60,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center'
    },

    buyButtonSelected: {
        color: '#FFFFFF',
        marginTop: 16,
        height: 35,
        backgroundColor: '#000000',
        width: 60,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center'
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

