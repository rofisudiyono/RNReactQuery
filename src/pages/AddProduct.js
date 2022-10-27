import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

const AddProduct = () => {
  return (
    <View style={styles.page}>
      <TextInput style={styles.textInput} placeholder="Masukkan nama produk" />
      <Button
        title="Save"
        style={styles.button}
        onPress={() => console.log('save')}
      />
    </View>
  );
};

export default AddProduct;

const styles = StyleSheet.create({
  page: {flex: 1, padding: 10},
  textInput: {backgroundColor: 'white', padding: 15, borderRadius: 10},
});
