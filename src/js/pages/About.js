// @ts-check

import { BaseCustomElements } from "JS/lib/core/BaseCustomElements";
/** CSS **/
import css from "CSS/style.css";
/** Store **/
import { store } from "JS/store";
import { MyButtonManager } from "JS/store";

const ID = {
    main: 'div-main',
    nb_clicks: 'div-nb-clicks',
    btn: 'btn-click'
};

const TEMPLATE = document.createElement('template');
TEMPLATE.innerHTML = /* html */`

    <style>
        /* Import base css */
        ${css.toString()}
    </style>

    <div id="${ID.main}">
        <div class="container" style="padding: 20px">
            <h3>Une nouvelle page sans rechargement !</h3>
            <div class="flex" style="margin-top: 20px; --f__g: 20px">
                <button id="${ID.btn}">Cliquez ici</button>
                <div id="${ID.nb_clicks}">
                    0
                </div>
            </div>
        </div>
    </div>
`;

export class About extends BaseCustomElements {
    /** @type {HTMLDivElement} */
    #content;

    constructor() {
        super();
    }

    #nb_clicks() {
        this.querySelector(`#${ID.nb_clicks}`).textContent = MyButtonManager.nb_clicks.toString();
    }

    #init() {
        let nb_clicks = this.querySelector(`#${ID.nb_clicks}`);
        nb_clicks.textContent = MyButtonManager.nb_clicks.toString();
    }

    #init_events() {
        let btn = this.#content.querySelector(`#${ID.btn}`);
        btn.addEventListener('click', () => {
            MyButtonManager.Increment();
        });
    }

    connectedCallback() {
        this.appendChild(TEMPLATE.content.cloneNode(true));
        this.#content = this.querySelector(`#${ID.main}`);

        this.unsubscribe = store.events.subscribe(MyButtonManager.keys.s_nb_clicks, this.#nb_clicks.bind(this));
        this.#init();
        this.#init_events();
    }

    disconnectedCallback() {
        this.unsubscribe();
    }
}
