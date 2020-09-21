import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import VueTextareaAutosize from 'vue-textarea-autosize';
// import firebase from 'firebase/app';
// import 'firebase/firestore';
// require('dotenv').config();

Vue.use(VueTextareaAutosize);

Vue.config.productionTip = false;

// firebase.initializeApp({
// 	apiKey: process.env.apiKey,
// 	authDomain: process.env.authDomain,
// 	databaseURL: process.env.databaseURL,
// 	projectId: process.env.projectId,
// 	storageBucket: process.env.storageBucket,
// 	messagingSenderId: process.env.messagingSenderId,
// 	appId: process.env.appId
// });

// export const db = firebase.firestore();

new Vue({
	vuetify,
	render: (h) => h(App)
}).$mount('#app');
