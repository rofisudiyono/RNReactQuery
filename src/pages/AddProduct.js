import React, {useState} from 'react';
import {
  ActivityIndicator,
  Button,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import {useMutation, useQueryClient} from 'react-query';
import {addPostProduct} from '../api/POST_Products';

const AddProduct = () => {
  const queryClient = useQueryClient();
  const [nameProduct, setNameProduct] = useState('');

  const handleSaveProduct = async () => {
    await mutateAddProduct({title: nameProduct});
  };

  const {mutateAsync: mutateAddProduct, isLoading} = useMutation(
    addPostProduct,
    {
      onMutate: () => {
        console.log('on Mutate');
      },
      onSuccess: data => {
        console.log('on Success', data);
        queryClient.invalidateQueries(['/getListProduct']);
      },
      onSettled: (data, error) => {
        console.log('on Settle', JSON.stringify(data));
        console.log('on Settle', error);
      },
      onError: error => {
        console.log('error', error);
      },
    },
  );
  return (
    <View style={styles.page}>
      <TextInput
        style={styles.textInput}
        placeholder="Masukkan nama produk"
        onChangeText={input => setNameProduct(input)}
      />

      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <Button
          title="Save"
          style={styles.button}
          onPress={handleSaveProduct}
        />
      )}
    </View>
  );
};

export default AddProduct;

const styles = StyleSheet.create({
  page: {flex: 1, padding: 10},
  textInput: {backgroundColor: 'white', padding: 15, borderRadius: 10},
});
