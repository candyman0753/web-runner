## 目的

规范和约束提交信息，提高可读性，利于Code Review

## 提交格式

推荐使用Angular规范， commit message 包含 header、body、footer，其中header为必须信息

```js
<type>(<scope>): <subject> // header
// 空行
<body>
// 空行
<footer>
```

### type

标识commit类别

- feat：新功能（feature）
- fix：修复bug
- docs：文档
- style：格式
- refactor：重构
- test：增加测试
- chore：构建过程或辅助工具变动

### scop

说明 commit 影响范围，如某某功能，某某模块，可用*表示所有，可省略

### subject

commit内容的简短描述，不超过50个字符

- 动词开头，第一人称现在时，如change something
- 首字母小写
- 结尾不加句号.

### body

commit的详细描述，可分多行，可省略

- 第一人称现在时
- 第二行空行
- 说明代码变动的动机，以及前后比较

```js
More detailed explanatory text, if necessary.  Wrap it to 
about 72 characters or so. 

Further paragraphs come after blank lines.

- Bullet points are okay, too
- Use a hanging indent
```

### footer

只适用于以下几种情况

- 不兼容变动

当前修改与上个版本不兼容时，以BREAKING CHANGE开头，完善变动描述、变动动机及迁移方法

```js
BREAKING CHANGE: isolate scope bindings definition has changed.

    To migrate the code follow the example below:

    Before:

    scope: {
      myAttr: 'attribute',
    }

    After:

    scope: {
      myAttr: '@',
    }

    The removed `inject` wasn't generaly useful for directives so there should be no code using it.
```

- 关闭Issue

针对某个Issue，发起关闭

```js
Closes #123
```

- Revert

撤销以前的commit，以 revert 开头，紧跟被撤销的commit的header

```js
revert: feat(pencil): add 'graphiteWidth' option

This reverts commit 667ecc1654a317a13331b17617d973392f415f02.
```

## 规范工具

- 提交格式化

使用Commitizen添加提交消息格式

```js
// 安装
npm install -g commitizen
```

- 使用angular规范

在项目内安装 cz-conventional-changelog

```js
commitizen init cz-conventional-changelog --save --save-exact
```

- 生成提交日志

使用 [conventional-changelog](https://link.jianshu.com/?t=https%3A%2F%2Fgithub.com%2Fajoslin%2Fconventional-changelog) 

```js
$ npm install -g conventional-changelog
$ cd my-project
$ conventional-changelog -p angular -i CHANGELOG.md -w
```

