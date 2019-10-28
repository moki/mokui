animation
--------------------------------------------------------------------------------

Description
--------------------------------------------------------------------------------
animation subsystem block provides child elements with animations.

animation types:

deceleration, standard, acceleration, sharp

Installation
--------------------------------------------------------------------------------
```
yarn add @moki.codes/mokui-animation
```

Styles
--------------------------------------------------------------------------------
```
@import  "@moki.codes/mokui-animation/dist/mokui-animation.css"
```

Basic Usage
--------------------------------------------------------------------------------
```
<div class="animation">
        animation variables available to all children
        <div style="
                transition: opacity
                            var(--animation-duration-s)
                            cubic-bezier(
                                var(--animation-fn-sharp-1),
                                var(--animation-fn-sharp-2),
                                var(--animation-fn-sharp-3),
                                var(--animation-fn-sharp-4));
        ">
                animated content
        </div>
</div>
```

Variables
--------------------------------------------------------------------------------
animation block provides following animation variables
for usage inside cubic-bezier:

deceleration:

* --animation-fn-deceleration-1

* --animation-fn-deceleration-2

* --animation-fn-deceleration-3

* --animation-fn-deceleration-4

standard:

* --animation-fn-standard-1

* --animation-fn-standard-2

* --animation-fn-standard-3

* --animation-fn-standard-4

acceleration:

* --animation-fn-acceleration-1

* --animation-fn-acceleration-2

* --animation-fn-acceleration-3

* --animation-fn-acceleration-4

sharp:

* --animation-fn-sharp-1

* --animation-fn-sharp-2

* --animation-fn-sharp-3

* --animation-fn-sharp-4

animation durations:

* --animation-duration-xs,

* --animation-duration-s,

* --animation-duration-m,

* --animation-duration-l,

* --animation-duration-xl,

* --animation-duration-2xl,

* --animation-duration-3xl
