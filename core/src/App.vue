<template>
  <h1>CORE</h1>
  <App />
</template>

<script>
import { defineAsyncComponent } from "vue";
export default {
  name: "core",
  components: {
    App: defineAsyncComponent(() => import("App/App")),
  },
};
</script>
