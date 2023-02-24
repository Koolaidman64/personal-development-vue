<template>
  <section>
    <card>
      <template #header>
        <h3>{{ fullName }}</h3>
        <BaseBadge :type="role" :caption="role.toUpperCase()" />
      </template>
      <template #default>
        <p>{{ infoText }}</p>
      </template>
    </card>
  </section>
</template>

<script>
import BaseBadge from './Base/BaseBadge.vue';

export default {
  components: {
    BaseBadge,
  },
  props: ['fullName', 'infoText', 'role'],
};
</script>
