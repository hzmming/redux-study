demo01、demo02 是跟着技术胖教程学下手动过程
https://jspang.com/detailed?id=48

demo01
* store必须是唯一的，不能有多个
* reducer不能改store数据，要返回新state
* reducer必须是纯函数
dispatch只支持传对象，不能传函数。添加redux-thunk中间件，增强redux功能使dispatch支持函数，且支持异步函数

demo02
使用react-redux包装组件，更进一步地封装使用redux吧

demo03 
跟着官网，使用官网推荐的@reduxjs/toolkit，更方便地使用redux，有种手动档->自动档的赶脚。
基于create-react-app，手抄一遍官方的模板。
实际使用，只有执行如下命令便可得到
```shell
create-react-app my-app --template redux
```