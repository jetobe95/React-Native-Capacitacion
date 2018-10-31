import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  SafeAreaView,
  TextInput,
  Button,
  TouchableOpacity
 } from 'react-native';
import { LinearGradient } from 'expo';

class Login extends Component {
  render() {
    return (
      <LinearGradient colors={['#523fd9', '#843893']} style={{flex: 1}}>
        <SafeAreaView style={styles.container}>
            <View style={styles.formSection}>
                <Text style={styles.titleText}>PROJECT</Text>
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
                    />
                </View>
                <View style={styles.button1}>
                    <Button 
                        title="SIGN IN"
                        color={'purple'}
                        onPress = {() => {
                            //continue
                        }}
                    />
                </View>
                <Text style={styles.signUp}>Don't have an account yet? Sign Up</Text>
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
    
  },
  titleText: {
    fontSize: 28,
    color: '#fff',
    fontWeight: 'bold',
    margin: 60,
  },
  formSection: {
    flex: 2,
    justifyContent: 'center'
  },
  editText: {
    fontSize: 20,
    color: '#fff',
    padding: 14,
    width: 240,
    marginTop: 10,
    marginBottom: 16,
    
  }, 
  button1: {
      marginTop: 50,
  },
  signUp: {
      marginTop: 32,
      color: 'rgba(255,255,255,0.6)',
  }
});

export default Login;