<template>
  <div v-if="showForm == 1">
    <label class="form-title m-3">Tipo de atendimento</label>

    <div class="d-flex justify-content-between m1">
      <div>
        <input type="checkbox" v-model="form1.particular" name="particular" />
        <span class="title-input-blue">Particular</span>
      </div>

      <div>
        <input type="checkbox" v-model="form1.seguradora" name="seguradora" />
        <span class="title-input-blue">Seguradora</span>
      </div>
      <div>
        <input type="checkbox" v-model="form1.prefeitura" name="prefeitura" />
        <span class="title-input-blue">Prefeitura</span>
      </div>
      <div>
        <input type="checkbox" v-model="form1.plano" name="plano" />
        <span class="title-input-blue">Plano</span>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <div class="m5">
          <span class="title-input-blue">Número do Contrato</span>

          <input
            type="text"
            v-model="form1.numero_contrato"
            class="input-resp"
            name="nome_completo"
          />
        </div>
      </div>

      <div class="col">
        <div class="m5">
          <span class="title-input-blue">Nome do Contratante</span>

          <input
            type="date"
            v-model="form1.nome_contratante"
            class="input-resp"
            name="data_nascimento"
          />
        </div>
      </div>

      <div class="col">
        <div class="m5">
          <span class="title-input-blue">CPF</span>

          <input
            type="text"
            v-model="form1.cpf"
            class="input-resp"
            name="nacionalidade"
          />
        </div>
      </div>
      <div class="col">
        <button type="button" class="btn btn-primary" style="margin-top: 20px;">
          <img class="btn-search" :src="require('../../assets/img/search-white.png')" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
import { mask } from "vue-the-mask";

export default {
  name: "FormServicoFunerarioStep1",
  props: {
    showForm: Number,
    sendFormNow: Boolean,
    showView: String,
    colaboradorLista: Object,
  },
  methods: {
  },
  data() {
    return {
      form1: {
        particular: "",
        seguradora: "",
        prefeitura: "",
        plano: "",
        numero_contrato: "",
        nome_contratante: "",
        cpf: "",
      },
    };
  },
  directives: { mask },
  watch: {
    sendFormNow: function () {
      this.$emit("set-data-form", this.form1);
    },
  },
};
</script>
