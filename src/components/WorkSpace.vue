<template>
  <CardNav @set-show-form="updateShowForm" v-if="showForm == 'card-nav'" />
  <FormAssistencia
    @set-show-form="updateShowForm"
    v-if="showForm == 'form-assistencia' || showForm == 'form-assistencia-edit'"
    :showView="this.showForm"
    :beneficiaryId="this.beneficiaryId"
  />
  <ViewAssistencia
    @set-show-form="updateShowForm"
    v-if="showForm == 'view-assistencia'"
  />
  <PaymentAssistencia
    @set-show-form="updateShowForm"
    v-if="showForm == 'payment-assistencia'"
  />
  <HeartAssistencia
    @set-show-form="updateShowForm"
    v-if="showForm == 'heart-assistencia'"
  />
  <DashboardAssistencia
    @set-show-form="updateShowForm"
    v-if="showForm == 'dashboard-assistencia'"
  />

  <FormColaboradores
    @set-show-form="updateShowForm"
    v-if="
      showForm == 'form-colaboradores' || showForm == 'form-colaboradores-edit'
    "
    :showView="this.showForm"
    :colaboradorId="this.colaboradorId"
  />
  <ViewColaboradores
    @set-show-form="updateShowForm"
    v-if="showForm == 'view-colaboradores'"
  />
  <PaymentColaboradores
    @set-show-form="updateShowForm"
    v-if="showForm == 'payment-colaboradores'"
  />
  <HeartColaboradores
    @set-show-form="updateShowForm"
    v-if="showForm == 'heart-colaboradores'"
  />
  <DashboardColaboradores
    @set-show-form="updateShowForm"
    v-if="showForm == 'dashboard-colaboradores'"
  />

  <FormServicoFunerario
    @set-show-form="updateShowForm"
    v-if="showForm == 'form-servico-funerario' ||showForm == 'form-servico-funerario-edit'"
    :showView="this.showForm"
    :colaboradorId="this.colaboradorId"
  />
  <ViewServicoFunerario
    @set-show-form="updateShowForm"
    v-if="showForm == 'view-servico-funerario'"
  />
  <PaymentServicoFunerario
    @set-show-form="updateShowForm"
    v-if="showForm == 'payment-servico-funerario'"
  />
  <HeartServicoFunerario
    @set-show-form="updateShowForm"
    v-if="showForm == 'heart-servico-funerario'"
  />
  <DashboardServicoFunerario
    @set-show-form="updateShowForm"
    v-if="showForm == 'dashboard-servico-funerario'"
  />

  <FormTanatorio
    v-if="showForm == 'form-tanatorio' || showForm == 'form-tanatorio-edit'"
    :showView="this.showForm"
    :tanatorioId="this.tanatorioId"
  />
  <ViewTanatorio
    v-if="showForm == 'view-tanatorio'"
    @set-show-form="updateShowForm"
  />
   <DashboardTanatorio
    v-if="showForm == 'dashboard-tanatorio'"
  />
</template>

<script>
import CardNav from "./CardNav.vue";

import FormAssistencia from "./Assistencia/FormAssistencia.vue";
import ViewAssistencia from "./Assistencia/ViewAssistencia.vue";
import PaymentAssistencia from "./Assistencia/PaymentAssistencia.vue";
import HeartAssistencia from "./Assistencia/HeartAssistencia.vue";
import DashboardAssistencia from "./Assistencia/DashboardAssistencia.vue";

import FormColaboradores from "./Colaboradores/FormColaboradores.vue";
import ViewColaboradores from "./Colaboradores/ViewColaboradores.vue";
import PaymentColaboradores from "./Colaboradores/PaymentColaboradores.vue";
import HeartColaboradores from "./Colaboradores/HeartColaboradores.vue";
import DashboardColaboradores from "./Colaboradores/DashboardColaboradores.vue";

import FormServicoFunerario from "./ServicoFunerario/FormServicoFunerario.vue";
import ViewServicoFunerario from "./ServicoFunerario/ViewServicoFunerario.vue";
import PaymentServicoFunerario from "./ServicoFunerario/PaymentServicoFunerario.vue";
import HeartServicoFunerario from "./ServicoFunerario/HeartServicoFunerario.vue";
import DashboardServicoFunerario from "./ServicoFunerario/DashboardServicoFunerario.vue";

import FormTanatorio from "./Tanatorio/FormTanatorio.vue";
import ViewTanatorio from "./Tanatorio/ViewTanatorio.vue";
import DashboardTanatorio from "./Tanatorio/DashboardTanatorio.vue";

export default {
  name: "WorkSpace",
  components: {
    CardNav,
    FormAssistencia,
    ViewAssistencia,
    PaymentAssistencia,
    HeartAssistencia,
    DashboardAssistencia,
    FormColaboradores,
    ViewColaboradores,
    PaymentColaboradores,
    HeartColaboradores,
    DashboardColaboradores,
    FormServicoFunerario,
    ViewServicoFunerario,
    PaymentServicoFunerario,
    HeartServicoFunerario,
    DashboardServicoFunerario,
    FormTanatorio,
    ViewTanatorio,
    DashboardTanatorio
  },
  data() {
    return {
      showForm: "card-nav",
      beneficiaryId: null,
      colaboradorId: null,
      tanatorioId: null,
    };
  },
  methods: {
    updateShowForm(idForm) {
      if (Array.isArray(idForm)) {
        switch (idForm[0]) {
          case "form-assistencia-edit":
            this.beneficiaryId = idForm[1];
            break;
          case "form-colaboradores-edit":
            this.colaboradorId = idForm[1];
            break;
          case "form-tanatorio-edit":
            this.tanatorioId = idForm[1];
            break;
          case "form-servico-funerario-edit":
            this.tanatorioId = idForm[1];
            break;
        }
        this.showForm = idForm[0];
      } else {
        this.showForm = idForm;
      }
    },
  },
};
</script>