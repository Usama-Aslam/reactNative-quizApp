import React from 'react';

import { StyleSheet, View, TouchableOpacity, Image, Button as ReactButton } from 'react-native';

import { NavigationActions, StackActions } from 'react-navigation'

import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';

export default class HomeScreen extends React.Component {
    constructor() {
        super()

    }

    async componentWillMount() {
        await Expo.Font.loadAsync({
            'Roboto': require('native-base/Fonts/Roboto.ttf'),
            'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
        });
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
        return <Container style={{ flex: 1 }}>
            <Header>
                <Left>
                    <Button transparent>
                        <Icon name='menu' />
                    </Button>
                </Left>
                <Body>
                    <Title>BlockIQ</Title>
                </Body>
                <Right />
            </Header>
            <Content>
                <Text>This is Content</Text>
                <ReactButton className='playBtn'>
                    <Text>Success</Text>
                </ReactButton>
            </Content>
            <Footer>
                <FooterTab>
                    <Button block >
                        <Text>Footer</Text>
                    </Button>
                </FooterTab>
            </Footer>
        </Container>
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
    playBtn: {
        flex: 1,
        width: 120,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

{/* <View className={styles.ButtonDiv}>
    <Button
        onPress={this.handleButtonPress}
        title="Get Started"
        color="#000000"
        accessibilityLabel="Click To Start The Quiz"
    />
</View> */}