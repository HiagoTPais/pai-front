<template>
  <div v-if="showForm == 9">
    <label class="form-title m-3">Pagamento</label>

    <div class="d-flex">
      <div style="width: 100%; margin: 1%">
        <div>
          <span class="title-input-blue">Forma de Pagamento</span>

          <select v-model="form10" name="zona" class="select-resp">
            <option>Urbana</option>
            <option>Rural</option>
          </select>
        </div>
      </div>

      <div style="width: 100%; margin: 1%">
        <div>
          <span class="title-input-blue">Bandeira do Cartão</span>

          <select v-model="form10" name="zona" class="select-resp">
            <option>Urbana</option>
            <option>Rural</option>
          </select>
        </div>
      </div>
    </div>

    <div class="d-flex m1">
      <div>
        <input type="checkbox" v-model="form10" name="particular" />
        <span class="title-input-blue">Parcelamento?</span>
      </div>
    </div>

    <div class="d-flex">
      <div style="width: 100%; margin: 1%">
        <div>
          <span class="title-input-blue">N Parcelas</span>

          <select v-model="form10" name="zona" class="select-resp">
            <option>Urbana</option>
            <option>Rural</option>
          </select>
        </div>
      </div>

      <div style="width: 100%; margin: 1%">
        <div>
          <span class="title-input-blue">Valor das Parcelas</span>

          <input
            type="text"
            v-model="form10.teste1"
            class="input-resp"
            name="data_expedicao"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
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
        teste1: "",
      },
    };
  },
  directives: { mask },
  watch: {
    sendFormNow: function () {
      this.$emit("set-data-form", this.form10);
    },
  },
};
</script>
