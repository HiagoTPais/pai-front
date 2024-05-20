<template>
  <div class="form-assistencia">
    <div class="form-navbar-assistencia">
      <div class="d-flex">
        <img
          class="family-img"
          :src="require('../../assets/img/colaboradores.png')"
        />
        <div class="d-flex flex-column" style="margin-left: 10px">
          <p
            class="form-title"
            style="width: 140%; margin-bottom: 7px; text-align: left"
          >
            CADASTRANDO COLABORADORES
          </p>
          <img
            class="beneficiario-icon"
            :src="require('../../assets/img/beneficiario.png')"
          />
        </div>

        <div class="d-flex" style="margin-left: -18%;">
          <span
            class="nav-icon"
            v-for="(tab, index) in tabs"
            :key="index"
            @click="currentTabs = index + 1"
          >
            {{ tab }}
          </span>
        </div>
      </div>
    </div>
    <div class="form-input-assistencia">
      <form style="height: 750px">
        <FormColaboradoresStep1
          :colaboradorLista="this.colaboradorLista"
          :showForm="this.currentTabs"
          :sendFormNow="this.sendForm"
          @set-data-form="setDataForm"
        />

        <FormColaboradoresStep2
          :dependentList="this.dependentList"
          :showForm="this.currentTabs"
          :sendFormNow="this.sendForm"
          @set-data-form="setDataForm"
        />

        <FormColaboradoresStep3
          :contratoData="this.contratoData"
          :showForm="this.currentTabs"
          :sendFormNow="this.sendForm"
          @set-data-form="setDataForm"
        />

        <FormColaboradoresStep4
          :showForm="this.currentTabs"
          :sendFormNow="this.sendForm"
          @set-data-form="setDataForm"
        />

        <FormColaboradoresStep5 :showForm="this.currentTabs" />
      </form>
    </div>
    <div class="form-input-assistencia">
      <form>
        <BtnNextTab
          @click="setNextForm()"
          :currentTabs="currentTabs"
          :hideButton="hideButton"
        />
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

import BtnNextTab from "../Btn/BtnNextTab";
import FormColaboradoresStep1 from "./FormColaboradoresStep1";
import FormColaboradoresStep2 from "./FormColaboradoresStep2";
import FormColaboradoresStep3 from "./FormColaboradoresStep3";
import FormColaboradoresStep4 from "./FormColaboradoresStep4";
import FormColaboradoresStep5 from "./FormColaboradoresStep5";

export default {
  name: "FormColaboradores",
  props: {
    showView: String,
    colaboradorId: Number,
  },
  data() {
    return {
      currentTabs: 1,
      sendForm: false,
      hideButton: false,
      tabs: ["1. Colaborador", "2. Dependentes", "3. Contratação", "4. Acesso"],
      contratoData: [],
      colaboradorLista: [],
      dependeteLista: [],
      dataForm: [],
    };
  },
  beforeMount() {
    if (this.showView == "form-colaboradores-edit") {
      this.getDataForm();
      this.getDependentes();
      this.getContratoColaborador();
    }
  },
  components: {
    BtnNextTab,
    FormColaboradoresStep1,
    FormColaboradoresStep2,
    FormColaboradoresStep3,
    FormColaboradoresStep4,
    FormColaboradoresStep5,
  },
  emits: ["sendFormNow"],
  methods: {
    setDataForm(formData) {
      this.dataForm.push(formData);

      let values = [];
      let keys = [];
      let obj = {};

      let dependentes = this.dataForm[1];

      // delete this.dataForm[1];

      if (this.dataForm.length == 4) {
        this.dataForm.forEach((element) => {
          for (let key in element) {
            values.push(element[key]);
            keys.push(key);
          }
        });

        for (let i = 0; i < keys.length && i < values.length; i++) {
          obj[keys[i]] = values[i];
        }

        obj["dependentes"] = dependentes;

        this.dataForm = obj;

        if (this.showView == "form-colaboradores-edit") {
          this.updateDateForm(this.dataForm);
        } else {
          this.storeDateForm(this.dataForm);
        }
      }
    },

    setNextForm() {
      this.currentTabs = this.currentTabs + 1;

      if (this.currentTabs > 6) {
        this.currentTabs = 1;
      }

      if (this.currentTabs == 5) {
        this.sendFormNow();
      }
    },

    sendFormNow() {
      this.sendForm = !this.sendForm;
    },

    storeDateForm(dataForm) {
      this.showAlert = true;

      axios
        .post(`${process.env.VUE_APP_API_URL}/colaborador/store`, { dataForm })
        .then((res) => {
          this.contractId = res.data.data.id;
          this.currentTabs = this.currentTabs + 1;
          this.msgAlert = "O contrato foi gerado com sucesso.";
          this.typeAlert = "alert-success";

          this.downloadAfterCreate(this.contractId);

          setTimeout(() => {
            this.showAlert = false;
          }, 4000);
        })
        .catch((res) => {
          console.error(res);
        });
    },

    getDataForm() {
      axios
        .get(`${process.env.VUE_APP_API_URL}/colaborador/${this.colaboradorId}`)
        .then((res) => {
          this.colaboradorLista = res;
        });
    },

    getDependentes() {
      axios
        .get(
          `${process.env.VUE_APP_API_URL}/colaborador/dependentes/${this.colaboradorId}`
        )
        .then((res) => {
          this.dependentList = res;
        });
    },

    getContratoColaborador() {
      axios
        .get(
          `${process.env.VUE_APP_API_URL}/colaborador/contrato/${this.colaboradorId}`
        )
        .then((res) => {
          this.contratoData = res;
        });
    },
  },
};
</script>
