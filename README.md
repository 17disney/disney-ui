# disney-ui

### Install

```shell
npm install cube-ui --save
```

### Usage

```js
import Vue from 'vue'
import Cube from 'cube-ui'

Vue.use(Cube)
```

#### Use modularized cube-ui

```js
import Vue from 'vue'
import {
  /* eslint-disable no-unused-vars */
  Style,
  Button,
  ActionSheet
} from 'cube-ui'

Vue.use(Button)
Vue.use(ActionSheet)
```

### Development

```shell
npm install
npm run dev
# or run document development
npm run doc-dev
```

### Changelog

Detailed changes for each release are documented in the [release notes](https://github.com/didi/cube-ui/releases).
