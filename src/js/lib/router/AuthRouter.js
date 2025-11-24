// @ts-check

import { store } from 'JS/store/index';

export class AuthRouter {

    constructor() {
        this.keys = {
            // STATES.
            s_is_auth: `${this.constructor.name}_is_auth`,
            s_roles: `${this.constructor.name}_roles`,
            // ACTIONS.
            // GETTERS.
        };
    }

    get states() {
        return {
            [this.keys.s_is_auth]: false,
            [this.keys.s_roles]: []
        }
    }

    get actions() {
        return {}
    }
    
    get mutations() {
        return {}
    }

    get getters() {
        return {}
    }

    get is_auth() {
        return store.state[this.keys.s_is_auth];
    }

    get roles() {
        return store.state[this.keys.s_roles];
    }
}