import { combineReducers } from '@reduxjs/toolkit';

import civilizationsReducer from '../ducks/civilizations';
import unitsReducer from '../ducks/units';
import technologiesReducer from '../ducks/technologies';
import structuresReducer from '../ducks/structures';

export const rootReducer = combineReducers({
  civilizations: civilizationsReducer,
  units: unitsReducer,
  technologies: technologiesReducer,
  structures: structuresReducer,
});

export default rootReducer;