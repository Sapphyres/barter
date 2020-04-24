import Vue from 'vue';
import VueRouter, { RouteConfig, RouteRecord } from 'vue-router';
import Home from '@/views/Home.vue';

import store from '@/store/index';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];
//
// const verifyAuthentication = (to: any, next: any, callback: any ): void => {
//   if (to.matched.some((record: RouteRecord) => record.meta.requiresAuth)) {
//     if (store.getters.isLoggedIn) {
//       callback();
//     } else {
//       store.dispatch('AuthModule/tryAutoLogin').then(() => {
//         if (!store.getters['AuthModule/isAuthenticated']) {
//           next('/account/signin');
//         } else {
//           callback();
//         }
//       });
//     }
//   } else {
//     callback();
//   }
// };
//
// const verifyAuthenticationasd = (to , next: any, callback): void => {
//     // If route required authentication
//    if (to.matched.some((record) => record.meta.requiresAuth)) {
//
//       // Load user
//       firebase.auth().onAuthStateChanged(user => {
//
//         // If user obj does not exist --> redirect to login page
//         if (!user) {
//           next({ name: 'login' });
//         } else {
//           store.commit("user/SET_USER", user);
//           user.getIdToken().then(token => {
//             store.commit("user/SET_TOKEN", token)
//           });
//
//           next();
//         }
//       });
//     } else {
//
//       // Path does not required auth - Still we check the user
//       firebase.auth().onAuthStateChanged(user => {
//
//         // If user exist (is logged in) --> store in state.
//         if (user) {
//           store.commit("user/SET_USER", user);
//           user.getIdToken().then(token => {
//             store.commit("user/SET_TOKEN", token)
//           });
//           next();
//
//         } else {
//           next();
//         }
//       });
//     }
//   })
// };

const router = new VueRouter({
  routes,
});

export default router;
