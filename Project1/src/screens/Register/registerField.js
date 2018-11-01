import React, { Component } from 'react';
import { 
    View, 
    TextInput,
    StyleSheet, 
} from 'react-native';
import { Icon } from 'react-native-elements';

class RegisterField extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Icon 
            name={this.props.iconName}
            type='evilicon'
            color='rgba(255,255,255,0.65)'
            size={45}
        />
        <TextInput
            placeholder={this.props.placeholderText}
            underlineColorAndroid="transparent"
            selectionColor={'#fff'}
            style={styles.field}
            secureTextEntry={this.props.passwordEntry}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        borderBottomWidth: 2,
        borderBottomColor: 'rgba(255,255,255,0.65)',
        marginHorizontal: 50,
        marginTop: 14,
    },
    field: {
        width: 220,
        fontSize: 20,
        padding: 12,
        color: '#fff',
    },
});

export default RegisterField;
