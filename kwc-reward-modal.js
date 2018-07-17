import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-pages/iron-pages.js';
import '@polymer/iron-icon/iron-icon.js';

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
				:host .background {
					background: var(--kwc-reward-modal-background-background, #000);
					width: 0;
					height: 0;
					position: fixed;
					top: 0;
					left: 0;
					z-index: 1;
					opacity: 0;
					transition: opacity 0.3s ease;
				}
				:host([opened]) .background {
					width: 100vw;
					height: 100vh;
					opacity: var(--kwc-reward-modal-background-opacity, .4);
				}
				:host .content {
					position: var(--kwc-reward-modal-position, fixed);
					top: calc(50% - var(--kwc-reward-modal-margin, 16px));
					left: calc(50% - var(--kwc-reward-modal-margin, 16px));
					transform: translate(-50%, -50%);
					background: var(--kwc-reward-modal-background, #414A51);
					display: var(--kwc-reward-modal-display, flex);
					flex: var(--kwc-reward-modal-flex, 1);
					flex-direction: var(--kwc-reward-modal-flex-direction, column);
					align-items: var(--kwc-reward-modal-align-items, center);
					justify-content: var(--kwc-reward-modal-justify-content, center);
					width: 0px;
					height: 0px;
					z-index: var(--kwc-reward-modal-z-index, 2);
					margin: var(--kwc-reward-modal-margin, 16px);
					border-radius: var(--kwc-reward-modal-border-radius, 16px);
					font-family: var(--kwc-reward-modal-font-family, var(--font-body));
					overflow: hidden;
					transition: width .5s ease,
								height .5s ease;
				}
				:host([opened]) .content {
					width: calc(var(--kwc-reward-modal-width, 100%) - calc(var(--kwc-reward-modal-margin, 16px) * 2));
					height: calc(var(--kwc-reward-modal-height, 100%) - calc(var(--kwc-reward-modal-margin, 16px) * 2));
				}
				*:focus {
					outline: var(--kwc-reward-modal-outline, none);
				}
				:host .content ::slotted(*),
				:host .content * {
					opacity: 0;
					transition: opacity .2s ease;
					transition-delay: 0s;
				}
				:host([opened]) .content ::slotted(*),
				:host([opened]) .content * {
					opacity: 1;
					transition: opacity .5s ease;
					transition-delay: .4s;
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
				.closable {
					width: var(--kwc-reward-modal-close-width, 16px);
					height: var(--kwc-reward-modal-close-height, 16px);
					position: var(--kwc-reward-modal-close-position, absolute);
					top: var(--kwc-reward-modal-close-top, 16px);
					right: var(--kwc-reward-modal-close-right, 16px);
				}
				.closable:hover {
					cursor: var(--kwc-reward-modal-close-hover-cursor, pointer);
				}
			</style>
			<div class="background" hidden$="[[!background]]"></div>
			<div class="content">
				<iron-icon src="https://goo.gl/L5X4o4" class="closable" hidden$="[[!closable]]" on-click="hide"></iron-icon>
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
			</div>
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
			},
			opened: {
				type: Boolean,
				value: false,
				reflectToAttribute: true,
			},
			closable: {
				type: Boolean,
				value: false,
			},
			focusOut: {
				type: Boolean,
				value: false,
				observer: '_focusOutChanged',
			},
			background: {
				type: Boolean,
				value: false,
			},
			noOverflow: {
				type: Boolean,
				value: false,
				observer: '_noOverflowChanged',
			}
		};
	}
	constructor() {
		super();
		this.handleFocusListener = this.handleFocusListener.bind(this);
	}
	connectedCallback() {
		super.connectedCallback();
		this.initFocusOut();
	}
	initFocusOut() {
		if (this.focusOut) {
			this.addFocusListener();
		} else {
			this.removeFocusListener();
		}
	}
	addFocusListener() {
		document.addEventListener('click', this.handleFocusListener);
	}
	removeFocusListener() {
		document.removeEventListener('click', this.handleFocusListener);
	}
	handleFocusListener(e) {
		var target = e.target;

		if (target != this && target.parentElement != this) {
			this.checkIfClose();
		}

		if (this.focusOut && this.background) {
			if (e.path[0].className == 'background') {
				this.checkIfClose();
			}
		}
	}
	checkIfClose() {
		if (this.opened) {
			if (new Date() - this.openedTime >= 500) {
				this.hide();
			}
		}
	}
	_focusOutChanged(value) {
		if(value) {
			this.addFocusListener();
		} else {
			this.removeFocusListener();
		}
	}
	show() {
		this.set('opened', true);
		this.openedTime = new Date();

		if (this.noOverflow) {
			this.setBodyOverflow('hidden');
		}
	}
	hide() {
		this.set('opened', false);
		this.setBodyOverflow('auto');
	}
	_noOverflowChanged(value) {
		if(value && this.opened) {
			this.setBodyOverflow('hidden');
		} else {
			this.setBodyOverflow('auto');
		}
	}
	setBodyOverflow(overflow) {
		document.querySelector('body').style.overflow = overflow;
	}
}

window.customElements.define('kwc-reward-modal', KwcRewardModal);
