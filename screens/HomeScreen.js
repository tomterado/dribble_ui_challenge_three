import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
    StyleSheet,
    Text,
    SafeAreaView,
    View,
    ScrollView,
    TouchableOpacity,
    Image } from 'react-native';
import {
    StyledView,
    StyledText,
    BackgroundContainer,
    HeaderContainer
} from "../styles"
import { Camera } from 'react-feather';
import {
    categoryBubbles,
    availableFoodData,
    recommendationData
} from "../globals"
import { LinearGradient } from 'expo-linear-gradient';
import SearchBar from "../components/SearchBar";
import FloatingMenu from "../components/FloatingMenu";


// Steps / Method:
// 1. Init Project
// 2. Install styled components  + react navigation
// 3. Build first page.skeleton
// 4. Globals with dummy data
// 5. Figure out the interaction between Screen 1 and Screen 2
// 6. Styles.

function HomeScreen({ navigation }) {

    const navigationContent = (
        <View style={styles.headerContainer}>
            <View style={{flex: 2, justifyContent: 'flex-start'}}>
                <Image source={require("../assets/menu_bar.png")} style={styles.menuIcon}/>
            </View>

            <View style={{flex: 8, justifyContent: 'flex-start'}}>
                <Text style={styles.homeText}>Explore</Text>
            </View>

            <View style={{flex: 2, justifyContent: 'flex-start'}}>
                <Image source={require("../assets/profile_pi.png")} style={styles.profileIcon}/>
            </View>

        </View>
    )

    const hungryContent = (
        <View style={{marginVertical: 24}}>
            <Text style={styles.hungryText}>Hungry?</Text>
            <Text style={styles.orderNowText}>Order & Eat</Text>
        </View>
    )



    const categoriesRow = (
        <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.categoriesContainer}>
            <Text style={styles.bodyHeadingText}>Available</Text>
            {
                categoryBubbles.map((ele, ind) => {
                    return(
                        <View key={ind.toString()} style={[styles.categoryBubble, {backgroundColor: ele.color}]}>
                            <Text style={styles.categoryText}>{ele.type}</Text>
                        </View>
                    )
                })
            }
        </ScrollView>
    )

    const foodSelection = (
        <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal={true}>
            {
                availableFoodData.map((ele, ind) => {
                    return(
                        <View key={ind.toString()} style={[styles.availableFoodContainer, {backgroundColor: ele.color}]}>
                            <LinearGradient
                                colors={[ele.color, 'rgba(255,255,255,0.5)']}
                                style={[styles.linearGradientSmall, {height: '80%'}]}>
                                <Text style={{fontSize: 72, marginBottom: 8}}>{ele.emoji}</Text>
                                <Text style={styles.searchText}>{ele.type}</Text>
                                <Text style={styles.startingText}>{ele.description}</Text>
                                <Text style={styles.priceText}>{ele.price}</Text>
                            </LinearGradient>
                        </View>
                    )
                })
            }
        </ScrollView>
    )

    const recommendSectionTitle = (
        <View style={{marginHorizontal: '0%', marginTop: 16}}>
            <Text style={styles.bodyHeadingText}>We recommend</Text>
        </View>

    )

    const recommendSectionContent = (
        <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            contentContainerStyle={{marginVertical: 16}}>
            {recommendationData.map((ele,ind) => {
                return(
                    <View key={ind.toString()} style={[styles.recommendContainer, {backgroundColor: ele.color}]}>
                        <LinearGradient
                            colors={[ele.color, 'rgba(255,255,255,0.5)']}
                            style={styles.linearGradientSmall}>
                            <Text style={{fontSize: 48, marginBottom: 8}}>{ele.emoji}</Text>
                            <Text style={styles.searchText}>{ele.type}</Text>
                            <Text style={styles.startingText2}>{ele.description}</Text>
                            <Text style={styles.priceText2}>{ele.price}</Text>
                        </LinearGradient>

                    </View>
                )
            })}
        </ScrollView>
    )



    return (
        <BackgroundContainer>
            <SafeAreaView>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {navigationContent}
                    {hungryContent}
                    <SearchBar/>
                    {categoriesRow}
                    {foodSelection}
                    {recommendSectionTitle}
                    {recommendSectionContent}
                </ScrollView>
                <FloatingMenu navigation={navigation}/>

            </SafeAreaView>
        </BackgroundContainer>
    );
}

export default HomeScreen;


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
    bigBlue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
    },
    homeText: {
        fontSize: 24,
        fontWeight: "600",
    },
    hungryText: {
        fontSize: 36,
        fontWeight: "600",
    },
    orderNowText: {
        fontSize: 36,
        fontWeight: "300",
    },
    searchText: {
        fontSize: 14,
        fontWeight: "800",
    },
    startingText: {
        marginVertical: 4,
        fontSize: 18,
        fontWeight: "300",
    },

    startingText2: {
        marginVertical: 4,
        fontSize: 12,
        textAlign: 'center',
        fontWeight: "300",
    },
    priceText: {
        marginVertical: 4,
        fontSize: 24,
        fontWeight: "800",
    },
    priceText2: {
        marginVertical: 4,
        fontSize: 12,
        fontWeight: "800",
    },
    categoryText: {
        fontSize: 14,
        fontWeight: "600",
    },
    bodyHeadingText: {
        fontSize: 18,
        fontWeight: "600",
        marginRight: 16,
    },

    row2 : {
        display: 'flex',
        flexDirection: 'row',
    },
    categoriesContainer : {
        marginVertical: 16,
        height: 50,
        display: 'flex',
        // width: '100%',
        borderRadius: 16,
        // borderColor: 'red',
        // borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        // margin: '6%',
        padding: 8,
        justifyContent: 'space-between'
    },
    categoryBubble : {
        marginHorizontal: 8,
        height: 30,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'red',
        borderRadius: 16
    },
    availableFoodContainer : {
        height: 250,
        width: 200,
        borderRadius: 16,
        flexDirection: 'column',
        marginRight: 16,
        alignItems: 'center',
        justifyContent: 'flex-end',

    },
    recommendContainer : {
        height: 150,
        width: 100,
        flexDirection: 'column',
        // width: '100%',
        borderRadius: 16,
        // borderColor: 'red',
        // borderWidth: 1,
        marginRight: 16,
        // flexDirection: 'row',
        alignItems: 'center',
        // margin: '6%',
        // padding: 8,
        justifyContent: 'flex-end',
    },
    searchIcon : {
        width: 24,
        height: 24
    },
    menuIcon : {
        width: 18,
        height: 21,
    },
    profileIcon : {
        width: 56,
        height: 56,
    },

    linearGradientSmall :{
        // borderWidth: 1,
        // borderColor: 'red',
        // height: '80%',
        // backgroundColor: '#FFFFFF',
        width: '70%',
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
        justifyContent: 'center',
        alignItems: 'center'
    }

});
