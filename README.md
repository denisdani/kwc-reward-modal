# \<kwc-reward-modal\>

<br/>
You can use some pre-built functionality, or simply use the 3 slots `kwc-reward-modal` provides and fill them with your content.

<br/>

## Basic functionality:

```html
<kwc-reward-modal></kwc-reward-modal>
```

### Properties:

- HTML attributes:
    - `top-tile`
        - *optional*
        - default is `''`
        - type: `String`
    - `button`
        - *optional*
        - default is `''`
        - type: `String`
        - possible values:
            - `open`
            - `skip`
            - `continue`
    - `custom-button`
        - *optional*
        - default is `null`
        - type: `Object`
        - object fields:
            - `label`
                - *required*
                - type: `String`
            - `eventBack`
                - *required*
                - type: `String`
    - `button-disabled`
        - *optional*
        - default is `false`
        - type: `Boolean`
    - `opened`
        - default is `false`
        - type: `Boolean`
        - properties:
            - reflect to attribute
    - `background`
        - *optional*
        - default is `false`
        - type: `Boolean`
    - `focus-out`
        - *optional*
        - default is `false`
        - type: `Boolean`
    - `closable`
        - *optional*
        - default is `false`
        - type: `Boolean`
    - `close-icon`
        - *optional*
        - default is `''`
            - NB: You always have a default icon: `kwc-ui-icons:close`
        - type: `String`
    - `close-text`
        - *optional*
        - default is `''`
        - type: `String`
    - `close-on`
        - *optional*
        - default is `right`
        - type: `String`
    - `no-overflow`
        - *optional*
        - default is `false`
        - type: `Boolean`

- CSS variables:
    - `--kwc-reward-modal-position`
    - `--kwc-reward-modal-background`
    - `--kwc-reward-modal-display`
    - `--kwc-reward-modal-flex`
    - `--kwc-reward-modal-flex-direction`
    - `--kwc-reward-modal-align-items`
    - `--kwc-reward-modal-justify-content`
    - `--kwc-reward-modal-width`
    - `--kwc-reward-modal-height`
    - `--kwc-reward-modal-z-index`
    - `--kwc-reward-modal-margin`
    - `--kwc-reward-modal-border-radius`
    - `--kwc-reward-modal-font-family`
    - `--kwc-reward-modal-outline`
    - `--kwc-reward-modal-close-width`
    - `--kwc-reward-modal-close-height`
    - `--kwc-reward-modal-close-position`
    - `--kwc-reward-modal-close-top`
    - `--kwc-reward-modal-close-right`
    - `--kwc-reward-modal-close-hover-cursor`
    - `--kwc-reward-modal-background-background`
    - `--kwc-reward-modal-background-opacity`
    - `--kwc-reward-modal-title-color`
    - `--kwc-reward-modal-title-font-weight`
    - `--kwc-reward-modal-title-font-size`
    - `--kwc-reward-modal-title-margin-top`
    - `--kwc-reward-modal-title-margin-bottom`
    - `--kwc-reward-modal-button-color`
    - `--kwc-reward-modal-button-border`
    - `--kwc-reward-modal-button-padding`
    - `--kwc-reward-modal-button-border-radius`
    - `--kwc-reward-modal-button-font-size`
    - `--kwc-reward-modal-button-font-weight`
    - `--kwc-reward-modal-button-text-transform`;
    - `--kwc-reward-modal-button-margin-top`
    - `--kwc-reward-modal-button-background`
    - `--kwc-reward-modal-button-hover-cursor`
    - `--kwc-reward-modal-button-disabled-background`;

<br/>

## Top-title
Display a formatted text title, using the `top` slot:
<br/>

```html
<kwc-reward-modal top-title="Kano Computing"></kwc-reward-modal>
```

### Properties:

- HTML attributes:
    - `top-tile`
        - *optional*
        - default is `''`
        - type: `String`

- CSS variables:
    - `--kwc-reward-modal-title-color`
    - `--kwc-reward-modal-title-font-weight`
    - `--kwc-reward-modal-title-font-size`
    - `--kwc-reward-modal-title-margin-top`
    - `--kwc-reward-modal-title-margin-bottom`

<br/>

## Button
Display a formatted button, using the `bottom` slot:
<br/>

```html
<kwc-reward-modal button="skip"></kwc-reward-modal>
```
or, if you want to disable the button:
```html
<kwc-reward-modal button="continue" button-disabled></kwc-reward-modal>
```

### Properties:

- HTML attributes:
    - `button`
        - *optional*
        - default is `''`
        - type: `String`
        - possible values:
            - `open`
            - `skip`
            - `continue`
    - `button-disabled`
        - *optional*
        - default is `false`
        - type: `Boolean`

- CSS variables:
    - `--kwc-reward-modal-button-color`
    - `--kwc-reward-modal-button-border`
    - `--kwc-reward-modal-button-padding`
    - `--kwc-reward-modal-button-border-radius`
    - `--kwc-reward-modal-button-font-size`
    - `--kwc-reward-modal-button-font-weight`
    - `--kwc-reward-modal-button-text-transform`;
    - `--kwc-reward-modal-button-margin-top`
    - `--kwc-reward-modal-button-background`
    - `--kwc-reward-modal-button-hover-cursor`
    - `--kwc-reward-modal-button-disabled-background`;

<br/>

## Custom Button
Display a formatted custom button, using the `bottom` slot.

You can receive custom event back when clicked.

Note: the `custom-button` property override the `button` property.
<br/>

```html
<kwc-reward-modal custom-button="[[myCustomButton]]"></kwc-reward-modal>
```
or, if you want to disable the button:
```html
<kwc-reward-modal custom-button="[[myCustomButton]]" button-disabled></kwc-reward-modal>
```

### Custom button object example:

```js
const myCustomButton = {
    label: 'My awesome button',
    eventBack: 'my-awesome-button-clicked',
};
```

### Properties:

- HTML attributes:
    - `custom-button`
        - *optional*
        - default is `null`
        - type: `Object`
        - object fields:
            - `label`
                - *required*
                - type: `String`
            - `eventBack`
                - *required*
                - type: `String`
    - `button-disabled`
        - *optional*
        - default is `false`
        - type: `Boolean`

- CSS variables:
    - `--kwc-reward-modal-button-color`
    - `--kwc-reward-modal-button-border`
    - `--kwc-reward-modal-button-padding`
    - `--kwc-reward-modal-button-border-radius`
    - `--kwc-reward-modal-button-font-size`
    - `--kwc-reward-modal-button-font-weight`
    - `--kwc-reward-modal-button-text-transform`;
    - `--kwc-reward-modal-button-margin-top`
    - `--kwc-reward-modal-button-background`
    - `--kwc-reward-modal-button-hover-cursor`
    - `--kwc-reward-modal-button-disabled-background`;

<br/>

## Background
Show a background behind the modal.
You can customize color & opacity:
<br/>

```html
<kwc-reward-modal background></kwc-reward-modal>
```

### Properties:

- HTML attributes:
    - `background`
        - *optional*
        - default is `false`
        - type: `Boolean`

- CSS variables:
    - `--kwc-reward-modal-background-background`
    - `--kwc-reward-modal-background-opacity`

<br/>

## Focus-out
If enabled, on click outside the element the modal will close.

Please note that if you have background enabled, it counts as a click.
<br/>

```html
<kwc-reward-modal focus-out></kwc-reward-modal>
```

### Properties:

- HTML attributes:
    - `focus-out`
        - *optional*
        - default is `false`
        - type: `Boolean`

<br/>

## Closable
Display the default icon on the top to close the modal:
<br/>

```html
<kwc-reward-modal closable></kwc-reward-modal>
```

### Properties:

- HTML attributes:
    - `closable`
        - *optional*
        - default is `false`
        - type: `Boolean`

- CSS variables:
    - `--kwc-reward-modal-close-width`
    - `--kwc-reward-modal-close-height`
    - `--kwc-reward-modal-close-position`
    - `--kwc-reward-modal-close-top`
    - `--kwc-reward-modal-close-right`
    - `--kwc-reward-modal-close-hover-cursor`

<br/>

## Close-icon
Display a custom icon on the top to close the modal:
<br/>

```html
<kwc-reward-modal close-icon="https://yoursite.com/img.png" closable></kwc-reward-modal>
```

### Properties:

- HTML attributes:
    - `close-icon`
        - *optional*
        - default is `''`
            - NB: You always have a default icon: `kwc-ui-icons:close`
        - type: `String`
    - `closable`
        - *optional*
        - default is `false`
        - type: `Boolean`

- CSS variables:
    - `--kwc-reward-modal-close-width`
    - `--kwc-reward-modal-close-height`
    - `--kwc-reward-modal-close-position`
    - `--kwc-reward-modal-close-top`
    - `--kwc-reward-modal-close-right`
    - `--kwc-reward-modal-close-hover-cursor`

<br/>

## Close-text
Display a custom text on the top, near the icon, to close the modal:
<br/>

```html
<kwc-reward-modal close-text="Back to map" closable></kwc-reward-modal>
```

### Properties:

- HTML attributes:
    - `close-text`
        - *optional*
        - default is `''`
        - type: `String`
    - `closable`
        - *optional*
        - default is `false`
        - type: `Boolean`

- CSS variables:
    - `--kwc-reward-modal-close-width`
    - `--kwc-reward-modal-close-height`
    - `--kwc-reward-modal-close-position`
    - `--kwc-reward-modal-close-top`
    - `--kwc-reward-modal-close-right`
    - `--kwc-reward-modal-close-hover-cursor`

- CSS mixin:
    - `--kwc-reward-modal-close-text`

<br/>

## Close-on
Choose where to display the text and the icon to close the modal (`left`, `right`):
<br/>

```html
<kwc-reward-modal close-on="left" closable></kwc-reward-modal>
```

### Properties:

- HTML attributes:
    - `close-on`
        - *optional*
        - default is `right`
        - type: `String`
    - `closable`
        - *optional*
        - default is `false`
        - type: `Boolean`

- CSS variables:
    - `--kwc-reward-modal-close-width`
    - `--kwc-reward-modal-close-height`
    - `--kwc-reward-modal-close-position`
    - `--kwc-reward-modal-close-top`
    - `--kwc-reward-modal-close-right`
    - `--kwc-reward-modal-close-hover-cursor`

<br/>

## No-overflow
If enabled, it allows to have `overflow: hidden` on `<body>`:
<br/>

```html
<kwc-reward-modal no-overflow></kwc-reward-modal>
```

### Properties:

- HTML attributes:
    - `no-overflow`
        - *optional*
        - default is `false`
        - type: `Boolean`

<br/>