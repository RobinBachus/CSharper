<template>
  <main>
    <h1>Boolean operations</h1>
    <div class="form-container">
      <form @submit.prevent="getResult()" autocomplete="off">
        <h2>Give in your expression</h2>
        <input
          id="numberField1"
          v-model="numberField1"
          type="text"
          maxlength="20"
        />
        <input type="checkbox" id="not-flag" v-model="flag" />
        <select id="operator" v-model="operator">
          <option>==</option>
          <option class="non-string-operator">>=</option>
          <option class="non-string-operator">&lt;=</option>
          <option class="non-string-operator">></option>
          <option class="non-string-operator">&lt;</option>
          <option class="prime non-string-operator">P</option>
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
          <div id="result-container">
            <p>Result:</p>
            <input id="result" v-model="result" type="text" disabled />
          </div>
          <div id="mode-radio">
            <input id="numbers" type="radio" value="0" v-model="mode" />
            <label for="numbers">numbers</label> <br />
            <input id="text" type="radio" value="1" v-model="mode" />
            <label for="text">text</label>
          </div>
        </div>
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
      flag: false,
      operator: "==",
      mode: "0",
      result: "",
    };
  },
  methods: {
    async getResult() {
      let er = false;
      if (this.numberField1 === "") {
        const field = document.getElementById(
          "numberField1"
        ) as HTMLInputElement;
        field?.setCustomValidity("Field can't be empty");
        field?.reportValidity();
        er = true;
      }
      if (this.numberField2 === "" && this.operator != "P") {
        const field = document.getElementById(
          "numberField2"
        ) as HTMLInputElement;
        field?.setCustomValidity("Field can't be empty");
        field?.reportValidity();
        er = true;
      }

      if (er) {
        return false;
      }

      const data: RequestData = {
        Module: Modules.BooleanOperations,
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
    validateField(field: number) {
      let vmodel: string;
      let fieldName: string;

      switch (field) {
        case 1:
          vmodel = this.numberField1;
          fieldName = "numberField1";
          break;
        case 2:
          vmodel = this.numberField2;
          fieldName = "numberField2";
          break;
        default:
          vmodel = "";
          fieldName = "";
          break;
      }

      const numField = document.getElementById(fieldName) as HTMLInputElement;
      if (this.mode === "0" && !this.testInputFormat(vmodel) && vmodel != "") {
        numField?.setCustomValidity("Invalid field.");
        numField?.reportValidity();
      } else {
        numField?.setCustomValidity("");
      }
    },
    testInputFormat(str: string) {
      let reg = new RegExp("^[-+]?[\\d]*[,.]?[\\d]+$", "gm");
      if (this.operator === "P") reg = new RegExp("^[\\d]*$", "gm");
      return reg.test(str);
    },
  },

  watch: {
    operator: function () {
      if (this.operator === "P") {
        this.numberField2 = "";
        document
          .getElementById("numberField2")
          ?.setAttribute("disabled", "disable");
      } else {
        document.getElementById("numberField2")?.removeAttribute("disabled");
      }
    },
    mode: function () {
      this.validateField(1);
      this.validateField(2);

      let stringOptions = document.getElementsByClassName(
        "non-string-operator"
      );
      for (let i of stringOptions) {
        if (this.mode === "1") {
          i.setAttribute("disabled", "disabled");
          this.operator = "==";
        } else {
          i.removeAttribute("disabled");
        }
      }
    },
    numberField1: function () {
      this.validateField(1);
    },
    numberField2: function () {
      this.validateField(2);
    },
    result: function () {
      const elem = document.getElementById("result");
      if (this.result === "True") {
        if (elem != null) elem.style.color = "#15a003";
      }
      if (this.result === "False") {
        if (elem != null) elem.style.color = "rgb(255, 84, 95)";
      }
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap");

input[type="text"],
select,
#submit,
#result {
  margin-right: 10px;
  background-color: #333;
  color: hsla(160, 100%, 37%, 1);
  border-color: rgb(0, 82, 55);
}

input:focus,
textarea:focus,
select:focus {
  outline: none;
  border-color: rgb(0, 119, 80);
}

input[type="text"] {
  font-family: CascadiaMono, sans-serif;
  width: 23ch;
  height: 21px;
}

#not-flag {
  position: relative;
  top: 0px;
  right: 10px;
  margin-left: 10px;
}

#not-flag:after {
  position: relative;
  width: 20px;
  height: 20px;
  top: -2px;
  left: -3px;
  border-radius: 15%;
  background-color: rgb(60, 60, 60);
  content: "";
  display: inline-block;
  visibility: visible;
}

#not-flag:checked::after {
  display: flex;
  align-items: center;
  justify-content: center;
  content: "!";
  color: #3f9af5;
  font-family: "Permanent Marker", cursive;
  font-size: 1.3em;
}

#not-flag:active::after {
  border: 2px double rgb(95, 95, 95);
}

#interactive-bottom {
  display: flex;
  align-items: flex-end;
  padding-bottom: 1rem;
}

#mode-radio {
  margin-left: 5rem;
}

#mode-radio > label {
  margin-left: 1rem;
}

/* Source: https://stackoverflow.com/questions/4253920/how-do-i-change-the-color-of-radio-buttons#answer-34854325 */
input[type="radio"]::after {
  width: 15px;
  height: 15px;
  border-radius: 15px;
  top: -2px;
  left: -1px;
  position: relative;
  background-color: rgb(81, 81, 81);
  content: "";
  display: inline-block;
  visibility: visible;
}

input[type="radio"]:checked::after {
  background-color: hsla(160, 100%, 37%, 1);
  border: 4px double black;
}

#submit {
  border-color: grey;
  cursor: pointer;
}

#result {
  border-color: darkblue;
  margin-right: 0;
}

input:invalid {
  border-color: rgb(162, 10, 10) !important;
  background-color: #433 !important;
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

<style>
.prime {
  font-family: "Segoe UI";
  font-weight: bold;
}
</style>
