<template>
  <div v-if="showForm == 5">
    <label class="form-title m-3">Dados da Homenagem</label>

    <div class="d-flex justify-content-between m1">
      <div>
        <input type="checkbox" v-model="form5.teste" name="particular" />
        <span class="title-input-blue">Haverá Cerimonia de Homenagem</span>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <div class="m5">
          <span class="title-input-blue">Era muito conhecido?</span>

          <input
            type="text"
            v-model="form5.teste"
            class="input-resp"
            name="data_expedicao"
          />
        </div>
      </div>

      <div class="col">
        <div class="m5">
          <span class="title-input-blue">Era muito religioso?</span>

          <input type="text" v-model="form5.teste" class="input-resp" name="cpf" />
        </div>
      </div>

      <div class="col">
        <div class="m5">
          <span class="title-input-blue">Quantos filhos?</span>

          <input type="text" v-model="form5.teste" class="input-resp" name="cpf" />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="m5">
          <span class="title-input-blue">Oque gostava de fazer?</span>

          <input
            type="text"
            v-model="form5.teste"
            class="input-resp"
            name="data_expedicao"
          />
        </div>
      </div>

      <div class="col">
        <div class="m5">
          <span class="title-input-blue">Como se sentia ao fazer?</span>

          <input type="text" v-model="form5.teste" class="input-resp" name="cpf" />
        </div>
      </div>

      <div class="col">
        <div class="m5">
          <span class="title-input-blue"
            >Qual lição de vida deixou para você?</span
          >

          <input type="text" v-model="form5.teste" class="input-resp" name="cpf" />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="m1">
          <span class="title-input-blue"
            >Como você pode descrever como ele(a) era para você?</span
          >

          <input
            type="text"
            v-model="form5.teste"
            class="input-resp"
            name="data_expedicao"
          />
        </div>
      </div>
    </div>

    <label class="form-title m-3">Anotações</label>

    <div class="row">
      <div class="col" style="margin: 1%">
        <textarea
          disabled
          v-model="form5.teste"
          name="observacoes"
          class="textarea-resp"
          cols="124"
          rows="5"
        ></textarea>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
import { mask } from "vue-the-mask";

export default {
  name: "FormColaboradoresStep5",
  props: {
    showForm: Number,
    sendFormNow: Boolean,
    showView: String,
    colaboradorLista: Object,
  },
  methods: {},
  data() {
    return {
      form5: {
        teste: "",
      },
    };
  },
  directives: { mask },
  watch: {
    sendFormNow: function () {
      this.$emit("set-data-form", this.form5);
    },
  },
};
</script>
