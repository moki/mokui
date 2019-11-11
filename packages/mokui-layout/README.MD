layout
--------------------------------------------------------------------------------

Description
--------------------------------------------------------------------------------
Layout block provides subsystem with the top most wrapper for a page content
layout after theme or on the same level, essential child elements:
header, main, footer. Other two elements are container and container-fluid.
All of the elements behavior described in their appropriate section.

Installation
--------------------------------------------------------------------------------
```
yarn add @moki.codes/mokui-layout
```

Styles
--------------------------------------------------------------------------------
```
@import "@moki.codes/mokui-layout/dist/mokui-layout.css"
```

Basic Usage
--------------------------------------------------------------------------------
```
...
<body class="layout
             layout_type_holy-grail"
>
        <header class="layout__header">
                <div class="layout__container-fluid>
                        full width content but gaps
                </div>
        </header>
        <main class="layout__main">
                <div class="layout__container">
                        responsive, centered content
                </div>
        </main>
        <footer class="layout__footer"></footer>
</body>
...
```

Modificators
--------------------------------------------------------------------------------
| name        | value         | description                                    |
| ----------- | ------------- | ---------------------------------------------- |
| type        | holy-grail    | establishes full holy grail layout, aside left |
|             |               | aside right included. layout stretched full    |
|             |               | viewport height, dropped footer by default     |
| type        | holy-grail-   | holy grail with main and left aside            |
|             | asleft        |                                                |
| type        | holy-grail-   | holy grail with main and right aside           |
|             | asright       |                                                |
| type        | holy-grail-   | holy grail with main only                      |
|             | main          |                                                |
| header      | dense         | set header height to dense, sets               |
|             |               | --layout-header-height to --msp-1 * 2          |

Variables
--------------------------------------------------------------------------------
layout defines variables

* --layout-min-width
  - minimal width layout shrinks default: 320px
* --layout-min-height: auto;
  - layout minimum height
* --layout-header-height
  - header height inside the layout defaults to --msp-1 * 3,
    override to change appearance
* --layout-footer-height
  - footer height inside the layout default to auto,
    override to change appearance

Elements
--------------------------------------------------------------------------------
* header
* aside-left
* main
* aside-right
* footer
* container
* container-fluid

header
--------------------------------------------------------------------------------
layout's header element, height controlled by layout's --layout-header-height

aside-left
--------------------------------------------------------------------------------
left aside element

main
--------------------------------------------------------------------------------
layout's main element, only purpose is to place element inside grid markup as
a main content element

aside-right
--------------------------------------------------------------------------------
right aside element

footer
--------------------------------------------------------------------------------
layout's footer element, height controlled by layout's --layout-footer-height

container
--------------------------------------------------------------------------------
layout's container element. Centers content in the layout, responsive, relies
on the breakpoints set inside the theme(-screen-\<s,m,l,xl\>).
On each breakpoint stays at the max-width of the breakpoint
with 2 (--gap)'s subtracted.

container-fluid
--------------------------------------------------------------------------------
layout's fluid container element.
takes 100% of available width but (--gap) on each side
