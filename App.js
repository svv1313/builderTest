/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    <View style={styles.container}>
      <Text>Some Text</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center'
  }
});

export default App;
