import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Home = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Button
        title="go to product"
        onPress={() => navigation.navigate('Product')}
      />
      <View style={styles.box} />
      <Button
        title="go to CRUD React Query"
        onPress={() => navigation.navigate('CrudReactQuery')}
      />
      <View style={styles.box} />
      <Button
        title="go to CRUD Redux Query"
        onPress={() => navigation.navigate('CrudReduxQuery')}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {flex: 1, padding: 10},
  box: {height: 10},
});
