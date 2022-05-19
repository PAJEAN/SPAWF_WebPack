import { store } from '../store/index';

export default (function () {
    try {
        const PAGE_NAME = 'page-home';

        const TEMPLATE = document.createElement('template');
        TEMPLATE.innerHTML = /* html */`

            <style>
                .container {
                    margin: 100px;
                    color: white;
                }
                a {
                    color: rgb(var(--on-background-color));
                }
            </style>

            <div id="main">
                <wc-header></wc-header>
                <div class="container">
                    <h3>New project</h3>
                    <div>
                        Begin a new project with this template !
                        <a href="#/about">About me !</a>
                        <div id="is-auth"></div>
                        <img src="img/danger.png" alt="Danger">
                    </div>
                </div>
                <wc-test></wc-test>
            </div>

        `;

        window.customElements.define(PAGE_NAME, class extends HTMLElement {
            constructor() {
                super();
            }
            
            connectedCallback () {
                this.appendChild(TEMPLATE.content.cloneNode(true));
                this.content = this.querySelector('#main');

                let div = this.content.querySelector('#is-auth');
                div.innerHTML = store.state.is_auth;
            }
            
            disconnectedCallback () {}
        });
    }
    catch (err) {
        console.error(err);
    }
})();

