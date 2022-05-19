import styles from '../../css/style.css';

export default (function () {
    try {
        const COMPONENT_NAME = 'wc-test';
        
        const TEMPLATE = document.createElement('template');
        TEMPLATE.innerHTML = /* html */`

            <style>
                ${styles.toString()}
                
                #main {
                    /* Position */
                    top: 0;
                    left: 0;
                    z-index: 1;
                    /* Size */
                    height: 100px;
                    padding: 0 100px;
                }
            </style>

            <div id="main" class="flex" style="--f__jc: space-between; --f__ai: center">
                <div class="${styles.locals.test}">FOOTER</div>
            </div>

        `;
        
        window.customElements.define(COMPONENT_NAME, class extends HTMLElement {
            constructor() {
                super();
                this.attachShadow({mode: 'open'}); /* ShadowRoot */
            }
            
            connectedCallback() {
                this.shadowRoot.appendChild(TEMPLATE.content.cloneNode(true));
                this.content = this.shadowRoot.querySelector('#main');
            }
            
            disconnectedCallback() {}
        });
    }
    catch (err) {
        console.error(err);
    }
})();