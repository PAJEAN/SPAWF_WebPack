import { Store } from './store.js';
/* Modules */
import { AuthRouter } from 'JS/lib/router/AuthRouter';
import { MyButton } from 'JS/store/modules/MyButton';


export const StoreRouterManager = new AuthRouter();
export const MyButtonManager = new MyButton();


export const store = new Store({
    'actions': Object.assign(
        StoreRouterManager.actions,
        MyButtonManager.actions
    ), // Object.assign(cible, ...sources).
    'mutations': Object.assign(
        StoreRouterManager.mutations,
        MyButtonManager.mutations
    ),
    'getters': Object.assign(
        StoreRouterManager.getters,
        MyButtonManager.getters
    ),
    'state': Object.assign(
        StoreRouterManager.states,
        MyButtonManager.states
    )
});