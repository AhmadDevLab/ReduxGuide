import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import Home from './src/Screens/Home/Home';
import store from './src/redux/store';
import {Provider} from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <Home />;
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
