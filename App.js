import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
    StyledView,
    StyledText, BackgroundContainer,
} from "./styles"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "./screens/HomeScreen";
import ScreenTwo from "./screens/ScreenTwo";


// Steps / Method:
// 1. Init Project (DONE)
// 2. Install styled components  + react navigation + react feathers (DONE)
// 3. Build first page.skeleton
// 4. Globals with dummy data
// 5. Figure out the interaction between Screen 1 and Screen 2
// 6. Styles.

const Stack = createStackNavigator();


function App() {
    // console.log('categoryBubbles', categoryBubbles)
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Explore" component={ScreenTwo} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
