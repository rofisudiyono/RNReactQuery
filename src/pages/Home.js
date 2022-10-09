import React, {useEffect} from 'react';
import {ActivityIndicator, FlatList, StyleSheet, View} from 'react-native';
import {useQuery} from 'react-query';
import {getListProducts} from '../api/GET_Products';
import Card from '../components/Card';

const Home = () => {
  const {
    refetch,
    isLoading,
    data: dataProduct2,
  } = useQuery(['/getListProduct'], () => getListProducts(), {
    enabled: false,
  });

  useEffect(() => {
    refetch();
  }, [refetch]);

  // console.log('data', JSON.stringify(dataProduct));
  const renderItem = ({item}) => <Card />;

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
});
