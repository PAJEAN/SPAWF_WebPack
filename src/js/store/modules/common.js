import { COMMON as NS } from './__ns__';

export const keys = {
    // STATES.
    s_is_auth: `${NS}_is_auth`,
    s_roles: `${NS}_roles`,
    // ACTIONS.
    // GETTERS.
}

export const module = {
    state: {
        [keys.s_is_auth]: false,
        [keys.s_roles]: []
    },
    actions: {},
    mutations: {},
    getters: {}
}