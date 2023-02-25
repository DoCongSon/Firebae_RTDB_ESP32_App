import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import React, { useEffect, useState } from 'react';
import { getData, onListenData, setData } from '../services/database';
import CardSwitch from '../components/CardSwitch';
import CardInfo from '../components/CardInfo';

const HomeScreen = () => {
  const [led, setLed] = useState(false);
  const [fan, setFan] = useState(false);
  const [temp, setTemp] = useState(0);
  const [hum, setHum] = useState(0);

  useEffect(() => {
    const unsubscribe = onListenData('home/led', (data) => {
      setLed(data);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const unsubscribe = onListenData('home/fan', (data) => {
      setFan(data);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const unsubscribe = onListenData('home/temp', (data) => {
      setTemp(data);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const unsubscribe = onListenData('home/hum', (data) => {
      setHum(data);
    });
    return () => unsubscribe();
  }, []);

  const handleSetData = async (path, value, callback) => {
    try {
      callback(value);
      await setData(path, value);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <CardSwitch
        title='Đèn'
        value={led}
        onValueChange={() => handleSetData('home/led', !led, setLed)}
      />
      <CardSwitch
        title='Quạt'
        value={fan}
        onValueChange={() => handleSetData('home/fan', !fan, setFan)}
      />
      <CardInfo title='Nhiệt độ, độ ẩm' hum={hum} temp={temp} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
});
