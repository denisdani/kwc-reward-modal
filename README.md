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
    - `button-disabled`
        - *optional*
        - default is `false`
        - type: `Boolean`
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
<br/>
Display a formatted text title, using the `top` slot:

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
<br/>
Display a formatted button, using the `bottom` slot:

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

## Background
<br/>
Show a background behind the modal.
You can customize color & opacity:

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
<br/>
If enabled, on click outside the element the modal will close.

Please note that if you have background enabled, it counts as a click.

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
<br/>
Display an icon on the top right to close the modal:

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

## No-overflow
<br/>
If enabled, it allows to have `overflow: hidden` on `<body>`:

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