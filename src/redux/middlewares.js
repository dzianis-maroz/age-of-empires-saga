import { GET_DATA } from './actions';
import { CIVILIZATIONS_DATA_REQUESTED } from '../ducks/civilizations';
import { UNITS_DATA_REQUESTED } from '../ducks/units';
import { TECHNOLOGIES_DATA_REQUESTED } from '../ducks/technologies';
import { STRUCTURES_DATA_REQUESTED } from '../ducks/structures';
import { paths } from '../config';

export const getDataMiddleware = store => next => action => {
    if(action.type === GET_DATA) {
        switch(action.path) {
            case paths.civilizations.listPath: return store.dispatch(CIVILIZATIONS_DATA_REQUESTED(action.path));
            case paths.units.listPath: return store.dispatch(UNITS_DATA_REQUESTED(action.path));
            case paths.technologies.listPath: return store.dispatch(TECHNOLOGIES_DATA_REQUESTED(action.path));
            case paths.structures.listPath: return store.dispatch(STRUCTURES_DATA_REQUESTED(action.path));
        };
    };

    next(action);
};