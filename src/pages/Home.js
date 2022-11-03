import NetInfo from '@react-native-community/netinfo';
import {onlineManager} from '@tanstack/react-query';
import React, {useState} from 'react';
import {
  ActivityIndicator,
  Alert,
  Button,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import {ScrollView} from 'react-native-gesture-handler';
import {
  useAddActivity,
  useDeleteActivity,
  useEditActivity,
  useGetActivity,
} from '../hooks/queryActivity';

const CrudReactQuery = () => {
  const [activityName, setActivityName] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [dataSelected, setDataSelected] = useState({});

  const {data: dataActivity, isLoading, refetch} = useGetActivity();

  const {mutateAsync: mutateAddActivity, status} = useAddActivity(
    data => {
      console.log('sukses', data);
    },
    () => {
      console.log('error');
    },
  );

  onlineManager.setEventListener(setOnline => {
    return NetInfo.addEventListener(state => {
      setOnline(!!state.isConnected);
    });
  });

  const isOnline = onlineManager.isOnline();
  console.log(isOnline);

  const {mutateAsync: mutateDeleteActivity, status: statusDelete} =
    useDeleteActivity(onSuccessDel);

  const {mutateAsync: mutateEditActivity} = useEditActivity(
    () => {
      setIsModalVisible(false);
    },
    dataSelected.id,
    activityName,
  );

  const onSuccessDel = data => {
    console.log('>>>', data);
    refetch();
  };

  const _handleSaveActivity = async () => {
    await mutateAddActivity(activityName);
  };

  const _handleDeleteActivity = async id => {
    await mutateDeleteActivity(id);
  };

  const _handleEditActivity = async () => {
    await mutateEditActivity();
  };

  const _handleWarning = async () => {
    showMessage({
      message: 'Nama aktivitas wajib diisi',
      type: 'danger',
    });
  };

  return (
    <View style={styles.page}>
      <View style={styles.wrapperLoading}>
        <View>
          <Text>status add: {status}</Text>
          <Text>status delete : {statusDelete}</Text>
        </View>
        {(isLoading || status === 'loading' || statusDelete === 'loading') && (
          <View style={styles.wrapperTextLoading}>
            <Text>Loading</Text>
            <ActivityIndicator color={'blue'} />
          </View>
        )}
      </View>
      <TextInput
        style={styles.textInput}
        placeholder="Masukkan nama aktivitas"
        onChangeText={input => setActivityName(input)}
        value={activityName}
      />

      <TouchableOpacity
        onPress={
          activityName.length === 0 ? _handleWarning : _handleSaveActivity
        }
        style={styles.button2}>
        <Text style={styles.textSave}>Save</Text>
      </TouchableOpacity>

      <ScrollView showsVerticalScrollIndicator={false}>
        {dataActivity?.data.map((item, index) => {
          return (
            <TouchableOpacity
              activeOpacity={0.8}
              key={index}
              style={styles.card}>
              <Text style={styles.textTitle}>{item.title}</Text>
              <Text style={styles.textTime}>{item.created_at}</Text>
              <View style={styles.wrapper}>
                <Button
                  title="Edit"
                  color={'blue'}
                  onPress={() => {
                    setActivityName(item.title);
                    setDataSelected(item);
                    setIsModalVisible(true);
                  }}
                />
                <Button
                  title="Delete"
                  color={'red'}
                  onPress={() => _handleDeleteActivity(item.id)}
                />
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      <Modal
        animationType="fade"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setIsModalVisible(!isModalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TextInput
              style={styles.textInput}
              placeholder="Masukkan nama aktivitas"
              onChangeText={input => setActivityName(input)}
              value={activityName}
            />
            <TouchableOpacity
              onPress={() => _handleEditActivity()}
              style={styles.button2}>
              <Text style={styles.textSave}>Save</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setIsModalVisible(false)}
              style={styles.button2}>
              <Text style={styles.textSave}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default CrudReactQuery;

const styles = StyleSheet.create({
  wrapperTextLoading: {flexDirection: 'row', alignItems: 'center'},
  wrapperLoading: {flexDirection: 'row', justifyContent: 'space-between'},
  wrapper: {flexDirection: 'row'},
  textTitle: {fontSize: 18},
  textTime: {fontSize: 16},
  card: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  page: {flex: 1, padding: 10},
  textSave: {color: 'white'},
  button2: {
    height: 54,
    backgroundColor: 'blue',
    marginTop: 16,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  textInput: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gray',
    marginTop: 30,
  },
  modalView: {
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
});
