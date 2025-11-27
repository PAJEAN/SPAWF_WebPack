// @ts-check

import { BaseCustomElements } from "JS/lib/core/base-custom-elements";

const ID = {
    main: 'div-main'
};

const TEMPLATE = document.createElement('template');
TEMPLATE.innerHTML = /* html */`

    <style></style>

    <div id="${ID.main}"></div>
`;

export class Boilerplate extends BaseCustomElements {
    /** @type {HTMLDivElement} */
    #content;

    constructor() {
        super();
    }

    connectedCallback() {
        this.appendChild(TEMPLATE.content.cloneNode(true));
        this.#content = this.querySelector(`#${ID.main}`);
    }

    disconnectedCallback() {}
}
