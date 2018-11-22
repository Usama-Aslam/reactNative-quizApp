import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationActions, StackActions } from 'react-navigation'

class Quiz extends React.Component {
    constructor() {
        super()
        this.state = {
            question: null
        }
    }


    render() {
        const { question } = this.props
        console.log("QuizConfirm Props Question==> ", this.props)

        return (
            <View>
                <View>

                </View>
                <Button

                    title="Start"
                    color="#000000"
                    accessibilityLabel="Click To Start The Quiz"
                />
            </View>
        );
    }
}

export default Quiz