import favoritos from '.component/favoritos/favoritos.vue';
import home from '.component/home/home.vue'
export const routes = [
  {
    path:'/', component : home
  },
  {
    path: '/favoritos/', component : Favoritos
  },
];
