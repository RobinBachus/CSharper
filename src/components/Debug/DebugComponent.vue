<template>
  <h1>This is a debug page</h1>
  <h3>Little effort will be put in styling this page</h3>
  <h3 class="warning">
    WARNING: These inputs have no restrictions and will likely throw server
    errors! <br />
    The server should be able to handle most errors without crashing, but they
    should still be avoided to keep unexpected behavior to a minimum
  </h3>
  <br />
  <form @submit.prevent="getResult()">
    <h2>Give in your expression</h2>
    <input
      id="numberField1"
      v-model="numberField1"
      type="text"
      maxlength="20"
    />
    <input type="checkbox" id="not-flag" v-model="flag" />
    <select id="operator" v-model="operator">
      <option>+</option>
      <option>-</option>
      <option>*</option>
      <option>/</option>
      <option>^</option>
      <option>√</option>
      <option>%</option>
      <option>π</option>
      <option>==</option>
      <option>>=</option>
      <option>&lt;=</option>
      <option>></option>
      <option>&lt;</option>
      <option>P</option>
    </select>
    <input
      id="numberField2"
      v-model="numberField2"
      type="text"
      maxlength="20"
    />
    <button id="submit">=</button>
    <br />
    <div id="interactive-bottom">
      <div id="mode-radio">
        <input id="numbers" type="radio" value="0" v-model="mode" />
        <label for="numbers">numbers</label> <br />
        <input id="text" type="radio" value="1" v-model="mode" />
        <label for="text">text</label>
      </div>

      <select v-model="module">
        <option value="1">{{ modules[modules.Calculations] }}</option>
        <option value="2">{{ modules[modules.BooleanOperations] }}</option>
        <option value="3">{{ modules[modules.RandomGenerator] }}</option>
        <option value="4">{{ modules[modules.Converter] }}</option>
        <option value="0">{{ modules[modules.Preflight] }}</option>
      </select>

      <div id="result-container">
        <p>Result:</p>
        <input id="result" v-model="result" type="text" disabled />
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import { Modules, makePOSTRequest } from "../../Common";
import type { RequestData } from "../../Common";

export default {
  name: "CalculatorTab",
  data() {
    return {
      modules: Modules,
      module: 1,
      numberField1: "",
      numberField2: "",
      flag: false,
      operator: "==",
      mode: "0",
      result: "",
    };
  },
  methods: {
    async getResult() {
      const data: RequestData = {
        Module: Object.keys(this.modules)[this.module] as unknown as number,
        Parameters: [
          this.numberField1,
          this.numberField2,
          this.operator,
          this.mode,
          this.flag as unknown as string,
        ],
      };
      const response = await makePOSTRequest(data);
      this.result = await response.text();
    },
  },
};
</script>

<style>
input {
  color: black;
  background-color: white;
}

.warning {
  color: red;
}
</style>
