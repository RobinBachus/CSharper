<template>
  <div class="tab">
    <h1>Plans:</h1>
    <ul>
      <li>Basic calculus ([+], [-], [*], [/])</li>
      <li>Math.Pow, Math.sqrt</li>
      <li>Divisibility checker</li>
      <li>Return a given length of pi</li>
      <li>Check if a number is prime</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PlanList",
});
</script>
