<template>
  <div v-if="showForm == 1" style="height: 660px; text-align: left">
    <label class="form-title m-3">
      Dados Civis do Contratante Titular {{ this.form1.protocolo_id }}
    </label>

    <div class="row">
      <div class="col-3">
        <div class="m5">
          <span class="title-input-blue">Nome Completo Contratante*</span>

          <input
            type="text"
            class="input-resp"
            v-model="form1.nome_completo"
            name="nome_completo"
          />
        </div>
      </div>

      <div class="col">
        <div class="m5">
          <span class="title-input-blue">Data de Nascimento*</span>

          <input
            type="date"
            class="input-resp"
            v-model="form1.data_nascimento"
            name="data_nascimento"
          />
        </div>
      </div>

      <div class="col">
        <div class="m5">
          <span class="title-input-blue">Nacionalidade*</span>

          <input
            type="text"
            class="input-resp"
            v-model="form1.nacionalidade"
            name="nacionalidade"
          />
        </div>
      </div>

      <div class="col">
        <div class="m5">
          <span class="title-input-blue">RG</span>

          <input
            type="text"
            class="input-resp"
            v-model="form1.rg"
            name="rg"
            v-mask="['##.###.###-##']"
          />
        </div>
      </div>
      <div class="col">
        <div class="m5">
          <span class="title-input-blue">Status do Contratante</span>
          <select
            v-model="form1.status"
            name="status"
            class="select-resp"
            @change="mudarStatusContratante()"
          >
            <option>ATIVO</option>
            <option>A SUSPENDER</option>
            <option>RECÉM SUSPENSO</option>
            <option>SUSPENSO</option>
            <option>A CANCELAR</option>
            <option>CANCELADO</option>
            <option>A RENOVAR</option>
          </select>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <div class="m5">
          <span class="title-input-blue">Sexo</span>
          <select v-model="form1.sexo" name="sexo" class="select-resp">
            <option>Masculino</option>
            <option>Feminino</option>
          </select>
        </div>
      </div>
      <div class="col">
        <OrgaoExpedicao />
      </div>

      <div class="col">
        <div class="m5">
          <span class="title-input-blue">Data de Expedição*</span>

          <input
            type="date"
            class="input-resp"
            v-model="form1.data_expedicao"
            name="data_expedicao"
          />
        </div>
      </div>

      <div class="col">
        <div class="m5">
          <span class="title-input-blue">CPF*</span>

          <input
            type="text"
            class="input-resp"
            v-model="form1.cpf"
            name="cpf"
            v-mask="['###.###.###-##']"
          />
        </div>
      </div>

      <div class="col">
        <div class="m5">
          <span class="title-input-blue">Estado Civil*</span>
          <select
            v-model="form1.estado_civil"
            name="estado_civil"
            class="select-resp"
          >
            <option>Solteiro</option>
            <option>Casado</option>
            <option>Divorciado</option>
            <option>Viúvo</option>
            <option>Separado judicialmente</option>
          </select>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <div class="m5">
          <span class="title-input-blue">Grau de Escolaridade</span>

          <select
            v-model="form1.grau_escolaridade"
            name="grau_escolaridade"
            class="select-resp"
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
            class="input-resp"
            v-model="form1.ocupaçao"
            name="ocupaçao"
          />
        </div>
      </div>

      <div class="col">
        <div class="m5">
          <span class="title-input-blue">Religião</span>
          <input
            type="text"
            class="input-resp"
            v-model="form1.religiao"
            name="religiao"
          />
        </div>
      </div>

      <div class="col">
        <div class="m5">
          <span class="title-input-blue">Apelido</span>
          <input
            type="text"
            class="input-resp"
            v-model="form1.apelido"
            name="apelido"
          />
        </div>
      </div>
    </div>

    <label class="form-title m-3">Dados de Contato</label>

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
            class="input-resp"
            v-model="form1.rua"
            name="rua"
          />
        </div>
      </div>

      <div class="col">
        <div class="m5">
          <span class="title-input-blue">Nº*</span>
          <input
            type="text"
            class="input-resp"
            v-model="form1.numero"
            name="numero"
          />
        </div>
      </div>

      <div class="col">
        <div class="m5">
          <span class="title-input-blue">Bairro*</span>
          <input
            type="text"
            class="input-resp"
            v-model="form1.bairro"
            name="bairro"
          />
        </div>
      </div>

      <div class="col">
        <div class="m5">
          <span class="title-input-blue">Cidade*</span>
          <input
            type="text"
            class="input-resp"
            v-model="form1.cidade"
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

          <select v-model="form1.zona" class="select-resp" name="zona">
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
import { mask } from "vue-the-mask";
import axios from "axios";
import OrgaoExpedicao from "../OrgaoExpedicao";

export default {
  name: "FormAssistenciaStep1",
  data() {
    return {
      dadosContatos: "",
      form1: {
        protocolo_id: "",
        nome_completo: "",
        data_nascimento: "",
        nacionalidade: "Brasileiro",
        rg: "",
        sexo: "",
        orgao_expedicao: "SSP – Secretaria de Segurança Pública",
        data_expedicao: "",
        cpf: "",
        estado_civil: "",
        grau_escolaridade: "",
        ocupaçao: "",
        religiao: "",
        apelido: "",
        rua: "",
        numero: "",
        bairro: "",
        cep: "",
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
  props: {
    showForm: Number,
    sendFormNow: Boolean,
    beneficiaryList: Object,
    showCurrentView: String,
    sendDadosContatos: Boolean,
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
    mudarStatusContratante() {
      let status = this.form1.status;
      axios
        .post(`${process.env.VUE_APP_API_URL}/contract/store`, { status })
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  watch: {
    sendDadosContatos: function () {
      this.$emit("set-dados-contatos", [
        this.form1.rua,
        this.form1.numero,
        this.form1.bairro,
        this.form1.cep,
        this.form1.cidade,
        this.form1.uf,
        this.form1.complemento,
        this.form1.zona,
        this.form1.ponto_referencia,
      ]);
    },

    sendFormNow: function () {
      this.$emit("set-data-form", this.form1);
    },

    beneficiaryList: function () {
      if (this.showCurrentView == "form-assistencia-edit") {
        const reversedbeneficiaryList = JSON.parse(JSON.stringify(this.beneficiaryList));

        this.form1.protocolo_id = reversedbeneficiaryList.data[0].protocolo_id;
        this.form1.nome_completo = reversedbeneficiaryList.data[0].nome_completo;
        this.form1.data_nascimento = reversedbeneficiaryList.data[0].data_nascimento;
        this.form1.nacionalidade = reversedbeneficiaryList.data[0].nacionalidade;
        this.form1.rg = reversedbeneficiaryList.data[0].rg;
        this.form1.orgao_expedicao = reversedbeneficiaryList.data[0].orgao_expedicao;
        this.form1.data_expedicao = reversedbeneficiaryList.data[0].data_expedicao;
        this.form1.cpf = reversedbeneficiaryList.data[0].cpf;
        this.form1.estado_civil = reversedbeneficiaryList.data[0].estado_civil;
        this.form1.grau_escolaridade = reversedbeneficiaryList.data[0].grau_escolaridade;
        this.form1.ocupaçao = reversedbeneficiaryList.data[0].ocupaçao;
        this.form1.religiao = reversedbeneficiaryList.data[0].religiao;
        this.form1.apelido = reversedbeneficiaryList.data[0].apelido;
        this.form1.rua = reversedbeneficiaryList.data[0].rua;
        this.form1.numero = reversedbeneficiaryList.data[0].numero;
        this.form1.bairro = reversedbeneficiaryList.data[0].bairro;
        this.form1.cep = reversedbeneficiaryList.data[0].cep;
        this.form1.cidade = reversedbeneficiaryList.data[0].cidade;
        this.form1.uf = reversedbeneficiaryList.data[0].uf;
        this.form1.complemento = reversedbeneficiaryList.data[0].complemento;
        this.form1.ponto_referencia = reversedbeneficiaryList.data[0].ponto_referencia;
        this.form1.zona = reversedbeneficiaryList.data[0].zona;
        this.form1.whatsapp_1_num = reversedbeneficiaryList.data[0].whatsapp_1_num;
        this.form1.whatsapp_1 = reversedbeneficiaryList.data[0].whatsapp_1;
        this.form1.whatsapp_2_num = reversedbeneficiaryList.data[0].whatsapp_2_num;
        this.form1.whatsapp_2 = reversedbeneficiaryList.data[0].whatsapp_2;
        this.form1.status = reversedbeneficiaryList.data[0].status;
      }
    },
  },
};
</script>