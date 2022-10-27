import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const FloatMenu = ({onPress}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={styles.floatMenu}
      onPress={onPress}>
      <Text style={styles.text}>+</Text>
    </TouchableOpacity>
  );
};

export default FloatMenu;

const styles = StyleSheet.create({
  floatMenu: {
    position: 'absolute',
    backgroundColor: 'red',
    height: 50,
    width: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 30,
    right: 30,
  },
  text: {fontSize: 20, color: 'white'},
});
