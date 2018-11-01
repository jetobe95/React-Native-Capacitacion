import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
 } from 'react-native';
import { LinearGradient } from 'expo';
import RegisterField from './registerField';
import Button from './../../components/button';

class Register extends Component {

  render() {
    return (
      <LinearGradient colors={['#523fd9', '#843893']} style={{flex: 1}}>
        <View >
            <RegisterField
              iconName='user'
              placeholderText='Username'
              passwordEntry={false}
            />
            <RegisterField
              iconName='envelope'
              placeholderText='E-mail'
              passwordEntry={false}
            />
            <RegisterField
              iconName='lock'
              placeholderText='Password'
              passwordEntry={true}
            />
            <RegisterField
              iconName='lock'
              placeholderText='Confirm password'
              passwordEntry={true}
            />
            <View style={{marginHorizontal: 50}}>
              <Button
                title='SIGN UP' 
              />
            </View>

        </View>
      </LinearGradient>
    );
  }
}

export default Register;