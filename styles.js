import React from 'react'
import styled from 'styled-components/native'
import {StyleSheet} from "react-native";

const StyledView = styled.View`
  background-color: papayawhip;
`

const StyledText = styled.Text`
  color: palevioletred;
`

//Header + nav
const HeaderContainer = styled.View`
    border: 1px solid green;
`



//Hungry Text
// Secondary Title Text

//Search bar

// Body Heading

//Category Buttons

// FoodItems

//RecommendationContainer


const DivFlex = styled.View`
    display: flex;
    flex: 1;
`

const BackgroundContainer = styled.View`
    padding: 16px;
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: #FFFFFF;
`


export {
    BackgroundContainer,
    StyledView,
    StyledText,
    DivFlex,
    HeaderContainer
}
