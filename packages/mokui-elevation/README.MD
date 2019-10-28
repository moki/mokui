elevation
--------------------------------------------------------------------------------

Description
--------------------------------------------------------------------------------
elevation subsystem block provides child elements with elevation shadows

Installation
--------------------------------------------------------------------------------
```
yarn add @moki.codes/mokui-elevation
```

Styles
--------------------------------------------------------------------------------
```
@import "@moki.codes/mokui-elevation/dist/mokui-elevation.css"
```

Basic Usage
--------------------------------------------------------------------------------
```
<div class="elevation">
        elevation variables available to all children
        <div class="elevation_depth_8">
                this div has elevation of depth 8
        </div>
</div>
```

Variables
--------------------------------------------------------------------------------
elevation block provides following shadow color umbra/penumbra/ambient variables:

* --elevation-color-umbra

* --elevation-color-penumbra

* --elevation-color-ambient

shadow animation transition duration:

* --elevation-transition-duration

Modificators
--------------------------------------------------------------------------------
| name        | value         | description                                    |
| ----------- | ------------- | ---------------------------------------------- |
| depth       | n where n is  | gives elevation shadow of the specified depth  |
|             | in the range: | value                                          |
|             | [0, 24]       |                                                |
