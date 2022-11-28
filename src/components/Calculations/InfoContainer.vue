<template>
  <h1>Info</h1>
  <h2>About</h2>
  <p>
    This component can do simple math and a few other things. <br />
    Just plug your parameters into the top 2 input fields and <br />
    select an operation by switching the middle dropdown menu.
  </p>
  <h2>What can it do?</h2>
  <ul>
    <li>Basic math with the [+], [-], [*] and [/] operators</li>
    <li>
      The [^] operator is for getting <a href="#numberField1">[A]</a> to the
      power of <a href="#numberField2">[B]</a>
    </li>
    <li>
      You can use [√] to get the square root of a number<sup
        ><a href="javascript:void(0)" @click="flash('#footnote-1')">1</a></sup
      >
    </li>
    <li>
      The [%] or remainder operator returns the result of "<code>
        <a href="#numberField1">[A]</a>-(<a href="#numberField1">[A]</a>/<a
          href="#numberField2"
          >[B]</a
        >)*<a href="#numberField2">[B]</a> </code
      >"
      <br />
      This is most often used in code to test divisibility using "<code
        ><a href="#numberField1">[A]</a>%<a href="#numberField2">[B]</a>==<span
          class="constant"
          >0</span
        ></code
      >"
    </li>
    <li>
      The [π] operator will return pi to <a href="#numberField1">[A]</a> decimal
      places<sup
        ><a href="javascript:void(0)" @click="flash('#footnote-1')">1</a></sup
      >
    </li>
  </ul>
  <h2>footnotes</h2>
  <p id="footnote-1" class="footnote">[1] These operators only have 1 input</p>
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
