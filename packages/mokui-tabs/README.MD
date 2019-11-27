tabs
--------------------------------------------------------------------------------

Description
--------------------------------------------------------------------------------
tabs block is a list of tabs with tab__tab items

Installation
--------------------------------------------------------------------------------
```
yarn add @moki.codes/mokui-tabs
```

Styles
--------------------------------------------------------------------------------
```
@import "@moki.codes/mokui-tabs/dist/mokui-theme.css"
@import "@moki.codes/mokui-tabs/dist/mokui-animation.css"
@import "@moki.codes/mokui-tabs/dist/mokui-tabs.css"
```

Basic Usage
--------------------------------------------------------------------------------
```
...
<body class="theme
             theme_color_light
             theme_msp_perfect_fifth
             animation">
...
<div class="tabs">
        <div class="tab tab_active">active tab item</div>
        <div class="tab">non-active tab</div>
        <div class="tab">another non-active tab</div>
</div>
...
</body>
```

Variables
--------------------------------------------------------------------------------

* --tab-height:
  - controls tab height, defaults to double the value of the var(--msp-1)

Elements
--------------------------------------------------------------------------------
* tab

tab
--------------------------------------------------------------------------------
tab is the item inside tabs list tabs

Modificators
--------------------------------------------------------------------------------
| name        | value         | description                                    |
| ----------- | ------------- | ---------------------------------------------- |
| active      |               | give tab active state styles                   |
| disabled    |               | give tab disabled state styles                 |

Javascript
--------------------------------------------------------------------------------

Basic Usage
--------------------------------------------------------------------------------
```
import { Tabs } from "@moki.codes/mokui-tabs";

const tabsEl = document.querySelector(".tabs");
const tabsComponent = Tabs(tabsEl);
/* when done */
tabsComponent.destroy();
```

Exports
--------------------------------------------------------------------------------
* `Tabs`
* `TabsComponent`
* `TabsAdapter`
* `Tab`
* `TabComponent`
* `TabAdapter`

Tabs
--------------------------------------------------------------------------------
`<V extends object = {}>(e: Element) => TabsComponent<TabsAdapter<Emitter<Listener<Component<V>>>>>`

Tabs factory is a composition of the TabsComponent bind to Tab of TabsAdapter
of Emitter of Listener of Component.

TabsComponent
--------------------------------------------------------------------------------
`(Tab: Tab) => <T extends TabsAdapter<Emitter<Listener<Component>>>>`

TabsComponent factory provides core tabs functionality, accepts Tab factory
which is used to instantiate each Tab.

Methods
--------------------------------------------------------------------------------
| name                        | description                                    |
| --------------------------- | ---------------------------------------------- |
| destroy(): void;            | clean up routine to be called upon deleting    |
|                             | component                                      |

TabsAdapter
--------------------------------------------------------------------------------
`<T extends Emitter<Listener<Component>>>`

TabsAdapter factory provides default adapter functionality one can override
partially or completely, used by TabsComponent.

Tab
--------------------------------------------------------------------------------
`<V extends object = {}>(e: Element) => TabComponent<TabAdapter<Emitter<Listener<Component<V>>>>>`

Tab factory is a composition of the TabComponent of TabAdapter of Emitter
of Listener of Component.

TabComponent
--------------------------------------------------------------------------------
`<T extends TabAdapter<Emitter<Listener<Component>>>>`

TabComponent factory provides core tab functionality.

Methods
--------------------------------------------------------------------------------
| name                           | description                                 |
| -------------------------------| ------------------------------------------- |
| activate(): void               | adds active modificator to tabs__tab        |
| deactivate(): void             | removes active class from tab, if present   |
| isActive(): boolean            | returns true if active class present        |
| destroy(): void;               | clean up routine to be called upon deleting |
|                                | component                                   |

TabAdapter
--------------------------------------------------------------------------------
`<T extends Emitter<Listener<Component>>>`

TabAdapter factory provides default adapter functionality one can override
partially or completely, used by TabComponent.

Methods
--------------------------------------------------------------------------------
| name                        | description                                    |
| --------------------------- | ---------------------------------------------- |
| handleClick(): void         | handles click, emits strings.TAB_CLICKED_EVENT |
| getAttr(name: string)       | get value of the attribute name of the tab     |
| : string                    |                                                |
| hasClass(name: string)      | returns if tab has class `name`                |
| : boolean                   |                                                |
| addClass(name: string)      | adds class `name` to the element tab           |
| : void                      |                                                |
| removeClass(name: string)   | removes class `name` from the element tab      |
| : void                      |                                                |

classes
--------------------------------------------------------------------------------
| name                        | value                                          |
| --------------------------- | ---------------------------------------------- |
| TAB_ACTIVE: "string"        | "tabs__tab_active"                             |

strings
--------------------------------------------------------------------------------
| name                        | value                                          |
| --------------------------- | ---------------------------------------------- |
| TAB_SELECTOR: string        | ".tabs__tab"                                   |
| TAB_CLICKED_EVENT: string   | "mokui-tab:clicked"                            |
| TAB_ID_PREFIX: string       | "mokui-tab-"                                   |

events
--------------------------------------------------------------------------------
| name                    | `event.detail`    | Description                    |
| ----------------------- | ------------------| ------------------------------ |
| mokui-tab:clicked       | { id: string }    | tab clicked                    |
