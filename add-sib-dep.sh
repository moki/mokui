#!/bin/sh

DEPMNGR="yarn"
if [ "$DEPMNGR" == yarn ]; then
        # yarn
        DEPMNGR="yarn"
else
        # npm
        DEPMNGR="npm"
fi
SPKG=$1
DPKG=$2
# ORG=$3
NAMESPACE=mokui
ORG=moki.codes

if [ ! -d "packages/$NAMESPACE-$SPKG" ]; then
        echo "source dependency package doesn't exists"
        exit 1
fi
if [ ! -d "packages/$NAMESPACE-$DPKG" ]; then
        echo "destination package doesn't exists"
        exit 1
fi
cd packages/$NAMESPACE-$DPKG && \
$DEPMNGR run lerna add @$ORG/$NAMESPACE-$SPKG --scope @$ORG/$NAMESPACE-$DPKG
