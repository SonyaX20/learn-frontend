# 目录  

# 创建项目
## 1. 安装next.js项目
npx：npm自带的命令 \
查看node版本：```node -v``` \
Next.js安装在了这里：```C:\Users\siyux\AppData\Roaming\create-next-app-nodejs``` \
运行```npx create-next-app@latest```创建项目 \
```package.json```下的scripts是可以运行的命令：```npm run **``` \
***
src下的文件夹：```apis components pages styles types utils``` \
pages：项目页面， 包括图书、借阅、类别、登录、用户。\
```.tsx```就是typescript文件。

## 2. 安装依赖
[antd](https://ant.design/docs/react/getting-started-cn)：UI扩展库 \
安装时直接用了```npm i antd```，可以使用，而且也添加到了```package.json```中。
```javascript
import 'antd/dist/reset.css';   // 引入css
import { Button } from "antd";  //引入组件
```
***