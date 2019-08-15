Grid
--------------------------------------------------------------------------------

Elements
--------------------------------------------------------------------------------
Cell

Description
--------------------------------------------------------------------------------
Grid default behavior is to define grid with cells according to the screen size.
Take note that screen-* hardcoded in the media queries due to the native css
limitations.

| screen size  | number of columns |
| ------------ | ----------------- |
| < screen-s   | --grid-columns-xs |
| >= screen-s  | --grid-columns-s  |
| >= screen-m  | --grid-columns-m  |
| >= screen-l  | --grid-columns-l  |
| >= screen-xl | --grid-columns-xl |

--grid-columns-* defined at the theme level override to change behavior

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
