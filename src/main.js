// Fait le lien avec toute l'application, renvoie l'image
import Vue from 'vue'
import App from './App.vue'
// Récupérer tous les composants qui sont dans mon dossier router
import router from "./router";

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
