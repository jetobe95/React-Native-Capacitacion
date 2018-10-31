import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  SafeAreaView,
  TextInput,
  Button,
 } from 'react-native';
import { LinearGradient } from 'expo';
import Form from './Form';
import Footer from './Footer';

class Login extends Component {
  render() {
    return (
      <LinearGradient colors={['#523fd9', '#843893']} style={{flex: 1}}>
        <SafeAreaView style={styles.container}>
            <View >
                <Text style={styles.titleText}>PROJECT</Text>
                <Form/>
                <Footer/>
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
        margin: 60,
    },
});

export default Login;