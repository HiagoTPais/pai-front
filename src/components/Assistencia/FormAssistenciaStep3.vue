<template>
  <div v-if="showForm == 3" style="height: 660px; text-align: left">
    <div class="d-flex justify-content-between">
      <div>
        <label class="form-title m-3">Dados Civis dos Beneficiários Dependentes</label>
      </div>
      <div class="d-flex">
        <img
          class="family"
          :src="require('../../assets/img/person.png')"
          @click="addInput()"
        />
        <img
          class="family"
          :src="require('../../assets/img/delete.png')"
          @click="removeInput()"
        />
      </div>
    </div>
    <div class="scrollbar-y">
      <div class="row" v-for="key in count" :key="key">
        <div class="col">
          <span class="title-input-blue">Nome Completo</span>
          <input
            @blur="setForm3()"
            v-model="values['nome_completo_dependente_' + (key - 1)]"
            name="nome_completo_dependente"
            type="text"
            class="input-resp"
          />
        </div>

        <div class="col">
          <div class="m5">
            <span class="title-input-blue">Sexo</span>
            <select
              v-model="values['sexo_dependente_' + (key - 1)]"
              name="sexo"
              class="select-resp"
            >
              <option>Masculino</option>
              <option>Feminino</option>
            </select>
          </div>
        </div>

        <div class="col" style="margin-top: 5px">
          <span class="title-input-blue">Nascimento</span>
          <input
            @blur="setForm3()"
            v-model="values['nascimento_dependente_' + (key - 1)]"
            name="nascimento_dependente"
            type="date"
            class="input-resp"
          />
        </div>

        <div class="col">
          <span class="title-input-blue">Parentesco*</span>
          <select
            @blur="setForm3()"
            v-model="values['parentesco_dependente_' + (key - 1)]"
            name="parentesco_dependente"
            class="select-resp"
            style="margin-top: 8px"
          >
            <option value="filho">Filho</option>
            <option value="neto">Neto</option>
            <option value="subrinho">Subrinho</option>
            <option value="tio">Tio</option>
            <option value="bisneto">Bisneto</option>
            <option value="pais">Pais</option>
            <option value="avós">Avós</option>
            <option value="bisavós">Bisavós</option>
            <option value="esposa">Esposa</option>
            <option value="marido">Marido</option>
          </select>
        </div>

        <div class="col" style="margin-top: 5px">
          <span class="title-input-blue">CPF</span>
          <input
            @blur="setForm3()"
            v-model="values['cpf_dependente_' + (key - 1)]"
            name="cpf_dependente"
            type="text"
            class="input-resp"
            v-mask="['###.###.###-##']"
          />
        </div>

        <div class="col" style="margin-top: 5px">
          <span class="title-input-blue">Telefone</span>
          <input
            @blur="setForm3()"
            v-model="values['telefone_dependente_' + (key - 1)]"
            name="telefone_dependente"
            type="text"
            class="input-resp"
            v-mask="['(##) #####-####']"
          />
        </div>

        <div class="col-1">
          <span class="title-input-blue">WhatsApp?</span>
          <select
            @blur="setForm3()"
            v-model="values['whatsapp_dependente_' + (key - 1)]"
            name="whatsapp_dependente"
            class="select-resp"
            style="margin-top: 8px"
          >
            <option>Sim</option>
            <option>Não</option>
          </select>
        </div>

        <div class="col-1">
          <span class="title-input-blue">Seguro?</span>
          <select
            @blur="setForm3()"
            v-model="values['seguro_dependente_' + (key - 1)]"
            name="seguro_dependente"
            class="select-resp"
            style="margin-top: 8px"
          >
            <option>Sim</option>
            <option>Não</option>
          </select>
        </div>

        <div class="col-1">
          <span class="title-input-blue">Extra?</span>
          <select
            @blur="setForm3()"
            v-model="values['extra_' + (key - 1)]"
            name="extra"
            class="select-resp"
            style="margin-top: 8px"
          >
            <option>Sim</option>
            <option>Não</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
import { mask } from "vue-the-mask";
// import { PerfectScrollbar } from "vue3-perfect-scrollbar";

export default {
  name: "FormAssistenciaStep3",
  directives: { mask },
  props: {
    showForm: Number,
    sendFormNow: Boolean,
    dependentList: Object,
    showCurrentView: String,
  },
  data() {
    return {
      form3: {
        nome_completo_dependente: "",
        sexo_dependente: "",
        nascimento_dependente: "",
        parentesco_dependente: "",
        cpf_dependente: "",
        whatsapp_dependente: "",
        seguro_dependente: "",
        extra: "",
        telefone_dependente: "",
      },
      count: 1,
      values: {},
    };
  },
  methods: {
    addInput() {
      this.count++;
    },
    removeInput() {
      if (this.count != 1) {
        this.count--;
      }
    },
    setForm3() {
      this.form3 = this.values;
    },
  },
  watch: {
    sendFormNow: function () {
      this.$emit("set-data-form", this.form3);
    },
    dependentList: function () {
      if (this.showCurrentView == "form-assistencia-edit") {
        const reversedDependentList = JSON.parse(
          JSON.stringify(this.dependentList)
        );

        this.count = reversedDependentList.data.length;

        reversedDependentList.data.forEach((item, key) => {
          this.values["nome_completo_dependente_" + key] = item.nome_completo_dependente;
          this.values["sexo_dependente_" + key] = item.sexo_dependente;
          this.values["nascimento_dependente_" + key] = item.nascimento_dependente;
          this.values["parentesco_dependente_" + key] = item.parentesco_dependente;
          this.values["cpf_dependente_" + key] = item.cpf_dependente;
          this.values["whatsapp_dependente_" + key] = item.whatsapp_dependente;
          this.values["seguro_dependente_" + key] = item.seguro_dependente;
          this.values["extra_" + key] = item.extra;
          this.values["telefone_dependente_" + key] = item.telefone_dependente;
        });
      }
    },
  },
};
</script>