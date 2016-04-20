# eslint-config-cloudinsight
[![](https://img.shields.io/travis/cloudinsight/eslint-config-cloudinsight.svg)](https://travis-ci.org/cloudinsight/eslint-config-cloudinsight)
[![](https://img.shields.io/npm/v/eslint-config-cloudinsight.svg)](https://www.npmjs.com/package/eslint-config-cloudinsight)
[![](https://img.shields.io/npm/dm/eslint-config-cloudinsight.svg)](http://npm-stat.com/charts.html?package=eslint-config-cloudinsight)
[![](https://img.shields.io/npm/l/eslint-config-cloudinsight.svg)](https://github.com/cloudinsight/eslint-config-cloudinsight/blob/master/LICENSE)

这是 CloudInsight 用到的基于 Airbnb 的 eslint 配置，它能够很好的统一前端的编码风格。

## 新手指南

### 安装 eslint 和相关的模块

```sh
npm install eslint-config-cloudinsight@1 eslint@2 babel-eslint@6 eslint-config-airbnb@6 eslint-plugin-react@4 --save-dev
```

### 在项目目录下新建 .eslintrc.json 这是 eslint 的默认配置文件

```json
{
  "extends": "cloudinsight"
}
```

### 在项目 package.json 的 scripts 新加一项

```json
{
  "scripts":{
    "eslint":"eslint --ext=js,es6,jsx ./src"
  }
  ...
}
```

### 运行 eslint 检查

```sh
npm run-script eslint
```

### 加到你的 CI 环境里

```sh
node_modules/.bin/eslint --ext es6,jsx,js --format checkstyle -o checkstyle.xml ./src || true
```

------

![截图](/screenshot.png)

## 参考资料

http://eslint.org/docs/developer-guide/shareable-configs