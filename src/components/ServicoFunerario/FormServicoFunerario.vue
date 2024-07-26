<template>
  <div class="form-assistencia">
    <div class="form-navbar-assistencia">
      <div class="d-flex">
        <img
          class="family-img"
          :src="require('../../assets/img/funeraria.png')"
        />

        <div class="d-flex flex-column" style="margin-left: 10px">
          <p class="form-title" style="margin-bottom: 7px; text-align: left">
            SERVIÇO FUNERARIO
          </p>
          <img
            class="beneficiario-icon"
            :src="require('../../assets/img/beneficiario.png')"
          />
        </div>

        <div class="d-flex" style="margin-left: -10%">
          <span
            class="nav-icon"
            style="padding: 10px; padding-top: 20px"
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
      <form>
        <FormServicoFunerarioStep1
          :showForm="this.currentTabs"
          :sendFormNow="this.sendForm"
          @set-data-form="setDataForm"
          @select-responsavel="selectResponsavel"
          @select-falecido="selectFalecido"
        />
        <FormServicoFunerarioStep2
          :showForm="this.currentTabs"
          :selectedResponsavel="this.selectedResponsavel"
          @set-data-form="setDataForm"
        />
        <FormServicoFunerarioStep3
          :showForm="this.currentTabs"
          :selectedFalecido="this.selectedFalecido"
          @set-data-form="setDataForm"
        />
        <FormServicoFunerarioStep4
          :showForm="this.currentTabs"
          :sendFormNow="this.sendForm"
          @set-data-form="setDataForm"
        />
        <!-- <FormServicoFunerarioStep5
          :showForm="this.currentTabs"
          :sendFormNow="this.sendForm"
          @set-data-form="setDataForm"
        /> -->
        <FormServicoFunerarioStep6
          :showForm="this.currentTabs"
          :sendFormNow="this.sendForm"
          @set-data-form="setDataForm"
        />
        <FormServicoFunerarioStep7
          :showForm="this.currentTabs"
          :sendFormNow="this.sendForm"
          @set-data-form="setDataForm"
        />
        <FormServicoFunerarioStep8
          :showForm="this.currentTabs"
          :sendFormNow="this.sendForm"
          @set-data-form="setDataForm"
        />
        <FormServicoFunerarioStep9
          :showForm="this.currentTabs"
          :sendFormNow="this.sendForm"
          @set-data-form="setDataForm"
        />
        <FormServicoFunerarioStep10
          :showForm="this.currentTabs"
          :sendFormNow="this.sendForm"
          @set-data-form="setDataForm"
        />

        <div v-if="this.currentTabs == 9">
          <BtnSend @send-form-now="sendFormNow()" />
        </div>

        <div v-else>
          <BtnNextTab
            @click="setNextForm()"
            :currentTabs="currentTabs"
            :hideButton="hideButton"
          />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

import BtnNextTab from "../Btn/BtnNextTab";
import BtnSend from "../Btn/BtnSend";
import FormServicoFunerarioStep1 from "./FormServicoFunerarioStep1";
import FormServicoFunerarioStep2 from "./FormServicoFunerarioStep2";
import FormServicoFunerarioStep3 from "./FormServicoFunerarioStep3";
import FormServicoFunerarioStep4 from "./FormServicoFunerarioStep4";
// import FormServicoFunerarioStep5 from "./FormServicoFunerarioStep5";
import FormServicoFunerarioStep6 from "./FormServicoFunerarioStep6";
import FormServicoFunerarioStep7 from "./FormServicoFunerarioStep7";
import FormServicoFunerarioStep8 from "./FormServicoFunerarioStep8";
import FormServicoFunerarioStep9 from "./FormServicoFunerarioStep9";
import FormServicoFunerarioStep10 from "./FormServicoFunerarioStep10";

export default {
  name: "FormServicoFunerario",
  props: {
    showView: String,
    colaboradorId: Number,
  },
  data() {
    return {
      currentTabs: 1,
      sendForm: false,
      hideButton: false,
      responsavelId: null,
      falecidoId: null,
      tabs: [
        "1. Atendimento",
        "2. Responsável",
        "3. Falecido(a)",
        "4. Cerimonial",
        "5. Translado",
        "6. Produtos",
        "7. Cuidados",
        "8. Sepultamento",
        "9. Pagamento",
      ],
      contratoData: [],
      colaboradorLista: [],
      dependeteLista: [],
      dataForm: [],
      selectedResponsavel: [],
      selectedFalecido: [],
    };
  },
  // beforeMount() {
  //   if (this.showView == "form-servico-funerario-edit") {
  //     this.getDataForm();
  //     this.getDependentes();
  //     this.getContratoColaborador();
  //   }
  // },
  components: {
    BtnSend,
    BtnNextTab,
    FormServicoFunerarioStep1,
    FormServicoFunerarioStep2,
    FormServicoFunerarioStep3,
    FormServicoFunerarioStep4,
    // FormServicoFunerarioStep5,
    FormServicoFunerarioStep6,
    FormServicoFunerarioStep7,
    FormServicoFunerarioStep8,
    FormServicoFunerarioStep9,
    FormServicoFunerarioStep10,
  },
  emits: ["sendFormNow"],
  methods: {
    selectResponsavel(item) {
      this.selectedResponsavel = item;
      this.responsavelId = item.id;
    },

    selectFalecido(item) {
      this.selectedFalecido = item;
      this.falecidoId = item.id;
    },

    setDataForm(formData) {
      console.log(formData);

      this.dataForm.push(formData);

      if (this.dataForm.length == 7) {
        this.dataForm.push({
          responsavel_beneficiario_id: this.responsavelId,
          falecido_beneficiario_id: this.falecidoId,
        });

        if (this.showView == "form-servico-funerario-edit") {
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
        .post(`${process.env.VUE_APP_API_URL}/servico-funerario/store`, {
          dataForm,
        })
        .then((res) => {
          this.contractId = res.data.data.id;
          this.currentTabs = this.currentTabs + 1;
          this.msgAlert = "O contrato foi gerado com sucesso.";
          this.typeAlert = "alert-success";

          setTimeout(() => {
            this.showAlert = false;
          }, 4000);
        })
        .catch((res) => {
          console.error(res);
        });
    },
  },
};
</script>
