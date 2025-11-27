// @ts-check

import { store } from 'JS/store/index';

export class MyButton {

    /**
     * Keys.
     */
    constructor() {
        // STATES.
        this.s_nb_clicks = `${this.constructor.name}_nb_clicks`;
        // ACTIONS
        this.a_increment_nb_clicks = `${this.constructor.name}_increment_nb_clicks`;
        // GETTERS.
    }

    get states() {
        return {
            [this.s_nb_clicks]: 0
        }
    }

    get actions() {
        return {
            [this.a_increment_nb_clicks]: (store, nb_clicks) => {
                store.commit(this.a_increment_nb_clicks, nb_clicks);
            }
        }
    }
    
    get mutations() {
        return {
            [this.a_increment_nb_clicks]: (state, nb_clicks) => {
                state[this.s_nb_clicks] = nb_clicks;
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
        return store.state[this.s_nb_clicks];
    }

    Increment() {
        store.dispatch(this.a_increment_nb_clicks, this.nb_clicks + 1);
    }

}