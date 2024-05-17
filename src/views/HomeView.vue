<template>
  <div class="home">
    <NavBarPai />
    <AppLayout />
  </div>
</template>

<script>
import AppLayout from "../components/AppLayout";
import NavBarPai from "../components/NavBarPai";

export default {
  name: "HomeView",
  components: {
    AppLayout,
    NavBarPai,
  },
};
</script>
