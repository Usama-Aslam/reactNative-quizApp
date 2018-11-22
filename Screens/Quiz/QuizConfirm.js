import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationActions, StackActions } from 'react-navigation'

class QuizConfirm extends React.Component {
    constructor() {
        super()
        this.state = {
            question: null
        }
    }

    componentDidMount() {
        this.getData()
    }

    getData = () => {
        const { category, difficulty } = this.props.navigation.state.params.API_props
       
        fetch(`https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`)
            .then((response) => response.json())
            .then((res) => this.setState({
                question: res.results
            }))
    }

    handleButtonPress = () => {
        const { question } = this.state
        console.log("handel", question)

        this.props.navigation.dispatch(
            StackActions.replace({
                routeName: 'Quiz',
                params: {
                    question
                }
            })
        )
    }

    render() {
        const { question } = this.state

        console.log("API_RESPONSE Question==>", question)
        console.log("QUiz prps", this.props.navigation.state.params.API_props)

        return (
            <View>
                <Text>Timer Detail: Click to Start the Quiz</Text>
                <Button
                    onPress={this.handleButtonPress}
                    title="Start"
                    color="#000000"
                    accessibilityLabel="Click To Start The Quiz"
                />
            </View>
        );
    }
}

export default QuizConfirm