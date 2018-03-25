<template>
  <form class="UserForm">
    <div>
      <label>
        Username
        <input v-model="username">
      </label>
    </div>
    <div>
      <label>
        Email
        <input v-model="email">
      </label>
    </div>
  </form>
</template>

<script>
import { userModelFactory } from '../models/User';

const user = userModelFactory();

export default {
  name: 'User',
  computed: {
    ...user.mapFields(),
  },
};
</script>
