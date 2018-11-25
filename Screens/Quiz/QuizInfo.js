import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Picker, PickerItem } from 'react-native';

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
                        title="Continue"
                        color="#000000"
                        accessibilityLabel="Click to continue to Quiz Screen"
                    />
                </View>

            </View>
        );
    }
}

export default QuizInfo