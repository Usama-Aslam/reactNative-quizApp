import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import CameraFace from '../Components/CameraFace/CameraFace'
import HomeScreen from '../Screens/HomeScreen/HomeScreen'
import QuizInfoScreen from '../Screens/Quiz/QuizInfo'
import QuizConfirmScreen from '../Screens/Quiz/QuizConfirm'
import QuizScreen from '../Screens/Quiz/Quiz'
import QuizResultScreen from '../Screens/Quiz/QuizResult'

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
        screen: QuizInfoScreen,
        navigationOptions: () => ({
            title: 'Select Quiz',
            headerStyle: {
                backgroundColor: '#2196f3',
            },
            headerTintColor: '#fff',
            headerBackTitle: null
        }),
    },
    QuizConfirm: {
        screen: QuizConfirmScreen,
        navigationOptions: () => ({
            title: 'Confirm',
            headerStyle: {
                backgroundColor: '#2196f3',
            },
            headerTintColor: '#fff',
            headerBackTitle: null
        }),
    },
    Quiz: {
        screen: QuizScreen
    },
    QuizResult: {
        screen: QuizResultScreen
    }
}, {
        headerMode: 'float',
        headerLayoutPreset: 'left',
        initialRouteName: 'Cam'
    }
)

export default createAppContainer(AppNavigator);