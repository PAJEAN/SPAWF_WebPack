// @ts-check

import { BaseCustomElements } from "JS/lib/core/base-custom-elements";

const ID = {
    main: 'div-main',
    input: 'input-color'
};

const TEMPLATE = document.createElement('template');
TEMPLATE.innerHTML = /* html */`

    <style></style>

    <div id="${ID.main}">
        <input id="${ID.input}" type="color">
    </div>
`;

export class InputColor extends BaseCustomElements {
    static color_attribute_name = 'data-color';

    /** @type {HTMLDivElement} */
    #content;

    constructor() {
        super();
        this.attachShadow({mode: 'open'}); /* ShadowRoot */
    }

    #init() {
        /** @type {HTMLInputElement} */
        let input = this.#content.querySelector(`#${ID.input}`);
        this.setAttribute(InputColor.color_attribute_name, input.value);
    }

    #init_events() {
        /** @type {HTMLInputElement} */
        let input = this.#content.querySelector(`#${ID.input}`);
        input.addEventListener('change', () => {
            this.setAttribute(InputColor.color_attribute_name, input.value);
        });
    }

    connectedCallback() {
        this.shadowRoot.appendChild(TEMPLATE.content.cloneNode(true));
        this.#content = this.shadowRoot.querySelector(`#${ID.main}`);

        this.#init();
        this.#init_events();
    }

    disconnectedCallback() {}
}

InputColor.define(import.meta.url, true);