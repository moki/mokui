#!/bin/sh

DEPMNGR="yarn"
if [ "$DEPMNGR" == yarn ]; then
	# yarn
	DEPMNGR="yarn"
	DEPMNGRSKIPFL="--yes"
else
# npm
	DEPMNGR="npm"
	DEPMNGRSKIPFL="--force"
fi

# package template
AUTHOR="Kirill Morozov (moki) <morozov.kirill.moki@gmail.com>"
REPO="git@github.com:moki/mokui.git"
LICENSE="BSD-3-Clause"
VER="0.0.0"
PKG=$1
# ORG=$2
ACCESS=public
NAMESPACE=mokui
ORG=moki.codes

if [ -d "packages/$NAMESPACE-$PKG" ]; then
	echo "package already exists"
	exit 1
fi
mkdir packages/$NAMESPACE-$PKG && cd packages/$NAMESPACE-$PKG && \

# package.json template
cat -u >> package.json << EOF
{
  "name": "@$ORG/$NAMESPACE-$PKG",
  "version": "$VER",
  "description": "$PKG",
  "repository": {
    "type": "git",
    "url": "$REPO",
    "directory": "packages/$NAMESPACE-$PKG"
  },
  "publishConfig": {
    "access": "$ACCESS"
  },
  "author": "$AUTHOR",
  "license": "$LICENSE",
  "main": "dist/$NAMESPACE.$PKG.js",
  "module": "index.js",
  "scripts": {
    "dev": "parcel $NAMESPACE-$PKG-demo.html",
    "build": "parcel build index.js"
  }
}
EOF

$DEPMNGR init $DEPMNGRSKIPFL

# adds directory field to package.json's repository field
sed -i "s|\"repository\":.*|\"repository\": {\n    \"type\": \"git\",\n    \"url\": \"$REPO\",\n    \"directory\": \"packages\/$NAMESPACE-$PKG\"\n  },|g" package.json
