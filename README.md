# cube-ui [![Build Status](https://travis-ci.org/17disney/disney-ui.svg?branch=master)](https://travis-ci.org/17disney/disney-ui?branch=master) [![codecov.io](http://codecov.io/github/17disney/disney-ui/coverage.svg?branch=master)](http://codecov.io/github/17disney/disney-ui?branch=master)

> 17Disney App VUE 组件库

### 安装

```shell
npm install disney-ui --save
```

### 使用

```js
import Vue from 'vue'
import Ds from 'disney-ui'

Vue.use(Ds)
```

#### 按需使用

```js
import Vue from 'vue'
import {
  /* eslint-disable no-unused-vars */
  Style,
  Button,
  ActionSheet
} from 'disney-ui'

Vue.use(Button)
Vue.use(ActionSheet)
```

### Development

```shell
git clone git@github.com:didi/cube-ui.git
cd cube-ui
npm install
npm run dev
# or run document development
npm run doc-dev
```

