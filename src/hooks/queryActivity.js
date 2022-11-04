import {showMessage} from 'react-native-flash-message';
import {useMutation, useQuery} from '@tanstack/react-query';
import {deleteActivity} from '../api/DELETE_data';
import {getAllActivity} from '../api/GET_allActivity';
import {postActivity} from '../api/POST_activity';
import {updateActivity} from '../api/PATCH_data';

export const useGetActivity = () => {
  return useQuery(['getAllActivity'], getAllActivity, {
    enabled: true,
  });
};

export const useAddActivity = (onSuccess, onError) => {
  return useMutation(postActivity, {
    onSuccess,
    onError,
  });
};
export const useDeleteActivity = onSuccess => {
  return useMutation(deleteActivity, {
    onSuccess,
    onError: () => {
      showMessage({
        message: 'delete failed',
        type: 'danger',
      });
    },
  });
};

export const useEditActivity = (onSuccessEdit, id, title) => {
  return useMutation(() => updateActivity(id, title), {
    onSuccess: onSuccessEdit,
    onError: error => {
      console.log(error);
      showMessage({
        message: 'edit failed',
      });
    },
  });
};
