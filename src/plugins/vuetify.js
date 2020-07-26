import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        bp: '#ED3237',
        bb1: '#EBF2EB',
        bb2: '#DEE5DE'
      },
      dark: {
        bp: '#ED3237',
        bb1: '#EBF2EB',
        bb2: '#DEE5DE'
      }
    }
  }
});
