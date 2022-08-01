/* CSS */
import css from 'CSS/style.css';

(function () {
    const PAGE_NAME = 'page-home';

    const TEMPLATE = document.createElement('template');
    TEMPLATE.innerHTML = /* html */`

        <style>
            /* Import base css */
            ${css.toString()}

            #main-page {
                min-height: 100vh;
            }
            .title {
                margin: 0 50px 50px 50px;
            }
            .title__text {
                font-size: 4.5em;
                font-weight: 600;
            }
            .sub-title {
                text-align: center;
            }
        </style>

        <div id="main-page" class="flex" style="--f__fd: column; --f__ai: center; --f__jc: center;">
            <div class="title flex" style="--f__fd: column; --f__ai: center; --f__jc: center">
                <div class="title__text">SPAWF</div>
                <div class="sub-title">Une solution légère et native pour créer vos propres <i>Single Page Applications</i>.</div>
            </div>

            <div class="flex" style="--f__ai: center; --f__jc: center; flex-wrap: wrap;">
                <!-- <img src="assets/img/danger.png" alt="Danger"> -->
                <wc-card data-color="orange">
                    <div slot="title">Router</div>
                    <div slot="content">
                        Un router minimaliste est embarqué pour vous permettre de naviguer entre vos différentes pages web.
                    </div>
                </wc-card>

                <wc-card data-color="violet">
                    <div slot="title">Composants</div>
                    <div slot="content">
                        Utilisez la fonction native <i>customElements.define()</i> pour vous confectionner des composants personnels et universels.
                    </div>
                </wc-card>

                <wc-card data-color="lightgreen">
                    <div slot="title">State manager</div>
                    <div slot="content">
                        Dialoguez entre vos composants à l'aide d'un <i>State Manager</i> centralisé directement intégré.
                    </div>
                </wc-card>
            </div>

            <div>
                <a href="#/about"> A propos </a>
            </div>
        </div>

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

