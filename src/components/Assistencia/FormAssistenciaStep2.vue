<template>
  <div v-if="showForm == 2" style="height: 660px; text-align: left">
    <div class="row">
      <label class="form-title m-3">Planos para Beneficiarios</label>
    </div>

    <div class="row">
      <div class="col">
        <div class="m5">
          <span class="title-input-blue">Selecione o Plano*</span>
          <select
            v-model="form2.selecione_plano"
            name="selecione_plano"
            class="select-resp"
          >
            <option
              v-for="(item, i) in plansList.value"
              :key="i"
              :value="item.id"
              @click="fillSelectedPlan(item.id)"
            >
              {{ item.nome }}
            </option>
          </select>
        </div>
      </div>

      <div class="col">
        <div class="m5">
          <span class="title-input-blue">Nº Pessoas Maximo*</span>
          <input
            disabled
            @blur="sendNMax()"
            type="text"
            v-model="form2.n_max"
            name="n_max"
            class="input-resp"
          />
        </div>
      </div>

      <div class="col">
        <div class="m5">
          <span class="title-input-blue">Nº Pessoas Minimo*</span>
          <input
            disabled
            type="text"
            v-model="form2.n_min"
            name="n_min"
            class="input-resp"
          />
        </div>
      </div>

      <div class="col">
        <div class="m5">
          <span class="title-input-blue">R$ Valor</span>

          <input
            disabled
            type="text"
            v-model="form2.plano_valor"
            name="plano_valor"
            class="input-resp"
            v-money="money"
          />
        </div>
      </div>

      <div class="col">
        <div class="m5">
          <span class="title-input-blue">R$ Taxa de Adesão</span>
          <input
            disabled
            type="text"
            v-model="form2.taxa_adesao"
            name="taxa_adesao"
            class="input-resp"
            v-money="money"
          />
        </div>
      </div>

      <div class="col">
        <div class="m5">
          <label class="title-input-blue">Consultor</label>

          <select v-model="form2.usuario" name="usuario" class="select-resp">
            <option>Usuário</option>
          </select>
        </div>
      </div>
    </div>

    <br>

    <div class="row">
      <div class="col">
        <span class="title-input-blue">Descrição do Plano</span>

        <textarea
          disabled
          v-model="form2.observacoes"
          name="observacoes"
          class="textarea-resp"
          rows="5"
        ></textarea>
      </div>
    </div>

    <br>

    <div class="row">
      <BeneficiosAdicionais :valuesBen="form2.beneficio_adicional" />

      <div class="col">
        <label class="form-title" style="margin-bottom: 5%">Observações</label>

        <div class="row">
          <div class="col">
            <label class="title-input-blue">Portabilidade? *</label>
            <select
              v-model="form2.portabilidade"
              name="portabilidade"
              style="width: 100%"
              class="select-resp"
            >
              <option>Sim</option>
              <option>Não</option>
            </select>
          </div>

          <div class="col">
            <label class="title-input-blue">Empresa? *</label>
            <input
              disabled
              type="text"
              v-model="form2.empresa"
              name="empresa"
              class="input-resp"
            />
          </div>
        </div>
        <br />
        <div class="mt5">
          <textarea
            class="textarea-resp"
            v-model="form2.observacao_empresa"
            cols="61"
            rows="5"
          ></textarea>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mask } from "vue-the-mask";
import { VMoney } from "v-money";
import axios from "axios";
import { ref } from "vue";
import BeneficiosAdicionais from "../BeneficiosAdicionais";

export default {
  name: "FormAssistenciaStep2",
  props: {
    showForm: Number,
    sendFormNow: Boolean,
    showCurrentView: String,
    contractData: Object,
  },
  components: {
    BeneficiosAdicionais,
  },
  data() {
    return {
      form2: {
        selecione_plano: "",
        n_max: "",
        n_min: "",
        plano_valor: "",
        taxa_adesao: "",
        usuario: "",
        observacoes: "",
        observacao_empresa: "",
        beneficio_adicional: [],
        portabilidade: "",
        empresa: "",
      },
      plano_atual: "",
      plansList: ref([]),
      money: {
        decimal: ",",
        thousands: ".",
        prefix: "R$ ",
        suffix: " ",
        precision: 2,
        masked: false,
      },
    };
  },
  methods: {
    fillSelectedPlan(plan_id) {
      axios
        .get(`${process.env.VUE_APP_API_URL}/planos/get-plan/${plan_id}`)
        .then((res) => {
          this.form2.selecione_plano = res.data[0].nome;
          this.form2.n_max = res.data[0].n_max;
          this.form2.n_min = res.data[0].n_min;
          this.form2.plano_valor = res.data[0].valor_plano_mes;
          this.form2.taxa_adesao = res.data[0].taxa_adesao;
          this.form2.usuario = res.data[0].usuario;
          this.form2.observacoes = res.data[0].descricao;
          this.form2.portabilidade = res.data[0].portabilidade;
          this.form2.empresa = res.data[0].empresa;

          this.$emit("set-valor-base-plano", this.form2.plano_valor);
        })
        .catch((error) => {
          console.log(error);
        });

      axios.get(`${process.env.VUE_APP_API_URL}/planos/get-additional-benefits/${plan_id}`)
        .then((res) => {
          this.form2.beneficio_adicional = res.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    sendNMax() {
      this.$emit("send-n-max", this.form2.n_max);
    },

    setPlansList() {
      axios
        .get(`${process.env.VUE_APP_API_URL}/planos/get-all`)
        .then((res) => {
          this.plansList.value = res.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },

  beforeMount() {
    this.setPlansList();
  },

  watch: {
    sendFormNow: function () {
      this.$emit("set-data-form", this.form2);
    },

    contractData: function () {
      if (this.showCurrentView == "form-assistencia-edit") {
        this.plano_atual = JSON.parse(JSON.stringify(this.contractData.data.data[0].selecione_plano));

        this.fillSelectedPlan(this.plano_atual);
      }
    },
  },
  
  directives: { mask, money: VMoney },
};
</script>