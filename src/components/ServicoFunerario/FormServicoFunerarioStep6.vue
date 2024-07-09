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
          <div class="checkbox-wrapper-13" style="margin-left: -10px">
            <input
              id="c1-13"
              type="checkbox"
              name="havera_translado"
              v-model="form6.havera_translado"
            />
            <label class="form-title" for="c1-13">Haverá Translado?</label>
          </div>
        </div>

        <label class="form-title m-3">Local de Partida</label>

        <div class="row">
          <div class="col">
            <div class="m5">
              <span class="title-input-blue">CEP*</span>
              <input
                type="text"
                class="input-resp"
                v-model="form6.cep_partida"
                name="cep_partida"
                @blur="buscarCep()"
                v-mask="['#####-###']"
              />
            </div>
          </div>

          <div class="col">
            <div class="m5">
              <span class="title-input-blue">Rua*</span>
              <input
                type="text"
                v-model="form6.rua_partida"
                class="input-resp"
                name="rua_partida"
              />
            </div>
          </div>

          <div class="col">
            <div class="m5">
              <span class="title-input-blue">Nº*</span>
              <input
                type="text"
                v-model="form6.numero_partida"
                class="input-resp"
                name="numero_partida"
              />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="m5">
              <span class="title-input-blue">Bairro*</span>
              <input
                type="text"
                v-model="form6.bairro_partida"
                class="input-resp"
                name="bairro_partida"
              />
            </div>
          </div>

          <div class="col">
            <div class="m5">
              <span class="title-input-blue">Cidade*</span>
              <input
                type="text"
                v-model="form6.cidade_partida"
                class="input-resp"
                name="cidade_partida"
              />
            </div>
          </div>

          <div class="col">
            <div class="m5">
              <span class="title-input-blue">UF*</span>
              <input
                type="text"
                class="input-resp"
                v-model="form6.uf_partida"
                name="uf_partida"
              />
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col">
            <div class="m5">
              <span class="title-input-blue">Complemento</span>
              <input
                type="text"
                class="input-resp"
                v-model="form6.complemento_partida"
                name="complemento_partida"
              />
            </div>
          </div>

          <div class="col">
            <div class="m5">
              <span class="title-input-blue">Ponto de Referência</span>
              <input
                type="text"
                class="input-resp"
                v-model="form6.ponto_referencia_partida"
                name="ponto_referencia_partida"
              />
            </div>
          </div>

          <div class="col">
            <div class="m5">
              <span class="title-input-blue">Zona</span>

              <select
                v-model="form6.zona_partida"
                name="zona_partida"
                class="select-resp"
              >
                <option>Urbana</option>
                <option>Rural</option>
              </select>
            </div>
          </div>
        </div>

        <label class="form-title m-3">Local de Destino</label>

        <div class="row">
          <div class="col">
            <div class="m5">
              <span class="title-input-blue">CEP*</span>
              <input
                type="text"
                class="input-resp"
                v-model="form6.cep_destino"
                name="cep_destino"
                @blur="buscarCep2()"
                v-mask="['#####-###']"
              />
            </div>
          </div>

          <div class="col">
            <div class="m5">
              <span class="title-input-blue">Rua*</span>
              <input
                type="text"
                v-model="form6.rua_destino"
                class="input-resp"
                name="rua_destino"
              />
            </div>
          </div>

          <div class="col">
            <div class="m5">
              <span class="title-input-blue">Nº*</span>
              <input
                type="text"
                v-model="form6.numero_destino"
                class="input-resp"
                name="numero_destino"
              />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="m5">
              <span class="title-input-blue">Bairro*</span>
              <input
                type="text"
                v-model="form6.bairro_destino"
                class="input-resp"
                name="bairro_destino"
              />
            </div>
          </div>

          <div class="col">
            <div class="m5">
              <span class="title-input-blue">Cidade*</span>
              <input
                type="text"
                v-model="form6.cidade_destino"
                class="input-resp"
                name="cidade_destino"
              />
            </div>
          </div>

          <div class="col">
            <div class="m5">
              <span class="title-input-blue">UF*</span>
              <input
                type="text"
                class="input-resp"
                v-model="form6.uf_destino"
                name="uf_destino"
              />
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col">
            <div class="m5">
              <span class="title-input-blue">Complemento</span>
              <input
                type="text"
                class="input-resp"
                v-model="form6.complemento_destino"
                name="complemento_destino"
              />
            </div>
          </div>

          <div class="col">
            <div class="m5">
              <span class="title-input-blue">Ponto de Referência</span>
              <input
                type="text"
                class="input-resp"
                v-model="form6.ponto_referencia_destino"
                name="ponto_referencia_destino"
              />
            </div>
          </div>

          <div class="col">
            <div class="m5">
              <span class="title-input-blue">Zona</span>

              <select
                v-model="form6.zona_destino"
                name="zona_destino"
                class="select-resp"
              >
                <option>Urbana</option>
                <option>Rural</option>
              </select>
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
    buscarCep() {
      axios
        .get("https://viacep.com.br/ws/" + this.form6.cep_partida + "/json/")
        .then((res) => {
          console.log(res.data);
          this.form6.uf_partida = res.data.uf;
          this.form6.cidade_partida = res.data.localidade;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    buscarCep2() {
      axios
        .get("https://viacep.com.br/ws/" + this.form6.cep_destino + "/json/")
        .then((res) => {
          console.log(res.data);
          this.form6.uf_destino = res.data.uf;
          this.form6.cidade_destino = res.data.localidade;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  data() {
    return {
      form6: {
        havera_translado: "",
        cep_partida: "",
        rua_partida: "",
        numero_partida: "",
        bairro_partida: "",
        cidade_partida: "",
        uf_partida: "",
        complemento_partida: "",
        ponto_referencia_partida: "",
        zona_partida: "",
        cep_destino: "",
        rua_destino: "",
        numero_destino: "",
        bairro_destino: "",
        cidade_destino: "",
        uf_destino: "",
        complemento_destino: "",
        ponto_referencia_destino: "",
        zona_destino: "",
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
