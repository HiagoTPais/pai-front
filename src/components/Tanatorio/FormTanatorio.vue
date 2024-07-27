<template>
  <div class="form-assistencia">
    <div class="form-navbar-assistencia">
      <div class="d-flex">
        <img
          class="family-img"
          :src="require('../../assets/img/tanatorio.png')"
        />
        <div class="d-flex flex-column" style="margin-left: 10px">
          <p
            class="form-title"
            style="width: 140%; margin-bottom: 7px; text-align: left"
          >
            CADASTRANDO TANATORIO
          </p>
          <img
            class="beneficiario-icon"
            :src="require('../../assets/img/beneficiario.png')"
          />
        </div>

        <div class="d-flex" style="margin-left: -13.7%">
          <span
            class="nav-icon"
            style="padding: 10px; padding-top: 20px"
            v-for="(tab, index) in tabs"
            :key="index"
            @click="currentTabs = index"
          >
            {{ tab }}
          </span>
        </div>
      </div>
    </div>
    <div class="form-input-assistencia">
      <form style="height: auto">
        <FormTanatorioStep0
          :showForm="this.currentTabs"
          :sendFormNow="this.sendForm"
          @set-data-form="setDataForm"
        />
        <FormTanatorioStep1
          :showForm="this.currentTabs"
          :sendFormNow="this.sendForm"
          @set-data-form="setDataForm"
        />
        <FormTanatorioStep2
          :showForm="this.currentTabs"
          :sendFormNow="this.sendForm"
          @set-data-form="setDataForm"
        />
        <FormTanatorioStep3
          :showForm="this.currentTabs"
          :sendFormNow="this.sendForm"
          @set-data-form="setDataForm"
        />
        <FormTanatorioStep4
          :showForm="this.currentTabs"
          :sendFormNow="this.sendForm"
          @set-data-form="setDataForm"
        />
        <FormTanatorioStep5
          :showForm="this.currentTabs"
          :sendFormNow="this.sendForm"
          @set-data-form="setDataForm"
        />
        <FormTanatorioStep6
          :showForm="this.currentTabs"
          :sendFormNow="this.sendForm"
          @set-data-form="setDataForm"
        />
        <FormTanatorioStep7
          :showForm="this.currentTabs"
          :sendFormNow="this.sendForm"
          @set-data-form="setDataForm"
        />
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
import BtnNextTab from "../Btn/BtnNextTab";
import FormTanatorioStep0 from "./FormTanatorioStep0.vue";
import FormTanatorioStep1 from "./FormTanatorioStep1.vue";
import FormTanatorioStep2 from "./FormTanatorioStep2.vue";
import FormTanatorioStep3 from "./FormTanatorioStep3.vue";
import FormTanatorioStep4 from "./FormTanatorioStep4.vue";
import FormTanatorioStep5 from "./FormTanatorioStep5.vue";
import FormTanatorioStep6 from "./FormTanatorioStep6.vue";
import FormTanatorioStep7 from "./FormTanatorioStep7.vue";

export default {
  name: "FormTanatorio",
  props: {
    showView: String,
    colaboradorId: Number,
  },
  data() {
    return {
      currentTabs: 0,
      sendForm: false,
      hideButton: false,
      tabs: [
        "1. Buscar Falecido",
        "2. Dados do Óbito",
        "3. Estado do Corpo",
        "4. Causa Morte",
        "5. Tanatopraxia",
        "6. Somatoconservação",
        "7. Materiais",
        "8. Observações",
      ],
    };
  },
  components: {
    FormTanatorioStep0,
    FormTanatorioStep1,
    FormTanatorioStep2,
    FormTanatorioStep3,
    FormTanatorioStep4,
    FormTanatorioStep5,
    FormTanatorioStep6,
    FormTanatorioStep7,
    BtnNextTab,
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
  },
};
</script>
