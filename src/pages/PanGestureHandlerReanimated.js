import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';

const PanGestureHandlerReanimated = () => {
  return (
    <View>
      <TouchableOpacity className="bg-blue-100">
        <Text>Button</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PanGestureHandlerReanimated;

const styles = StyleSheet.create({});
