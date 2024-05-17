<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light nav-bar-pai">
    <a class="navbar-brand" href="#">
      <img
        :src="require('../assets/img/pai-logo.png')"
        width="50"
        height="50"
        style="margin-left: 10px"
      />
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
  </nav>
</template>
<script>
export default {
  name: "NavBarPai",
};
</script>
