# 汉子美化node版本

---

> 毛笔字服务部分

1. 首先安装**node**
2. 安装**npm**
3. 在本目录下安装**express**: `$ npm i express --save`
4. 开启web服务： `$ node index.js`
5. 在浏览器登录: `localhost:3000`


> python服务部分

1. 首先查看[webapi文档](https://gitlab.com/einverne/webapi),安装好所有程序
2. 把`Linux/judge`所有文件复制到`Linux/judge/Debug`下
3. 运行`make`
4. 修改文件`Linux/judge/Debug/index.py`，在`return judge`上一行添加` judge = 'test(' + '0' + ')'`语句，用来做**jsonp**请求用
5. 输入`python index.py`

> 汉字写入

1. 首先点击汉字库按钮，输入要写入的汉字，比如'**人**'
2. 在写字板上写入汉字。
