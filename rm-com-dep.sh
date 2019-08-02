#!/bin/sh

DEPMNGR="yarn"
if [ "$DEPMNGR" == yarn ]; then
        # yarn
        DEPMNGR="yarn"
else
        # npm
        DEPMNGR="npm"
fi

$DEPMNGR run lerna exec $DEPMNGR remove $1
