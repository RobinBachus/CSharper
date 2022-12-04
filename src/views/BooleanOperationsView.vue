<script setup lang="ts">
import Plans from "../components/BooleanOperations/PlanList.vue";
import Info from "../components/BooleanOperations/InfoContainer.vue";
import InteractiveComponent from "../components/BooleanOperations/InteractiveComponent.vue";
</script>

<template>
  <div class="main-container">
    <div id="interactive">
      <InteractiveComponent></InteractiveComponent>
    </div>
    <div id="info">
      <Info></Info>
    </div>
    <div id="plans">
      <Plans></Plans>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  components: {
    Plans,
    Info,
    InteractiveComponent,
  },
};
</script>

<style scoped>
@media (min-width: 1024px) {
  .main-container {
    display: grid;
    grid-template-columns: fit-content(30rem) fit-content(100%);
    grid-template-rows: fit-content(12rem) 1fr;
    grid-gap: 2rem;
    padding-left: 4rem;
    padding-top: 2rem;
  }

  #interactive {
    border-bottom: 2px dashed #1d4975;
  }

  #info {
    padding-left: 5rem;
    grid-column: 2;
    grid-row: 1 / 3;
    max-width: 43rem;
  }
}
</style>
