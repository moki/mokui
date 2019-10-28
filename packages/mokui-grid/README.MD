grid
--------------------------------------------------------------------------------

Description
--------------------------------------------------------------------------------
grid default behavior is to define grid with cells according to the screen size.
Take note that screen-* hardcoded in the media queries due to the native css
limitations.

| screen size  | number of columns |
| ------------ | ----------------- |
| < screen-s   | --grid-columns-xs |
| >= screen-s  | --grid-columns-s  |
| >= screen-m  | --grid-columns-m  |
| >= screen-l  | --grid-columns-l  |
| >= screen-xl | --grid-columns-xl |

Installation
--------------------------------------------------------------------------------
```
yarn add @moki.codes/mokui-grid
```

Styles
--------------------------------------------------------------------------------
```
@import "@moki.codes/mokui-grid/dist/mokui-grid.css"
```

Basic Usage
--------------------------------------------------------------------------------
```
<div class="theme theme_grid-columns_default">
        <div class="grid grid_col-gap_none grid_row-gap_none">
                <div class="grid__cell">cell 1</div>
                <div class="grid__cell">cell 2</div>
                <div class="grid__cell">cell 3</div>
                <div class="grid__cell">cell 4</div>
        </div>
</div>
```

Variables
--------------------------------------------------------------------------------
makes usage of the variables defined at the theme level,
override to alter behavior

* --grid-columns-*

* --gap

Modificators
--------------------------------------------------------------------------------
| name        | value         | description                                    |
| ----------- | ------------- | ---------------------------------------------- |
| col-gap     | none, half,   | sets gap between columns to the multiple of    |
|             | default,      | the --gap variable defined at the theme level  |
|             | double        | 0, 1/2, 1, 2 respectively                      |
| row-gap     | none, half,   | sets gap between rows to the multiple of       |
|             | default,      | the --gap variable defined at the theme level  |
|             | double        | 0, 1/2, 1, 2 respectively                      |
