<template>
  <div v-if="OpenClose">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <slot name="header">
              <img
                class="family"
                style="height: 40px; width: 40px; margin: 10px"
                :src="require('../../assets/img/pagar.png')"
              />
            </slot>
          </div>
          <div class="modal-body">{{ msg }}</div>
          <div class="modal-footer justify-content-between">
            <button
              type="button"
              @click="OpenCloseSet()"
              class="btn-red btn-sm"
              style="width: 70px"
            >
              Não
            </button>
            <button
              type="button"
              @click="OpenCloseSet()"
              class="btn-white btn-sm"
            >
              Sim
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <button
    class="btn m-3"
    style="width: 230px;"
    :class="deleteMode ? 'btn-red' : 'btn-blue'"
    @click="OpenCloseSet()"
  >
    {{ !deleteMode ? "Confirmar Recebimento(s)" : "Cancelar Pagamento" }}
  </button>
</template>
  
<script>
export default {
  name: "EraseModal",
  props: {
    visible: Boolean,
    showView: String,
    deleteMode: Boolean,
    msg: String,
  },
  methods: {
    OpenCloseSet() {
      this.OpenClose = !this.OpenClose;
    },
  },
  data() {
    return {
      OpenClose: this.visible,
      ShowButtonDelete: this.showView,
    };
  },
  watch: {
    visible: function (newVal, oldVal) {
      this.OpenClose = newVal;
      console.log("new " + newVal + "==" + oldVal);
    },
  },
};
</script>
