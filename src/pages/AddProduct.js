import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
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

  const {mutateAsync: mutateAddProduct, status} = useMutation(addPostProduct, {
    onMutate: () => {
      console.log('on Mutate');
    },
    onSuccess: data => {
      console.log('on Success', data);
      queryClient.invalidateQueries(['/getListProduct']);
    },
    onSettled: (data, error) => {
      console.log('on Settle', data);
      console.log('on Settle', error);
    },
    onError: error => {
      console.log('error', error);
    },
  });

  return (
    <View style={styles.page}>
      <TextInput
        style={styles.textInput}
        placeholder="Masukkan nama produk"
        onChangeText={input => setNameProduct(input)}
      />

      <TouchableOpacity onPress={handleSaveProduct} style={styles.button}>
        <Text style={styles.textSave}>Save</Text>
      </TouchableOpacity>

      <Text>status : {status}</Text>
    </View>
  );
};

export default AddProduct;

const styles = StyleSheet.create({
  page: {flex: 1, padding: 10},
  textSave: {color: 'white'},
  button: {
    height: 54,
    backgroundColor: 'black',
    marginTop: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gray',
    marginTop: 30,
  },
});
