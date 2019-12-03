drawer
--------------------------------------------------------------------------------


Description
--------------------------------------------------------------------------------
Drawer is a component which provides navigation drawer.

Inside layout_type_holy-grail-asleft drawer expanded and becomes visible
side navigation on the screens bigger than var(--screen-l) min-width: 990px,
and degrades to the modal navigation on the smaller screens.

Inside layout_type_holy-grail-main drawer is modal drawer navigation by default.

Modal drawer opens when strings.OPEN_EVENT occurs, and closes upon click on the
scrim strings.SCRIM_SELECTOR.

Installation
--------------------------------------------------------------------------------
```
yarn add @moki.codes/mokui-drawer
```

Styles
--------------------------------------------------------------------------------
```
@import "@moki.codes/mokui-theme/dist/mokui-theme.css"
@import "@moki.codes/mokui-layout/dist/mokui-layout.css"
@import "@moki.codes/mokui-elevation/dist/mokui-elevation.css"
@import "@moki.codes/mokui-animation/dist/mokui-animation.css"
@import "@moki.codes/mokui-list/dist/mokui-list.css"
@import "@moki.codes/mokui-drawer/dist/mokui-drawer.css"
```

Basic Usage
--------------------------------------------------------------------------------
```
<div class="theme
            ...">
	<div class="layout layout_type_holy-grail-asleft">
                <header></header>
                <div class="drawer-scrim" id="drawer-scrim"></div>
                <aside class="layout__aside-left elevation elevation_depth_0 drawer">
                        <!-- optional header -->
                        <div class="drawer__header">?brand</div>
                        <!-- list component -->
                        <div ...>
                                ...
                        </div>
                </aside>
                <main></main>
                <footer></footer>
        </div>
</div>
```

Modificators
--------------------------------------------------------------------------------
| name              | value             | description                          |
| ----------------- | ----------------- | ------------------------------------ |
| open              |                   | shows drawer                         |
| animation         | open              | open animation transition: dur, fn   |
|                   | close             | close animation transition: dur, fn  |

Elements
--------------------------------------------------------------------------------
* header
  - optional drawer navigation header

header
--------------------------------------------------------------------------------
optional drawer navigation header

drawer-scrim
--------------------------------------------------------------------------------
scrim which covers content when modal drawer is open.

Modificators
--------------------------------------------------------------------------------
| name              | value             | description                          |
| ----------------- | ----------------- | ------------------------------------ |
| open              |                   | brings scrim over content but before |
|                   |                   | drawer itself.                       |
| animation         | open              | open animation transition: dur, fn   |
|                   | close             | close animation transition: dur, fn  |

Javascript
--------------------------------------------------------------------------------

Basic Usage
--------------------------------------------------------------------------------
```
import { Drawer } from "@moki.codes/mokui-drawer";

const drawerEl = document.querySelector(".drawer");
const drawerComponent = Drawer(drawerEl);
/* when done */
drawerComponent.destroy();
```

Exports
--------------------------------------------------------------------------------
* `Drawer`
* `DrawerComponent`
* `DrawerAdapter`

Drawer
--------------------------------------------------------------------------------
`(e: Element) => DrawerComponent<DrawerAdapter<Emitter<Listener<Component<{}>>>>>`

Drawer factory is a composition of the DrawerComponent of DrawerAdapter
of Emitter of Listener of Component.

DrawerComponent
--------------------------------------------------------------------------------
`<T extends DrawerAdapter<Emitter<Listener<Component<{}>>>>>(o: T) => DrawerComponent<T>`

DrawerComponent factory provides core drawer functionality:
finds scrim with selector strings.SCRIM_SELECTOR initializes click on it which
closes modal drawer, listens to strings.OPEN_EVENT on the top level target
element this.target(see adapter), upon strings.OPEN_EVENT occuring opens modal
drawer.

Methods
--------------------------------------------------------------------------------
| name                        | description                                    |
| --------------------------- | ---------------------------------------------- |
| destroy(): void;            | clean up routine to be called upon deleting    |
|                             | component                                      |
| open                        | opens drawer                                   |
| (this: DrawerComponent<T>): |                                                |
| void;                       |                                                |
| close                       | closes drawer                                  |
| (this: DrawerComponent<T>): |                                                |
| void;                       |                                                |

events
--------------------------------------------------------------------------------
| name                    | Description                                        |
| ----------------------- | -------------------------------------------------- |
| strings.OPEN_EVENT      | listens on this event, when occurs opens drawer    |

DrawerAdapter
--------------------------------------------------------------------------------
`<T extends Emitter<Listener<Component<{}>>>>(o: T) => DrawerAdapter<T>`

DrawerAdapter factory provides default adapter functionality one can override
partially or completely, used by DrawerComponent.

Properties
--------------------------------------------------------------------------------
| name                        | description                                    |
| --------------------------- | ---------------------------------------------- |
| target: EventTarget         | top level target to listen on for              |
|                             | strings.OPEN_EVENT                             |

Methods
--------------------------------------------------------------------------------
| name                        | description                                    |
| --------------------------- | ---------------------------------------------- |
| unlistenOn(                 | stop listening on target `target` for event    |
| this: DrawerAdapter<T>,     | `event` with handler `handler`                 |
| target: EventTarget,        |                                                |
| event: string               |                                                |
| handler: EventListene       |                                                |
| ): void;                    |                                                |
| listenOn(                   | start listening on target `target` for event   |
| this: DrawerAdapter<T>,     | `event` with handler `handler`                 |
| target: EventTarget,        |                                                |
| event: string,              |                                                |
| handler: EventListener      |                                                |
| ): void;                    |                                                |
| addClassTo(                 | add class `name` to the target element `target`|
| this: DrawerAdapter<T>,     |                                                |
| target: Element,            |                                                |
| name: string): void;        |                                                |
| removeClassFrom(            | remove class `name` from target element        |
| this: DrawerAdapter<T>,     | `target`                                       |
| target: Element,            |                                                |
| name: string                |                                                |
| ): void;                    |                                                |

classes
--------------------------------------------------------------------------------
| name                        | value                                          |
| --------------------------- | ---------------------------------------------- |
| ELEVATED:                   | "elevation_depth_16"                           |
| string                      |                                                |
| RESTING:                    | "elevation_depth_0"                            |
| string                      |                                                |
| DRAWER_ANIMATION_OPEN:      | "drawer_animation_open"                        |
| string                      |                                                |
| DRAWER_ANIMATION_CLOSE:     | "drawer_animation_close"                       |
| string                      |                                                |
| DRAWER_OPEN:                | "drawer_open"                                  |
| string                      |                                                |
| SCRIM_ANIMATION_OPEN:       | "drawer-scrim_animation_open"                  |
| string                      |                                                |
| SCRIM_ANIMATION_CLOSE:      | "drawer-scrim_animation_close"                 |
| string                      |                                                |
| SCRIM_OPEN:                 | "drawer-scrim_open"                            |
| string                      |                                                |


strings
--------------------------------------------------------------------------------
| name                               | value                                   |
| ---------------------------------- | --------------------------------------- |
| OPEN_EVENT:                        | "mokui-header:action-primary-clicked"   |
| string                             |                                         |
| SCRIM_SELECTOR:                    | "#drawer-scrim"                         |
| string                             |                                         |
