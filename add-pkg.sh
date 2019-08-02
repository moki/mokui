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
  "author": "$AUTHOR",
  "license": "$LICENSE",
  "main": "dist/$NAMESPACE.$PKG.js",
  "module": "index.js",
  "scripts": {
    "build": "make"
  }
}
EOF

$DEPMNGR init $DEPMNGRSKIPFL

# makefile template
cat -u >> makefile << EOF
CSS_TARGET=$NAMESPACE-$PKG.css
CSS_SRC=\$(shell find . -type f -name '*.css' ! -name \$(CSS_TARGET))

\$(CSS_TARGET): \$(CSS_SRC)
	-rm -f \$(CSS_TARGET)
	cat \$(CSS_SRC) >> \$@

clean:
	-rm \$(CSS_TARGET)
EOF
