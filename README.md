# eslint-config-cloudinsight
[![](https://img.shields.io/travis/cloudinsight/eslint-config-cloudinsight.svg)](https://travis-ci.org/cloudinsight/eslint-config-cloudinsight)
[![](https://img.shields.io/npm/v/eslint-config-cloudinsight.svg)](https://www.npmjs.com/package/eslint-config-cloudinsight)
[![](https://img.shields.io/npm/dm/eslint-config-cloudinsight.svg)](http://npm-stat.com/charts.html?package=eslint-config-cloudinsight)
[![](https://img.shields.io/npm/l/eslint-config-cloudinsight.svg)](https://github.com/cloudinsight/eslint-config-cloudinsight/blob/master/LICENSE)

基于 Airbnb 的 eslint 配置

[截图](/screenshot.png)

## 安装 eslint 和相关的模块

```sh
npm install eslint@2 babel-eslint@6 eslint-config-cloudinsight@1 eslint-config-airbnb@6 eslint-plugin-react@4 --save-dev
```

## 项目目录下新建 .eslintrc.json

```
{
  "extends": "cloudinsight"
}
```

### 在项目 package.json 的 scripts 新加一项

```
"eslint":"eslint --ext=js,es6,jsx ./src"
```

### 运行 eslint 检查

```sh
npm run-script eslint
```

## 参考资料

http://eslint.org/docs/developer-guide/shareable-configs