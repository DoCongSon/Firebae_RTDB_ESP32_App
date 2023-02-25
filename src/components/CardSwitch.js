import { StyleSheet, Text, View, Switch } from 'react-native';
import React, { useState } from 'react';

const CardSwitch = ({ title, value, onValueChange }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Switch onValueChange={onValueChange} value={value} />
    </View>
  );
};

export default CardSwitch;

const styles = StyleSheet.create({
  container: {
    width: '44%',
    height: 160,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    margin: '3%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
});
