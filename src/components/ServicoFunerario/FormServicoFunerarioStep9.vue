<template>
  <div v-if="showForm == 8" style="height: 400px">
    <div class="d-flex">
      <label class="form-title m-3">Dados do Sepultamento</label>
    </div>

    <div class="row">
      <div class="col">
        <span class="title-input-blue">Local</span>

        <img
          style="width: 30px; height: 30px; cursor: pointer; margin-left: 5px"
          :src="require('../../assets/img/plus.png')"
          @click="modalNovoLocal()"
        />

        <select
          v-model="form9.local"
          name="local_sepultamento"
          class="select-resp"
        >
          <option
            v-for="(item_local_sepultamento, index) in lista_local_sepultamento"
            :key="index"
            :value="item_local_sepultamento.nome"
          >
            {{ item_local_sepultamento.nome }}
          </option>
        </select>
      </div>
      <div class="col">
        <span class="title-input-blue">Jazigo</span>

        <input
          type="text"
          v-model="form9.jazigo"
          class="input-resp"
          name="jazigo"
        />
      </div>

      <div class="col">
        <span class="title-input-blue">Quadra</span>

        <input
          type="text"
          v-model="form9.quadra"
          class="input-resp"
          name="quadra"
        />
      </div>

      <div class="col">
        <span class="title-input-blue">Bloco</span>
        <input
          type="text"
          v-model="form9.bloco"
          class="input-resp"
          name="bloco"
        />
      </div>

      <div class="col">
        <span class="title-input-blue">Data e Hora de Sepultamento</span>

        <input
          type="datetime-local"
          v-model="form9.data_hora_sepultamento"
          class="input-resp"
          name="data_hora_sepultamento"
        />
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
    <br />
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
  <NovoSalaoModal
    :msg="message"
    :visible="modalVisible"
    @update-list="updateList(msg)"
  />
</template>

<script>
import axios from "axios";
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

    getLocalSepultamento() {
      axios
        .get(
          `${process.env.VUE_APP_API_URL}/servico-funerario/local-sepultamento`
        )
        .then((res) => {
          this.lista_local_sepultamento = res.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    updateList(msg) {
      console.log(msg);

      this.getLocalSepultamento();
    },
  },

  components: {
    NovoSalaoModal,
  },

  data() {
    return {
      modalVisible: false,
      message: "",
      lista_local_sepultamento: [],
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

  beforeMount() {
    this.getLocalSepultamento();
  },
};
</script>
