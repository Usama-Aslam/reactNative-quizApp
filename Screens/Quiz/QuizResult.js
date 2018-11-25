import React, { Component } from 'react';

import { NavigationActions, StackActions } from 'react-navigation'

import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';

export default class QuizResult extends Component {
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


    render() {
        if (this.state.loading) {
            return <Expo.AppLoading />;
        }
        return (
            <View></View>
        );
    }
}