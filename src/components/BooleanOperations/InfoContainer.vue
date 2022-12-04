<template>
  <h1>Info</h1>
  <h2>About</h2>
  <h2>What can it do?</h2>
  <ul>
    <li>
      [<span class="prime">P</span>] is often used as the symbol for the set of
      prime numbers. In this program it is used to test if a number is a prime
      number.
    </li>
  </ul>
  <h2>footnotes</h2>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "InfoContainer",
  methods: {
    flash(target: string) {
      const element = document.querySelector(target) as HTMLElement;
      if (element !== null) {
        element.style.outline = "2px solid yellow";
        setTimeout(() => {
          element.style.outline = "2px solid transparent";
        }, 1000);
      }
    },
  },
});
</script>

<style scoped>
h2 {
  color: hsla(160, 100%, 37%, 1);
}

code {
  color: #3f9af5;
  background-color: black;
}

.constant {
  color: rgb(250, 187, 14);
}

.footnote {
  padding: 0;
  transition: outline 0.5s;
}
</style>
