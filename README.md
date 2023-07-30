# icons.toolkit.vue

[![npm version](https://img.shields.io/npm/v/@yaohaixiao/icons.toolkit.vue)](https://www.npmjs.com/package/@yaohaixiao/icons.toolkit.vue)
[![prettier code style](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://prettier.io)
[![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)
[![MIT License](https://img.shields.io/github/license/yaohaixiao/icons.toolkit.vue)](https://github.com/yaohaixiao/icons.toolkit.vue/blob/main/LICENSE)

icons.toolkit.vue - 专为 icons.js 配套的工具箱。



## 特点

* 多款免费且设计优美的图标集；
* 提供单个 SVG 图标复制和下载；
* 支持跨图标集选择图标，创建自定义图标集；
* 支持导入第三方 SVG 图标，创建自定义图标集;
* 支持打包下载自定义图标集；
* 支持下载图标集 ES6 模块；



## 图标集

icons.toolkit.vue 目前以收集了 16 个免费且设计优美的图标集：

1. @yaohaixiao/icons.js-toolkit/assets/brankic1979
2. @yaohaixiao/icons.js-toolkit/assets/broccolidry
3. @yaohaixiao/icons.js-toolkit/assets/zondicons
4. @yaohaixiao/icons.js-toolkit/assets/eighty-shades
5. @yaohaixiao/icons.js-toolkit/assets/entypo
6. @yaohaixiao/icons.js-toolkit/assets/feather
7. @yaohaixiao/icons.js-toolkit/assets/font-awesome
8. @yaohaixiao/icons.js-toolkit/assets/hawcons
9. @yaohaixiao/icons.js-toolkit/assets/iconic
10. @yaohaixiao/icons.js-toolkit/assets/linecons
11. @yaohaixiao/icons.js-toolkit/assets/material
12. @yaohaixiao/icons.js-toolkit/assets/meteocons
13. @yaohaixiao/icons.js-toolkit/assets/steadysets
14. @yaohaixiao/icons.js-toolkit/assets/typicons
15. @yaohaixiao/icons.js-toolkit/assets/vicons
16. @yaohaixiao/icons.js-toolkit/assets/wpzoom



### Usage

icons.toolkit.vue 是 icons.js 配套的工具箱，是其中使用的 BaseIcon 图标组件和图标集绘制功能都是基于 icons.js 提供的功能开发的。


#### 纯 ES6 开发

```js
// 导入 icons.js 中可以直接使用的 symbols 数据
import ICONS from '@yaohaixiao/icons.toolkit.vue/assets/brankic/icons'

// 导入 icons.js 的功能函数
import paint from '@yaohaixiao/icons.js/paint'
import icon from '@yaohaixiao/icons.js/icon'

// 绘制 svg sprites 图标集
paint(ICONS)

// 创建 svg 图标的 DOM 元素
const $icon = icon('up')
// 将图标绘制到指定的按钮内
document.querySelector('#button__up').appendChild($icon)
```


#### VUE 开发

```vue
<template>
  <icon name="up" :size="32" />
</template>
```

```js
// 导入 icons.js 中可以直接使用的 symbols 数据
import ICONS from '@yaohaixiao/icons.js-toolkit/assets/brankic/icons'
// 导入 icons.js 的 Icon 组件
import Icon from '@yaohaixiao/icons.js/components/Icon'

// 绘制 svg sprites 图标集
paint(ICONS)

export default {
  name: 'XXXPage',
  components: {
    Icon
  },
  // ... 省略其他
}
```


#### 导入图标集

icons.js-toolkit 中除了提供 symbols 数组格式的数据，还有图标集类型的数据：

```js
// 导入图标集
import ICONS from './icons'

const BRANKIC_1979 = {
  title: 'Brankic 1979 图标集',
  designer: 'Brankic1979',
  homepage: 'http://brankic1979.com/icons/',
  license: 'Custom (Free to use)',
  code: 'brankic',
  symbols: ICONS
}
```



## License

JavaScript Code Licensed under [MIT License](http://opensource.org/licenses/mit-license.html).

API Documentation Licensed under [CC BY 3.0](http://creativecommons.org/licenses/by/3.0/)
