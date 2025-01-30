import {Button, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../../redux/action'


const Home = () => {
  const number = useSelector(state => state.num);

  const dispatch = useDispatch();

  console.log('number', number);

  const onAdd = () => {
    dispatch(increment(number));
  };
  const onSub = () => {
    dispatch(decrement(number));
  };

  return (
    <View style={styles.container}>
      <Text>Counter Value Below</Text>

      <Text>{number}</Text>

      <Button title="Increment" onPress={onAdd} />

      <Button title="Decrement" onPress={onSub} />
    </View>
  );
};

export default Home;
