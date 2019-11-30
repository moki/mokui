theme
--------------------------------------------------------------------------------

Description
--------------------------------------------------------------------------------
theme subsystem provider, defines components appearance.
Applies minimal css reset.
Important note: modificators use rem as a unit, so it is possible to scale
theme by manipulating html node's font-size property, preferably by scaling
it in percentages(defaults are 100% on mobile and 112.5% on tablet and above)

Installation
--------------------------------------------------------------------------------
```
yarn add @moki.codes/mokui-theme
```

Styles
--------------------------------------------------------------------------------
```
@import "@moki.codes/mokui-theme/dist/mokui-theme.css"
```

Basic Usage
--------------------------------------------------------------------------------
```
...
<body class="theme
             theme_color_light
             theme_msp_perfect_fifth
             ...
             ">
        ...
        <!-- theme provided to children -->
        ...
</body>
```

Modificators
--------------------------------------------------------------------------------
| name        | value         | description                                    |
| ----------- | ------------- | ---------------------------------------------- |
| typography  | default       | establishes default typography                 |
|             |               | system font stack                              |
| breakpoint  | default       | defines default screen breakpoints,            |
|             |               | althought some are still hardcoded due         |
|             |               | to native css limitations                      |
|             |               |   --screen-s: 480px;                           |
|             |               |   --screen-m: 766px;                           |
|             |               |   --screen-l: 990px;                           |
|             |               |   --screen-xl: 1194px;                         |
| msp         | perfect-fifth | defines perfect fifth as a primary             |
|             |               | modular scale                                  |
| msc         | major-third   | defines major third as a complimentary         |
|             |               | both modular scales are scalings of the base   |
|             |               | ms*-0 by the ratio ms*-1                       |
|             |               | variables from ms*-m1 down to the ms*-m6       |
|             |               | represents 1/ratio^n, where ratio  is the      |
|             |               | scale ratio(1.5 in case of the perfect fifth)  |
|             |               | and n is range [1, 6].                         |
|             |               | variables from ms*-1 up to the ms*-16          |
|             |               | represents ratio^n, where ratio is the scale   |
|             |               | ratio(1.25 in case of the major third)         |
|             |               | and n is the range [1, 16]                     |
| gap         | default       | default gap is defined as a base of the        |
|             |               | primary modular scale.                         |
| color       | light         | defines light color palette variables          |
|             | dark          | defines dark color palette variables           |
|             |               | both color palette variables are:              |
|             |               |   --color-primary                              |
|             |               |   --color-primary-light                        |
|             |               |   --color-primary-dark                         |
|             |               |   --color-secondary                            |
|             |               |   --color-secondary-light                      |
|             |               |   --color-secondary-dark                       |
|             |               |   --color-background                           |
|             |               |   --color-surface                              |
|             |               |   --color-error                                |
|             |               |   --color-success                              |
|             |               |   --color-on-primary                           |
|             |               |   --color-on-primary-light                     |
|             |               |   --color-on-primary-dark                      |
|             |               |   --color-on-secondary                         |
|             |               |   --color-on-secondary-light                   |
|             |               |   --color-on-secondary-dark                    |
|             |               |   --color-on-background                        |
|             |               |   --color-on-surface                           |
|             |               |   --color-on-error                             |
|             |               |   --color-on-success                           |
| grid-       | default       | sets grid columns variables used inside grid   |
| columns     |               | --grid-columns-xs: 4                           |
|             |               | --grid-columns-s: 8                            |
|             |               | --grid-columns-m: 8                            |
|             |               | --grid-columns-l: 12                           |
|             |               | --grid-columns-xl: 12                          |
| elevation   | default       | sets elevation variables used inside           |
|             |               | the elevation block                            |
|             |               | --elevation-color-umbra: rgba(0, 0, 0, 0.2)    |
|             |               | --elevation-color-penumbra: rgba(0, 0, 0, 0.14)|
|             |               | --elevation-color-ambient: rgba(0, 0, 0, 0.12) |
|             |               | --elevation-transition-duration: 0.28s         |

Elements
--------------------------------------------------------------------------------
* toggle

toggle
--------------------------------------------------------------------------------
toggle is a toggler which is triggers THEME_TOGGLE_EVENT, given to two html
elements one representing to the light and another to the dark theme switch.

Modificators
--------------------------------------------------------------------------------
| name        | value         | description                                    |
| ----------- | ------------- | ---------------------------------------------- |
| hide        |               | hides toggle element                           |

Javascript
--------------------------------------------------------------------------------

Basic Usage
--------------------------------------------------------------------------------
```
import { Theme } from "@moki.codes/mokui-theme";

const themeEl = document.querySelector(".theme");
const themeComponent = Theme(themeEl);
/* when done */
themeComponent.destroy();
```

Exports
--------------------------------------------------------------------------------
* `Theme`
* `ThemeComponent`
* `ThemeAdapter`

Theme
--------------------------------------------------------------------------------
`(e: Element) => ThemeComponent<ThemeAdapter<Emitter<Listener<Component<{}>>>>>`

Theme factory is a composition of the ThemeComponent of ThemeAdapter
of Emitter of Listener of Component.

ThemeComponent
--------------------------------------------------------------------------------
`<T extends ThemeAdapter<Emitter<Listener<Component<{}>>>>>(o: T) => ThemeComponent<T>`

ThemeComponent factory provides core theme functionality:
determines initial theme from elment `.theme` and switches color theme, when
THEME_TOGGLE_EVENT occurs.

Properties
--------------------------------------------------------------------------------
| name                        | description                                    |
| --------------------------- | ---------------------------------------------- |
| toggleLight: HTMLElement    | initialized to the HTMLElement child of the    |
|                             | root theme element with selector               |
|                             | strings.THEME_COLOR_TOGGLE_LIGHT_SELECTOR      |
| toggleDark: HTMLElement     | initialized to the HTMLElement child of the    |
|                             | root theme element with selector               |
|                             | strings.THEME_COLOR_TOGGLE_DARK_SELECTOR       |

Methods
--------------------------------------------------------------------------------
| name                        | description                                    |
| --------------------------- | ---------------------------------------------- |
| destroy(): void;            | clean up routine to be called upon deleting    |
|                             | component                                      |

events
--------------------------------------------------------------------------------
| name                    | Description                                        |
| ----------------------- | -------------------------------------------------- |
| THEME_TOGGLE_EVENT      | listens on event from strings constants            |
|                         | switches theme                                     |

ThemeAdapter
--------------------------------------------------------------------------------
`<T extends Emitter<Listener<Component<{}>>>>(o: T) => ThemeAdapter<T>`

ThemeAdapter factory provides default adapter functionality one can override
partially or completely, used by ThemeComponent.

| name                        | description                                    |
| --------------------------- | ---------------------------------------------- |
| handleClick(): void         | handles click, emits strings.TAB_CLICKED_EVENT |
| getAttr(name: string)       | get value of the attribute name of the tab     |
| : string                    |                                                |
| hasClass(name: string)      | returns if theme has class `name`              |
| : boolean                   |                                                |
| addClass(name: string)      | adds class `name` to the element theme         |
| : void                      |                                                |
| removeClass(name: string)   | removes class `name` from the element theme    |
| : void                      |                                                |
| toggleLightAddClass(        | adds class `name` to the toggle light switch   |
| this: ThemeAdapter<T>,      | element                                        |
| name: string): void;        |                                                |
| toggleLightRemoveClass(     | removes class `name` from the toggle light     |
| this: ThemeAdapter<T>,      | switch element                                 |
| name: string): void;        |                                                |
| toggleDarkAddClass(         | adds class `name` to the toggle dark switch    |
| this: ThemeAdapter<T>,      | element                                        |
| name: string): void;        |                                                |
| toggleDarkRemoveClass(      | removes class `name` from the toggle dark      |
| this: ThemeAdapter<T>,      | switch element                                 |
| name: string): void;        |                                                |

classes
--------------------------------------------------------------------------------
| name                        | value                                          |
| --------------------------- | ---------------------------------------------- |
| THEME_COLOR_TOGGLE_HIDE:    | "theme__toggle_hide"                           |
| string                      |                                                |
| THEME_COLOR_TOGGLE_SHOW:    | "theme__toggle_show"                           |
| string                      |                                                |
| THEME_COLOR_LIGHT:          | "theme_color_light"                            |
| string                      |                                                |
| THEME_COLOR_DARK:           | "theme_color_dark"                             |
| string                      |                                                |

strings
--------------------------------------------------------------------------------
| name                               | value                                   |
| ---------------------------------- | --------------------------------------- |
| THEME_TOGGLE_EVENT:                | "mokui-header:action-secondary-clicked" |
| string                             |                                         |
| THEME_COLOR_LIGHT:                 | "light"                                 |
| string                             |                                         |
| THEME_COLOR_DARK:                  | "dark"                                  |
| string                             |                                         |
| THEME_COLOR_TOGGLE_LIGHT_SELECTOR: | ".theme__toggle_light"                  |
| THEME_COLOR_TOGGLE_DARK_SELECTOR:  | ".theme__toggle_dark"                   |
