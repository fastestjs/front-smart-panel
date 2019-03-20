# front-smart-panel

fastest 前端页面的使用面板

## 功能

- 切换测试环境
  - 展示列表
  - 选择列表
  - 简易查看规则及为何命中了这个规则
- 展示插件
  - 启用 eruda 启用
  - reload 页面
  

### 细节

请求到达 whistle.fastest 插件时，该插件会按照如下的顺序寻找 `envId` :

- url 携带的 `_fstid_`
- cookie 中的 `_fstid_`
- referer 中的 `_fstid_`

如果找到了 `envId`，则请求 fastest 后台接口，获得该 `envId` 对于的环境信息；如果找不到 `envId`，会从 cookie 中寻找 `token`, 它与 `envId` 是一一对应的，因此等效；
除此之外，如果 cookie 中携带了 QQ 号码，还能获得该 QQ 号码拥有的所有可选测试环境列表。

如果没法获得 `envId` 或 `token`，且 cookie 中也没有 QQ 号，则 whistle.fastest 会将请求代理到一个独立的页面，该页面提示进行登录QQ登录或者输入 token，处理完成之后再返回到原页面

如果获得的 `envId` 自己没有权限使用，则请求代理代理到一个独立页面，用于选择可选的环境




  
### 如果选择 iframe 方案

- 页面和样式可独立控制
- 通过 postMessage 来交换信息
- 弹出提示：没有权限使用该环境
- cookie 记录了一些信息需要同步到 iframe 中
- 原 html 中需要注入必要的代码，以便与 iframe 交互

## 参考

- https://segmentfault.com/a/1190000012274586
- http://www.cnblogs.com/aaron-pan/p/9019718.html
- https://www.zhihu.com/question/23683645
- https://juejin.im/post/5b8359f351882542ba1dcc31