<template>
  <div v-if="showForm == 1">
    <label class="form-title m-3">Tipo de atendimento</label>

    <div class="d-flex justify-content-between m1">
      <div class="checkbox-wrapper-13">
        <input
          id="c1-13"
          type="checkbox"
          @change="showFilterForm('tem_particular')"
          name="particular"
        />
        <label for="c1-13">Particular</label>
      </div>

      <div class="checkbox-wrapper-13">
        <input
          id="c1-13"
          type="checkbox"
          @change="showFilterForm('tem_seguradora')"
          name="seguradora"
        />
        <label for="c1-13">Seguradora</label>
      </div>

      <div class="checkbox-wrapper-13">
        <input
          id="c1-13"
          type="checkbox"
          @change="showFilterForm('tem_pefeitura')"
          name="prefeitura"
        />
        <label for="c1-13">Prefeitura</label>
      </div>

      <div class="checkbox-wrapper-13">
        <input id="c1-13" type="checkbox" v-model="plano" name="plano" />
        <label for="c1-13">Plano</label>
      </div>
    </div>

    <div class="row" v-if="tem_particular">
      <div class="col">
        <div class="m5">
          <span class="title-input-blue">Nome Completo</span>

          <input
            type="text"
            v-model="form1.nome_completo"
            class="input-resp"
            name="nome_completo"
          />
        </div>
      </div>

      <div class="col">
        <div class="m5">
          <span class="title-input-blue">CPF</span>

          <input
            type="text"
            v-model="form1.cpf"
            class="input-resp"
            name="cpf"
            v-mask="['###.###.###-##']"
          />
        </div>
      </div>
    </div>

    <div class="row" v-if="tem_seguradora || tem_pefeitura">
      <div class="col">
        <div class="m5">
          <span class="title-input-blue">Seguradora</span>

          <input
            type="text"
            v-model="form1.seguradora"
            class="input-resp"
            name="seguradora"
          />
        </div>
      </div>

      <div class="col">
        <div class="m5">
          <span class="title-input-blue">CNPJ</span>

          <input
            type="text"
            v-model="form1.cnpj"
            class="input-resp"
            name="cnpj"
          />
        </div>
      </div>

      <div class="col">
        <div class="m5">
          <span class="title-input-blue">Telefone</span>

          <input
            type="text"
            v-model="form1.telefone"
            class="input-resp"
            name="telefone"
          />
        </div>
      </div>

      <div class="col">
        <div class="m5">
          <span class="title-input-blue">Email</span>

          <input
            type="text"
            v-model="form1.email"
            class="input-resp"
            name="email"
          />
        </div>
      </div>

      <div class="col">
        <div class="m5">
          <span class="title-input-blue">Solicitante</span>

          <input
            type="text"
            v-model="form1.solicitante"
            class="input-resp"
            name="solicitante"
          />
        </div>
      </div>
    </div>

    <div class="row" v-if="tem_seguradora || tem_pefeitura || tem_particular">
      <div class="col">
        <button
          type="button"
          @click="searchBeneficiarios()"
          class="btn btn-blue"
        >
          Buscar
        </button>
      </div>
    </div>

    <br />
    <br />
    <br />

    <div class="row">
      <div class="col">
        <div class="form-input-assistencia">
          <div class="m-3" style="height: 300px">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nome</th>
                  <th>Data de Nascimento</th>
                  <th>Telefone</th>
                  <th>CPF</th>
                  <th>RG</th>
                  <th>Responsavel</th>
                  <th>Falecido</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(item, index) in lista_beneficiarios"
                  :key="index"
                  :id="`main-row-${index}`"
                  class="view-tr"
                >
                  <td class="pt24">{{ index + 1 }}</td>
                  <td class="pt24">{{ item.nome_completo }}</td>
                  <td class="pt24">{{ item.data_nascimento }}</td>
                  <td class="pt24">{{ item.whatsapp_1 }}</td>
                  <td class="pt24">{{ item.cpf }}</td>
                  <td class="pt24">{{ item.rg }}</td>
                  <td>
                    <div class="checkbox-wrapper-13">
                      <input
                        id="c1-13"
                        type="checkbox"
                        @click="selectResponsavel(item)"
                      />
                    </div>
                  </td>
                  <td>
                    <div class="checkbox-wrapper-13">
                      <input
                        id="c1-13"
                        type="checkbox"
                        @click="selectFalecido(item)"
                      />
                    </div>
                  </td>
                </tr>
              </tbody>
              <br />
              <tbody>
                <tr
                  v-for="(item, index) in lista_beneficiarios_dependentes"
                  :key="index"
                  :id="`main-row-${index}`"
                  class="view-tr"
                >
                  <td class="pt24">{{ index + 1 }}</td>
                  <td class="pt24">{{ item.nome_completo_dependente }}</td>
                  <td class="pt24">{{ item.nascimento_dependente }}</td>
                  <td class="pt24">{{ item.whatsapp_dependente }}</td>
                  <td class="pt24">{{ item.cpf_dependente }}</td>
                  <td class="pt24"></td>
                  <td>
                    <div class="checkbox-wrapper-13">
                      <input
                        id="c1-13"
                        type="checkbox"
                        @click="selectResponsavel(item)"
                      />
                    </div>
                  </td>
                  <td>
                    <div class="checkbox-wrapper-13">
                      <input
                        id="c1-13"
                        type="checkbox"
                        @click="selectFalecido(item)"
                      />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mask } from "vue-the-mask";

export default {
  name: "FormServicoFunerarioStep1",
  props: {
    showForm: Number,
    sendFormNow: Boolean,
    showView: String,
    colaboradorLista: Object,
  },
  methods: {
    searchBeneficiarios() {
      axios
        .get(`${process.env.VUE_APP_API_URL}/beneficiarios/search`, {
          params: {
            nome_completo: this.form1.nome_completo,
            cpf: this.form1.cpf,
            seguradora: this.form1.seguradora,
            cnpj: this.form1.cnpj,
            telefone: this.form1.telefone,
            email: this.form1.email,
            solicitante: this.form1.solicitante,
          },
        })
        .then((res) => {
          // console.log(res);
          this.lista_beneficiarios = res.data;
          this.lista_beneficiarios_dependentes = res.data[0].dependentes;
          console.log(this.lista_beneficiarios_dependentes);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    selectResponsavel(item) {
      this.$emit("select-responsavel", item);
    },

    selectFalecido(item) {
      this.$emit("select-falecido", item);
    },

    showFilterForm(filter) {
      if (filter == "tem_particular") {
        this.tem_particular = !this.tem_particular;
      }

      if (filter == "tem_seguradora") {
        this.tem_seguradora = !this.tem_seguradora;
      }

      if (filter == "tem_pefeitura") {
        this.tem_pefeitura = !this.tem_pefeitura;
      }
    },
  },
  data() {
    return {
      lista_beneficiarios: [],
      lista_beneficiarios_dependentes: [],
      tem_particular: false,
      tem_seguradora: false,
      tem_pefeitura: false,
      form1: {
        nome_completo: "Josefa Maria dos Montes Fernandes",
        cpf: "",
        seguradora: "",
        cnpj: "",
        telefone: "",
        email: "",
        solicitante: "",
      },
    };
  },
  directives: { mask },
  watch: {
    sendFormNow: function () {
      this.$emit("set-data-form", this.form1);
    },
  },
};

// Josefa Maria dos Montes Fernandes
</script>
