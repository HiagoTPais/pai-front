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
            Atenção, você tem certeza que deseja EXCLUIR
            {{ this.NameBeneficiary }} do Banco de Dados do Sistema?
          </div>
          <div class="modal-footer justify-content-between">
            <button
              type="button"
              @click="deleteBeneficiary()"
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
</template>
  
<script>
import axios from "axios";

export default {
  name: "DeletePagamentoModal",
  props: {
    visible: Boolean,
    idBeneficiary: Number,
    nameBeneficiary: String,
  },
  methods: {
    OpenCloseSet() {
      this.OpenClose = !this.OpenClose;
    },

    deletePagamento(id) {
      axios
        .delete(`${process.env.VUE_APP_API_URL}/beneficiary/${id}`)
        .then(() => {
          this.$emit("setBeneficiarioList");

          this.OpenClose = !this.OpenClose;
        });
    },
  },
  data() {
    return {
      OpenClose: this.visible,
      IdBeneficiary: this.idBeneficiary,
      NameBeneficiary: this.nameBeneficiary,
    };
  },
  watch: {
    visible: function (newVal, oldVal) {
      this.OpenClose = newVal;
      console.log("new " + newVal + " " + oldVal);
    },
  },
};
</script>
