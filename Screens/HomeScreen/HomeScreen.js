import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationActions, StackActions } from 'react-navigation'

export default class HomeScreen extends React.Component {
    constructor() {
        super()

    }

    handleButtonPress = () => {
        this.props.navigation.dispatch(
            StackActions.push({
                actions: [NavigationActions.navigate({ routeName: 'QuizInfo' })],
            })
        )
    }

    render() {
        return (
            <View className={styles.container}>
                <View className={styles.heading}>
                    <Text>Welcome Mouzzam</Text>
                </View>
                <View className={styles.ButtonDiv}>
                    <Button
                        onPress={this.handleButtonPress}
                        title="Get Started"
                        color="#000000"
                        accessibilityLabel="Click To Start The Quiz"
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    heading: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    Button: {
    }
});
