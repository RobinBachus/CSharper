<script setup lang="ts">
import { RouterView } from "vue-router";
import SideBar from "./components/SideBar.vue";
import TopBar from "./components/TopBar.vue";
</script>

<template>
  <div class="top-bar">
    <TopBar></TopBar>
  </div>
  <div class="sidebar">
    <SideBar></SideBar>
  </div>
  <main class="main-content">
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

  .main-content {
    grid-area: main;
    padding: 2rem;
    padding-right: 15vw;
  }
}
</style>
