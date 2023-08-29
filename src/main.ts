import { createApp } from 'vue'
import './index.css'
import App from './App.vue'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { headroom } from "vue-headroom";




createApp(App)
       .use(headroom)
      .component("font-awesome-icon", FontAwesomeIcon)
      .mount('#app')

