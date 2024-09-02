<template>
  <div v-if="showForm == 5">
    <div class="row">
      <div class="col">
        <div class="cell cell-map">
          <MapContainer />
        </div>
      </div>
      <div class="col">
        <label class="form-title m-3">Dados de Translado</label>

        <div class="d-flex justify-content-between m1">
          <div class="checkbox-wrapper-13">
            <label class="form-title" for="c1-13" style="margin-left: -5px"
              >Haverá Translado?</label
            >

            <input
              id="c1-13"
              type="checkbox"
              name="havera_translado"
              v-model="form6.havera_translado"
            />
          </div>
        </div>

        <div class="d-flex">
          <label class="form-title" style="margin-left: 15px"
            >Adicionar Rotas</label
          >

          <img
            style="
              width: 30px;
              height: 30px;
              cursor: pointer;
              margin-left: 5px;
              margin-top: -2px;
            "
            :src="require('../../assets/img/plus.png')"
            @click="addcep()"
          />
          <img
            style="
              width: 30px;
              height: 30px;
              cursor: pointer;
              margin-left: 5px;
              margin-top: -2px;
            "
            :src="require('../../assets/img/less.png')"
            @click="removecep()"
          />
        </div>

        <div class="row" v-for="key in count" :key="key">
          <div class="col">
            <div style="margin: 3%">
              <span class="title-input-blue">CEP {{ key }}</span>
              <input
                type="text"
                class="input-resp"
                v-model="form6.values['cep-' + (key - 1)]"
                name="cep"
                @blur="buscarCep(key)"
                v-mask="['#####-###']"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mask } from "vue-the-mask";
import MapContainer from "../MapContainer";

export default {
  name: "FormColaboradoresStep6",
  props: {
    showForm: Number,
    sendFormNow: Boolean,
    showView: String,
    colaboradorLista: Object,
  },
  components: {
    MapContainer,
  },
  methods: {
    buscarCep(key) {
      axios
        .get(
          "https://viacep.com.br/ws/" +
            this.form6.values["cep-" + key] +
            "/json/"
        )
        .then((res) => {
          console.log(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    addcep() {
      if (this.count < 4) {
        this.count++;
      }
    },

    removecep() {
      this.count--;
    },
  },
  data() {
    return {
      count: 1,
      form6: {
        havera_translado: "",
        values: {},
      },
    };
  },
  directives: { mask },
  watch: {
    sendFormNow: function () {
      this.$emit("set-data-form", this.form6);
    },
  },
};
</script>
