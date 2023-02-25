import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const CardInfo = ({ title, temp, hum }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.infoContainer}>
        <View style={styles.infoItem}>
          <Image source={require('../../assets/temperature.png')} style={styles.image} />
          <Text style={styles.info}>{`Nhiệt độ: ${temp}°C`}</Text>
        </View>
        <View style={styles.infoItem}>
          <Image source={require('../../assets/humidity.png')} style={styles.image} />
          <Text style={styles.info}>{`Độ ẩm: ${hum}%`}</Text>
        </View>
      </View>
    </View>
  );
};

export default CardInfo;

const styles = StyleSheet.create({
  container: {
    width: '94%',
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
  infoContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  infoItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 4,
    margin: 4,
  },
  info: {
    fontSize: 16,
    marginLeft: 4,
  },
  image: {
    width: 35,
    height: 35,
    resizeMode: 'contain',
  },
});
