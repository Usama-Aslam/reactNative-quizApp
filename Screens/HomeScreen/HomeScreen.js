import React, { Component } from 'react';

import { NavigationActions, StackActions } from 'react-navigation'

import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Text } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class HomeScreen extends Component {
    constructor() {
        super()
        this.state = {
            loading: true
        }
    }

    async componentWillMount() {
        await Expo.Font.loadAsync({
            'Roboto': require('native-base/Fonts/Roboto.ttf'),
            'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf')
        });
        this.setState({ loading: false });
    }

    handleButtonPress = () => {
        this.props.navigation.dispatch(
            StackActions.push({
                routeName: 'QuizInfo'
            })
        )
        console.log("button")
    }
    render() {
        if (this.state.loading) {
            return <Expo.AppLoading />;
        }
        return (
            <Container>
                <Content padder>
                    <Text style={{ fontSize: 60, textAlign: 'center' }}>
                        BlockIQ
                    </Text>
                    <Text>Test Your Memory with a whole new level. We have a bunch of new Quizes and IQ test.
                    </Text>
                    <Button
                        block info
                        onPress={this.handleButtonPress}
                        style={{ marginTop: 40 }}
                    >
                        <Text>Primary</Text>
                    </Button>

                </Content>
                <Footer style={{ alignItems: 'center', alignContent: 'center', backgroundColor: 'white', color: 'white', height: 40 }}>
                    <Text >Made with <Icon name="favorite" color="red" /> by Usama</Text>
                </Footer>
            </Container>
        );
    }
}