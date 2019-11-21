base
--------------------------------------------------------------------------------

Description
--------------------------------------------------------------------------------
core functionality, that serves as a base for a component.

Installation
--------------------------------------------------------------------------------
```
yarn add @moki.codes/mokui-base
```

Javascript
--------------------------------------------------------------------------------

Basic Usage
--------------------------------------------------------------------------------
```
import { Component, Emitter, Listener } from "@moki.codes/mokui-base";

const componentEl = document.querySelector(".component-name");

const component = Listener(Emitter(Component(componentEl, {})));
```

Exports
--------------------------------------------------------------------------------
* `Component`
* `Listener`
* `Emitter`

Component
--------------------------------------------------------------------------------
`<T extends object = {}>(element?: Element, o: T = {} as T): Component<T>`

base object every component extends from, wraps HTML `Element`.

Methods
--------------------------------------------------------------------------------
| name                     | description                                       |
| ------------------------ | ------------------------------------------------- |
| attach(element: Element) | attach Component to the provided html Element     |
| : Component<T>           | `element`                                         |
| getRoot():Element        | get html Element Component is attached to         |


Emitter
--------------------------------------------------------------------------------
`<T extends Component>(component: T): Emitter<T>`

extends Component, provides event emiting functionality.

Methods
--------------------------------------------------------------------------------
| name                     | description                                       |
| ------------------------ | ------------------------------------------------- |
| emit<U extends object>   | fire cross-browser event with name `type`, attach |
| (type: string,           | additional data `detail`, set if event should     |
| detail: U,               | bubble up with `bubbles`                          |
| bubbles?: boolean): void |                                                   |

Listener
--------------------------------------------------------------------------------
`<T extends Component>(component: T): Listener<T>`

extends Component, provides event listening functionality

Methods
---------------------------------------------------------------------------------
| name                     | description                                        |
| ------------------------ | -------------------------------------------------- |
| listen(                  | Attach to an event with name `type`                |
| type: string,            | handler `handler`, with event listener options     |
| handler: EventListener,  | `options`                                          |
| options?:                |                                                    |
|  AddEventListenerOptions |                                                    |
|  \| boolean              |                                                    |
| ): void;                 |                                                    |
| unlisten(                | Detach event handler `handler`                     |
| type: string,            | with options `options` from event with name `type` |
| handler: EventListener,  |                                                    |
| options?:                |                                                    |
|  AddEventListenerOptions |                                                    |
|  \| boolean              |                                                    |
| ): void;                 |                                                    |
