<template>
  <div>
    <div class="d-flex justify-content-end">
      <button type="button" @click="sendForm()" class="btn-blue m-3">
        Enviar
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "BtnSend",
  methods: {
    sendForm() {
      this.$emit("send-form-now");
    },
  },
};
</script>

