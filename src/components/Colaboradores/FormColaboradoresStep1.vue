<template>
  <div v-if="showForm == 1">
    <label class="form-title m-3"
      >Dados Civis do Colaborador Titular {{}}</label
    >

    <div class="row mb2">
      <div class="col-3">
        <span class="title-input-blue">Nome Completo</span>

        <input
          type="text"
          v-model="form1.nome_completo"
          class="input-resp"
          name="nome_completo"
        />
      </div>

      <div class="col">
        <span class="title-input-blue">Data de Nascimento</span>

        <input
          type="date"
          v-model="form1.data_nascimento"
          class="input-resp"
          name="data_nascimento"
        />
      </div>

      <div class="col">
        <span class="title-input-blue">Nacionalidade</span>

        <input
          type="text"
          v-model="form1.nacionalidade"
          class="input-resp"
          name="nacionalidade"
        />
      </div>

      <div class="col">
        <span class="title-input-blue">RG</span>

        <input
          type="text"
          v-model="form1.rg"
          class="input-resp"
          name="rg"
          v-mask="['##.###.###-##']"
        />
      </div>

      <div class="col">
        <span class="title-input-blue">Sexo</span>
        <select v-model="form1.sexo" name="sexo" class="select-resp">
          <option>Masculino</option>
          <option>Feminino</option>
        </select>
      </div>

      <div class="col">
        <OrgaoExpedicao />
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="m5">
          <span class="title-input-blue">Data de Expedição</span>

          <input
            type="date"
            v-model="form1.data_expedicao"
            class="input-resp"
            name="data_expedicao"
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

      <div class="col">
        <div class="m5">
          <span class="title-input-blue">Estado Civil</span>

          <select
            class="select-resp"
            v-model="form1.estado_civil"
            name="estado_civil"
          >
            <option>Solteiro</option>
            <option>Casado</option>
            <option>Divorciado</option>
            <option>Viúvo</option>
            <option>Separado judicialmente</option>
          </select>
        </div>
      </div>

      <div class="col">
        <div class="m5">
          <span class="title-input-blue">Grau de Escolaridade</span>

          <select
            class="select-resp"
            v-model="form1.grau_escolaridade"
            name="grau_escolaridade"
          >
            <option>Educação infantil</option>
            <option>Fundamental</option>
            <option>Médio</option>
            <option>Superior</option>
            <option>Pós-graduação</option>
            <option>Mestrado</option>
            <option>Doutorado</option>
            <option>Escola</option>
          </select>
        </div>
      </div>

      <div class="col">
        <div class="m5">
          <span class="title-input-blue">Ocupação</span>

          <input
            type="text"
            v-model="form1.ocupacao"
            class="input-resp"
            name="ocupacao"
          />
        </div>
      </div>

      <div class="col">
        <div class="m5">
          <span class="title-input-blue">Religião</span>

          <input
            type="text"
            v-model="form1.religiao"
            class="input-resp"
            name="religiao"
          />
        </div>
      </div>
    </div>

    <label class="form-title m-3">Endereço</label>

    <div class="row">
      <div class="col">
        <div class="m5">
          <span class="title-input-blue">CEP*</span>
          <input
            type="text"
            class="input-resp"
            v-model="form1.cep"
            name="cep"
            @blur="buscarCep()"
            v-mask="['#####-###']"
          />
        </div>
      </div>

      <div class="col">
        <div class="m5">
          <span class="title-input-blue">Rua*</span>
          <input
            type="text"
            v-model="form1.rua"
            class="input-resp"
            name="rua"
          />
        </div>
      </div>

      <div class="col">
        <div class="m5">
          <span class="title-input-blue">Nº*</span>
          <input
            type="text"
            v-model="form1.numero"
            class="input-resp"
            name="numero"
          />
        </div>
      </div>

      <div class="col">
        <div class="m5">
          <span class="title-input-blue">Bairro*</span>
          <input
            type="text"
            v-model="form1.bairro"
            class="input-resp"
            name="bairro"
          />
        </div>
      </div>

      <div class="col">
        <div class="m5">
          <span class="title-input-blue">Cidade*</span>
          <input
            type="text"
            v-model="form1.cidade"
            class="input-resp"
            name="cidade"
          />
        </div>
      </div>

      <div class="col">
        <div class="m5">
          <span class="title-input-blue">UF*</span>
          <input
            type="text"
            class="input-resp"
            v-model="form1.uf"
            name="uf"
            maxlength="uf"
          />
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <div class="m5">
          <span class="title-input-blue">Complemento</span>
          <input
            type="text"
            class="input-resp"
            v-model="form1.complemento"
            name="complemento"
          />
        </div>
      </div>

      <div class="col">
        <div class="m5">
          <span class="title-input-blue">Ponto de Referência</span>
          <input
            type="text"
            class="input-resp"
            v-model="form1.ponto_referencia"
            name="ponto_referencia"
          />
        </div>
      </div>

      <div class="col">
        <div class="m5">
          <span class="title-input-blue">Zona</span>

          <select v-model="form1.zona" name="zona" class="select-resp">
            <option>Urbana</option>
            <option>Rural</option>
          </select>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <div class="m5">
          <span class="title-input-blue">Telefone 1</span>
          <input
            type="text"
            class="input-resp"
            v-model="form1.whatsapp_1_num"
            name="whatsapp_1_num"
            placeholder="(00) 00000-0000"
            v-mask="['(##) #####-####']"
          />
        </div>
      </div>

      <div class="col">
        <div class="m5">
          <span class="title-input-blue">WhatsApp?</span>
          <select
            v-model="form1.whatsapp_1"
            name="whatsapp_1"
            class="select-resp"
          >
            <option>Sim</option>
            <option>Não</option>
          </select>
        </div>
      </div>

      <div class="col">
        <div class="m5">
          <span class="title-input-blue">Telefone 2</span>
          <input
            type="text"
            class="input-resp"
            v-model="form1.whatsapp_2_num"
            name="whatsapp_2_num"
            placeholder="(00) 00000-0000"
            v-mask="['(##) #####-####']"
          />
        </div>
      </div>

      <div class="col">
        <div class="m5">
          <span class="title-input-blue">WhatsApp?</span>

          <select
            v-model="form1.whatsapp_2"
            name="whatsapp_2"
            class="select-resp"
          >
            <option>Sim</option>
            <option>Não</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mask } from "vue-the-mask";
import OrgaoExpedicao from "../OrgaoExpedicao";

export default {
  name: "FormColaboradoresStep1",
  props: {
    showForm: Number,
    sendFormNow: Boolean,
    showView: String,
    colaboradorLista: Object,
  },
  methods: {
    buscarCep() {
      axios
        .get("https://viacep.com.br/ws/" + this.form1.cep + "/json/")
        .then((res) => {
          this.form1.uf = res.data.uf;
          this.form1.cidade = res.data.localidade;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  data() {
    return {
      form1: {
        nome_completo: "",
        data_nascimento: "",
        nacionalidade: "Brasileiro",
        sexo: "",
        rg: "",
        orgao_expedicao: "SSP – Secretaria de Segurança Pública",
        data_expedicao: "",
        cpf: "",
        estado_civil: "",
        grau_escolaridade: "",
        ocupacao: "",
        religiao: "",
        cep: "",
        rua: "",
        numero: "",
        bairro: "",
        cidade: "",
        uf: "",
        complemento: "",
        ponto_referencia: "",
        zona: "",
        whatsapp_1_num: "",
        whatsapp_1: "",
        whatsapp_2_num: "",
        whatsapp_2: "",
      },
    };
  },
  components: {
    OrgaoExpedicao,
  },
  directives: { mask },
  watch: {
    sendFormNow: function () {
      this.$emit("set-data-form", this.form1);
    },
    colaboradorLista: function () {
      const reversedColaboradorLista = JSON.parse(
        JSON.stringify(this.colaboradorLista)
      );

      this.form1.nome_completo = reversedColaboradorLista.data[0].nome_completo;
      this.form1.data_nascimento =
        reversedColaboradorLista.data[0].data_nascimento;
      this.form1.nacionalidade = reversedColaboradorLista.data[0].nacionalidade;
      this.form1.rg = reversedColaboradorLista.data[0].rg;
      this.form1.orgao_expedicao =
        reversedColaboradorLista.data[0].orgao_expedicao;
      this.form1.data_expedicao =
        reversedColaboradorLista.data[0].data_expedicao;
      this.form1.cpf = reversedColaboradorLista.data[0].cpf;
      this.form1.estado_civil = reversedColaboradorLista.data[0].estado_civil;
      this.form1.grau_escolaridade =
        reversedColaboradorLista.data[0].grau_escolaridade;
      this.form1.ocupacao = reversedColaboradorLista.data[0].ocupacao;
      this.form1.religiao = reversedColaboradorLista.data[0].religiao;
      this.form1.cep = reversedColaboradorLista.data[0].cep;
      this.form1.rua = reversedColaboradorLista.data[0].rua;
      this.form1.numero = reversedColaboradorLista.data[0].numero;
      this.form1.bairro = reversedColaboradorLista.data[0].bairro;
      this.form1.cidade = reversedColaboradorLista.data[0].cidade;
      this.form1.uf = reversedColaboradorLista.data[0].uf;
      this.form1.complemento = reversedColaboradorLista.data[0].complemento;
      this.form1.ponto_referencia =
        reversedColaboradorLista.data[0].ponto_referencia;
      this.form1.zona = reversedColaboradorLista.data[0].zona;
      this.form1.whatsapp_1_num =
        reversedColaboradorLista.data[0].whatsapp_1_num;
      this.form1.whatsapp_1 = reversedColaboradorLista.data[0].whatsapp_1;
      this.form1.whatsapp_2_num =
        reversedColaboradorLista.data[0].whatsapp_2_num;
      this.form1.whatsapp_2 = reversedColaboradorLista.data[0].whatsapp_2;
    },
  },
};
</script>
