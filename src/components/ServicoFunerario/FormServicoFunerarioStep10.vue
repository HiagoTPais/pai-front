<template>
  <div v-if="showForm == 9">
    <label class="form-title m-3">Pagamento</label>

    <div class="row">
      <div class="checkbox-wrapper-13">
        <input
          class="c1-13"
          type="checkbox"
          v-model="form10.parcelamento"
          name="parcelamento"
        />
        <span class="form-title">Parcelamento?</span>
      </div>
    </div>

    <div class="row justify-content-start">
      <div class="col-4">
        <div>
          <span class="title-input-blue">Forma de Pagamento</span>

          <select
            v-model="form10.forma_pagamento"
            name="forma_pagamento"
            class="select-resp"
          >
            <option>Dinheiro</option>
            <option>Cartão de Crédito</option>
            <option>Cartão de Débito</option>
            <option>PIX</option>
            <option>Boleto Bancário</option>
          </select>
        </div>
      </div>
      <div class="col-2">
        <div>
          <span class="title-input-blue">N Parcelas</span>

          <input
            type="number"
            v-model="form10.n_parcelas"
            class="input-resp"
            name="n_parcelas"
          />
        </div>
      </div>
    </div>

    <div class="row justify-content-start">
      <div class="col-4">
        <div>
          <span class="title-input-blue">Bandeira do Cartão</span>

          <select
            v-model="form10.bandeira_cartao"
            name="bandeira_cartao"
            class="select-resp"
          >
            <option>Mastercard</option>
            <option>Visa</option>
            <option>Elo</option>
            <option>American Express</option>
            <option>Hipercard</option>
          </select>
        </div>
      </div>
      <div class="col-2">
        <div>
          <span class="title-input-blue">R$ Valor das Parcelas</span>

          <input
            type="text"
            v-model="form10.valor_parcelas"
            class="input-resp"
            name="valor_parcelas"
            v-money="money"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
import { VMoney } from "v-money";
import { mask } from "vue-the-mask";

export default {
  name: "FormColaboradoresStep10",
  props: {
    showForm: Number,
    sendFormNow: Boolean,
    showView: String,
    colaboradorLista: Object,
  },
  methods: {},
  data() {
    return {
      form10: {
        parcelamento: "",
        forma_pagamento: "",
        bandeira_cartao: "",
        n_parcelas: "",
        valor_parcelas: "",
      },
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
  directives: { money: VMoney, mask },
  watch: {
    sendFormNow: function () {
      this.$emit("set-data-form", this.form10);
    },
  },
};
</script>
