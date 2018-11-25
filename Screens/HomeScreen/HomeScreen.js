// import React from 'react';

// import { StyleSheet, View, TouchableOpacity, Image, Button as ReactButton } from 'react-native';

// import { NavigationActions, StackActions } from 'react-navigation'

// import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';

// export default class HomeScreen extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             loading: true
//         }
//     }

//     async componentWillMount() {
//         await Expo.Font.loadAsync({
//             'Roboto': require('native-base/Fonts/Roboto.ttf'),
//             'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
//         });
//         this.setState({ loading: false });
//     }

//     handleButtonPress = () => {
//         this.props.navigation.dispatch(
//             StackActions.push({
//                 routeName: 'QuizInfo'
//             })
//         )
//         console.log("button")
//     }

//     render() {

//         return (
//             <View style={{ flex: 1 }}>
//                 <Container style={{ flex: 1 }}>
//                     <Header>
//                         <Left>
//                             <Button transparent>
//                                 <Icon name='menu' />
//                             </Button>
//                         </Left>
//                         <Body>
//                             <Title>BlockIQ</Title>
//                         </Body>
//                         <Right />
//                     </Header>
//                     <Content>
//                         <Text>This is Content</Text>
//                         <Button block>
//                             <Text>NativeBase Button</Text>
//                         </Button>
//                     </Content>
//                     <Footer>
//                         <FooterTab>
//                             <Button block >
//                                 <Text>Footer</Text>
//                             </Button>
//                         </FooterTab>
//                     </Footer>
//                 </Container>
//             </View>);
//     }
// }




import React, { Component } from 'react';

import { NavigationActions, StackActions } from 'react-navigation'

import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';

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
                    <Text>Test Your Memory with Memory Shocks</Text>
                    <Button
                        block info
                        onPress={this.handleButtonPress}
                    >
                        <Text>Primary</Text>
                    </Button>

                </Content>
            </Container>
        );
    }
}