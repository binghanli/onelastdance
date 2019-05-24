import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';//引入样式

import SiderDemo from './Lzz/Lzz';//引入自己写的组件(class)
import { register } from './serviceWorker';
 
ReactDOM.render(<SiderDemo />, document.getElementById('root'));
register();
//registerServiceWorker就是为react项目注册了一个service worker，
// 用来做资源的缓存，这样你下次访问时，就可以更快的获取资