import { createSlice } from '@reduxjs/toolkit';
import { takeLatest, put, call } from 'redux-saga/effects';

import { getData } from '../redux/actions';

//INITIAL STATE

export const initialStructuresState = {
    items: [],
    structureInfo: {},
    error: null,
    isFetching: false,
};

//SELECTOR
  
export const structuresSelector = (state) => state.structures.items;
export const structureInfoSelector = (state) => state.structures.structureInfo;

//REDUCER

export const structuresReducer = createSlice({
  name: 'fetch-structures',
  initialState: initialStructuresState,
  reducers: {
    STRUCTURES_DATA_REQUESTED: (state) => {
      state.isFetching = true;
    },
    STRUCTURES_DATA_SUCCEEDED: (state, action) => {
      state.items = action.payload;
      state.isFetching = false;
    },
    STRUCTURES_DATA_FAILED: (state, action) => {
      state.items = action.payload;
      state.isFetching = false;
    },
    STRUCTURE_INFO_REQUESTED: (state) => {
      state.isFetching = true; 
    },
    STRUCTURE_INFO_SUCCEEDED: (state, action) => {
      state.structureInfo = action.payload;
      state.isFetching = false;
    },
    STRUCTURE_INFO_FAILED: (state, action) => {
      state.structureInfo = action.payload;
      state.isFetching = false;
    },
}});

//SAGAS

function* getStructuresListSaga({ payload: path }) {
    try {
        const result = yield call(getData, path);
    
        yield put(STRUCTURES_DATA_SUCCEEDED(result));
    } catch (e) {
        yield put(STRUCTURES_DATA_FAILED(e));
    }
};

function* getStructureInfoSaga({ payload: path }) {

  try {
      const result = yield call(getData, path);
  
      yield put(STRUCTURE_INFO_SUCCEEDED(result));
  } catch (e) {
      yield put(STRUCTURE_INFO_FAILED(e));
  }
};

export function* structuresSaga() {
    yield takeLatest(STRUCTURES_DATA_REQUESTED, getStructuresListSaga);
    yield takeLatest(STRUCTURE_INFO_REQUESTED, getStructureInfoSaga);
}




export default structuresReducer.reducer;

export const { 
  STRUCTURES_DATA_REQUESTED, 
  STRUCTURES_DATA_SUCCEEDED, 
  STRUCTURES_DATA_FAILED,
  STRUCTURE_INFO_REQUESTED,
  STRUCTURE_INFO_SUCCEEDED,
  STRUCTURE_INFO_FAILED,

 } = structuresReducer.actions;