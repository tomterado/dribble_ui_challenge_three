import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect} from 'react'
import {TouchableOpacity, ScrollView, Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {
    StyledView,
    StyledText, BackgroundContainer,
} from "../styles"
import SearchBar from "../components/SearchBar";
import CategoriesRow from "../components/CategoriesRow";
import SelectionFood from "../components/SelectionFood";
import FloatingMenu from "../components/FloatingMenu";

// Steps / Method:
// 1. Init Project
// 2. Install styled components  + react navigation
// 3. Build first page.skeleton
// 4. Globals with dummy data
// 5. Figure out the interaction between Screen 1 and Screen 2
// 6. Styles.

export default function ScreenTwo({navigation}) {
    const [selectedBuy, setSelectedBuy] = useState([])
    const [selected, setSelected] = useState(false)
    const [selectID, setSelectedID] = useState([])


    const navigationContent = (
        <View style={styles.headerContainer}>
            <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{flex: 2, justifyContent: 'flex-start'}}>
                <Image source={require("../assets/arrow.png")} style={styles.menuIcon}/>
            </TouchableOpacity>

            <View style={{flex: 8, justifyContent: 'flex-start'}}>
                <Text style={styles.homeText}>Explore</Text>
            </View>

            <View style={{flex: 2, justifyContent: 'flex-start'}}>
                <Image source={require("../assets/profile_pi.png")} style={styles.profileIcon}/>
            </View>

        </View>
    )



    return (
        <BackgroundContainer>
            <SafeAreaView>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {navigationContent}
                    <SearchBar/>
                    <CategoriesRow/>
                    <SelectionFood
                        selectedBuy={selectedBuy}
                        setSelectedBuy={setSelectedBuy}
                        selected={selected}
                        setSelected={setSelected}
                        setSelectedID={setSelectedID}
                        selectID={selectID}
                    />
                </ScrollView>
            </SafeAreaView>

            <FloatingMenu secondPage={true} selectedBuy={selectedBuy}/>
        </BackgroundContainer>
    );
}


const styles = StyleSheet.create({
    headerContainer: {
        height: 50,
        width: '100%',
        // flex: 1,
        display: 'flex',
        // borderColor: 'red',
        // borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    menuIcon : {
        width: 16,
        height: 16,
    },
    profileIcon : {
        width: 56,
        height: 56,
    },
    homeText: {
        fontSize: 24,
        fontWeight: "600",
    },



})
