import { API } from '../services/api';

//ACTION

export const GET_DATA = 'GET_DATA';

export const ACTION_GET_DATA = (path) => ({
    type: GET_DATA,
    path,
});

//ACTION CREATOR

export const getData = async(path) => {

    try {
      const res = await API.get(path);
      const data = await res.json();
      return data;
    } catch (error) {
        console.log(error);
        throw error;
    };
  };