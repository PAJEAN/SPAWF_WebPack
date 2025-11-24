// @ts-check

import { store } from 'JS/store/index';

export class MyButton {

    constructor() {
        this.keys = {
            // STATES.
            s_nb_clicks: `${this.constructor.name}_nb_clicks`,
            // ACTIONS
            a_increment_nb_clicks: `${this.constructor.name}_increment_nb_clicks`,
            // GETTERS.
        };
    }

    get states() {
        return {
            [this.keys.s_nb_clicks]: 0
        }
    }

    get actions() {
        return {
            [this.keys.a_increment_nb_clicks]: (store, nb_clicks) => {
                store.commit(this.keys.a_increment_nb_clicks, nb_clicks);
            }
        }
    }
    
    get mutations() {
        return {
            [this.keys.a_increment_nb_clicks]: (state, nb_clicks) => {
                state[this.keys.s_nb_clicks] = nb_clicks;
            }
        }
    }

    get getters() {
        return {}
    }

    /**
     * @returns {number}
     */
    get nb_clicks() {        
        return store.state[this.keys.s_nb_clicks];
    }

    Increment() {
        store.dispatch(this.keys.a_increment_nb_clicks, this.nb_clicks + 1);
    }

}