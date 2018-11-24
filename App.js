import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';


import CameraFace from './Components/CameraFace/CameraFace'

import AppNavigator from './Navigation/AppNavigation';

export default class App extends React.Component {
  constructor() {
    super()

  }

  render() {
    return (
      <AppNavigator />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
