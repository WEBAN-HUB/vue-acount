import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import '@fortawesome/fontawesome-free/css/all.css' // Ensure you are using css-loader

Vue.use(Vuetify);

export default new Vuetify({
    customProperties: true,
    iconfont: 'fa',
});
