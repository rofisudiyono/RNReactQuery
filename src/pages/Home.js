import React from 'react';
import {ActivityIndicator, FlatList, StyleSheet, View} from 'react-native';
import {useQuery} from 'react-query';
import {getListProducts} from '../api/GET_Products';
import Card from '../components/Card';

const Home = ({navigation}) => {
  const {isLoading, data: dataProduct2} = useQuery(
    ['/getListProduct'],
    () => getListProducts(),
    {
      enabled: true,
    },
  );

  const renderItem = ({item}) => (
    <Card data={item} onPress={() => navigation.navigate('Detail', item.id)} />
  );

  return (
    <View>
      {isLoading ? (
        <View style={styles.container}>
          <ActivityIndicator />
        </View>
      ) : (
        <FlatList
          data={dataProduct2?.products}
          renderItem={renderItem}
          initialNumToRender={10}
          contentContainerStyle={styles.content}
          ItemSeparatorComponent={() => <View style={styles.gap} />}
        />
      )}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {margin: 10},
  gap: {marginTop: 15},
});
