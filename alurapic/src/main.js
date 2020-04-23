import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import VueRouter from 'vue-router';
import {routes} from './routes';

//font awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)
library.add(faSpinner)
Vue.component('font-awesome-icon', FontAwesomeIcon)
//font awesome


Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({ routes });

