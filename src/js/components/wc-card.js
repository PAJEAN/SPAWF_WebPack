/* CSS */
import css from 'CSS/style.css';

try {
    (function() {
        const COMPONENT_NAME = 'wc-card';

        const TEMPLATE = document.createElement('template');
        TEMPLATE.innerHTML = /* html */`

            <style>
                /* -- TYPES -- */
                /* Positioning */
                /* Display & Box Model */
                /* Color */  
                /* Text */
                /* Other */

                /* Import base css */
                ${css.toString()}

                .card {
                    /* Positioning */
                    position: relative;
                    /* Display & Box Model */
                    border-radius: 20px;
                    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.2);
                    width: 300px;
                    height: 400px;
                    margin: 20px;
                    overflow: hidden;
                    /* Color */
                    background: #fff;
                    /* Other */                    
                    transition: 0.5s;
                }
                .circle {
                    /* Positioning */
                    position: relative;
                    /* Display & Box Model */
                    width: 100%;
                    height: 100%;
                    /* Color */  
                    background: #000;
                    /* Text */
                    text-align: center;
                    /* Other */
                    clip-path: circle(180px at center 0);
                }
                .circle h2 {
                    /* Display & Box Model */
                    padding: 30px 0;
                    /* Color */  
                    color: #fff;
                    /* Text */
                    font-size: 3em;
                }
                .content {
                    /* Positioning */
                    position: absolute;
                    bottom: 10px;
                    /* Display & Box Model */
                    width: 100%;
                    padding: 20px;
                    /* Text */
                    text-align: center;
                    letter-spacing: 1px;
                }
                .content p {
                    color: #666;
                }
                .content a {
                    /* Positioning */
                    position: relative;
                    /* Display & Box Model */
                    display: inline-block;
                    border-radius: 40px;
                    margin-top: 20px;
                    padding: 10px 20px;
                    /* Color */  
                    background: #000;
                    color: #fff;
                    /* Text */
                    text-decoration: none;
                }
            </style>

            <div id="main" class="flex" style="--f__jc: center; --f__ai: center;">
                <div class="card">
                    <div class="circle">
                        <h2 class="uppercase">
                            <slot name="title">Title</slot>
                        </h2>
                    </div>
                    <div class="content">
                        <p>
                            <slot name="content">Content</slot>
                        </p>
                        <a id="link" href="">
                            <slot name="link">Link</slot>
                        </a>
                    </div>
                </div>
            </div>

        `;

        window.customElements.define(COMPONENT_NAME, class extends HTMLElement {
            constructor() {
                super();
                this.attachShadow({mode: 'open'}); /* ShadowRoot */
            }

            _init() {
                let a_tag = this.content.querySelector('#link');
                if (this.hasAttribute('data-link')) {
                    a_tag.href = this.getAttribute('data-link');
                } else {
                    a_tag.style.display = 'none';
                }

                if (this.hasAttribute('data-color')) {
                    let circle = this.content.querySelector('.circle');
                    a_tag.style.background = this.getAttribute('data-color');
                    circle.style.background = this.getAttribute('data-color');
                }
            }

            connectedCallback() {
                this.shadowRoot.appendChild(TEMPLATE.content.cloneNode(true));
                this.content = this.shadowRoot.querySelector('#main');
                this._init();
            }

            disconnectedCallback() {}
            
            static get observedAttributes() { return []; }
            attributeChangedCallback(attrName, oldVal, newVal) {} /* Called for every change to attributes listed in the observedAttributes array */
        });
    })();
}
catch (err) {
    console.error(err);
}