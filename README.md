mokui
--------------------------------------------------------------------------------
ui components monorepo

Components
--------------------------------------------------------------------------------
individual components and their specifications
can be found at `packages/<mokui-component_name>`

Stories
--------------------------------------------------------------------------------
stories featuring components can be found at `stories/`

Scripts
--------------------------------------------------------------------------------
```
$ sh init-dev-env.sh
```

initializes dev tooling, basically run this after yarn[npm init]
(.githooks).

```
$ yarn new:packages <package_name>
```

creates new package <package_name> scaffolds its structure.

```
$ yarn add <dependencies...>[@version] --dev -W
```

adds development dependency(ies) common to (the yarn workspace)
all packages inside the monoreo.

```
$ yarn add:packages <dependency>[@version]
```

adds dependency common to all packages inside the monoreo.

```
$ yarn remove:packages <dependencies...>
```

removes dependencies from all monorepo packages.

```
$ yarn add-sibling:packages <dependency> <dependee>
```

adds <dependency> package as a dependency to the <dependee> package.

```
$ yarn publish:packages
```

publishes packages with lerna.

```
$ yarn build:packages
```

cleans previous builds and makes production build of each package.

```
$ yarn run:packages <command> [arguments...]
```

runs command <commmand> with arguments [arguments...]
against each package inside the monorepo.

```
$ yarn build:dev
```

cleans previous builds and builds stories development playground
in the watch mode.
stories/

```
$ yarn clean:packages
```

cleans production build of each package inside monorepo.

```
$ yarn clean:dev
```

cleans previous stories development playground builds.

```
$ yarn prepublishOnly
```

prepares packages for publishing.

License
--------------------------------------------------------------------------------
BSD 3-Clause License

Copyright (c) 2019, Kirill Morozov
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this
   list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice,
   this list of conditions and the following disclaimer in the documentation
   and/or other materials provided with the distribution.

3. Neither the name of the copyright holder nor the names of its
   contributors may be used to endorse or promote products derived from
   this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
