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
            Question: question[0].question,
            opt1: question[0].incorrect_answers[0],
            opt2: question[0].incorrect_answers[1],
            opt3: question[0].incorrect_answers[2],
            opt4: question[0].correct_answer,

            checked: [false, false, false, false]
        }
    }


    render() {
        const { question } = this.props.navigation.state.params;
        const { Question, opt1, opt2, opt3, opt4, checked } = this.state
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
                                <Radio selected={checked[0]} />
                            </Right>
                        </ListItem>
                        <ListItem>
                            <Left>
                                <Text>{opt2}</Text>
                            </Left>
                            <Right>
                                <Radio selected={checked[0]} />
                            </Right>
                        </ListItem>
                        <ListItem>
                            <Left>
                                <Text>{opt3}</Text>
                            </Left>
                            <Right>
                                <Radio selected={checked[0]} />
                            </Right>
                        </ListItem>
                        <ListItem>
                            <Left>
                                <Text>{opt4}</Text>
                            </Left>
                            <Right>
                                <Radio selected={checked[0]} />
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