import React, {useState} from 'react';
import {FlatList, RefreshControl, StyleSheet, View} from 'react-native';
import {useQuery} from 'react-query';
import {getListProducts} from '../api/GET_Products';
import Card from '../components/Card';
import FloatMenu from '../components/FloatMenu';
import Loading from '../components/Loading';

const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

const Product = ({navigation}) => {
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  const {isLoading, data: dataProduct2} = useQuery(
    ['/getListProduct'],
    () => getListProducts(),
    {
      enabled: true,
    },
  );

  const renderItem = ({item}) => (
    <Card
      data={item}
      onPress={() => navigation.navigate('Detail', {id: item.id})}
    />
  );

  return (
    <View style={styles.page}>
      <FlatList
        keyExtractor={(item, index) => {
          return item.id;
        }}
        data={dataProduct2?.products}
        renderItem={renderItem}
        initialNumToRender={10}
        contentContainerStyle={styles.content}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        ItemSeparatorComponent={() => <View style={styles.gap} />}
      />
      {isLoading && <Loading />}
      <FloatMenu onPress={() => navigation.navigate('AddProduct')} />
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {margin: 10},
  gap: {marginTop: 15},
  page: {flex: 1},
});
