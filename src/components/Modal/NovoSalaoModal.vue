<template>
  <div v-if="OpenClose">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <slot name="header"> </slot>
          </div>
          <div class="modal-body">
            Cadastrar Novo {{ msg }}
            <div class="form-group">
              <br />
              <input
                type="email"
                v-model="NovoItem"
                class="form-control"
                placeholder="Novo msg"
              />
            </div>
          </div>
          <div class="modal-footer justify-content-between">
            <button
              type="button"
              @click="OpenCloseSet()"
              class="btn-red btn-sm"
            >
              Cancelar
            </button>
            <button
              type="button"
              @click="SendNovoItem(msg)"
              class="btn-white btn-sm"
            >
              Salvar
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
  name: "ConfirmationModal",
  props: {
    visible: Boolean,
    showView: String,
    msg: String,
  },
  methods: {
    OpenCloseSet() {
      this.OpenClose = !this.OpenClose;
    },
    SendNovoItem(msg) {
      axios
        .post(`${process.env.VUE_APP_API_URL}/servico-funerario/store-novo`, {
          item: this.NovoItem,
          tabela: msg,
        })
        .then((res) => {
          console.log(res);
          console.log(msg);
          this.$emit("update-list", msg);
        })
        .catch((error) => {
          console.log(error);
        });

      this.OpenClose = !this.OpenClose;
      this.NovoItem = "";
    },
  },
  data() {
    return {
      OpenClose: this.visible,
      ShowButtonDelete: this.showView,
      NovoItem: "",
    };
  },
  watch: {
    visible: function (newVal) {
      this.OpenClose = newVal;
    },
  },
};
</script>
