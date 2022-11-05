<script setup lang="ts">
import Test from "../components/Calculator/Test.vue";
import Plans from "../components/Calculator/Plans.vue";
</script>

<template>
  <div class="main-container">
    <div class="tab-container">
      <button
        v-for="tab in tabs"
        :key="tab"
        :class="['tab-button', { active: currentTab === tab }]"
        @click="currentTab = tab"
      >
        {{ tab }}
      </button>
    </div>
    <component :is="currentTab" class="tab"></component>
  </div>
</template>

<script lang="ts">
export default {
  components: {
    Plans,
    Test,
  },
  data() {
    return {
      currentTab: "Plans",
      tabs: ["Plans", "Test"],
    };
  },
};
</script>

<style scoped>
@media (min-width: 1024px) {
  .main-container {
    display: flex;
    flex-direction: row;

    align-items: center;
  }

  .tab {
    margin-top: 3rem;
  }

  .tab-container {
    display: flex;
    flex-direction: column;
    text-align: left;
    font-size: 1rem;
    width: 5rem;

    margin-top: 0rem;
    padding: 2rem 0;

    border-right: 1px solid black;
  }
  .tab-button {
    color: var(--color-text);
    background-color: transparent;
    cursor: pointer;
    border: 0;
  }
}
</style>
