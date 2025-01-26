import {Button, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import store from '../../redux/store';
import {decrement, increment} from '../../redux/action';

const Home = () => {
  const [num, setNum] = useState(0);
  useEffect(() => {
    const unSubscribe = store.subscribe(() => {
      let value = store.getState().num;
      setNum(value);
      console.log('Store Value ', value);
    });
    return () => {
      unSubscribe();
    };
  }, []);
  const onAdd = () => {
    store.dispatch(increment(1));
  };
  const onDec = () => {
    store.dispatch(decrement(1));
  };
  return (
    <View style={styles.container}>
      <Text>Counter Value Below</Text>

      <Text>{num}</Text>

      <Button title="Increment" onPress={onAdd} />

      <Button title="Decrement" />
    </View>
  );
};

export default Home;
