import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';

import { NavigationActions, StackActions } from 'react-navigation'

import RadioBtn from '../../Components/RadioBtn/RadioBtn'


class Quiz extends React.Component {
    constructor() {
        super()
        this.state = {
            question: null
        }
    }


    render() {
        const { question } = this.props.navigation.state.params
        // console.log("QuizConfirm Props Question==> ", question[0])
        console.log('heeloiiii')
        return (
            <View>
                <View>
                    <Text>hi</Text>
                    <View>
                        <RadioBtn />
                    </View>
                </View>
                <Button

                    title="Start"
                    color="#000000"
                    accessibilityLabel="Click To Start The Quiz"
                />
            </View >
        );
    }
}

export default Quiz 