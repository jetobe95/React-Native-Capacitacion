import React, { Component } from 'react';
import {
    StyleSheet, 
    View,
} from 'react-native';
import { Button } from 'react-native-elements';

class myButton extends Component {
    render() {
        return(
            <View>
                <Button 
                    title={this.props.title}
                    onPress = {() => {
                        //continue
                    }}
                    buttonStyle={styles.buttonContainer}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    buttonContainer: {
        marginTop: 40,
        backgroundColor: "rgba(92, 99,216, 0)",
        borderColor: "#fff",
        borderWidth: 2,
        borderRadius: 30,
    },
});

export default myButton;