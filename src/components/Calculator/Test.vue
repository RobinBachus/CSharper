<template>
  <div class="tab">
    <button @click="displayServerInfo()">Make Post Request</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { makePOSTRequest } from "../../Common.js";

export default defineComponent({
  name: "Test",
  methods: {
    async displayServerInfo() {
      makePOSTRequest({ type: "message", message: "hello" });
    },
  },
});
</script>
