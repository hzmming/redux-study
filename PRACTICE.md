demo01、demo02 是跟着技术胖教程学下手动过程
https://jspang.com/detailed?id=48
* store必须是唯一的，不能有多个
* reducer不能改store数据，要返回新state
* reducer必须是纯函数
dispatch只支持传对象，不能传函数。添加redux-thunk中间件，增强redux功能使dispatch支持函数，且支持异步函数

demo03 是跟着官网，使用官网推荐的toolkit，更方便