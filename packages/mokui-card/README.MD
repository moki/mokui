card
--------------------------------------------------------------------------------


Description
--------------------------------------------------------------------------------
card component

Installation
--------------------------------------------------------------------------------
```
yarn add @moki.codes/mokui-card
```

Styles
--------------------------------------------------------------------------------
```
@import "@moki.codes/mokui-button/dist/mokui-theme.css"
@import "@moki.codes/mokui-button/dist/mokui-animation.css"
@import "@moki.codes/mokui-button/dist/mokui-elevation.css"
@import "@moki.codes/mokui-card/dist/mokui-card.css"
```

Basic Usage
--------------------------------------------------------------------------------
```
<div class="card card_type_horizontal card_actionable">
        <div
         class="elevation elevation_depth_1 card__elevation"
        ></div>
        <div class="card__text">
                <div class="card__header">
                        <div class="text text_length_m text_size_2xs text_weight_regular text_style_small-caps">
                                programming, c++
                        </div>
                        <div class="text text_weight_regular text_align_left text_size_l text_length_m">
                                Efficient memory
                                management
                        </div>
                        <div class="text text_size_xs text_align_left text_weight_regular text_length_m">
                                and why it
                                matters
                        </div>
                </div>
                <div class="card__body">
                        <div class="text text_size_xs text_align_left text_weight_regular text_length_m">
                                Dec 5, 2019
                        </div>
                </div>
        </div>
        <div class="card__media"
             style="background-image: url(https://images.saatchiart.com/saatchi/983048/art/4570311/3640149-XMXTS  NKS-7.jpg); width: 150px;"
        ></div>
</div>
```

Modificators
--------------------------------------------------------------------------------
| name              | value             | description                          |
| ----------------- | ----------------- | ------------------------------------ |
| actionable        |                   | makes whole card actionable, gives   |
|                   |                   | it clickable style                   |
| type              | horizontal        | sets horizontal card style           |


Elements
--------------------------------------------------------------------------------
* elevation
  - elevation element, which gives resting state elevation to the card
* text
  - card's text content wrapper
* header
  - card's header inside text element
* body
  - card's body inside text element
* footer
  - card's footer inside text element
* media
  - card's media block, requires width to be set explicitly


elevation
--------------------------------------------------------------------------------
provides resting state elevation to the card

text
--------------------------------------------------------------------------------
wrapper used to group text content

header
--------------------------------------------------------------------------------
card's header

body
--------------------------------------------------------------------------------
card's body

footer
--------------------------------------------------------------------------------
card's footer contains action items

media
--------------------------------------------------------------------------------
card's media block, requires to explicitly set its width, and background-image
styles
