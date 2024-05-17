<template>
  <div v-if="openClose">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <slot name="header"></slot>
          </div>
          <div class="modal-body">
            <div v-if="this.pagamentoLista.length > 0">
              <div data-mdb-input-init class="form-outline mb-4">
                <label class="form-label">Vencimento</label>
                <input
                  type="date"
                  v-model="vencimento"
                  name="vencimento"
                  class="form-control"
                />
              </div>

              <div data-mdb-input-init class="form-outline mb-4">
                <label class="form-label">Valor</label>
                <input
                  type="text"
                  v-model="valor"
                  v-money="money"
                  name="money"
                  class="form-control"
                />
              </div>

              <div data-mdb-input-init class="form-outline mb-4">
                <label class="form-label">Quantidade</label>
                <input
                  type="number"
                  v-model="quantidade"
                  name="quantidade"
                  class="form-control"
                />
              </div>
            </div>
            <div v-else>
              <p>Selecione um Beneficiário antes de gerar novas cobranças.</p>
            </div>
          </div>
          <div class="modal-footer justify-content-between">
            <button
              type="button"
              @click="openCloseSet()"
              class="btn-red btn-sm"
            >
              Cancelar
            </button>
            <button type="button" @click="submit()" class="btn-white btn-sm">
              Enviar
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
import { VMoney } from "v-money";
import axios from "axios";

export default {
  name: "GerarPagamentoModal",
  props: {
    visibleGerarPagamento: Boolean,
    showView: String,
    pagamentoLista: Object,
  },
  methods: {
    openCloseSet() {
      this.openClose = !this.openClose;
    },
    submit() {
      console.log(this.vencimento, this.quantidade, this.valor);

      axios
        .post(`${process.env.VUE_APP_API_URL}/pagamento/new`, {
          vencimento: this.vencimento,
          quantidade: this.quantidade,
          valor: this.valor,
        })
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  data() {
    return {
      openClose: this.visibleGerarPagamento,
      // pagamentoLista: "",
      vencimento: "",
      quantidade: "",
      valor: "",
      money: {
        decimal: ",",
        thousands: ".",
        prefix: "R$ ",
        suffix: " ",
        precision: 2,
        masked: false,
      },
    };
  },
  watch: {
    visibleGerarPagamento: function (newVal) {
      this.openClose = newVal;

      console.log(this.pagamentoLista.length);

    },
  },
  directives: { money: VMoney },
};
</script>
