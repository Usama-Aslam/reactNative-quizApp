import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import CameraFace from '../Components/CameraFace/CameraFace'
import HomeScreen from '../Screens/HomeScreen/HomeScreen'
import QuizInfo from '../Screens/Quiz/QuizInfo'
import QuizConfirm from '../Screens/Quiz/QuizConfirm'
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
    QuizConfirm: {
        screen: QuizConfirm
    },
    Quiz: {
        screen: Quiz
    }
}, {
        headerMode: 'none',
        initialRouteName: 'Home'
    }
)

export default createAppContainer(AppNavigator);