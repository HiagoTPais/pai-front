<template>
  <div v-if="showForm == 4">
    <label class="form-title m-3">Dados Acesso</label>
    <div class="d-flex">
      <div>
        <div class="row">
          <div class="col-3">
            <div class="m5">
              <span class="title-input-blue">E-mail/login</span>

              <input
                type="text"
                class="input-resp"
                v-model="form4.email"
                name="email"
              />
            </div>
          </div>

          <div class="col-3">
            <div class="m5">
              <span class="title-input-blue">Senha</span>

              <input
                type="text"
                class="input-resp"
                v-model="form4.password"
                name="password"
              />
            </div>
          </div>
        </div>

        <label class="form-title m-3">Permissões por Módulo</label>

        <div class="d-flex">
          <div class="card-container" @click="showPermissao(1)">
            <div
              class="card-nav"
              style="border: 1px #21509f solid; color: #21509f"
            >
              <img
                class="family"
                :src="require('../../assets/img/family.png')"
              />
              <p class="card-nav-title">Beneficiarios</p>
            </div>
          </div>

          <div class="card-container" @click="showPermissao(2)">
            <div
              class="card-nav"
              style="border: 1px #21509f solid; color: #21509f"
            >
              <img
                class="family"
                :src="require('../../assets/img/colaboradores.png')"
              />
              <p class="card-nav-title">Colaboradores</p>
            </div>
          </div>
        </div>
      </div>
      <PlanosAssistencia v-if="show == 1" />
      <ColaboradoresCia v-if="show == 2" />
    </div>
  </div>
</template>

<script>
import ColaboradoresCia from "./Permissoes/ColaboradoresCia.vue";
import PlanosAssistencia from "./Permissoes/PlanosAssistencia.vue";

export default {
  name: "FormColaboradoresStep4",
  props: {
    sendFormNow: Boolean,
    showForm: Number,
    showView: String,
    beneficiaryId: Number,
  },
  data() {
    return {
      form4: {
        email: "",
        password: "",
      },
      show: null,
    };
  },
  components: {
    ColaboradoresCia,
    PlanosAssistencia,
  },
  methods: {
    showPermissao(el) {
      this.show = el;
    },
  },
  watch: {
    sendFormNow: function () {
      this.$emit("set-data-form", this.form4);
    },
  },
};
</script>
