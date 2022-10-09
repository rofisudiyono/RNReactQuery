import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Card = ({data, onPress}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.wrapper}
      onPress={onPress}>
      <Image source={{uri: data.thumbnail}} style={styles.image} />
      <View style={styles.wrapperDiscount}>
        <Text style={styles.discount}>Off {data.discountPercentage} %</Text>
      </View>
      <View style={styles.wrapperContent}>
        <View style={styles.wrapperTitle}>
          <Text style={styles.title}>{data.title}</Text>
          <Text style={styles.price}>{data.price}</Text>
        </View>
        <Text style={styles.desc}>{data.description}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 15,
    backgroundColor: 'white',
    overflow: 'hidden',
    position: 'relative',
  },
  image: {height: 200, width: '100%'},
  title: {fontSize: 18, fontWeight: '600'},
  desc: {fontSize: 14},
  discount: {fontSize: 14, color: 'white'},
  wrapperContent: {
    padding: 10,
  },
  wrapperDiscount: {
    backgroundColor: 'red',
    position: 'absolute',
    padding: 8,
    borderBottomRightRadius: 10,
  },
  wrapperTitle: {flexDirection: 'row', justifyContent: 'space-between'},
});
