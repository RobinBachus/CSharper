<script setup lang="ts">
import Plans from "../components/Calculations/PlanList.vue";
import Calculator from "../components/Calculations/CalculatorComponent.vue";
</script>

<template>
  <div class="main-container">
    <div id="tab-container">
      <button
        v-for="tab in tabs"
        :key="tab"
        :class="['tab-button', { active: currentTab === tab }]"
        @click="currentTab = tab"
      >
        {{ tab }}
      </button>
    </div>
    <!--I wasn't able to get the buttons bars to transform so it became a static icon  -->
    <div id="sidebar-toggle" @click="toggleMenu()">
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
    </div>
    <component :is="currentTab" class="tab"></component>
  </div>
</template>

<script lang="ts">
export default {
  components: {
    Plans,
    Calculator,
  },
  data() {
    return {
      currentTab: "Calculator",
      tabs: ["Plans", "Calculator"],
    };
  },
  methods: {
    toggleMenu() {
      document
        .getElementById("tab-container")!
        .classList.toggle("tab-container-closed");
    },
  },
};
</script>

<style scoped>
@media (min-width: 1024px) {
  .main-container {
    display: flex;
    flex-direction: row;
    align-items: stretch;
  }

  #sidebar-toggle {
    height: 2rem;
    width: 2rem;
    margin-top: 1rem;
    margin-left: -4rem;
    margin-right: 2rem;
    cursor: pointer;
  }

  .bar {
    width: 35px;
    height: 5px;
    background-color: #333;
    margin: 6px 0;
    transition: 0.4s;
  }

  #tab-container {
    display: flex;
    flex-direction: column;
    width: 6rem;
    font-size: 1rem;
    padding-top: 4rem;
    border-right: 2px solid #13392c;
    transition: transform 0.4s;
  }

  .tab-container-closed {
    transform: translate(-6rem, 0);
  }

  .tab-button {
    color: var(--color-text);
    background-color: transparent;
    cursor: pointer;
    border: 0;
    display: inline-block;
    padding: 0.3rem 1rem;
    transition: 0.2s;
    text-align: left;
  }

  .active {
    color: hsla(160, 100%, 37%, 1);
  }

  .tab-button:hover:not(.active) {
    background-color: #13392c;
  }

  .tab {
    margin-top: 3rem;
    margin-left: 3rem;
  }
}
</style>
