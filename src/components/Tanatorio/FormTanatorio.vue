<template>
  <div class="form-assistencia">
    <div class="form-navbar-assistencia">
      <AlertForm :show="showAlert" :msg="msgAlert" :type="typeAlert" />
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
            {{
              showView == "form-assistencia-edit"
                ? "CONSULTANDO TANATORIO"
                : "CADASTRANDO TANATORIO"
            }}
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
      <form>
        <FormTanatorioStep0
          :showForm="this.currentTabs"
          :sendFormNow="this.sendForm"
          @set-data-form="setDataForm"
          @select-tanato="selectTanato"
        />
        <FormTanatorioStep1
          :infoTanato="this.infoTanato"
          :showForm="this.currentTabs"
          :sendFormNow="this.sendForm"
          @set-data-form="setDataForm"
          :selectedTanato="this.selectedTanato"
        />
        <FormTanatorioStep2
          :infoTanato="this.infoTanato"
          :showForm="this.currentTabs"
          :sendFormNow="this.sendForm"
          @set-data-form="setDataForm"
        />
        <FormTanatorioStep3
          :infoTanato="this.infoTanato"
          :showForm="this.currentTabs"
          :sendFormNow="this.sendForm"
          @set-data-form="setDataForm"
        />
        <FormTanatorioStep4
          :infoTanato="this.infoTanato"
          :showForm="this.currentTabs"
          :sendFormNow="this.sendForm"
          @set-data-form="setDataForm"
        />
        <FormTanatorioStep5
          :infoTanato="this.infoTanato"
          :showForm="this.currentTabs"
          :sendFormNow="this.sendForm"
          @set-data-form="setDataForm"
        />
        <FormTanatorioStep6
          :infoTanato="this.infoTanato"
          :showForm="this.currentTabs"
          :sendFormNow="this.sendForm"
          @set-data-form="setDataForm"
        />
        <FormTanatorioStep7
          :infoTanato="this.infoTanato"
          :showForm="this.currentTabs"
          :sendFormNow="this.sendForm"
          @set-data-form="setDataForm"
        />

        <FormTanatorioStep8
          :infoTanato="this.infoTanato"
          :showForm="this.currentTabs"
          :srcPdf="this.srcPdf"
        />
      </form>
    </div>
    <div class="form-input-assistencia">
      <div v-if="this.currentTabs != 7">
        <BtnNextTab
          @click="setNextForm()"
          :currentForm="currentTabs"
          :hideButton="hideButton"
        />
      </div>

      <div v-else>
        <BtnSend @send-form-now="sendFormNow()" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

import BtnNextTab from "../Btn/BtnNextTab";
import BtnSend from "../Btn/BtnSend";
import AlertForm from "../AlertForm.vue";
import FormTanatorioStep0 from "./FormTanatorioStep0.vue";
import FormTanatorioStep1 from "./FormTanatorioStep1.vue";
import FormTanatorioStep2 from "./FormTanatorioStep2.vue";
import FormTanatorioStep3 from "./FormTanatorioStep3.vue";
import FormTanatorioStep4 from "./FormTanatorioStep4.vue";
import FormTanatorioStep5 from "./FormTanatorioStep5.vue";
import FormTanatorioStep6 from "./FormTanatorioStep6.vue";
import FormTanatorioStep7 from "./FormTanatorioStep7.vue";
import FormTanatorioStep8 from "./FormTanatorioStep8.vue";

export default {
  name: "FormTanatorio",
  props: {
    showView: String,
    tanatorioId: String,
  },
  data() {
    return {
      relatorioTanatorioId: null,
      currentTabs: 0,
      sendForm: false,
      hideButton: false,
      infoTanato: [],
      selectedTanato: [],
      dataForm: [],
      showAlert: false,
      msgAlert: "O relatorio esta sendo gerado, aguarde...",
      typeAlert: "alert-info",
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
    FormTanatorioStep8,
    AlertForm,
    BtnNextTab,
    BtnSend,
  },

  emits: ["sendFormNow"],

  beforeMount() {
    if (this.showView == "form-tanatorio-edit") {
      this.getDataForm(this.tanatorioId);
    }
  },

  methods: {
    selectTanato(item) {
      this.selectedTanato = item;
    },

    setDataForm(formData) {
      this.dataForm.push(formData);

      if (this.dataForm.length == 7) {
        if (this.showView == "form-tanatorio-edit") {
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
        .post(`${process.env.VUE_APP_API_URL}/tanatorio/store`, { dataForm })
        .then((res) => {
          this.relatorioTanatorioId = res.data.id;
          this.currentTabs = 8;
          this.msgAlert = "O relatorio foi gerado com sucesso.";
          this.typeAlert = "alert-success";

          // this.downloadAfterCreate(this.relatorioTanatorioId);

          setTimeout(() => {
            this.showAlert = false;
          }, 4000);
        })
        .catch((res) => {
          console.error(res);
        });
    },

    updateDateForm(dataForm) {
      this.showAlert = true;

      axios
        .put(`${process.env.VUE_APP_API_URL}/tanatorio/update/${this.tanatorioId}`, { dataForm })
        .then((res) => {
          this.relatorioTanatorioId = res.data.id;
          this.currentTabs = 8;
          this.msgAlert = "O relatorio foi atualizado com sucesso.";
          this.typeAlert = "alert-success";

          // this.downloadAfterCreate(this.relatorioTanatorioId);

          setTimeout(() => {
            this.showAlert = false;
          }, 4000);
        })
        .catch((res) => {
          console.error(res);
        });
    },

    downloadAfterCreate(id) {
      axios
        .get(`${process.env.VUE_APP_API_URL}/tanatorio/download/${id}`, {
          responseType: "arraybuffer",
        })
        .then((res) => {
          const blob = new Blob([res.data], { type: "application/pdf" });

          const url = window.URL.createObjectURL(blob);

          this.srcPdf = url;
        });
    },

    getDataForm(id) {
      axios
        .get(`${process.env.VUE_APP_API_URL}/tanatorio/get/${id}`)
        .then((res) => {
          console.log(res);
          this.infoTanato = res;
        });
    },
  },
};
</script>
