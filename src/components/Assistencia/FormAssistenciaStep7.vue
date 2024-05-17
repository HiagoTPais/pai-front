<template>
  <AlertForm :show="showAlert" :msg="msgAlert" :type="typeAlert" />
  <div v-if="showForm == 7" style="height: 660px; text-align: left">
    <div v-if="!hideButton">
      <div class="d-flex flex-wrap">
        <div class="d-flex flex-column" style="margin: 2%">
          <p style="font-weight: bold; color: #21509f">Parcelas Pagas</p>
          <label style="color: #21509f">15 (R$ 690,00)</label>
        </div>

        <div class="d-flex flex-column" style="margin: 2%">
          <p style="font-weight: bold; color: #e5081d">Parcelas Vencidas</p>
          <label style="color: #e5081d">1 (R$ 50,00)</label>
        </div>

        <div class="d-flex flex-column" style="margin: 2%">
          <p style="font-weight: bold; color: #000000">Parcelas A Pagar</p>
          <label style="font-weight: bold; color: #000000"
            >33 (R$ 1650,00)</label
          >
        </div>

        <div class="d-flex flex-column" style="margin: 2%">
          <p style="font-weight: bold; color: #000000">Atualizar Parcelas</p>
          <img
            class="icon-form-page"
            :src="require('../../assets/img/atualizar.png')"
          />
        </div>

        <div class="d-flex flex-column" style="margin: 2%">
          <p style="font-weight: bold; color: #000000">Renovar Plano</p>
          <img
            class="icon-form-page"
            :src="require('../../assets/img/renovar.png')"
          />
        </div>
      </div>

      <div class="d-flex flex-wrap">
        <div class="d-flex flex-column" style="margin: 2%">
          <img
            class="icon-form-page"
            :src="require('../../assets/img/ambulancia.png')"
          />
          <label style="font-weight: bold; color: #21509f">ambulancia</label>
        </div>

        <div class="d-flex flex-column" style="margin: 2%">
          <img
            class="icon-form-page"
            :src="require('../../assets/img/atendimento.png')"
          />
          <label style="font-weight: bold; color: #21509f">atendimento</label>
        </div>

        <div class="d-flex flex-column" style="margin: 2%">
          <img
            class="icon-form-page"
            :src="require('../../assets/img/atualizar.png')"
          />
          <label style="font-weight: bold; color: #21509f">atualizar</label>
        </div>

        <div class="d-flex flex-column" style="margin: 2%">
          <img
            class="icon-form-page"
            :src="require('../../assets/img/cerimonial.png')"
          />
          <label style="font-weight: bold; color: #21509f">cerimonial</label>
        </div>

        <div class="d-flex flex-column" style="margin: 2%">
          <img
            class="icon-form-page"
            :src="require('../../assets/img/clinica.png')"
          />
          <label style="font-weight: bold; color: #21509f">clinica</label>
        </div>

        <div class="d-flex flex-column" style="margin: 2%">
          <img
            class="icon-form-page"
            :src="require('../../assets/img/wheelchair.png')"
          />
          <label style="font-weight: bold; color: #21509f"
            >convalescencia</label
          >
        </div>

        <div class="d-flex flex-column" style="margin: 2%">
          <img
            class="icon-form-page"
            :src="require('../../assets/img/dentistas.png')"
          />
          <label style="font-weight: bold; color: #21509f">dentistas</label>
        </div>

        <div class="d-flex flex-column" style="margin: 2%">
          <img
            class="icon-form-page"
            :src="require('../../assets/img/farmacias.png')"
          />
          <label style="font-weight: bold; color: #21509f">farmacias</label>
        </div>

        <div class="d-flex flex-column" style="margin: 2%">
          <img
            class="icon-form-page"
            :src="require('../../assets/img/jazigo.png')"
          />
          <label style="font-weight: bold; color: #21509f">jazigo</label>
        </div>

        <div class="d-flex flex-column" style="margin: 2%">
          <img
            class="icon-form-page"
            :src="require('../../assets/img/juridico.png')"
          />
          <label style="font-weight: bold; color: #21509f">juridico</label>
        </div>

        <div class="d-flex flex-column" style="margin: 2%">
          <img
            class="icon-form-page"
            :src="require('../../assets/img/laboratorio.png')"
          />
          <label style="font-weight: bold; color: #21509f">laboratorio</label>
        </div>

        <div class="d-flex flex-column" style="margin: 2%">
          <img
            class="icon-form-page"
            :src="require('../../assets/img/terapias.png')"
          />
          <label style="font-weight: bold; color: #21509f">terapias</label>
        </div>

        <div class="d-flex flex-column" style="margin: 2%">
          <img
            class="icon-form-page"
            :src="require('../../assets/img/tweert.png')"
          />
        </div>

        <div class="d-flex flex-column" style="margin: 2%">
          <img
            class="icon-form-page"
            :src="require('../../assets/img/tweert.png')"
          />
        </div>
      </div>
    </div>

    <div v-else>
      <label class="form-title-remove m-3">Motivo de Cancelamento</label>

      <div class="d-flex">
        <select
          class="select-resp"
          v-model="form.motivo_cancelamento"
          style="width: 20%; border-color: #e5081d"
        >
          <option value="Óbito do Contratante">Óbito do Contratante</option>
          <option value="Inadimplência">Inadimplência</option>
          <option value="Mudança">Mudança</option>
          <option value="Reclamação">Reclamação</option>
          <option value="Condições Financeiras">Condições Financeiras</option>
          <option value="Não Especificado">Não Especificado</option>
          <option value="Não Tem Interesse">Não Tem Interesse</option>
          <option value="Mudou P/ outra Empresa">Mudou P/ outra Empresa</option>
        </select>
      </div>

      <label class="form-title-remove m-3">Observação</label>

      <div class="d-flex">
        <div>
          <textarea
            style="border: #e5081d solid 2px; border-radius: 15px; margin: 5px"
            cols="130"
            rows="12"
            v-model="form.observacao_cancelamento"
          ></textarea>
          <div style="margin: 18px">
            <div class="d-flex justify-content-between"></div>
          </div>
        </div>

        <!-- <div
          v-if="showPdfView"
          style="
            width: 47%;
            height: 300px;
            border: #e5081d solid 2px;
            border-radius: 15px;
            margin: 5px;
          "
        >
          <div style="margin: 18px">
            <div class="d-flex justify-content-end">
              <img
                class="pagar"
                style="background-color: #ffffff; margin-bottom: 10px"
                :src="require('../../assets/img/printer-red.png')"
              />
            </div>
          </div>
        </div> -->
      </div>

      <br />

      <div class="d-flex">
        <button
          type="button"
          class="btn-red"
          style="width: 20%; margin-left: 6px"
          @click="createTerminationTerm(form)"
        >
          Gerar Termo de Rescisão
        </button>
      </div>
    </div>
  </div>
</template>
  
<script>
import axios from "axios";
import AlertForm from "../AlertForm.vue";

export default {
  name: "FormAssistenciaStep7",
  data() {
    return {
      showPdfView: false,
      form: {
        motivo_cancelamento: "",
        observacao_cancelamento: "",
        beneficiary_id: 0,
      },
      showAlert: false,
      msgAlert: "O contrato esta sendo gerado, aguarde...",
      typeAlert: "alert-info",
    };
  },
  components: {
    AlertForm,
  },
  props: {
    showForm: Number,
    showView: String,
    beneficiaryList: Object,
    hideButton: Boolean,
  },
  methods: {
    setShowPdfView() {
      this.showPdfView = !this.showPdfView;
    },
    createTerminationTerm(form) {
      axios
        .post(`${process.env.VUE_APP_API_URL}/contract/create-termination-term`, form)
        .then((res) => {
          this.showPdfView = !this.showPdfView;
          console.log(res);

          this.msgAlert = "O beneficiário foi cancelado com sucesso.";
          this.typeAlert = "alert-success";
          this.showAlert = true;

          this.downloadAfterCreate(32);

          setTimeout(() => {
            this.showAlert = false;
          }, 4000);
        });
    },

    downloadAfterCreate(id) {
      axios
        .get(`${process.env.VUE_APP_API_URL}/contract/download/${id}`, {
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          responseType: "arraybuffer",
        })
        .then((res) => {
          const blob = new Blob([res.data], { type: "application/pdf" });
          const url = window.URL.createObjectURL(blob);
          var link = document.createElement("a");
          link.href = url;
          link.target = "_blank";
          link.setAttribute("download", "file.pdf");
          document.body.appendChild(link);
          link.click();
        });
    },
  },
  watch: {
    beneficiaryList: function () {
      const reversedbeneficiaryList = JSON.parse(
        JSON.stringify(this.beneficiaryList)
      );

      this.form.beneficiary_id = reversedbeneficiaryList.data.data[0].id;
    },
  },
};
</script>