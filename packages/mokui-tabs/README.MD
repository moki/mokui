tabs
--------------------------------------------------------------------------------

Description
--------------------------------------------------------------------------------
tabs block is a list of tabs with tab items

Installation
--------------------------------------------------------------------------------
```
yarn add @moki.codes/mokui-tabs
```

Styles
--------------------------------------------------------------------------------
```
@import "@moki.codes/mokui-tabs/dist/mokui-tabs.css"
```

Basic Usage
--------------------------------------------------------------------------------
```
...
<body class="theme
             theme_color_light
             theme_msp_perfect_fifth
             animation">
...
<div class="tabs">
        <div class="tab tab_active">active tab item</div>
        <div class="tab">non-active tab</div>
        <div class="tab">another non-active tab</div>
</div>
...
</body>
```

Elements
--------------------------------------------------------------------------------
* tab

tab
--------------------------------------------------------------------------------
tab is the item inside tabs list tabs

Modificators
--------------------------------------------------------------------------------
| name        | value         | description                                    |
| ----------- | ------------- | ---------------------------------------------- |
| active      |               | give tab active state styles                   |
