export const keys = {}

export const module = {
    state: {
        is_authentication: false,
        roles: []
    },
    actions: {},
    mutations: {},
    getters: {
        'is_auth': (state) => state['is_authentication'] ? state['is_authentication'] : false,
        'roles': (state) => state['roles'] ? state['roles'] : []
    }
}