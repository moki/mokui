#!/bin/sh

DEPMNGR="yarn"
if [ "$DEPMNGR" == yarn ]; then
        # yarn
        DEPMNGR="yarn"
else
        # npm
        DEPMNGR="npm"
fi

if [ "$2" == --dev ]; then
        echo dev $1
        $DEPMNGR add $1 --dev -W
else
        echo common $1
        $DEPMNGR run lerna add $1
fi
