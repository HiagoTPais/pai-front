<template>
  <div v-if="showForm == 8">
    <label class="form-title m-3">Dados do Sepultamento</label>

    <div class="row">
      <div class="col">
        <span class="title-input-blue">Local</span>

        <input
          type="text"
          v-model="form9"
          class="input-resp"
          name="nome_completo"
        />
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="m5">
          <span class="title-input-blue">Jazigo</span>

          <input
            type="date"
            v-model="form9"
            class="input-resp"
            name="data_expedicao"
          />
        </div>
      </div>

      <div class="col">
        <div class="m5">
          <span class="title-input-blue">Quadra</span>

          <input
            type="text"
            v-model="form9"
            class="input-resp"
            name="cpf"
            v-mask="['###.###.###-##']"
          />
        </div>
      </div>

      <div class="col">
        <div class="m5">
          <span class="title-input-blue">Bloco</span>
          <input
            type="text"
            v-model="form9"
            class="input-resp"
            name="ocupacao"
          />
        </div>
      </div>

      <div class="col">
        <div class="m5">
          <span class="title-input-blue">Hora de Sepultamento</span>

          <input
            type="text"
            v-model="form9"
            class="input-resp"
            name="ocupacao"
          />
        </div>
      </div>

      <div class="col">
        <div class="m5">
          <span class="title-input-blue">Data de Sepultamento</span>

          <input
            type="text"
            v-model="form9"
            class="input-resp"
            name="ocupacao"
          />
        </div>
      </div>
    </div>
    <div class="d-flex m1">
      <div class="m1">
        <input type="checkbox" v-model="form9" name="particular" />
        <span class="title-input-blue">Deseja Placa de Identificação Tumular</span>
      </div>
      <div class="m1">
        <input type="checkbox" v-model="form9" name="particular" />
        <span class="title-input-blue">Haverá Foto Colorida</span>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <span class="title-input-blue">Messagem para a Placa</span>

        <textarea
          disabled
          v-model="form9"
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
  name: "FormColaboradoresStep9",
  props: {
    showForm: Number,
    sendFormNow: Boolean,
    showView: String,
    colaboradorLista: Object,
  },
  methods: {},
  data() {
    return {
      form9: {},
    };
  },
  directives: { mask },
  watch: {
    sendFormNow: function () {
      this.$emit("set-data-form", this.form9);
    },
  },
};
</script>
