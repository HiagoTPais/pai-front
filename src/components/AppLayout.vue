<template>
  <div class="app-layout">
    <SideBarPai />
    <WorkSpace />
  </div>
</template>

<script>
import SideBarPai from "./SideBarPai.vue";
import WorkSpace from "./WorkSpace.vue";

export default {
  name: "AppLayout",
  components: {
    SideBarPai,
    WorkSpace,
  },
};
</script>
