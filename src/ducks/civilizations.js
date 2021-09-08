import { createSlice } from '@reduxjs/toolkit';
import { takeLatest, put, call } from 'redux-saga/effects';

import { getData } from '../redux/actions';

//INITIAL STATE

export const initialCivilizationsState = {
    items: [],
    civilizationInfo: {},
    error: null,
    isFetching: false,
};

//SELECTOR
  
export const civilizationsSelector = (state) => state.civilizations.items;
export const civilizationInfoSelector = (state) => state.civilizations.civilizationInfo;

//REDUCER

export const civilizationsReducer = createSlice({
  name: 'fetch-civilizations',
  initialState: initialCivilizationsState,
  reducers: {
    CIVILIZATIONS_DATA_REQUESTED: (state) => {
      state.isFetching = true;
    },
    CIVILIZATIONS_DATA_SUCCEEDED: (state, action) => {
      state.items = action.payload;
      state.isFetching = false;
    },
    CIVILIZATIONS_DATA_FAILED: (state, action) => {
      state.items = action.payload;
      state.isFetching = false;
    },
    CIVILIZATION_INFO_REQUESTED: (state) => {
      state.isFetching = true; 
    },
    CIVILIZATION_INFO_SUCCEEDED: (state, action) => {
      state.civilizationInfo = action.payload;
      state.isFetching = false;
    },
    CIVILIZATION_INFO_FAILED: (state, action) => {
      state.civilizationInfo = action.payload;
      state.isFetching = false;
    },
}});

//SAGAS

function* getCivilizationsListSaga({ payload: path }) {
    try {
        const result = yield call(getData, path);
    
        yield put(CIVILIZATIONS_DATA_SUCCEEDED(result));
    } catch (e) {
        yield put(CIVILIZATIONS_DATA_FAILED(e));
    }
};

function* getCivilizationInfoSaga({ payload: path }) {

  try {
      const result = yield call(getData, path);
  
      yield put(CIVILIZATION_INFO_SUCCEEDED(result));
  } catch (e) {
      yield put(CIVILIZATION_INFO_FAILED(e));
  }
};

export function* civilizationsSaga() {
    yield takeLatest(CIVILIZATIONS_DATA_REQUESTED, getCivilizationsListSaga);
    yield takeLatest(CIVILIZATION_INFO_REQUESTED, getCivilizationInfoSaga);
};

export default civilizationsReducer.reducer;

export const { 
  CIVILIZATIONS_DATA_REQUESTED, 
  CIVILIZATIONS_DATA_SUCCEEDED, 
  CIVILIZATIONS_DATA_FAILED,
  CIVILIZATION_INFO_REQUESTED,
  CIVILIZATION_INFO_SUCCEEDED,
  CIVILIZATION_INFO_FAILED,

 } = civilizationsReducer.actions;