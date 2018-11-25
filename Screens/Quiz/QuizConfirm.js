import React from 'react';
import { AppRegistry, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Container, Content, Form, Item, Picker, Left, Right, Button } from 'native-base';
import { NavigationActions, StackActions } from 'react-navigation'

import Icon from 'react-native-vector-icons/MaterialIcons';

class QuizConfirm extends React.Component {
    constructor() {
        super()
        this.state = {
            question: null,
            categoryName: null,
            min: 2,
            sec: 60
        }
    }

    componentDidMount() {
        this.getData()
    }

    getData = async () => {
        const { category, difficulty, categoryName } = this.props.navigation.state.params.API_props

        await fetch(`https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`)
            .then((response) => response.json())
            .then((res) => {
                this.setState({
                    question: res.results,
                    categoryName
                })
            })
    }

    handleButtonPress = () => {
        const { question, categoryName } = this.state
        // console.log("handel", question)

        this.props.navigation.dispatch(
            StackActions.replace({
                routeName: 'Quiz',
                params: {
                    question,
                    categoryName
                }
            })
        )
    }

    render() {
        const { question, min, sec, categoryName } = this.state

        console.log("API_RESPONSE Question==>", question)
        console.log("QUiz prps", this.props.navigation.state.params.API_props)

        return (
            <Container>
                <Content padder>
                    <Text style={styles.heading}>Get Ready For The Quiz. Click Start To Continue</Text>
                    <View style={styles.timeDetailDiv}>
                        <Icon name="timer" size={40} />
                        <Text style={styles.timeDetail}>{min} : {sec}</Text>
                    </View>
                    <Button block info
                        style={styles.btn}
                        onPress={this.handleButtonPress}
                    >
                        <Text style={styles.btnText}>Start</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 20
    },
    timeDetail: {
        fontSize: 30,
        paddingLeft: 20
    },
    timeDetailDiv: {
        marginTop: 30,
        flexDirection: 'row',
    },
    btnText: {
        paddingTop: 20,
        color: "white"
    },
    btn: {
        marginTop: 40
    }

})
AppRegistry.registerComponent('AwesomeProject', () => QuizConfirm);

export default QuizConfirm