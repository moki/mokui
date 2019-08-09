mokui
--------------------------------------------------------------------------------
ui components monorepo


Components
--------------------------------------------------------------------------------
individual components and their specifications
can be found at packages/<mokui-component-name>


scripts
--------------------------------------------------------------------------------
```
sh init-dev-env.sh
```

initialize dev tooling, basically run this after yarn[npm init]

```
$ sh add-pkg.sh <pkg-name>
```

adds package <pkg-name> scaffolds package with provided template
in the script, includes: package.json and makefile.

```
$ sh add-com-dep.sh <dependency-name>[@version] [--dev]
```

adds dependency <dependency-name> to each repository with lerna,
--dev flag adds dev dependency to the yarn workspace.

```
$ sh add-sib-dep.sh <source-package> <target-package>
```

adds package <source-package> as sibling dependency to the
package <target-package> with lerna, updates package.json
of the package <target-package>.

```
$ sh rm-com-dep.sh <dependency-name>
```
removes dependency <dependency-name> of each repository with lerna.

```
$ sh publish.sh
```
publish with lerna

```
$ yarn/npm build
```

runs build script on each package in the repository


license
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
