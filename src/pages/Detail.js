import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {getProductDetail} from '../api/GET_ProductsDetail';
import {useQuery} from 'react-query';

const Detail = ({route}) => {
  const {id} = route.params;

  const {isLoading, data: dataDetail} = useQuery(
    ['/getListProductDetail'],
    () => getProductDetail(id),
    {
      enabled: true,
    },
  );
  console.log('detail', dataDetail);
  return (
    <View>
      <Text>Detail</Text>
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({});
