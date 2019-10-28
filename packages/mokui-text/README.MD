text
--------------------------------------------------------------------------------

Description
--------------------------------------------------------------------------------
text block provides typography subsystem, includes: line length, alignment,
sizing, weight and style.
indents consecutive paragraphs with complimentary modular scale base.
default .text line-height set to --msp-1 to establish vertical rythm.

Installation
--------------------------------------------------------------------------------
```
yarn add @moki.codes/mokui-text
```

Styles
--------------------------------------------------------------------------------
```
@import "@moki.codes/mokui-text/dist/mokui-text.css"
```

Basic Usage
--------------------------------------------------------------------------------
```
...
<p class="text text_length_m text_size_m text_weight_regular">
        paragraph text goes here.
</p>
...
```

Modificators
--------------------------------------------------------------------------------
| name        | value         | description                                    |
| ----------- | ------------- | ---------------------------------------------- |
| length      |               | makes line take                                |
|             | s             | 30 characters                                  |
|             | m             | 60 characters                                  |
| align       | left, center, | horizontal text alignment                      |
|             | right         |                                                |
| size        | 2xs, xs, s, m | sets font-size from complimentary modular      |
|             | l, xl, 2xl,   | scale with appropriate line-height from        |
|             | 3xl, 4xl      | primary modular scale and adjustred letter     |
|             |               | spacing for large text                         |
| weight      | light,        | sets text weight to 300                        |
|             | regular,      | 400                                            |
|             | medium        | 500                                            |
| style       | small-caps    | sets text to small-caps style if font is       |
|             |               | open type.                                     |
