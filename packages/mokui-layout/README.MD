Layout
--------------------------------------------------------------------------------

Description
--------------------------------------------------------------------------------
Layout is the top most wrapper for a page content after theme or on the same
level.
Layout defines variables:

* --layout-min-width: 320px;
* --layout-min-height: auto;

which defines default minimal width and height of the layout.

Modificators
--------------------------------------------------------------------------------
| name        | value         | description                                    |
| ----------- | ------------- | ---------------------------------------------- |
| type        | holy-grail    | establishes holy grail layout,                 |
|             |               | layout is stretched 100vh, with dropped footer |
|             |               | as a default behavior                          |

Elements
--------------------------------------------------------------------------------
* Header
* Main
* Footer
* Container

Header
--------------------------------------------------------------------------------
Layout's header element

Modificators
--------------------------------------------------------------------------------
| name        | value         | description                                    |
| ----------- | ------------- | ---------------------------------------------- |
| height      | default       | sets header height in the grid layout as auto  |
|             |               | defines variable: --layout-header-height: auto |

Footer
--------------------------------------------------------------------------------
Layout's footer element

Modificators
--------------------------------------------------------------------------------
| name        | value         | description                                    |
| ----------- | ------------- | ---------------------------------------------- |
| height      | default       | sets footer height in the grid layout as auto  |
|             |               | defines variable: --layout-footer-height: auto |

Container
--------------------------------------------------------------------------------
Layout's container element. Centers content in the layout, responsive, relies
on the breakpoints set inside the theme. Also has fluid behavior. On each
breakpoint stays at the max-width of the breakpoint with 2 --gap s subtracted.

Modificators
--------------------------------------------------------------------------------

| name        | value         | description                                    |
| ----------- | ------------- | ---------------------------------------------- |
| fluid       |               | takes almost full width of the viewport        |
|             |               | almost being margin on the size --gap on each  |
|             |               | side.                                          |
