import { createSlice } from '@reduxjs/toolkit';
import { takeLatest, put, call } from 'redux-saga/effects';

import { getData } from '../redux/actions';

//INITIAL STATE

export const initialUnitsState = {
    items: [],
    unitInfo: {},
    error: null,
    isFetching: false,
};

//SELECTOR
  
export const unitsSelector = (state) => state.units.items;
export const unitInfoSelector = (state) => state.units.unitInfo;

//REDUCER

export const unitsReducer = createSlice({
  name: 'fetch-units',
  initialState: initialUnitsState,
  reducers: {
    UNITS_DATA_REQUESTED: (state) => {
      state.isFetching = true;
    },
    UNITS_DATA_SUCCEEDED: (state, action) => {
      state.items = action.payload;
      state.isFetching = false;
    },
    UNITS_DATA_FAILED: (state, action) => {
      state.items = action.payload;
      state.isFetching = false;
    },
    UNIT_INFO_REQUESTED: (state) => {
      state.isFetching = true; 
    },
    UNIT_INFO_SUCCEEDED: (state, action) => {
      state.unitInfo = action.payload;
      state.isFetching = false;
    },
    UNIT_INFO_FAILED: (state, action) => {
      state.unitInfo = action.payload;
      state.isFetching = false;
    },
}});

//SAGAS

function* getUnitsListSaga({ payload: path }) {
    try {
        const result = yield call(getData, path);
    
        yield put(UNITS_DATA_SUCCEEDED(result));
    } catch (e) {
        yield put(UNITS_DATA_FAILED(e));
    }
};

function* getUnitInfoSaga({ payload: path }) {

  try {
      const result = yield call(getData, path);
  
      yield put(UNIT_INFO_SUCCEEDED(result));
  } catch (e) {
      yield put(UNIT_INFO_FAILED(e));
  }
};

export function* unitsSaga() {
    yield takeLatest(UNITS_DATA_REQUESTED, getUnitsListSaga);
    yield takeLatest(UNIT_INFO_REQUESTED, getUnitInfoSaga);
}




export default unitsReducer.reducer;

export const { 
  UNITS_DATA_REQUESTED, 
  UNITS_DATA_SUCCEEDED, 
  UNITS_DATA_FAILED,
  UNIT_INFO_REQUESTED,
  UNIT_INFO_SUCCEEDED,
  UNIT_INFO_FAILED,

 } = unitsReducer.actions;