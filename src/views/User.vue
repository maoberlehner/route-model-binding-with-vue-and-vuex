<template>
  <div class="User">
    <p>Username: {{ user.username }}</p>
    <p>Email: {{ user.email }}</p>
  </div>
</template>

<script>
export default {
  name: 'User',
  props: {
    user: {
      type: Object,
    },
  },
};
</script>
