import React, { Component } from 'react';
import { Container, Header, Content, ListItem, Text, Radio, Right, Left } from 'native-base';

export default class RadioBtn extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <ListItem>
                        <Left>
                            <Text>Daily Stand Up</Text>
                        </Left>
                        <Right>
                            <Radio selected={false} />
                        </Right>
                    </ListItem>
                </Content>
            </Container>
        );
    }
}