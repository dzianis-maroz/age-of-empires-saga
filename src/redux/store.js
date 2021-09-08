import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';
import { getDataMiddleware } from './middlewares';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [
  getDataMiddleware,
  sagaMiddleware];

export const store = configureStore({
  reducer: rootReducer,
  middleware: [...middlewares],
});

sagaMiddleware.run(rootSaga);

export default store;

