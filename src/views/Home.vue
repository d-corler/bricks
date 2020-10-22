<template>
  <div class="home">
    <Grid />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Grid from "@/components/Grid.ts";

export default defineComponent({
  name: "Home",
  components: {
    Grid,
  },
});
</script>

<style scoped lang="scss">
.home {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}
</style>
