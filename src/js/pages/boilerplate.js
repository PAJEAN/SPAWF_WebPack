(function() {
    const PAGE_NAME = 'page-boilerplate';

    const TEMPLATE = document.createElement('template');
    TEMPLATE.innerHTML = /* html */`

        <style></style>

        <div id="main-page"></div>

    `;

    window.customElements.define(PAGE_NAME, class extends HTMLElement {
        constructor() {
            super();
        }
        
        connectedCallback () {
            this.appendChild(TEMPLATE.content.cloneNode(true));
            this.content = this.querySelector('#main-page');
        }
        
        disconnectedCallback () {}
    });
})();

