1. npm 安装 yarn 后，提示文件名、目录名或卷标语法不正确

   原因：yarn默认全局安装路径与yarn命令执行目录不一致

   ```js
   yarn global bin // 默认node_global目录
   yarn gloabl dir// 默认系统盘 C:\Users\candyGood\AppData\Local\Yarn\Data\global
   ```

   解决：修改yarn命令目录和全局安装目录

   ```js
   yarn config set global-folder 'd:\yarn\global'
   yarn config set global-cache 'd:\yarn\cache'
   ```

   

