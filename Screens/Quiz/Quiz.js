import React from 'react';
import { StyleSheet, View, Button as ReactButton, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';

import { Container, Header, Content, ListItem, Text, Radio, Right, Left, Button } from 'native-base';

import { NavigationActions, StackActions } from 'react-navigation'

import RadioBtn from '../../Components/RadioBtn/RadioBtn'


class Quiz extends React.Component {
    constructor(props) {
        super(props)
        const { question } = this.props.navigation.state.params
        this.state = {
            Question: question[0].question,
            opt1: question[0].incorrect_answers[0],
            opt2: question[0].incorrect_answers[1],
            opt3: question[0].incorrect_answers[2],
            opt4: question[0].correct_answer,

            answer: null,
            load: 0,
            correct: 0,
            checked: false,
            btnState: true,
            score: 0

        }
    }

    shuffle(array) {

        let currentIndex = array.length;
        let temporaryValue, randomIndex;

        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;

    };

    updateStatus = (e, value) => {
        let { checked, answer, btnState } = this.state;
        answer = value;
        btnState = false
        switch (e) {
            case 1: {
                checked = 1
                break;
            }
            case 2: {
                checked = 2
                break;
            }
            case 3: {
                checked = 3
                break;
            }
            case 4: {
                checked = 4
                break;
            }
            default: {
                console.log("please select one")
            }
        }

        this.setState({
            checked,
            btnState,
            answer
        })

    }

    handleNextButton = () => {
        const { question } = this.props.navigation.state.params;
        let { answer, correct, load, checked, score } = this.state

        if (question[load].correct_answer.match(answer)) {
            console.log("load**", load)

            this.setState({ correct: ++correct })
        }
        if (question.length - 1 == load) {
            console.log('value equal')
            console.log("correct", this.state.correct)

            score = correct * (100 / question.length)
            console.log("score", score)

            this.setState({
                score
            })
            this.props.navigation.dispatch(
                StackActions.reset({
                    index: 1,
                    actions: [
                        NavigationActions.navigate({ routeName: 'QuizInfo' }),
                        NavigationActions.navigate({ routeName: 'QuizResult' })
                    ]
                })
            )
        }
        else {
            load++
            checked = false;

            let arr = [...question[load].incorrect_answers, question[load].correct_answer];
            let num = this.shuffle(arr);

            console.log('shuffles', num)

            this.setState({
                Question: question[load].question,
                opt1: num[0],
                opt2: num[1],
                opt3: num[2],
                opt4: num[3],
                checked,
                load
            })
        }
    }
    render() {
        const { question } = this.props.navigation.state.params;
        let { Question, opt1, opt2, opt3, opt4 } = this.state;

        return (
            <View style={{ flex: 1 }}>
                <Text>{Question}</Text>

                <Container>
                    <Content padder>
                        <ListItem
                            onPress={() => {
                                this.updateStatus(1, opt1)
                            }}>
                            <Left>
                                <Text>{opt1}</Text>
                            </Left>
                            <Right>
                                <Radio
                                    selected={this.state.checked == 1}
                                />
                            </Right>
                        </ListItem>

                        <ListItem
                            onPress={() => {
                                this.updateStatus(2, opt2)
                            }}>
                            <Left>
                                <Text>{opt2}</Text>
                            </Left>
                            <Right>
                                <Radio
                                    selected={this.state.checked == 2}
                                />
                            </Right>
                        </ListItem>

                        <ListItem
                            onPress={() => {
                                this.updateStatus(3, opt3)
                            }}>
                            <Left>
                                <Text>{opt3}</Text>
                            </Left>
                            <Right>
                                <Radio
                                    selected={this.state.checked == 3}
                                />
                            </Right>
                        </ListItem>

                        <ListItem
                            onPress={() => {
                                this.updateStatus(4, opt4)
                            }}>
                            <Left>
                                <Text>{opt4}</Text>
                            </Left>
                            <Right>
                                <Radio
                                    selected={this.state.checked == 4}
                                />
                            </Right>
                        </ListItem>
                        <Button
                            disabled={this.state.btnState}>
                            <Text>Next</Text>
                        </Button>
                    </Content>
                </Container>

                <ReactButton
                    onPress={this.handleNextButton}
                    title="Next"
                    color="#000000"
                    accessibilityLabel="Click for next question"
                />
            </View >
        );
    }
}

export default Quiz 