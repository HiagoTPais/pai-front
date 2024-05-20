<template>
  <div class="form-assistencia">
    <div class="form-navbar-assistencia">
      <AlertForm :show="showAlert" :msg="msgAlert" :type="typeAlert" />
      <div class="d-flex">
        <img
          class="family-img"
          :src="
            hideButton
              ? require('../../assets/img/family-red.png')
              : require('../../assets/img/family.png')
          "
        />
        <div
          class="d-flex flex-column"
          style="margin-left: 10px"
          :style="
            showView != 'form-assistencia-edit'
              ? { marginRight: '-275px' }
              : { marginRight: '' }
          "
        >
          <p
            class="form-title"
            style="width: 140%; margin-bottom: 7px; text-align: left"
            :style="hideButton ? { color: '#e5081d' } : { color: '#21509F' }"
          >
            {{
              showView == "form-assistencia-edit"
                ? "CONSULTANDO BENEFICIÁRIO"
                : "CADASTRANDO CONTRATO PARA BENEFICIÁRIO"
            }}
          </p>
          <img
            style="height: 40px; width: 40px; border-radius: 6px"
            :style="
              hideButton
                ? { backgroundColor: '#e5081d' }
                : { backgroundColor: '#21509F' }
            "
            :src="
              showView == 'form-assistencia-edit'
                ? hideButton
                  ? require('../../assets/img/delete.png')
                  : require('../../assets/img/eye.png')
                : require('../../assets/img/beneficiario.png')
            "
          />
        </div>

        <div
          class="d-flex"
          style="margin-left: -6%"
          v-bind:class="getNavClass()"
        >
          <span
            class="nav-icon"
            v-for="(tab, index) in tabs"
            :key="index"
            @click="currentTabs == tabs"
          >
            {{ tab }}
          </span>

          <p
            class="nav-icon"
            @click="setCurrentForm(1)"
            :style="hideButton ? { color: '#e5081d' } : { color: '#21509F' }"
          >
            1. Beneficiário Contratante
          </p>
          <p
            class="nav-icon"
            @click="setCurrentForm(2)"
            :style="hideButton ? { color: '#e5081d' } : { color: '#21509F' }"
          >
            2. Plano e Benefícios
          </p>
          <p
            class="nav-icon"
            @click="setCurrentForm(3)"
            :style="hideButton ? { color: '#e5081d' } : { color: '#21509F' }"
          >
            3. Beneficiários Dependentes
          </p>
          <p
            class="nav-icon"
            @click="setCurrentForm(4)"
            :style="hideButton ? { color: '#e5081d' } : { color: '#21509F' }"
          >
            4. Pagamento e Cobrança
          </p>
          <p
            class="nav-icon"
            @click="setCurrentForm(6)"
            v-if="showView == 'form-assistencia-edit'"
            :style="hideButton ? { color: '#e5081d' } : { color: '#21509F' }"
          >
            {{
              hideButton
                ? "5. Cancelamento Justificativa"
                : "5. Histórico de Beneficiario"
            }}
          </p>

          <div class="d-flex flex-column" style="margin-left: 15px">
            <!-- ----------------------- Modal confirmação ----------------------- -->

            <div v-if="showView == 'form-assistencia-edit'">
              <div v-if="OpenClose">
                <div class="modal-mask">
                  <div class="modal-wrapper">
                    <div class="modal-container">
                      <div class="modal-header">
                        <slot name="header">
                          <img
                            class="family"
                            style="height: 40px; width: 40px; margin: 10px"
                            :src="require('../../assets/img/delete.png')"
                          />
                        </slot>
                      </div>
                      <div class="modal-body">
                        Tem certeza que deseja CANCELAR o plano de
                        {{
                          this.beneficiaryList.data.data[0].nome_completo
                            ? this.beneficiaryList.data.data[0].nome_completo
                            : ""
                        }}
                        ?
                      </div>
                      <div class="modal-footer justify-content-between">
                        <button
                          type="button"
                          @click="OpenJustification()"
                          class="btn-white btn-sm"
                        >
                          Sim
                        </button>
                        <button
                          type="button"
                          @click="OpenCloseSet()"
                          class="btn-red btn-sm"
                        >
                          Não
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <img
                  class="action-button"
                  style="cursor: pointer"
                  v-if="ShowButtonDelete == 'form-assistencia-edit'"
                  :src="require('../../assets/img/renovar-white.png')"
                  @click="OpenCloseSet()"
                />
              </div>
            </div>

            <!-- :src=" -->
            <!-- this.beneficiaryList.data.data[0].status == 'CANCELADO' -->
            <!-- ? require('../../assets/img/renovar-white.png') -->
            <!-- : require('../../assets/img/delete.png') -->
            <!-- " -->

            <!-- ----------------------- Fim Modal confirmação ----------------------- -->

            <!-- ----------------------- Modal Delete ----------------------- -->
            <div v-if="OpenClose">
              <div class="modal-mask">
                <div class="modal-wrapper">
                  <div class="modal-container">
                    <div class="modal-header">
                      <slot name="header">
                        <img
                          class="family"
                          style="height: 40px; width: 40px; margin: 10px"
                          :src="require('../../assets/img/delete.png')"
                        />
                      </slot>
                    </div>
                    <div class="modal-body">
                      Atenção, você tem certeza que deseja EXCLUIR
                      {{
                        this.beneficiaryList.data.data[0].nome_completo
                          ? this.beneficiaryList.data.data[0].nome_completo
                          : ""
                      }}
                      do Banco de Dados do Sistema?
                    </div>
                    <div class="modal-footer justify-content-between">
                      <button
                        type="button"
                        @click="deleteBeneficiary(this.IdBeneficiary)"
                        class="btn-white btn-sm"
                      >
                        Sim
                      </button>
                      <button
                        type="button"
                        @click="OpenCloseSet()"
                        class="btn-red btn-sm"
                      >
                        Não
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- ----------------------- Fim Modal Delete ----------------------- -->

            <img
              class="action-button"
              v-if="showView == 'form-assistencia-edit'"
              @click="download()"
              :src="require('../../assets/img/download-white.png')"
            />

            <img
              v-if="showView == 'form-assistencia-edit'"
              :class="
                beneficiaryStatus == 'CANCELADO'
                  ? 'btn-table-danger'
                  : 'btn-table-primary'
              "
              @click="
                beneficiaryStatus == 'CANCELADO'
                  ? resetBeneficiary(this.beneficiaryList.data.data[0].id)
                  : setCurrentFormToSeven()
              "
              :src="
                beneficiaryStatus == 'CANCELADO'
                  ? require('../../assets/img/renovar-white.png')
                  : require('../../assets/img/delete.png')
              "
            />
          </div>
        </div>
      </div>
    </div>
    <div class="form-input-assistencia">
      <form>
        <FormAssistenciaStep1
          :beneficiaryList="this.beneficiaryList"
          :showCurrentView="this.showView"
          :sendFormNow="this.sendForm"
          :sendDadosContatos="this.sendDadosContatos"
          :showForm="this.currentForm"
          @set-dados-contatos="setDadosContatos"
          @set-data-form="setDataForm"
        />

        <FormAssistenciaStep2
          @set-valor-base-plano="setValorBasePlano"
          :contractData="this.contractData"
          :showCurrentView="this.showView"
          :sendFormNow="this.sendForm"
          :showForm="this.currentForm"
          @set-data-form="setDataForm"
          @send-n-max="sendNmax"
        />

        <FormAssistenciaStep3
          :dependentList="this.dependentList"
          :showCurrentView="this.showView"
          :sendFormNow="this.sendForm"
          :showForm="this.currentForm"
          @set-data-form="setDataForm"
        />

        <FormAssistenciaStep4
          @get-dados-contatos="getDadosContatos"
          :dadosContatos="this.dadosContatos"
          :contractData="this.contractData"
          :showCurrentView="this.showView"
          :sendFormNow="this.sendForm"
          :showForm="this.currentForm"
          @set-data-form="setDataForm"
          :planoValor="this.planoValor"
        />

        <FormAssistenciaStep5
          :contractId="this.contractId"
          :showForm="this.currentForm"
          :showView="showView"
          :srcPdf="this.srcPdf"
        />

        <FormAssistenciaStep6
          :showForm="this.currentForm"
          @close-form="closeForm"
          :showView="showView"
          :beneficiaryList="this.beneficiaryList"
        />

        <div v-if="showView == 'form-assistencia-edit'">
          <FormAssistenciaStep7
            :beneficiaryList="this.beneficiaryList"
            :showForm="this.currentForm"
            :hideButton="hideButton"
          />
        </div>

        <div v-if="currentForm != 7">
          <div v-if="showView == 'form-assistencia-edit'">
            <BtnSend @send-form-now="sendFormNow()" />
          </div>

          <div v-else>
            <div v-if="this.currentForm != 4">
              <BtnNextTab
                @click="setNextForm()"
                :currentForm="currentForm"
                :hideButton="hideButton"
              />
            </div>

            <div v-else>
              <BtnSend @send-form-now="sendFormNow()" />
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<style src='../../../src/assets/css/bootstrap.min.css'></style>
<style src='../../../src/assets/css/style.css'></style>

<script>
import axios from "axios";

import FormAssistenciaStep1 from "../Assistencia/FormAssistenciaStep1.vue";
import FormAssistenciaStep2 from "../Assistencia/FormAssistenciaStep2.vue";
import FormAssistenciaStep3 from "../Assistencia/FormAssistenciaStep3.vue";
import FormAssistenciaStep4 from "../Assistencia/FormAssistenciaStep4.vue";
import FormAssistenciaStep5 from "../Assistencia/FormAssistenciaStep5.vue";
import FormAssistenciaStep6 from "../Assistencia/FormAssistenciaStep6.vue";
import FormAssistenciaStep7 from "../Assistencia/FormAssistenciaStep7.vue";
import AlertForm from "../AlertForm.vue";
import BtnNextTab from "../Btn/BtnNextTab";
import BtnSend from "../Btn/BtnSend";

export default {
  name: "FormAssistencia",
  props: {
    showView: String,
    beneficiaryId: Number,
  },
  data() {
    return {
      currentForm: 1,
      confirmDelete: false,
      hideButton: false,
      sendForm: false,
      beneficiaryList: [],
      contractData: [],
      dependentList: [],
      dataForm: [],
      beneficiaryStatus: "",
      OpenClose: false,
      additionalBenefits: [],
      showAlert: false,
      msgAlert: "O contrato esta sendo gerado, aguarde...",
      typeAlert: "alert-info",
      contractId: null,
      srcPdf: null,
      planoValor: null,
      sendDadosContatos: false,
      dadosContatos: [],
    };
  },
  beforeMount() {
    if (this.showView == "form-assistencia-edit") {
      this.getDataForm();
      this.getDataContract();
      this.getDependentBeneficiaries();
    }
  },
  components: {
    BtnSend,
    BtnNextTab,
    FormAssistenciaStep1,
    FormAssistenciaStep2,
    FormAssistenciaStep3,
    FormAssistenciaStep4,
    FormAssistenciaStep5,
    FormAssistenciaStep6,
    FormAssistenciaStep7,
    AlertForm,
  },
  emits: ["sendFormNow"],
  methods: {
    setDadosContatos(infoContatos) {
      this.dadosContatos = infoContatos;
    },

    getDadosContatos() {
      this.sendDadosContatos = !this.sendDadosContatos;
    },

    setValorBasePlano(plano_valor) {
      this.planoValor = plano_valor;
    },

    OpenCloseSet() {
      this.OpenClose = !this.OpenClose;
    },

    OpenJustification() {
      this.OpenClose = false;
      this.$emit("setCurrentFormSeven");
    },

    deleteBeneficiary(id) {
      axios
        .delete(`${process.env.VUE_APP_API_URL}/beneficiary/${id}`)
        .then(() => {
          this.$emit("setBeneficiarioList");

          this.OpenClose = !this.OpenClose;
        });
    },

    storeDateForm(dataForm) {
      this.showAlert = true;

      axios
        .post(`${process.env.VUE_APP_API_URL}/beneficiario/contrato/store`, {
          dataForm,
        })
        .then((res) => {
          this.contractId = res.data.data.id;
          this.currentForm = this.currentForm + 1;
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

    downloadAfterCreate(contract_id) {
      axios
        .get(
          `${process.env.VUE_APP_API_URL}/beneficiario/contrato/download/${contract_id}`,
          {
            responseType: "arraybuffer",
          }
        )
        .then((res) => {
          const blob = new Blob([res.data], { type: "application/pdf" });
          const url = window.URL.createObjectURL(blob);
          this.srcPdf = url;
        });
    },

    download() {
      const reversedContractData = JSON.parse(
        JSON.stringify(this.contractData)
      );

      var beneficiarie_id = reversedContractData.data[0].beneficiarie_id;

      axios
        .get(
          `${process.env.VUE_APP_API_URL}/beneficiario/contrato/download/${beneficiarie_id}`,
          {
            responseType: "arraybuffer",
          }
        )
        .then((res) => {
          const url = window.URL.createObjectURL(new Blob([res.data]));
          var link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", "file.pdf");
          document.body.appendChild(link);
          link.click();
        });
    },

    updateDateForm(dataForm) {
      this.showAlert = true;

      axios
        .put(
          `${process.env.VUE_APP_API_URL}/contract/update/${this.beneficiaryId}`,
          { dataForm }
        )
        .then(() => {
          this.msgAlert = "O contrato foi atualizado com sucesso.";
          this.typeAlert = "alert-success";

          setTimeout(() => {
            this.showAlert = false;
          }, 5000);
        });
    },

    getDataForm() {
      axios
        .get(
          `${process.env.VUE_APP_API_URL}/beneficiario/${this.beneficiaryId}`
        )
        .then((res) => {
          this.beneficiaryList = res;
          this.beneficiaryStatus = res.data[0].status;
        });
    },

    getDependentBeneficiaries() {
      axios
        .get(
          `${process.env.VUE_APP_API_URL}/beneficiario/dependentes/${this.beneficiaryId}`
        )
        .then((res) => {
          this.dependentList = res;
        });
    },

    getDataContract() {
      axios
        .get(
          `${process.env.VUE_APP_API_URL}/beneficiario/contrato/${this.beneficiaryId}`
        )
        .then((res) => {
          console.log("contractData");
          console.log(res);
          this.contractData = res;
        });
    },

    resetBeneficiary(id) {
      this.showAlert = true;
      this.msgAlert = "O contrato foi reativado com sucesso.";
      this.typeAlert = "alert-success";

      axios
        .get(`${process.env.VUE_APP_API_URL}/reset-beneficiary/${id}`)
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });

      this.beneficiaryStatus = "ATIVO";

      setTimeout(() => {
        this.showAlert = false;
      }, 5000);
    },

    setDataForm(formData) {
      this.dataForm.push(formData);

      if (this.dataForm.length == 4) {
        if (this.showView == "form-assistencia-edit") {
          this.updateDateForm(this.dataForm);
        } else {
          this.storeDateForm(this.dataForm);
        }
      }
    },

    sendFormNow() {
      this.sendForm = !this.sendForm;
    },

    receiveDadosContatos(dadosContatos) {
      this.dadosContatos = dadosContatos;
    },

    setCurrentForm(idForm) {
      this.currentForm = idForm;
      this.hideButton = false;
    },

    setCurrentFormToSeven() {
      this.currentForm = 7;
      this.hideButton = true;
    },

    setConfirmDelete() {
      this.confirmDelete = true;
    },

    setNextForm() {
      this.currentForm = this.currentForm + 1;

      if (this.currentForm > 6) {
        this.currentForm = 1;
      }

      if (this.currentForm == 5) {
        this.sendForm();
      }
    },

    closeForm() {
      this.$emit("setShowForm");
      this.setNextForm();
    },

    getNavClass() {
      if (this.showView == "form-assistencia-edit") {
        return "nav-view";
      }
    },
  },
};
</script>
