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
<!-- raised button, light primary color -->
<button class="button button_type_raised button_color_primary-light button_size_m
               text text_style_small-caps text_align_center text_size_xs text_weight_regular">
        <!-- In case of the raised button, resting elevation element -->
        <span class=elevation elevation_depth_2 button__elevation"></span>
        button
</button>

<!-- raised button, primary color -->
<button class="button button_type_raised button_color_primary button_size_m
               text text_style_small-caps text_align_center text_size_xs text_weight_regular">
        <!-- In case of the raised button, resting elevation element -->
        <span class=elevation elevation_depth_2 button__elevation"></span>
        button
</button>

<!-- raised button, dark primary color -->
<button class="button button_type_raised button_color_primary-dark button_size_m
               text text_style_small-caps text_align_center text_size_xs text_weight_regular">
        <!-- In case of the raised button, resting elevation element -->
        <span class=elevation elevation_depth_2 button__elevation"></span>
        button
</button>

<!-- ghost button, light primary color -->
<button class="text text_style_small-caps text_align_center
               text_size_xs text_weight_regular
               button button_type_ghost button_color_primary-light
               button_size_m">
        button
</button>

<!-- ghost button, primary color -->
<button class="text text_style_small-caps text_align_center
               text_size_xs text_weight_regular
               button button_type_ghost button_color_primary
               button_size_m">
        button
</button>

<!-- ghost button, dark primary color -->
<button class="text text_style_small-caps text_align_center
               text_size_xs text_weight_regular
               button button_type_ghost button_color_primary-dark
               button_size_m">
        button
</button>

<!-- raised button, dark primary color, disabled -->
<button class="text text_style_small-caps text_align_center
               text_size_xs text_weight_regular
               button button_type_raised button_color_primary-dark button_disabled
               button_size_m">
        <span
          class="elevation elevation_depth_2 button__elevation"
        ></span>
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
| size              | s                 | sets vertical spacing to 1/4*--msp-1 |
|                   | m,                | sets vertical spacing to 1/2*--msp-1 |
|                   | l                 | sets vertical spacing to --msp-1     |

Elements
--------------------------------------------------------------------------------
* elevation
  - resting elevation for the raised button

elevation
--------------------------------------------------------------------------------
resting elevation for the raised button
