import React from 'react';
import { StyleSheet, View, Button, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';

import { Container, Header, Content, ListItem, Text, Radio, Right, Left } from 'native-base';

import { NavigationActions, StackActions } from 'react-navigation'

import RadioBtn from '../../Components/RadioBtn/RadioBtn'


class Quiz extends React.Component {
    constructor(props) {
        super(props)
        const { question } = this.props.navigation.state.params
        this.state = {
            obj: {
                Question: question[0].question,
                opt1: question[0].incorrect_answers[0],
                opt2: question[0].incorrect_answers[1],
                opt3: question[0].incorrect_answers[2],
                opt4: question[0].correct_answer,
            },
            load: 0,
            correct: null,
            checked: false
        }
    }


    next = () => {
        const { Question, opt1, opt2, opt3, opt4 } = this.setState.obj
        const { question } = this.props.navigation.state.params
        // if (question.correct_answer.equals())
    }

    updateStatus = (e) => {
        let { checked } = this.state;

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
            checked
        })

    }

    render() {
        const { question } = this.props.navigation.state.params;
        let { Question, opt1, opt2, opt3, opt4 } = this.state.obj
        console.log("opt statuss", this.state.checked)
        return (
            <View style={{ flex: 1 }}>
                <Text>{Question}</Text>

                <Container>
                    <Content>
                        <ListItem>
                            <Left>
                                <Text>{opt1}</Text>
                            </Left>
                            <Right>
                                <Radio
                                    selected={this.state.checked == 1}
                                    onPress={() => {
                                        this.updateStatus(1)
                                    }}
                                />
                            </Right>
                        </ListItem>

                        <ListItem>
                            <Left>
                                <Text>{opt2}</Text>
                            </Left>
                            <Right>
                                <Radio
                                    selected={this.state.checked == 2}
                                    onPress={() => {
                                        this.updateStatus(2)
                                    }}
                                />
                            </Right>
                        </ListItem>

                        <ListItem>
                            <Left>
                                <Text>{opt3}</Text>
                            </Left>
                            <Right>
                                <Radio
                                    selected={this.state.checked == 3}
                                    onPress={() => {
                                        this.updateStatus(3)
                                    }}
                                />
                            </Right>
                        </ListItem>

                        <ListItem>
                            <Left>
                                <Text>{opt4}</Text>
                            </Left>
                            <Right>
                                <Radio
                                    selected={this.state.checked == 4}
                                    onPress={() => {
                                        this.updateStatus(4)
                                    }}
                                />
                            </Right>
                        </ListItem>
                    </Content>
                </Container>

                {/* <Button

                    title="Start"
                    color="#000000"
                    accessibilityLabel="Click To Start The Quiz"
                /> */}
            </View >
        );
    }
}

export default Quiz 