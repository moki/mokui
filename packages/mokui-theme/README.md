Theme
--------------------------------------------------------------------------------

Description
--------------------------------------------------------------------------------
Theme provider, which defines components appearance. Applies minimal css reset.
Important note: modificators use rem as a unit, so it is possible to scale
theme by manipulating html node's font-size property, preferably by scaling
it in percentages(defaults are 100% on mobile and 112.5% on tablet and above)


Modificators
--------------------------------------------------------------------------------

| name        | value         | description                                    |
| ----------- | ------------- | ---------------------------------------------- |
| typography  | default       | establishes default typography, which includes |
|             |               | system font stack and font bells and whistels. |
| breakpoint  | default       | defines default screen breakpoints,            |
|             |               | althought some are still hardcoded due         |
|             |               | to native css limitations                      |
|             |               |   --screen-m: 768px;                           |
|             |               |   --screen-l: 992px;                           |
|             |               |   --screen-xl: 1200px;                         |
| msp         | perfect-fifth | defines perfect fifth as a primary             |
|             |               | modular scale                                  |
| msc         | major-third   | defines major third as a complimentary         |
|             |               | modular scale                                  |
| modular     |               | both modular scales are scalings of the base   |
| scale       |               | ms*-0 by the ratio ms*-1                       |
|             |               | variables from ms*-m1 down to the ms*-m6       |
|             |               | represents 1/ratio^n, where ratio  is the      |
|             |               | scale ratio(1.5 in case of the perfect fifth)  |
|             |               | and n is range [1, 6].                         |
|             |               | variables from ms*-1 up to the ms*-16          |
|             |               | represents ratio^n, where ratio is the scale   |
|             |               | ratio(1.25 in case of the major third)         |
|             |               | and n is the range [1, 16]                     |
| gap         | default       | default gap is defined as a base of the        |
|             |               | primary modular scale.                         |
| color       | light         | defines light color palette variables          |
| color       | dark          | defines dark color palette variables           |
|             |               | both color palette variables are:              |
|             |               |   --color-primary                              |
|             |               |   --color-primary-light                        |
|             |               |   --color-primary-dark                         |
|             |               |   --color-secondary                            |
|             |               |   --color-secondary-light                      |
|             |               |   --color-secondary-dark                       |
|             |               |   --color-background                           |
|             |               |   --color-surface                              |
|             |               |   --color-error                                |
|             |               |   --color-success                              |
|             |               |   --color-on-primary                           |
|             |               |   --color-on-primary-light                     |
|             |               |   --color-on-primary-dark                      |
|             |               |   --color-on-secondary                         |
|             |               |   --color-on-secondary-light                   |
|             |               |   --color-on-secondary-dark                    |
|             |               |   --color-on-background                        |
|             |               |   --color-on-surface                           |
|             |               |   --color-on-error                             |
|             |               |   --color-on-success                           |