<template>
  <div v-if="showForm == 4">
    <label class="form-title m-3">Dados da Cerimonia</label>

    <div class="d-flex">
      <div style="width: 100%; margin: 1%">
        <div>
          <span class="title-input-blue">Zona</span>

          <select v-model="form4.zona" name="zona" class="select-resp">
            <option>Urbana</option>
            <option>Rural</option>
          </select>
        </div>
        <div>
          <input type="checkbox" v-model="form4.particular" name="particular" />
          <span class="title-input-blue">Contratante</span>
        </div>
      </div>

      <div style="width: 100%; margin: 1%">
        <div>
          <span class="title-input-blue">Zona</span>

          <select v-model="form4.zona" name="zona" class="select-resp">
            <option>Urbana</option>
            <option>Rural</option>
          </select>
        </div>
        <div>
          <input type="checkbox" v-model="form4.particular" name="particular" />
          <span class="title-input-blue">Contratante</span>
        </div>
      </div>
    </div>

    <label class="form-title m-3">Endereço</label>

    <div class="row">
      <div class="col">
        <div class="m5">
          <span class="title-input-blue">CEP*</span>
          <input
            type="text"
            class="input-resp"
            v-model="form4.cep"
            name="cep"
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
            v-model="form4.rua"
            class="input-resp"
            name="rua"
          />
        </div>
      </div>

      <div class="col">
        <div class="m5">
          <span class="title-input-blue">Nº*</span>
          <input
            type="text"
            v-model="form4.numero"
            class="input-resp"
            name="numero"
          />
        </div>
      </div>

      <div class="col">
        <div class="m5">
          <span class="title-input-blue">Bairro*</span>
          <input
            type="text"
            v-model="form4.bairro"
            class="input-resp"
            name="bairro"
          />
        </div>
      </div>

      <div class="col">
        <div class="m5">
          <span class="title-input-blue">Cidade*</span>
          <input
            type="text"
            v-model="form4.cidade"
            class="input-resp"
            name="cidade"
          />
        </div>
      </div>

      <div class="col">
        <div class="m5">
          <span class="title-input-blue">UF*</span>
          <input
            type="text"
            class="input-resp"
            v-model="form4.uf"
            name="uf"
            maxlength="uf"
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
            v-model="form4.complemento"
            name="complemento"
          />
        </div>
      </div>

      <div class="col">
        <div class="m5">
          <span class="title-input-blue">Ponto de Referência</span>
          <input
            type="text"
            class="input-resp"
            v-model="form4.ponto_referencia"
            name="ponto_referencia"
          />
        </div>
      </div>

      <div class="col">
        <div class="m5">
          <span class="title-input-blue">Zona</span>

          <select v-model="form4.zona" name="zona" class="select-resp">
            <option>Urbana</option>
            <option>Rural</option>
          </select>
        </div>
      </div>

      <div class="col">
        <div class="m5">
          <span class="title-input-blue">Horario de Inicio</span>
          <input
            type="text"
            class="input-resp"
            v-model="form4.ponto_referencia"
            name="ponto_referencia"
          />
        </div>
      </div>
    </div>

    <div class="d-flex justify-content-between m1">
      <div>
        <input type="checkbox" v-model="havera_homenagem" name="havera_homenagem" />
        <span class="title-input-blue">Haverá Cerimonia de Homenagem</span>
      </div>
    </div>

    <div v-if="havera_homenagem">
      <label class="form-title m-3">Dados da Homenagem</label>

      <div class="row">
        <div class="col">
          <div class="m5">
            <span class="title-input-blue">Era muito conhecido?</span>

            <input
              type="text"
              v-model="form4.teste"
              class="input-resp"
              name="data_expedicao"
            />
          </div>
        </div>

        <div class="col">
          <div class="m5">
            <span class="title-input-blue">Era muito religioso?</span>

            <input
              type="text"
              v-model="form4.teste"
              class="input-resp"
              name="cpf"
            />
          </div>
        </div>

        <div class="col">
          <div class="m5">
            <span class="title-input-blue">Quantos filhos?</span>

            <input
              type="text"
              v-model="form4.teste"
              class="input-resp"
              name="cpf"
            />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="m5">
            <span class="title-input-blue">Oque gostava de fazer?</span>

            <input
              type="text"
              v-model="form4.teste"
              class="input-resp"
              name="data_expedicao"
            />
          </div>
        </div>

        <div class="col">
          <div class="m5">
            <span class="title-input-blue">Como se sentia ao fazer?</span>

            <input
              type="text"
              v-model="form4.teste"
              class="input-resp"
              name="cpf"
            />
          </div>
        </div>

        <div class="col">
          <div class="m5">
            <span class="title-input-blue"
              >Qual lição de vida deixou para você?</span
            >

            <input
              type="text"
              v-model="form4.teste"
              class="input-resp"
              name="cpf"
            />
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
              v-model="form4.teste"
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
            v-model="form4.teste"
            name="observacoes"
            class="textarea-resp"
            cols="124"
            rows="5"
          ></textarea>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mask } from "vue-the-mask";

export default {
  name: "FormColaboradoresStep4",
  props: {
    showForm: Number,
    sendFormNow: Boolean,
    showView: String,
    colaboradorLista: Object,
  },
  methods: {
    buscarCep() {
      axios
        .get("https://viacep.com.br/ws/" + this.form4.cep + "/json/")
        .then((res) => {
          this.form4.uf = res.data.uf;
          this.form4.cidade = res.data.localidade;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  data() {
    return {
      havera_homenagem: false,
      form4: {
        teste: "",
      },
    };
  },
  directives: { mask },
  watch: {
    sendFormNow: function () {
      this.$emit("set-data-form", this.form4);
    },
  },
};
</script>
<style>
.app-layout {
  height: 1248px !important;
}
</style>