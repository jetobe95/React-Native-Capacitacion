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

class Login extends Component {
  render() {
    return (
      <LinearGradient colors={['#523fd9', '#843893']} style={{flex: 1}}>
        <SafeAreaView style={styles.container}>
            <View >
                <Text style={styles.titleText}>PROJECT</Text>
                <TextInput
                    style={{height: 40}}
                    placeholder="Username"
                />
                <TextInput
                    style={{height: 40}}
                    placeholder="Password"
                />
                <Button 
                    title="SIGN IN"
                    onPress = {() => {
                        //continue
                    }}
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
  }
});

export default Login;