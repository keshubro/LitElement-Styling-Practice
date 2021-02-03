import { LitElement, html, css } from "lit-element";
import { classMap } from 'lit-html/directives/class-map';
import { styleMap } from 'lit-html/directives/style-map';

export class NextElement extends LitElement
{
    constructor()
    {
        super();
        this.classes = { mydiv: true };
        this.styles = { color: 'green', fontFamily: 'Roboto', fontSize: '20px' };
    }

    static get styles()
    {
        return css`
            :host{
                background-color: var(--themeColor);
            }

            .mydiv{
                border: 2px solid;
            }
        `;
    }

    render()
    {
        return html`
            <div>YOOOOO</div>
            <div class=${classMap(this.classes)} style=${styleMap(this.styles)}>Some Content</div>
        `;
    }
}

customElements.define('next-element', NextElement);