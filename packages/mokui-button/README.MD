button
--------------------------------------------------------------------------------


Description
--------------------------------------------------------------------------------
Button component

Installation
--------------------------------------------------------------------------------
```
yarn add @moki.codes/mokui-button
```

Styles
--------------------------------------------------------------------------------
```
@import "@moki.codes/mokui-button/dist/mokui-theme.css"
@import "@moki.codes/mokui-button/dist/mokui-animation.css"
@import "@moki.codes/mokui-button/dist/mokui-elevation.css"
@import "@moki.codes/mokui-button/dist/mokui-button.css"
```

Basic Usage
--------------------------------------------------------------------------------
```
<button class="button button_type_raised button_color_primary-light">
        <!-- In case of the raised button, resting elevation element -->
        <span class=elevation elevation_depth_2 button__elevation"></span>
        button
</button>
```

Modificators
--------------------------------------------------------------------------------
| name              | value             | description                          |
| ----------------- | ----------------- | ------------------------------------ |
| type              | raised, ghost     | specifies type of the button         |
| color             | primary-light,    | sets primary-light color theme       |
|                   | primary,          | sets primary color theme             |
|                   | primary-dark      | sets primary dark color theme        |

Elements
--------------------------------------------------------------------------------
* elevation
  - resting elevation for the raised button

elevation
--------------------------------------------------------------------------------
resting elevation for the raised button
