import React from 'react';
import { StyleSheet, Text, View, AppRegistry } from 'react-native';

import { Container, Content, Form, Item, Picker, Button } from 'native-base';

import { NavigationActions, StackActions } from 'react-navigation'

class QuizInfo extends React.Component {
    constructor() {
        super()
        this.state = {
            category: ['Any Random', 'General Knowledge', 'Entertainment: Books', 'Entertainment: Film', 'Entertainment: Music', 'Entertainment: Musicals & Theatres', 'Entertainment: Television', 'Entertainment: Video Games', 'Entertainment: Board Games', 'Science & Nature', 'Science: Computers', 'Science: Mathematics', 'Mythology', 'Sports', 'Geography', 'History', 'Politics', 'Art', 'Celebrities', 'Animals', 'Entertainment: Comics', 'Science: Gadgets', 'Entertainment: Japanese Anime & Manga', 'Entertainment: Cartoon & Animations'],
            level: ['Any Random', 'Easy', 'Medium', 'Hard'],
        }
        //  
    }

    handleButtonPress = () => {
        const { currentCategoryIndex, currentLevelIndex, level } = this.state

        let category = currentCategoryIndex ? 8 + currentCategoryIndex : 8 + Math.floor(Math.random() * 22)
        let difficulty = currentLevelIndex ? level[currentLevelIndex].toLowerCase() : level[1 + Math.floor(Math.random() * 3)].toLowerCase()

        this.props.navigation.dispatch(
            StackActions.push({
                routeName: 'QuizConfirm',
                params: {
                    API_props: {
                        category,
                        difficulty,
                        categoryName: this.state.category[currentCategoryIndex]
                    }
                }
            })
        )

    }

    render() {
        const { category, level } = this.state

        return (
            <Container >
                <Content padder>
                    <Text style={styles.title}>We have Tons of IQ boosters for you. Select a desire Package for Yourself.</Text>
                    <Form>
                        <View style={styles.picker}>
                            <Text style={styles.heading}>Select Category</Text>

                            <Item picker>
                                <Picker
                                    mode="dropdown"
                                    style={{ width: undefined }}
                                    placeholder="Select Category"
                                    placeholderStyle={{ color: "#bfc6ea" }}
                                    placeholderIconColor="#007aff"
                                    selectedValue={this.state.currentCategoryIndex}
                                    onValueChange={(itemValue, itemIndex) => this.setState({ currentCategoryIndex: itemValue })}
                                >
                                    {category.map((item, index) => {
                                        return <Picker.Item key={item} label={item} value={index} />
                                    })}
                                </Picker>
                            </Item>
                        </View>

                        <View style={styles.picker}>
                            <Text style={styles.heading}>Select Difficulty Level</Text>
                            <Item picker>
                                <Picker
                                    mode="dropdown"
                                    style={{ width: undefined }}
                                    placeholder="Select Level"
                                    placeholderStyle={{ color: "#bfc6ea" }}
                                    placeholderIconColor="#007aff"
                                    selectedValue={this.state.currentLevelIndex}
                                    onValueChange={(itemValue, itemIndex) => this.setState({ currentLevelIndex: itemValue })}
                                >
                                    {level.map((item, index) => {
                                        return <Picker.Item key={item} label={item} value={index} />
                                    })}
                                </Picker>
                            </Item>
                        </View>
                    </Form>

                    <View>
                        <Button block info
                            style={styles.btn}
                            onPress={this.handleButtonPress}
                        >
                            <Text style={{ color: 'white', fontSize: 20 }}>Contine</Text>
                        </Button>
                    </View>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    title: {
        textTransform: 'capitalize',
        fontSize: 20,
        paddingBottom: 10
    },
    heading: {
        fontSize: 20
    },
    picker: {
        paddingTop: 30
    },
    btn: {
        marginTop: 100,
        backgroundColor: '#2196f3'
    }
});

AppRegistry.registerComponent('AwesomeProject', () => QuizInfo);

export default QuizInfo