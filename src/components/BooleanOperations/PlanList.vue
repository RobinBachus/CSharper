<template>
  <h2>Plans:</h2>
  <div id="checklist">
    <p class="checkbox"></p>
    <p class="label">Option for string or number (string only [==])</p>
    <p class="checkbox"></p>
    <p class="label">
      Check if expression is true ([&lt;], [>], [==], [&lt;=], [>=])
    </p>
    <p class="checkbox"></p>
    <p class="label">Not flag [!] to reverse output</p>
    <p class="checkbox"></p>
    <p class="label">Add information about the operators</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PlanList",
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap");

#checklist {
  display: grid;
  grid-template-columns: fit-content(2rem) auto;
  align-items: center;
  gap: 5px;
}

.checkbox {
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  background-color: #333;
  color: hsla(160, 100%, 37%, 1);
  width: 1.6em;
  border: 1.5px inset hsla(160, 100%, 37%, 1);
  text-align: center;
  font-family: "Permanent Marker", cursive;
  font-size: smaller;
}

.checkbox:not(.todo)::after {
  content: "V";
}

.todo {
  color: red;
}
.todo::after {
  content: "X";
}

p {
  padding: 0;
}
</style>
