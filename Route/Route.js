import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import CameraFace from '../Components/CameraFace/CameraFace'
import HomeScreen from '../Screens/HomeScreen/HomeScreen.js'

const AppNavigator = createStackNavigator({
    Cam: {
        screen: CameraFace
    },
    Home: {
        screen: HomeScreen
    }
}, {
        initialRouteName: 'Cam'
    }
)

export default createAppContainer(AppNavigator);