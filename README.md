# 开始

1. 下载安装 [MongoDB](https://www.mongodb.com/try/download/community)（MongoDB Compass 可不安装） 和 [MongoDB Command Line Database Tools](https://www.mongodb.com/try/download/database-tools)，工具包解压后的 .exe 文件放入到 MongoDB/bin 目录下。

1. 正确安装 mongodb 后，导入数据库数据---将 /server/dump 文件夹复制到 MongoDB/bin 目录下，在 bin 目录运行以下命令

``` cmd
./mongorestore -d node-vue-moba -directoryperdb dump\irectoryperdb
```


2. 进入 /admin 目录，执行 `npm i` ，执行 `npm run serve`

3. 进入 /serve 目录，执行 `npm i` ，执行 `npm run serve`

4. 访问 http://localhost:8888

5. 登录账号：

|  用户名   | 密码  | 角色 |
|  ----  | ----  | ---- |
| qiang  | Qq333333 | 管理员 |
| zhen  | Zz222222 | 老师 |
| ming  | Mm111111 | 学生 |
