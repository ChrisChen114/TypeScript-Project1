# 使用webpack打包ts代码
    生成package.json文件

## 使用npm init -y
    初始化工程

## npm i -D webpack webpack-cli typescript ts-loader
    开发模式下，安装几个包
  - webpack
    - 构建工具webpack
  - webpack-cli
    - webpack的命令行工具
  - webpack-dev-server
    - webpack的开发服务器
  - typescript
    - ts编译器
  - ts-loader
    - ts加载器，用于在webpack中编译ts文件
  - html-webpack-plugin
    - webpack中html插件，用来自动创建html文件
  - clean-webpack-plugin
    - webpack中的清除插件，每次构建都会先清除目录

  webpack:
  webpack-cli:
  typescript: ts的核心包
  ts-loader: 是webpack的加载器，将typescript和wepack进行整合，变成一体的。

## 编写webpack.config.js文件

## 编写tsconfig.json文件

## 修改package.json文件
    在"scripts"，增加 "build": "webpack"
    还有其他


