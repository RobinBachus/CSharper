<template>
  <h1>Info</h1>
  <h2>About</h2>
  <p>
    Booleans are a datatype that can hold either '<span id="true">True</span>'
    or '<span id="false">False</span>. This is very useful for comparing or
    testing things, which is what this module is for! It lets you compare text
    or numbers, or test a few things with numbers.
  </p>
  <h2>What can it do?</h2>
  <ul>
    <li>
      All operators return either '<span id="true">True</span>' or '<span
        id="false"
        >False</span
      >'
    </li>
    <li>
      The buttons labeled 'numbers' and 'text' is to change if you want to
      compare numbers or text. Text is limited to the [==] operator.
    </li>
    <li>
      The checkbox next to the operator is a '<span id="not">NOT</span>' flag.
      If it is checked the result will be inverted (ex. 5 == 5 returns '<span
        id="false"
        >False</span
      >' if checked).
    </li>
    <li>The [==] is used to test if two words or numbers are equal.</li>
    <li>
      The following operators can be used to compare two numbers:
      <ul>
        <li>
          [>=] -- returns '<span id="true">True</span>' if
          <a href="#numberField1">[A]</a> is greater than or equal to
          <a href="#numberField2">[B]</a>
        </li>
        <li>
          [&lt;=] -- returns '<span id="true">True</span>' if
          <a href="#numberField1">[A]</a> is less than or equal to
          <a href="#numberField2">[B]</a>
        </li>
        <li>
          [>] ---- returns '<span id="true">True</span>' if
          <a href="#numberField1">[A]</a> is greater than
          <a href="#numberField2">[B]</a>
        </li>
        <li>
          [&lt;] ---- returns '<span id="true">True</span>' if
          <a href="#numberField1">[A]</a> is less than
          <a href="#numberField2">[B]</a>
        </li>
      </ul>
    </li>
    <li>
      [<span class="prime">P</span>] is often used as the symbol for the set of
      prime numbers. In this program it is used to test if
      <a href="#numberField1">[A]</a> is a prime number.
      <a href="#numberField1">[A]</a> has to be a positive integer.<a
        href="javascript:void(0)"
        @click="flash('#footnote-1')"
        class="footnote-1-ref"
        >1</a
      >
    </li>
  </ul>
  <h2>footnotes</h2>
  <p id="footnote-1" class="footnote">
    <a href="javascript:void(0)" @click="flashFootnoteRefs(1)">[1]</a> These
    operators only have 1 input
  </p>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  methods: {
    flashFootnoteRefs(footnote: number) {
      const refName = "footnote-" + footnote + "-ref";
      const footnotes = document.getElementsByClassName(refName);
      for (const element of footnotes) {
        const parent = element.parentElement as HTMLElement;
        console.log(parent.nodeType);
        this.flash(parent);
      }
    },
    flash(target: string | HTMLElement) {
      let element: HTMLElement;
      if (typeof target == "string") {
        element = document.querySelector(target) as HTMLElement;
      } else {
        element = target;
      }
      if (element !== null) {
        element.style.outline = "2px solid yellow";
        element.style.transitionDuration = "0.5s";
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

#not {
  color: #3f9af5;
}

#true {
  color: #15a003;
}

#false {
  color: rgb(255, 84, 95);
}

.footnote-1-ref {
  vertical-align: super;
  font-size: smaller;
}

.footnote {
  padding: 0;
  transition: outline 0.5s;
}
</style>
