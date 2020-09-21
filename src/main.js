import Vue from 'vue';
import App from './App.vue';
// import firebase from 'firebase/app';
// import 'firebase/firestore';
import vuetify from './plugins/vuetify';
import VueTextareaAutosize from 'vue-textarea-autosize';

Vue.use(VueTextareaAutosize);

Vue.config.productionTip = false;

new Vue({
	vuetify,
	render: (h) => h(App)
}).$mount('#app');
