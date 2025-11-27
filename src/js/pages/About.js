// @ts-check

import { BaseCustomElements } from "JS/lib/core/base-custom-elements";
/** CSS **/
import css from "CSS/style.css";
/** Store **/
import { store } from "JS/store";
import { MyButtonManager } from "JS/store";
/** Components **/
import { InputColor } from "JS/components/input-color";

const ID = {
    main: 'div-main',
    nb_clicks: 'div-nb-clicks',
    btn: 'btn-click',
    color: 'input-color',
    color_text: 'div-color-text',
};

const TEMPLATE = document.createElement('template');
TEMPLATE.innerHTML = /* html */`

    <style>
        /* Import base css */
        ${css.toString()}
    </style>

    <div id="${ID.main}">
        <div class="container" style="padding: 20px">
            <h3 style="padding: 1rem">Une nouvelle page sans rechargement !</h3>
            <hr style=>
            <div class="flex" style="--f__g: 20px; padding: 1rem">
                <h4>Binding</h4>
                <button id="${ID.btn}">Cliquez ici</button>
                <div id="${ID.nb_clicks}">
                    0
                </div>
            </div>
            <hr>
            <div class="flex" style="--f__g: 20px; padding: 1rem">
                <h4>Observing</h4>
                <${InputColor.tag_name} id="${ID.color}"></${InputColor.tag_name}>
                <div id="${ID.color_text}">
                    ...
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

    #change_color_text() {
        let color = this.#content.querySelector(`#${ID.color}`);
        let color_text = this.#content.querySelector(`#${ID.color_text}`);
        color_text.textContent = color.getAttribute(InputColor.color_attribute_name);
    }

    #nb_clicks() {
        this.querySelector(`#${ID.nb_clicks}`).textContent = MyButtonManager.nb_clicks.toString();
    }
    
    /**
     * 
     * @param {MutationRecord[]} mutations_list 
     */
    #observer(mutations_list) {
        for(let mutation of mutations_list) { // List of detected mutations.
            if (mutation.type === 'attributes' && mutation.attributeName === InputColor.color_attribute_name) { // Check if it's an attribute modification.
                this.#change_color_text();
            }
        }
    }

    #observing() {
        let color = this.#content.querySelector(`#${ID.color}`);
        this.observer.observe(color, { attributes: true });
    }

    #init() {
        let nb_clicks = this.querySelector(`#${ID.nb_clicks}`);
        nb_clicks.textContent = MyButtonManager.nb_clicks.toString();
        this.#change_color_text();
        this.#observing();
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

        this.unsubscribe = store.events.subscribe(MyButtonManager.s_nb_clicks, this.#nb_clicks.bind(this));

        this.observer = new MutationObserver(this.#observer.bind(this));

        this.#init();
        this.#init_events();
    }

    disconnectedCallback() {
        this.unsubscribe();
        this.observer && this.observer.disconnect();
    }
}
