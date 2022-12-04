<script setup lang="ts"></script>

<template>
  <main>
    <h1>Boolean operations</h1>
    <div class="form-container">
      <form @submit.prevent="getResult()">
        <h2>Give in your expression</h2>
        <!-- Not using number inputs because they allow the 'e' which my server does not support  -->
        <!-- This might be updated later because the server does apparently allow 'E' -->
        <input
          id="numberField1"
          v-model="numberField1"
          type="text"
          maxlength="20"
          :invalid="field1Invalid"
        />
        <select id="operator" v-model="operator">
          <option>==</option>
          <option>></option>
          <option>&lt;</option>
        </select>
        <input
          id="numberField2"
          v-model="numberField2"
          type="text"
          pattern="[-+]?[\d]+[,]?[\d]*"
          maxlength="20"
        />
        <button id="submit">=</button>
        <br />
        <p>Result:</p>
        <input id="result" v-model="result" type="text" disabled />
        <p></p>
      </form>
    </div>
  </main>
</template>

<script lang="ts">
import { Modules, makePOSTRequest } from "../../Common";
import type { RequestData } from "../../Common";

export default {
  name: "CalculatorTab",
  data() {
    return {
      numberField1: "",
      numberField2: "",
      field1Invalid: false,
      field2Invalid: false,
      operator: "==",
      result: "",
    };
  },
  methods: {
    async getResult() {
      this.result = "";
      let parameter2: string = this.numberField2;
      const data: RequestData = {
        Module: Modules.BooleanOperations,
        Parameters: [this.numberField1, parameter2, this.operator],
      };
      let response = await makePOSTRequest(data);
      this.result = await response.text();
    },
  },
  watch: {
    // A function that checks
    operator: function () {},
    numberField1: function () {
      if (isNaN(parseFloat(this.numberField1))) {
        this.field1Invalid = true;
        console.log("invalid");
      } else {
        this.field1Invalid = false;
        console.log("valid");
      }
    },
  },
};
</script>

<style scoped>
input[type="text"],
select,
#submit,
#result {
  margin-right: 10px;
  background-color: #333;
  color: hsla(160, 100%, 37%, 1);
}

input[type="text"]:not(#result) {
  border-color: rgb(0, 119, 80);
}

input[type="text"] {
  font-family: CascadiaMono, sans-serif;
  width: 23ch;
  height: 21px;
}

#submit {
  border-color: grey;
  cursor: pointer;
}

#result {
  border-color: darkblue;
}

input:invalid {
  border: 3px solid lightcoral;
}

#numberField2:disabled {
  background-color: rgb(33, 33, 33);
  border-color: #333;
}

@font-face {
  font-family: CascadiaMono;
  src: url(../../assets/fonts/CascadiaMono.woff2);
}
</style>
