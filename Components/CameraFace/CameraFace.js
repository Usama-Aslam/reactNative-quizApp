import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Camera, Permissions, FaceDetector } from 'expo';

//navigation
import { NavigationActions, StackActions } from 'react-navigation'

export default class CameraExample extends React.Component {
    state = {
        hasCameraPermission: null,
        type: Camera.Constants.Type.front
    };

    async componentDidMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermission: status === 'granted' });
    }

    handleFacesDetected = (obj) => {
        if (obj.faces[0])
            this.props.navigation.dispatch(
                StackActions.reset({
                    index: 0,
                    actions: [NavigationActions.navigate({ routeName: 'Home' })],
                })
            )
    }

    render() {
        const { hasCameraPermission } = this.state;

        if (hasCameraPermission === null) {
            return <View />;
        } else if (hasCameraPermission === false) {
            return <Text>No access to camera</Text>;
        } else {
            return (

                <View style={{ flex: 1 }}>
                    <Camera
                        style={{ flex: 1 }}
                        type={this.state.type}
                        onFacesDetected={this.handleFacesDetected}
                        faceDetectorSettings={{
                            mode: FaceDetector.Constants.Mode.accurate,
                            detectLandmarks: FaceDetector.Constants.Mode.all,
                            runClassifications: FaceDetector.Constants.Mode.all,
                        }}>
                        <View
                            style={{
                                flex: 1,
                                backgroundColor: 'transparent',
                                flexDirection: 'row',
                            }}>
                            <TouchableOpacity
                                style={{
                                    flex: 0.1,
                                    alignSelf: 'flex-end',
                                    alignItems: 'center',
                                }}
                                onPress={() => {
                                    this.setState({
                                        type: this.state.type === Camera.Constants.Type.front
                                            ? Camera.Constants.Type.back
                                            : Camera.Constants.Type.front,
                                    });
                                }}>
                                <Text
                                    style={{ fontSize: 18, margin: 0, color: 'white', width: 30 }}>
                                    Flip Mode
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </Camera>
                </View>
            );
        }
    }
}