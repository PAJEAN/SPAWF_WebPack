import { actions } from './actions.js';
import { mutations } from './mutations.js';
import { getters } from './getters.js';
import { state } from './state.js';
import { Store } from './store.js';
/* Modules */

export const store = new Store({
    'actions': Object.assign(actions), // Object.assign(cible, ...sources).
    'mutations': Object.assign(mutations),
    'getters': Object.assign(getters),
    'state': Object.assign(state)
});