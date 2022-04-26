import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Codemirror from "codemirror-editor-vue3";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import vant from 'vant'
import 'vant/lib/index.css';
import './assets/font/fontIcon/iconfont.css'

import electron from 'electron'
const app = createApp(App)
app.config.globalProperties.$electron = electron
app.use(store).use(router).use(ElementPlus,{locale: zhCn}).use(Codemirror).use(vant).mount('#app')
