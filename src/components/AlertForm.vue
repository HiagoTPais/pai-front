<template>
  <div v-if="show">
    <div
      class="alert"
      :class="type"
      role="alert"
      style="
        position: absolute;
        margin-left: auto;
        margin-right: auto;
        margin-top: 10%;
        left: 80px;
        right: 0px;
        width: 660px;
      "
    >
      {{ msg }}
    </div>
  </div>
</template>

<script>
export default {
  name: "AlertForm",

  props: {
    show: Boolean,
    msg: String,
    type: String,
  },
};
</script>

