import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
} from 'react-native';

class Footer extends Component {
    
    handleSignUp = () => {
        this.props.navigation.navigate('Register');
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.signUpText}>Don't have an account yet?</Text>
                <Text style={styles.signUpLink} onPress={this.handleSignUp}>Sign Up</Text>
            </View>
        );
  }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 32,
    },
    signUpText: {
        color: 'rgba(255,255,255,0.6)',
    },
    signUpLink: {
        color: 'rgba(255,255,255,1)',
        fontWeight: 'bold',
        marginLeft: 8,
    }
});

export default Footer;