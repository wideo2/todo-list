import Vue from 'vue'
import App from './App.vue'
// import axios from 'axios'
// import { remote } from 'electron' 
// import path from 'path' 
Vue.config.productionTip = false;

// if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
// Vue.http = Vue.prototype.$http = axios

// const dbPath = path.join(remote.app.getPath('appData'), 'elecapp', 'test.db')
// const Datastore = require('nedb')
// const db = new Datastore({ filename: dbPath })
// db.loadDatabase();
// Vue.prototype.$db = db;


new Vue({
  render: h => h(App),
}).$mount('#app')
