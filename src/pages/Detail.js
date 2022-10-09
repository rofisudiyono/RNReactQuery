import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {getProductDetail} from '../api/GET_ProductsDetail';
import {useQuery} from 'react-query';
import Swiper from 'react-native-swiper';
const Detail = ({route}) => {
  const {id} = route.params;

  const {isLoading, data: dataDetail} = useQuery(
    ['/getListProductDetail', id],
    () => getProductDetail(id),
    {
      enabled: true,
    },
  );

  return (
    <View>
      <View style={styles.container}>
        <Swiper
          key={(Math.random() + 1).toString(36).substring(7)}
          autoplay={true}
          dot={<View style={styles.dot} />}
          activeDot={<View style={styles.activeDot} />}
          loop={true}>
          {!isLoading &&
            dataDetail?.images.map(item => {
              return (
                <View style={{}} key={item.key}>
                  <Image source={{uri: item}} style={styles.image} />
                </View>
              );
            })}
        </Swiper>
      </View>
      <View style={styles.wrapperContent}>
        <View style={styles.wrapperTitle}>
          <Text style={styles.textBrand}>
            {dataDetail?.brand} - {dataDetail?.title}
          </Text>
          <Text style={styles.textPrice}>$ {dataDetail?.price}</Text>
        </View>
        <Text style={styles.textDesc}>{dataDetail?.description}</Text>
      </View>
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  textDesc: {fontSize: 15, color: 'gray'},
  textPrice: {fontSize: 18, color: 'blue', fontWeight: 'bold'},
  textBrand: {fontSize: 18, fontWeight: 'bold'},
  wrapperTitle: {flexDirection: 'row', justifyContent: 'space-between'},
  wrapperContent: {paddingVertical: 10, paddingHorizontal: 15},
  container: {height: 250},
  image: {
    height: 210,
    width: '100%',
    resizeMode: 'contain',
  },
  dot: {
    backgroundColor: 'rgba(0,0,0,.2)',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 4,
    marginRight: 4,
    marginTop: 3,
    marginBottom: 3,
  },
  activeDot: {
    backgroundColor: 'blue',
    width: 14,
    height: 8,
    borderRadius: 4,
    marginLeft: 4,
    marginRight: 4,
    marginTop: 3,
    marginBottom: 3,
  },
});
