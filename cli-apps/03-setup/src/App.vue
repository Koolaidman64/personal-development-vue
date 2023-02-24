<template>
  <div>
    <TheHeader />
<!--    <BadgeList />-->
<!--    <UserInfo-->
<!--      :full-name="activeUser.name"-->
<!--      :info-text="activeUser.description"-->
<!--      :role="activeUser.role"-->
<!--    />-->
<!--    <CourseGoals #default="slotProps">-->
<!--      <h2>{{ slotProps.item }}</h2>-->
<!--      <p>{{ slotProps.anotherProp }}</p>-->
<!--    </CourseGoals>-->
    <button @click="setSelectedComponent('active-goals')">Active Goals</button>
    <button @click="setSelectedComponent('manage-goals')">Manage Goals</button>
<!--    <active-goals v-if="selectedComponent === 'active-goals'" />-->
<!--    <manage-goals v-if="selectedComponent === 'manage-goals'"/>-->
    <keep-alive>
      <component :is="selectedComponent" />
    </keep-alive>
  </div>
</template>

<script>
import TheHeader from './components/Layout/TheHeader.vue';
// import BadgeList from './components/BadgeList.vue';
// import UserInfo from './components/UserInfo.vue';
// import CourseGoals from './components/CourseGoals.vue';
import ActiveGoals from './components/ActiveGoals.vue';
import ManageGoals from './components/ManageGoals.vue';

export default {
  components: {
    TheHeader,
    // BadgeList,
    // UserInfo,
    // CourseGoals,
    ActiveGoals,
    ManageGoals,
  },
  data() {
    return {
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
      selectedComponent: 'active-goals',
    };
  },
  methods: {
    setSelectedComponent(cmp) {
      this.selectedComponent = cmp;
    },
  },
};
</script>

<style>
  html {
    font-family: sans-serif;
  }

  body {
    margin: 0;
  }
</style>
