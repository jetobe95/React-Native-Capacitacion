import React, { Component } from 'react';
import {
    StyleSheet, 
    View,
    TextInput,
} from 'react-native';
import { Button } from 'react-native-elements';

class Form extends Component {
    render() {
        return(
            <View>
                <TextInput
                    style={styles.editText}
                    placeholder="Username"
                    selectionColor={'#fff'}
                    underlineColorAndroid={'#ddd'}
                />
                <TextInput
                    style={styles.editText}
                    placeholder="Password"
                    selectionColor={'#fff'}
                    underlineColorAndroid={'#ddd'}
                    secureTextEntry={true}
                />
                <Button 
                    title="SIGN IN"
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
    editText: {
        fontSize: 20,
        color: '#fff',
        padding: 14,
        width: 240,
        marginTop: 10,
        marginBottom: 16,
      
    }, 
    buttonContainer: {
        marginTop: 50,
        backgroundColor: "rgba(92, 99,216, 0)",
        borderColor: "#fff",
        borderWidth: 2,
        borderRadius: 30,
    },
    buttonText: {
        fontSize: 20,
    }
});

export default Form;