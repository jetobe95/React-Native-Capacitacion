import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <LinearGradient colors={['blue', 'tomato']}>
          <Text>Open up App.js to start working on your app!</Text>
        </LinearGradient>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
