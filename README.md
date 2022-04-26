# E-API
# 1、安装
```bash
npm i
# 如果启动不了，安装一下插件
yarn add vue-cli-plugin-electron-builder -D --tilde
# Electron启动（注意切换注释以下部署文件，启动白屏的话拖动窗口大小即可）
yarn electron:serve
# 网页启动(注意切换注释以下部署文件，否则启动白屏)
yarn serve 
```
# 2、私有化部署说明：
### 1、main.js
Electron版本需要打开一下文件注释
网页版需要注释掉
```js
import electron from 'electron'
app.config.globalProperties.$electron = electron
```
### 2、src\views\Index\components\Header.vue
Electron版本需要打开一下文件注释
网页版需要注释掉
```js
  this.$electron.ipcRenderer.on('maxState',function(event,data){
        This.isMax = data
    })
```
### 3、环境变量（打包配置）
```
VUE_APP_publicPath='http://127.0.0.1:7001' // 部署API地址
VUE_APP_Electron=1  // 1是客户端  0 是插件
```
### 4、插件
将打包好的文件放在一下目录中
```bash
浏览器插件\e-api
```
### 5、src\views\Main\Api\Item\components\MockItem.vue
注释切换
```js
// 插件开启，Electron注释
// import Clipboard from 'clipboard'

if(this.isElectron == 1){
  // ELectron开启
                this.$electron.clipboard.writeText(this.linkUrl)
            }else{
                // 插件开启
                // this.clipboard = new Clipboard(this.$refs['copyMockText']);  
                // this.clipboard.on('success', e => {
                //     console.log('复制成功')
                //     This.$message.success('复制成功')  
                //     e.clearSelection();
                //     this.clipboard.destroy()
                // })
                // this.clipboard.on('error', e => {
                //     console.log('该浏览器不支持自动复制')
                   
                // })
            }
```
## 6、配合的后端代码：
https://github.com/cgq001/e-api-egg