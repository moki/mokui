header
--------------------------------------------------------------------------------

Description
--------------------------------------------------------------------------------
header block provides header component inside the holygrail layout

Installation
--------------------------------------------------------------------------------
```
yarn add @moki.codes/mokui-header
```

Styles
--------------------------------------------------------------------------------
```
@import "@moki.codes/mokui-header/dist/mokui-header.css"
```

Basic Usage
--------------------------------------------------------------------------------
```
<head>
        <style>
                width: calc(var(--msp-1) * 4);
                height: var(--msp-1);
                line-height: var(--msp-1);

                background-color: var(--color-on-background);
        </style>
</head>
...
<body>
<div class="theme
            theme_msp_perfect-fifth
            theme_color_light
            layout
            layout_type_holy-grail
            elevation
            animation">
        <header class="layout__header header header_fixed elevation_depth_8">
                <div class="layout__container layout__container-fluid header__container">
                        <div class="header__action header__action_primary">
                                <svg class="header__icon">
                                        ...
                                </svg>
                        </div>
                        <div class="header__action header__brand">
                                <div class="placeholder-brand elevation elevation_depth_8"></div>
                        </div>
                        <div class="header__navigation">
                                <div class="header__action header__navigation-item">
                                        item
                                </div>
                                <div class="header__action header__navigation-item">
                                        item
                                </div>
                        </div>
                        <div class="header__action header__action_secondary">
                                <svg class="header__icon" ...>
                                        ...
                                </svg>
                        </div>
                </div>
        </header>
</div>
</body>
```

Modificators
--------------------------------------------------------------------------------
| name        | value         | description                                    |
| ----------- | ------------- | ---------------------------------------------- |
| fixed       |               | makes header fixed                             |

Variables
--------------------------------------------------------------------------------
header defines various variables which shapes its behavior:

* --header-height
  - defined as --layout-header-height at layout level,
    override --layout-header-height to change appearance

* --header-brand-size
  - defines brand height, override to change appearance

* --header-action-size
  - defines action height and icon width and height,
    override to change appearance

* --header-navigation-size
  - defines navigation height, override to change appearance

Elements
--------------------------------------------------------------------------------
* container
* action
* icon
* brand
* navigation
* navigation-item

container
--------------------------------------------------------------------------------
container for all header elements, centers child elements vertically

action
--------------------------------------------------------------------------------
actionable item

Modificators
--------------------------------------------------------------------------------
| name        | value         | description                                    |
| ----------- | ------------- | ---------------------------------------------- |
| primary     |               | headers primary action leftmost item after     |
|             |               | brand hidden on --screen-l or above, visible   |
|             |               | otherwise                                      |
| secondary   |               | headers secondary action rightmost item        |

icon
--------------------------------------------------------------------------------
header action's icon

brand
--------------------------------------------------------------------------------
headers brand leftmost item

navigation
--------------------------------------------------------------------------------
headers navigation floats left, visible on --screen-l(as defined at the theme
level) or above and hidden otherwise

navigation-item
--------------------------------------------------------------------------------
headers navigation menu item(s) floats left

Javascript
--------------------------------------------------------------------------------

Basic Usage
--------------------------------------------------------------------------------
```
import { Header } from "@moki.codes/mokui-header";

const headerElement = document.querySelector("header");
const header = Header(headerElement);

/* when done */
header.destroy();
```

Exports
--------------------------------------------------------------------------------
* `Header`
* `HeaderComponent`
* `HeaderAdapter`
* `classes`
* `strings`

Header
--------------------------------------------------------------------------------
`(element: Elements): HeaderComponent<HeaderAdapter<Emitter<Component<{}>>>>`

Header factory is a composition of the HeaderComponent, HeaderAdapter,
Emitter, Component.

HeaderComponent
--------------------------------------------------------------------------------
`<T extends HeaderAdapter<Emitter<Component>>>(
          o: T = {} as T
): HeaderComponent<T>`

Header Component factory provides core header functionality

Methods
--------------------------------------------------------------------------------
| name                        | description                                    |
| --------------------------- | ---------------------------------------------- |
| setScrollTarget             | set scroll target to the provided EventTarget  |
| (target: EventTarget): void | `target`                                       |
| destroy():                  | clean up routine to be called upon deleting    |
| HeaderComponent<T>;         | component                                      |

HeaderAdapter
--------------------------------------------------------------------------------
`<T extends Emitter<Component>>(
        o: T
): HeaderAdapter<T>`

Header Adapter factory provides default adapter functionality, one can override
partially or completely used by HeaderComponent.

Methods
--------------------------------------------------------------------------------
| name                        | description                                    |
| --------------------------- | ---------------------------------------------- |
| handleActionPrimaryClick()  | handler for the header__action_primary click   |
| : void                      | event, fires strings.ACTION_PRIMARY_EVENT event|
| getViewportScrollY(         | returns number of pixels scrolled on scroll    |
|   targetSelector: symbol    | `targetSelector` target from top of the page   |
| ): number                   |                                                |
| getHeaderHeight(): number   | returns height of the root(), (header)         |
| ): number                   |                                                |
| hasClass(name: string)      | returns if root(), (header) has class `name`   |
| : boolean                   |                                                |
| addClass(name: string)      | adds class `name` to the element root(),       |
| : void                      | (header)                                       |
| removeClass(name: string)   | removes class `name` to the element root(),    |
| : void                      | (header)                                       |

classes
--------------------------------------------------------------------------------
| name                        | value                                          |
| --------------------------- | ---------------------------------------------- |
| HEADER_HIDDEN: "string"     | "header_hidden"                                |

strings
--------------------------------------------------------------------------------
| name                        | value                                          |
| --------------------------- | ---------------------------------------------- |
| ACTION_PRIMARY_SELECTOR     | ".header__action_primary"                      |
| : "string"                  |                                                |
| ACTION_PRIMARY_EVENT        | "mokui-header:action_primary"                  |
| : "string"                  |                                                |
| ROOT_SELECTOR: string       | ".header"                                      |
