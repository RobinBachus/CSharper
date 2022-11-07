<script setup lang="ts">
import { RouterView } from "vue-router";
import SideBar from "./components/UI/SideBar.vue";
import TopBar from "./components/UI/TopBar.vue";
</script>

<template>
  <div class="top-bar">
    <TopBar></TopBar>
  </div>
  <div class="sidebar">
    <SideBar></SideBar>
  </div>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    align-items: stretch;
  }

  .sidebar {
    display: flex;
    place-items: flex-start;
    align-items: stretch;
    flex-wrap: wrap;
    margin-left: 2rem;
    grid-area: sideBar;
  }

  .top-bar {
    grid-area: topBar;
  }

  main {
    grid-area: main;
    display: flex;
    align-items: stretch;
  }
}
</style>
