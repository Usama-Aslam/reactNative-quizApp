import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import CameraFace from '../Components/CameraFace/CameraFace'
import HomeScreen from '../Screens/HomeScreen/HomeScreen'
import QuizInfoScreen from '../Screens/Quiz/QuizInfo'
import QuizConfirmScreen from '../Screens/Quiz/QuizConfirm'
import QuizScreen from '../Screens/Quiz/Quiz'
import QuizResultScreen from '../Screens/Quiz/QuizResultScreen'

const AppNavigator = createStackNavigator({
    Cam: {
        screen: CameraFace
    },
    Home: {
        screen: HomeScreen,
        navigationOptions: () => ({
            title: 'BlockIQ',
            headerStyle: {
                backgroundColor: '#2196f3',
            },
            headerTintColor: '#fff',
            headerBackTitle: null
        }),
    },
    QuizInfo: {
        screen: QuizInfoScreen
    },
    QuizConfirm: {
        screen: QuizConfirmScreen
    },
    Quiz: {
        screen: QuizScreen
    },
    QuizResult: {
        screen: QuizResultScreen
    }
}, {
        headerMode: 'float',
        headerLayoutPreset: 'center',
        initialRouteName: 'Home'
    }
)

export default createAppContainer(AppNavigator);