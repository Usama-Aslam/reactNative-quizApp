import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Picker, PickerItem } from 'react-native';

import { NavigationActions, StackActions } from 'react-navigation'

class QuizInfo extends React.Component {
    constructor() {
        super()
        this.state = {
            Question: null,
            category: ['General Knowledge', 'Entertainment: Books', 'Entertainment: Film', 'Entertainment: Music', 'Entertainment: Musicals & Theatres', 'Entertainment: Television', 'Entertainment: Video Games', 'Entertainment: Board Games', 'Science & Nature', 'Science: Computers', 'Science: Mathematics', 'Mythology', 'Sports', 'Geography', 'History', 'Politics', 'Art', 'Celebrities', 'Animals', 'Entertainment: Comics', 'Science: Gadgets', 'Entertainment: Japanese Anime & Manga', 'Entertainment: Cartoon & Animations'],
            level: ['Easy', 'Medium', 'Hard'],
        }
        this.getData = this.getData.bind(this)
    }

    componentDidMount() {
        this.getData()
    }

    getData() {
        const { currentCategory, currentLevel } = this.state;
        fetch(`https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple`)
            .then((response) => respones.json())
            .then((res) => this.setState({
                Question: res
            }))
    }

    handleButtonPress = () => {
        const { currentCategoryIndex, currentLevelIndex } = this.state
        console.log("c", currentCategoryIndex)
    }

    render() {
        const { category, level } = this.state
        return (
            <View>
                <View>
                    <Text>Select Catergory</Text>
                    <Picker
                        selectedValue={this.state.currentCategoryIndex}
                        style={{ height: 50, width: 220 }}
                        onValueChange={(itemValue, itemIndex) => this.setState({ currentCategoryIndex: itemValue })}>

                        {category.map((item, index) => {
                            return <Picker.Item key={item} label={item} value={index} />
                        })}
                    </Picker>
                </View>

                <View>
                    <Text>Select Level</Text>
                    <Picker
                        selectedValue={this.state.currentLevelIndex}
                        style={{ height: 50, width: 130 }}
                        onValueChange={(itemValue, itemIndex) => this.setState({ currentLevelIndex: itemValue })}>
                        {level.map((item, index) => {
                            return <Picker.Item key={item} label={item} value={index} />
                        })}
                    </Picker>
                </View>

                <View>
                    <Button
                        onPress={this.handleButtonPress}
                        title="Get Started"
                        color="#000000"
                        accessibilityLabel="Click To Start The Quiz"
                    />
                </View>
            </View>
        );
    }
}

export default QuizInfo