list
--------------------------------------------------------------------------------

Description
--------------------------------------------------------------------------------
list block is a list of list__item items

Installation
--------------------------------------------------------------------------------
```
yarn add @moki.codes/mokui-list
```

Styles
--------------------------------------------------------------------------------
```
@import "@moki.codes/mokui-list/dist/mokui-theme.css"
@import "@moki.codes/mokui-list/dist/mokui-animation.css"
@import "@moki.codes/mokui-list/dist/mokui-text.css"
@import "@moki.codes/mokui-list/dist/mokui-list.css"
```

Basic Usage
--------------------------------------------------------------------------------
```
<ul class="list">
        <li class="list__item"
                enabled list item
        </li>
        <li class="list__item list__item_disabled"
                disabled list item
        </li>
        <li class="list__item list__item_active"
                active list item
        </li>

</ul>
```

Variables
--------------------------------------------------------------------------------
* --list-item-height:
  - set as the var(--msp-1) * 2

Elements
--------------------------------------------------------------------------------
* item
  - list item

item
--------------------------------------------------------------------------------
item inside list

Modificators
--------------------------------------------------------------------------------
| name              | value             | description                          |
| ----------------- | ----------------- | ------------------------------------ |
| active            |                   | gives list item active state style   |
| disabled          |                   | gives list item disabled state style |
| size              | s, m, l           | sets vertical spacing to 1/4 of the  |
|                   |                   | --msp-1, half of the --msp-1,        |
|                   |                   | --msp-1; for the s,m,l respectively  |

Javascript
--------------------------------------------------------------------------------

Basic Usage
--------------------------------------------------------------------------------
```
import { List } from "@moki.codes/mokui-tabs";

const listEl = document.querySelector(".list");
const listComponent = Tabs(listEl);

/* when done */
tabsComponent.destroy();
```

Exports
--------------------------------------------------------------------------------
* `List`
* `ListComponent`
* `ListAdapter`

List
--------------------------------------------------------------------------------
`(arg: Element) => ListComponent<ListAdapter<Emitter<Listener<Component<{}>>>>>`

List factory is a composition of the ListComponent of TabsAdapter of Emitter
of Listener of Component of empty object.

ListComponent
--------------------------------------------------------------------------------
`<T extends ListAdapter<Emitter<Listener<Component<{}>>>>>(o: T): ListComponent<T>`

ListComponent factory instantiates object which provides core list functionality,
using methods provided by the adapter.

Properties
--------------------------------------------------------------------------------
| name              | type              | description                          |
| ----------------- | ----------------- | ------------------------------------ |
| elements          | HTMLLIElement[]   | stores array of list item nodes      |
|                   |                   | HTMLLIElement list operates on       |

Methods
--------------------------------------------------------------------------------
| name                           | description                                 |
| -------------------------------| ------------------------------------------- |
| setLiState                     | set list item at index `index` to state     |
| (this: ListComponent<T>,       | `state` where state true represents enabled |
| index: number,                 | which every list item is by default         |
| state: boolean,                | and false represents disabled               |
| ): void                        |                                             |
| destroy(): void;               | clean up routine to be called upon deleting |
|                                | component                                   |

events
--------------------------------------------------------------------------------
| name                         | `event.detail`    | Description               |
| -----------------------------| ------------------| ------------------------- |
| mokui-list:list-item-clicked | { index: number } | list item clicked         |

ListAdapter
--------------------------------------------------------------------------------
`<T extends Emitter<Listener<Component<{}>>>>(o: T) => ListAdapter<T>`

ListAdapter factory instantiates object which provides default adapter methods,
one can override partially or completely, used by ListComponent.

Methods
--------------------------------------------------------------------------------
| name                           | description                                 |
| -------------------------------| ------------------------------------------- |
| liHasClass                     | checks if li at index `index` has class     |
| (this: ListAdapter<T>,         | `name`                                      |
| index: number,                 |                                             |
| name: string,                  |                                             |
| ): boolean                     |                                             |
| liAddClass                     | adds class `name` to the li at index `index`|
| (this: ListAdapter<T>,         |                                             |
| index: number,                 |                                             |
| name: string,                  |                                             |
| ): void                        |                                             |
| liRemoveClass                  | removes class `name` from the li at index   |
| (this: ListAdapter<T>,         | `index`                                     |
| index: number,                 |                                             |
| name: string,                  |                                             |
| ): void                        |                                             |

classes
--------------------------------------------------------------------------------
| name                        | value                                          |
| --------------------------- | ---------------------------------------------- |
| LIST_ITEM_ACTIVE: "string"  | "list__item_active"                            |
| LIST_ITEM_DISABLED: "string"| "list__item_disabled"                          |

strings
--------------------------------------------------------------------------------
| name                        | value                                          |
| --------------------------- | ---------------------------------------------- |
| LIST_ITEM_SELECTOR: string  | ".list__item"                                  |
| LIST_ITEM_CLICKED_EVENT:    | "mokui-list:list-item-clicked"                 |
| : string                    |                                                |
| LIST_ITEM_ID_PREFIX: string | "mokui-li-"                                    |
