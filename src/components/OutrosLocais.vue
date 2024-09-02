<template>
  <div class="row">
    <div class="col-3" v-for="key in count" :key="key">
      <div class="checkbox-wrapper-13">
        <div class="small-card-border">
          <div class="d-flex">
            <input
              type="text"
              class="input-resp"
              v-model="this.values['regiao-' + (key - 1)]"
            />
            <img
              style="
                width: 25px;
                height: 25px;
                cursor: pointer;
                margin-left: 5px;
              "
              :src="require('../assets/img/images-icon.png')"
              @click="showModalSelectImagen('imagem-' + (key - 1))"
            />
          </div>
          <div>
            <input
              class="c1-13"
              type="checkbox"
              @click="sendCardNow()"
              value="Presençade Secreção"
              v-model="this.values['presencade_secrecao-' + (key - 1)]"
            />

            <span class="title-input-blue">Presença de Secreção</span>
          </div>
          <div>
            <input
              class="c1-13"
              type="checkbox"
              @click="sendCardNow()"
              value="Deterioração"
              v-model="this.values['deterioracao-' + (key - 1)]"
            />

            <span class="title-input-blue">Deterioração</span>
          </div>
          <div>
            <input
              class="c1-13"
              type="checkbox"
              @click="sendCardNow()"
              value="Dilaceração"
              v-model="this.values['dilaceracao-' + (key - 1)]"
            />

            <span class="title-input-blue">Dilaceração</span>
          </div>
          <div>
            <input
              class="c1-13"
              type="checkbox"
              @click="sendCardNow()"
              value="Amputado"
              v-model="this.values['amputado-' + (key - 1)]"
            />

            <span class="title-input-blue">Amputado</span>
          </div>
          <div>
            <input
              class="c1-13"
              type="checkbox"
              @click="sendCardNow()"
              value="Inchaço"
              v-model="this.values['inchaco-' + (key - 1)]"
            />

            <span class="title-input-blue">Inchaço</span>
          </div>
          <div>
            <input
              class="c1-13"
              type="checkbox"
              @click="sendCardNow()"
              value="Tecido Mole"
              v-model="this.values['tecido_mole-' + (key - 1)]"
            />

            <span class="title-input-blue">Tecido Mole</span>
          </div>
          <div>
            <input
              class="c1-13"
              type="checkbox"
              @click="sendCardNow()"
              value="Odor"
              v-model="this.values['odor-' + (key - 1)]"
            />

            <span class="title-input-blue">Odor</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "OutrosLocais",

  data() {
    return {
      outrasRegioes: [],
      count: 0,
      values: {},
    };
  },

  props: {
    idTanator: Number,
    valuesOut: Array,
    newcard: String,
  },

  methods: {
    showModalSelectImagen(campo) {
      this.modalVisible = !this.modalVisible;

      this.campoImagem = campo;
    },

    sendCardNow() {
      this.$emit("set-outros-locais", this.values);
    },

    getOutrosLocais(id) {
      axios
        .get(`${process.env.VUE_APP_API_URL}/tanatorio/get-outros-locais/${id}`)
        .then((res) => {
          this.outrasRegioes = res.data;

          this.count = this.outrasRegioes.length;

          this.outrasRegioes.forEach((item, key) => {
            this.values["regiao-" + key] = item["local_corpo"];
            this.values["presencade_secrecao-" + key] = item["presencade_secrecao"] ? true : false;
            this.values["deterioracao-" + key] = item["deterioracao"] ? true : false;
            this.values["dilaceracao-" + key] = item["dilaceracao"] ? true : false;
            this.values["amputado-" + key] = item["amputado"] ? true : false;
            this.values["inchaco-" + key] = item["inchaco"] ? true : false;
            this.values["tecido_mole-" + key] = item["tecido_mole"] ? true : false;
            this.values["odor-" + key] = item["odor"] ? true : false;
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },

  beforeMount() {
    this.getOutrosLocais(this.idTanator);
  },

  watch: {
    newcard: function (item) {
      this.count = item;
    }
  },
};
</script>
