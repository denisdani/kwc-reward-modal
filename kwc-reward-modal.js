import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-pages/iron-pages.js';
import '@kano/kwc-style/typography.js';

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
					position: var(--kwc-reward-modal-position, fixed);
					top: var(--kwc-reward-modal-top, 0);
					left: var(--kwc-reward-modal-left, 0);
					background: var(--kwc-reward-modal-background, #414A51);
					display: var(--kwc-reward-modal-display, flex);
					flex: var(--kwc-reward-modal-flex, 1);
					flex-direction: var(--kwc-reward-modal-flex-direction, column);
					align-items: var(--kwc-reward-modal-align-items, center);
					justify-content: var(--kwc-reward-modal-justify-content, center);
					width: calc(var(--kwc-reward-modal-width, 100%) - calc(var(--kwc-reward-modal-margin, 16px) * 2));
					height: calc(var(--kwc-reward-modal-height, 100%) - calc(var(--kwc-reward-modal-margin, 16px) * 2));
					z-index: var(--kwc-reward-modal-z-index, 1);
					margin: var(--kwc-reward-modal-margin, 16px);
					border-radius: var(--kwc-reward-modal-border-radius, 16px);
					font-family: var(--kwc-reward-modal-font-family, var(--font-body));
				}
				*:focus {
					outline: var(--kwc-reward-modal-outline, none);
				}
				slot[name="top"] .title {
					color: var(--kwc-reward-modal-title-color, #A1A5A8);
					font-weight: var(--kwc-reward-modal-title-font-weight, bold);
					font-size: var(--kwc-reward-modal-title-font-size, 24.5px);
					margin-top: var(--kwc-reward-modal-title-margin-top, 0);
					margin-bottom: var(--kwc-reward-modal-title-margin-bottom, 16px);
				}
				slot[name="bottom"] button {
					border: var(--kwc-reward-modal-button-border, none);
					padding: var(--kwc-reward-modal-button-padding, 11px 21px);
					border-radius: var(--kwc-reward-modal-button-border-radius, 25px);
					font-size: var(--kwc-reward-modal-button-font-size, 16px);
					font-weight: var(--kwc-reward-modal-button-font-weight, bold);
					color: var(--kwc-reward-modal-button-color, #FFF);
					text-transform: var(--kwc-reward-modal-button-text-transform, capitalize);
					margin-top: var(--kwc-reward-modal-button-margin-top, 32px);
					background: var(--kwc-reward-modal-button-background, #FE6B01);
				}
				slot[name="bottom"] button:hover {
					cursor: var(--kwc-reward-modal-button-hover-cursor, pointer);
				}
				slot[name="bottom"] button[disabled] {
					background: var(--kwc-reward-modal-button-disabled-background, #9FA4A8);
				}
			</style>
			<slot name="top">
				<p class="title" hidden$="[[!topTitle]]">[[topTitle]]</p>
			</slot>
			<slot name="middle"></slot>
			<slot name="bottom">
				<iron-pages selected="[[button]]" attr-for-selected="typology">
					<button typology="open" on-click="open" disabled$="[[buttonDisabled]]">open</button>
					<button typology="skip" on-click="skip" disabled$="[[buttonDisabled]]">skip</button>
					<button typology="continue" on-click="continue" disabled$="[[buttonDisabled]]">continue</button>
				</iron-pages>
			</slot>
		`;
	}
	static get properties() {
		return {
			topTitle: {
				type: String,
				value: '',
			},
			button: {
				type: String,
				value: '',
			},
			buttonDisabled: {
				type: Boolean,
				value: false,
			}
		};
	}
}

window.customElements.define('kwc-reward-modal', KwcRewardModal);
