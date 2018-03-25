import Vue from 'vue';
import Router from 'vue-router';

import User from './views/User.vue';
import UserForm from './views/UserForm.vue';

import bindModel from './utils/bind-model';

import { userModelFactory } from './models/User';

const userModel = userModelFactory();

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/user/create',
      name: 'user-create',
      component: UserForm,
    },
    {
      path: '/user/:user',
      name: 'user',
      component: User,
      props: bindModel(userModel),
    },
  ],
});
