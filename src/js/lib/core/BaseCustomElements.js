export class BaseCustomElements extends HTMLElement {
    static prefix = 'ce'

    static _tag_name = undefined
    static get tag_name() {
        return `${this.prefix}-${this.name}`.toLocaleLowerCase();
    }

    static set tag_name(tag_name) {
        this._tag_name = tag_name;
    }

    /**
     * @param {string} [tag_name] tag_name of a component (wc) is based on his class name and tag_name of pages is based on routes file.
     */
    static define(tag_name = undefined) {
        if (!customElements.get(tag_name)) {
            try {                
                this.tag_name = !tag_name ? this.tag_name : tag_name;
                customElements.define(this.tag_name, this);
                
            }
            catch (err) {
                console.error(err);
            }
        }
    }
}