<template>
  <div v-if="showForm == 8">
    <div class="d-flex">
      <label class="form-title m-3">Dados do Sepultamento</label>

      <img
        style="width: 41px; height: 40px; cursor: pointer; margin-top: 5px"
        :src="require('../../assets/img/plus.png')"
        @click="modalNovoLocal()"
      />
    </div>

    <div class="row">
      <div class="col">
        <span class="title-input-blue">Local</span>

        <input
          type="text"
          v-model="form9.local"
          class="input-resp"
          name="local"
        />
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="m5">
          <span class="title-input-blue">Jazigo</span>

          <input
            type="text"
            v-model="form9.jazigo"
            class="input-resp"
            name="jazigo"
          />
        </div>
      </div>

      <div class="col">
        <div class="m5">
          <span class="title-input-blue">Quadra</span>

          <input
            type="text"
            v-model="form9.quadra"
            class="input-resp"
            name="quadra"
          />
        </div>
      </div>

      <div class="col">
        <div class="m5">
          <span class="title-input-blue">Bloco</span>
          <input
            type="text"
            v-model="form9.bloco"
            class="input-resp"
            name="bloco"
          />
        </div>
      </div>

      <div class="col">
        <div class="m5">
          <span class="title-input-blue">Data e Hora de Sepultamento</span>

          <input
            type="datetime-local"
            v-model="form9.data_hora_sepultamento"
            class="input-resp"
            name="data_hora_sepultamento"
          />
        </div>
      </div>
    </div>
    <div class="d-flex m1">
      <div class="checkbox-wrapper-13">
        <input
          class="c1-13"
          type="checkbox"
          v-model="form9.deseja_placa_identificacao_tumular"
          name="deseja_placa_identificacao_tumular"
        />
        <span class="form-title">Deseja Placa de Identificação Tumular</span>
      </div>
      <div class="checkbox-wrapper-13">
        <input
          class="c1-13"
          type="checkbox"
          v-model="form9.havera_foto_colorida"
          name="havera_foto_colorida"
        />
        <span class="form-title">Haverá Foto Colorida</span>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <span class="form-title">Messagem para a Placa</span>

        <textarea
          v-model="form9.messagem_para_placa"
          name="messagem_para_placa"
          class="textarea-resp"
          cols="124"
          rows="5"
        ></textarea>
      </div>
    </div>
  </div>
  <NovoSalaoModal :msg="message" :visible="modalVisible" />
</template>

<script>
// import axios from "axios";
import { mask } from "vue-the-mask";
import NovoSalaoModal from "../Modal/NovoSalaoModal";

export default {
  name: "FormColaboradoresStep9",
  props: {
    showForm: Number,
    sendFormNow: Boolean,
    showView: String,
    colaboradorLista: Object,
  },
  methods: {
    modalNovoLocal() {
      this.modalVisible = !this.modalVisible;
      this.message = "Local de Seputamento";
    },
  },
  components: {
    NovoSalaoModal,
  },
  data() {
    return {
      modalVisible: false,
      message: "",
      form9: {
        local: "",
        jazigo: "",
        quadra: "",
        bloco: "",
        data_hora_sepultamento: "",
        deseja_placa_identificacao_tumular: "",
        havera_foto_colorida: "",
        messagem_para_placa: "",
      },
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
