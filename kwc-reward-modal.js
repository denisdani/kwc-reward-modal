import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `kwc-reward-modal`
 * 
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class KwcRewardModal extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'kwc-reward-modal',
      },
    };
  }
}

window.customElements.define('kwc-reward-modal', KwcRewardModal);
