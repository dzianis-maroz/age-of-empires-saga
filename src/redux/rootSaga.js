import { all } from 'redux-saga/effects';

import { civilizationsSaga } from '../ducks/civilizations';
import { unitsSaga } from '../ducks/units';
import { technologiesSaga } from '../ducks/technologies';
import { structuresSaga } from '../ducks/structures';

export default function* rootSaga() {
  yield all([civilizationsSaga(), unitsSaga(), technologiesSaga(), structuresSaga()]);
}
