import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import AboutView from  './App/Components/AboutView'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <AboutView />
        <Text>Shake your phone to open the developer menu.</Text>
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
