<template>
  <div v-if="OpenClose">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <slot name="header">
              <img
                class="family"
                :src="require('../../assets/img/delete.png')"
              />
            </slot>
          </div>
          <div class="modal-body">
            Tem certeza que deseja CANCELAR o plano de
            {{ beneficiaryInfo.data.data[0].nome_completo }}?
          </div>
          <div class="modal-footer justify-content-between">
            <button
              type="button"
              @click="OpenJustification()"
              class="btn-white btn-sm"
            >
              Sim
            </button>
            <button
              type="button"
              @click="OpenCloseSet()"
              class="btn-red btn-sm"
            >
              Não
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <img
    class="action-button"
    style="cursor: pointer"
    v-if="ShowButtonDelete == 'form-assistencia-edit'"
    :src="
      beneficiaryInfo.data.data[0].status == 'CANCELADO'
        ? require('../../assets/img/renovar-white.png')
        : require('../../assets/img/delete.png')
    "
    @click="OpenCloseSet()"
  />
</template>
  
<script>
export default {
  name: "ConfirmationModal",
  props: {
    visible: Boolean,
    showView: String,
    beneficiaryList: Object,
  },
  methods: {
    OpenCloseSet() {
      this.OpenClose = !this.OpenClose;
    },
    OpenJustification() {
      this.OpenClose = false;
      this.$emit("setCurrentFormSeven");
    },
  },
  data() {
    return {
      OpenClose: this.visible,
      ShowButtonDelete: this.showView,
      beneficiaryInfo: this.beneficiaryList
    };
  },
  watch: {
    visible: function (newVal, oldVal) {
      this.OpenClose = newVal;
      console.log("new " + newVal + " " + oldVal);
    },
    beneficiaryList: function (newVal, oldVal) {
      this.beneficiaryInfo = newVal;
      console.log(this.beneficiaryInfo);
      console.log("new " + newVal + " " + oldVal);
    },
  },
};
</script>
