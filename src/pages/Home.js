import React from 'react';
import {Button, StyleSheet, View} from 'react-native';

const Home = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Button
        title="Counter"
        onPress={() => navigation.navigate('CounterScreen')}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {flex: 1, padding: 10},
  box: {height: 10},
});
