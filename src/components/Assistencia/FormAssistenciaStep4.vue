<template>
  <div v-if="showForm == 4" style="height: 660px; text-align: left">
    <label class="form-title m-3">Pagamento e Cobrança</label>

    <div class="row m-1">
      <div class="col">
        <span class="title-input-blue">R$ Valor Base do Plano*</span>
        <input
          type="text"
          v-model="form4.valor_base_plano"
          name="valor_base_plano"
          class="input-resp"
          v-money="money"
        />
      </div>
      <div class="col">
        <span class="title-input-blue">R$ Valores Adicionais*</span>
        <input
          type="text"
          v-model="form4.valor_adicional"
          name="valor_adicional"
          class="input-resp"
          v-money="money"
          @keypress="setValorFinal()"
        />
      </div>
      <div class="col">
        <span class="title-input-blue">R$ Valor de Desconto*</span>
        <input
          type="text"
          v-model="form4.valor_desconto"
          name="valor_desconto"
          class="input-resp"
          v-money="money"
          @keypress="setValorFinal()"
        />
      </div>
      <div class="col">
        <span class="title-input-blue">R$ Valor Final*</span>
        <input
          type="text"
          v-model="form4.valor_final"
          name="valor_final"
          class="input-resp"
          v-money="money"
        />
      </div>
    </div>

    <br /><br /><br /><br />

    <div class="row m-1">
      <div class="col m-2">
        <label class="title-input-blue">Endereço de Cobrança*</label>
        <select
          @change="setDadosContatos()"
          class="select-resp"
          v-model="form4.endereco_cobranca"
          name="endereco_cobranca"
        >
          <option>Igual ao Residencial</option>
          <option>Outro</option>
        </select>
      </div>
      <div class="col m-2">
        <span class="title-input-blue">CEP*</span>
        <input
          type="text"
          v-model="form4.cep_cobranca"
          @blur="buscarCep()"
          name="cep_cobranca"
          class="input-resp"
          v-mask="['#####-###']"
        />
      </div>
      <div class="col m-2">
        <span class="title-input-blue">Rua*</span>
        <input
          type="text"
          v-model="form4.rua_cobranca"
          name="rua_cobranca"
          class="input-resp"
        />
      </div>
      <div class="col m-2">
        <span class="title-input-blue">Nº*</span>
        <input
          type="text"
          v-model="form4.n_cobranca"
          name="n_cobranca"
          class="input-resp"
        />
      </div>
    </div>

    <div class="row m-1">
      <div class="col m-2">
        <span class="title-input-blue">Bairro*</span>
        <input
          type="text"
          v-model="form4.bairro_cobranca"
          name="bairro_cobranca"
          class="input-resp"
        />
      </div>
      <div class="col m-2">
        <span class="title-input-blue">Cidade*</span>
        <input
          type="text"
          v-model="form4.cidade_cobranca"
          name="cidade_cobranca"
          class="input-resp"
        />
      </div>

      <div class="col m-2">
        <span class="title-input-blue">UF*</span>
        <input
          type="text"
          v-model="form4.uf_cobranca"
          name="uf_cobranca"
          class="input-resp"
        />
      </div>

      <div class="col m-2">
        <span class="title-input-blue">Complemento</span>
        <input
          type="text"
          v-model="form4.complemento_cobranca"
          name="complemento_cobranca"
          class="input-resp"
        />
      </div>
      <div class="col m-2">
        <span class="title-input-blue">Zona*</span>
        <select
          class="select-resp"
          v-model="form4.zona_cobranca"
          name="zona_cobranca"
        >
          <option>Urbana</option>
          <option>Rural</option>
        </select>
      </div>
    </div>

    <div class="row m-1">
      <div class="col m-2">
        <span class="title-input-blue">Ponto de Referência</span>
        <input
          type="text"
          v-model="form4.ponto_referencia"
          name="ponto_referencia"
          class="input-resp-full"
        />
      </div>
    </div>
  </div>
</template>
    
<script>
import { VMoney } from "v-money";
import { mask } from "vue-the-mask";
import axios from "axios";

export default {
  name: "FormAssistenciaStep4",
  props: {
    showForm: Number,
    sendFormNow: Boolean,
    contractData: Object,
    showCurrentView: String,
    dadosContatos: Object,
    planoValor: String,
  },
  data() {
    return {
      form4: {
        valor_base_plano: "",
        valor_adicional: "",
        valor_desconto: "",
        valor_final: "",
        periodo: "",
        renovacao_automatica: "",
        endereco_cobranca: "",
        rua_cobranca: "",
        n_cobranca: "",
        bairro_cobranca: "",
        cep_cobranca: "",
        cidade_cobranca: "",
        uf_cobranca: "",
        complemento_cobranca: "",
        zona_cobranca: "",
        ponto_referencia: "",
      },
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
  watch: {
    planoValor: function (planoValor) {
      this.form4.valor_base_plano = planoValor;
      this.form4.valor_final = planoValor;
    },
    dadosContatos: function (dadosContatos) {
      const reversedDadosContatos = JSON.parse(JSON.stringify(dadosContatos));

      this.form4.rua_cobranca = reversedDadosContatos[0];
      this.form4.n_cobranca = reversedDadosContatos[1];
      this.form4.bairro_cobranca = reversedDadosContatos[2];
      this.form4.cep_cobranca = reversedDadosContatos[3];
      this.form4.cidade_cobranca = reversedDadosContatos[4];
      this.form4.uf_cobranca = reversedDadosContatos[5];
      this.form4.complemento_cobranca = reversedDadosContatos[6];
      this.form4.zona_cobranca = reversedDadosContatos[7];
      this.form4.ponto_referencia = reversedDadosContatos[8];
    },

    sendFormNow: function () {
      this.$emit("set-data-form", this.form4);
    },
    contractData: function () {
      if (this.showCurrentView == "form-assistencia-edit") {

console.log('this.contractData');
console.log(this.contractData);

        const reversedContractData = JSON.parse(JSON.stringify(this.contractData));

        // console.log('reversedContractData');
        // console.log(reversedContractData);

        this.form4.valor_base_plano = reversedContractData.data.data[0].valor_base_plano;
        this.form4.periodo = reversedContractData.data.data[0].periodo;
        this.form4.renovacao_automatica = reversedContractData.data.data[0].renovacao_automatica;
        this.form4.forma_pagamento = reversedContractData.data.data[0].forma_pagamento;
        this.form4.endereco_cobranca = reversedContractData.data.data[0].endereco_cobranca;
        this.form4.rua_cobranca = reversedContractData.data.data[0].rua_cobranca;
        this.form4.n_cobranca = reversedContractData.data.data[0].n_cobranca;
        this.form4.bairro_cobranca = reversedContractData.data.data[0].bairro_cobranca;
        this.form4.cep_cobranca = reversedContractData.data.data[0].cep_cobranca;
        this.form4.cidade_cobranca = reversedContractData.data.data[0].cidade_cobranca;
        this.form4.uf_cobranca = reversedContractData.data.data[0].uf_cobranca;
        this.form4.complemento_cobranca = reversedContractData.data.data[0].complemento_cobranca;
        this.form4.zona_cobranca = reversedContractData.data.data[0].zona_cobranca;
        this.form4.ponto_referencia = reversedContractData.data.data[0].ponto_referencia;
      }
    },
  },
  methods: {
    buscarCep() {
      axios
        .get("https://viacep.com.br/ws/" + this.form4.cep_cobranca + "/json/")
        .then((res) => {
          this.form4.uf_cobranca = res.data.uf;
          this.form4.cidade_cobranca = res.data.localidade;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    setDadosContatos() {
      this.$emit("get-dados-contatos");
    },
    setValorFinal() {
      // console.log('IIIIIIIIIIIIII');
      console.log(Number(this.form4.valor_adicional.replace("R$ ", "")));

      // console.log(this.form4.valor_desconto);
      // this.form4.valor_final = this.form4.valor_base_plano + this.form4.valor_adicional - this.form4.valor_desconto
      // console.log(this.form4.valor_final)

      // this.form4.valor_final = this.form4.valor_base_plano
    },
  },
  directives: { money: VMoney, mask },
};
</script>
