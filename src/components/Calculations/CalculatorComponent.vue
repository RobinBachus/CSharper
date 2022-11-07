<script setup lang="ts"></script>

<template>
  <div class="form-container">
    <form @submit.prevent="getResult()">
      <h2>Give in your expression</h2>
      <!-- Not using number inputs because they allow the 'e' which my server does not support  -->
      <input
        id="numberField1"
        v-model="numberField1"
        type="text"
        pattern="[-+]?[\d]+[,]?[\d]*"
        maxlength="20"
      />
      <select id="operator" v-model="operator">
        <option>+</option>
        <option>-</option>
        <option>*</option>
        <option>/</option>
        <option>^</option>
        <option>√</option>
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
      <input id="result" v-model="result" disabled />
      <p></p>
    </form>
  </div>
</template>

<script lang="ts">
import { Modules, makePOSTRequest } from "../../Common";
import type { RequestData } from "../../Common";

export default {
  name: "CalculatorComponent",
  data() {
    return {
      numberField1: "",
      numberField2: "",
      operator: "+",
      result: "",
    };
  },
  methods: {
    async getResult() {
      this.result = "";
      let parameter2: string = this.numberField2;
      if (
        (this.numberField1 === "" || this.numberField2 === "") &&
        this.operator !== "√"
      ) {
        this.result = "A field is still empty!";
        return false;
      } else if (
        this.operator === "/" &&
        (this.numberField2 === "0" || this.numberField2 === "-0")
      ) {
        this.result = "Can't divide by 0!";
        return false;
      }
      if (this.operator === "√") {
        if ((this.numberField1 as unknown as number) < 0) {
          this.result = "Only for positive numbers!";
          return false;
        }
        parameter2 = "0";
      }

      const data: RequestData = {
        Module: Modules.Calculations,
        SubModule: 1,
        Parameters: [this.numberField1, parameter2, this.operator],
      };
      let response = await makePOSTRequest(data);
      this.result = await response.text();
    },
  },
  watch: {
    operator: function () {
      if (this.operator === "√") {
        this.numberField2 = "";
        document
          .getElementById("numberField2")!
          .setAttribute("disabled", "disable");
      } else {
        document.getElementById("numberField2")!.removeAttribute("disabled");
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

#submit {
  border-color: grey;
  cursor: pointer;
}

input:invalid {
  border: 3px solid lightcoral;
}
</style>
