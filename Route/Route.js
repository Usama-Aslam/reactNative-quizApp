import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import CameraFace from '../Components/CameraFace/CameraFace'
import HomeScreen from '../Screens/HomeScreen/HomeScreen.js'
import QuizInfo from '../Screens/Quiz/QuizInfo'
import Quiz from '../Screens/Quiz/Quiz'

const AppNavigator = createStackNavigator({
    Cam: {
        screen: CameraFace
    },
    Home: {
        screen: HomeScreen
    },
    QuizInfo: {
        screen: QuizInfo
    },
    Quiz: {
        screen: Quiz
    }
}, {
        initialRouteName: 'Cam'
    }
)

export default createAppContainer(AppNavigator);