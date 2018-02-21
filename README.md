# WIP
项目并未完成, 部分jsbox语法会提示不存在


# 使用方法 

1. 克隆项目到本地
2. 执行`npm install`安装依赖库
3. 修改`/jsbox.config.json` 文件的`host`为自己手机的ip
4. 打开手机的jsbox
5. 执行 `npm start`
> 每次代码变化会自动编译并自动上传到手机

# 说明
源代码在 src 目录下

编译结果在 dist 目录下

如果需要将dist同步到git上需要删除 `.gitignore`文件中的`/dist`

文件入口在 `jsbox.config.json` 中配置
暂时只有第一个脚本会被自动上传到手机



