import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  SafeAreaView,
 } from 'react-native';
import { LinearGradient } from 'expo';
import { CheckBox } from 'react-native-elements';
import Form from './Form';
import Footer from './Footer';

class Login extends Component {

    constructor(props) {
        super();
        this.state = {
            rememberMe: false
        }
    }

  render() {
    return (
      <LinearGradient colors={['#523fd9', '#843893']} style={{flex: 1}}>
        <SafeAreaView style={styles.container}>
            <View >
                <Text style={styles.titleText}>PROJECT</Text>
                <Form/>
                <Footer {...this.props}/>
                <CheckBox
                    title='Remember me'
                    checked={this.state.rememberMe}
                    containerStyle={styles.rememberBox}
                    textStyle={{color:'#fff'}}
                    checkedColor={'#fff'}
                    uncheckedColor={'#fff'}
                    onPress={() => this.setState({rememberMe: !this.state.rememberMe})}
                />
            </View>
        </SafeAreaView>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleText: {
        fontSize: 28,
        color: '#fff',
        fontWeight: 'bold',
        marginHorizontal: 60,
        marginVertical: 40,
    },
    rememberBox: {
        marginTop: 50,
        backgroundColor: "rgba(92, 99,216, 0)",
        borderWidth: 0,
    }
});

export default Login;