import { Store } from './store.js';
/* Modules */
import { module as common } from 'JS/store/modules/common';

export const store = new Store({
    'actions': Object.assign(common.actions), // Object.assign(cible, ...sources).
    'mutations': Object.assign(common.mutations),
    'getters': Object.assign(common.getters),
    'state': Object.assign(common.state)
});