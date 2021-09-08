import { createSlice } from '@reduxjs/toolkit';
import { takeLatest, put, call } from 'redux-saga/effects';

import { getData } from '../redux/actions';

//INITIAL STATE

export const initialTechnologiesState = {
    items: [],
    technologyInfo: {},
    error: null,
    isFetching: false,
};

//SELECTOR
  
export const technologiesSelector = (state) => state.technologies.items;
export const technologyInfoSelector = (state) => state.technologies.technologyInfo;

//REDUCER

export const technologiesReducer = createSlice({
  name: 'fetch-technologies',
  initialState: initialTechnologiesState,
  reducers: {
    TECHNOLOGIES_DATA_REQUESTED: (state) => {
      state.isFetching = true;
    },
    TECHNOLOGIES_DATA_SUCCEEDED: (state, action) => {
      state.items = action.payload;
      state.isFetching = false;
    },
    TECHNOLOGIES_DATA_FAILED: (state, action) => {
      state.items = action.payload;
      state.isFetching = false;
    },
    TECHNOLOGY_INFO_REQUESTED: (state) => {
      state.isFetching = true; 
    },
    TECHNOLOGY_INFO_SUCCEEDED: (state, action) => {
      state.technologyInfo = action.payload;
      state.isFetching = false;
    },
    TECHNOLOGY_INFO_FAILED: (state, action) => {
      state.technologyInfo = action.payload;
      state.isFetching = false;
    },
}});

//SAGAS

function* getTechnologiesListSaga({ payload: path }) {
    try {
        const result = yield call(getData, path);
    
        yield put(TECHNOLOGIES_DATA_SUCCEEDED(result));
    } catch (e) {
        yield put(TECHNOLOGIES_DATA_FAILED(e));
    }
};

function* getTechnologyInfoSaga({ payload: path }) {

  try {
      const result = yield call(getData, path);
  
      yield put(TECHNOLOGY_INFO_SUCCEEDED(result));
  } catch (e) {
      yield put(TECHNOLOGY_INFO_FAILED(e));
  }
};

export function* technologiesSaga() {
    yield takeLatest(TECHNOLOGIES_DATA_REQUESTED, getTechnologiesListSaga);
    yield takeLatest(TECHNOLOGY_INFO_REQUESTED, getTechnologyInfoSaga);
}




export default technologiesReducer.reducer;

export const { 
  TECHNOLOGIES_DATA_REQUESTED, 
  TECHNOLOGIES_DATA_SUCCEEDED, 
  TECHNOLOGIES_DATA_FAILED,
  TECHNOLOGY_INFO_REQUESTED,
  TECHNOLOGY_INFO_SUCCEEDED,
  TECHNOLOGY_INFO_FAILED,

 } = technologiesReducer.actions;