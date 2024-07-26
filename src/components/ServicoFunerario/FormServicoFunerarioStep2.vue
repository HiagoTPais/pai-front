<template>
  <div v-if="showForm == 2">
    <label class="form-title m-3">Dados do(a) Responsável</label>

    <div class="row">
      <div class="col">
        <div class="m5">
          <span class="title-input-blue">Nome Completo do Contratante*</span>

          <input
            type="text"
            class="input-resp"
            v-model="form2.nome_completo"
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
            v-model="form2.data_nascimento"
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
            v-model="form2.nacionalidade"
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
            v-model="form2.rg"
            name="rg"
            v-mask="['##.###.###-##']"
          />
        </div>
      </div>
      <div class="col">
        <div class="m5">
          <span class="title-input-blue">Status do Contratante</span>
          <select v-model="form2.status" name="status" class="select-resp">
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
          <select v-model="form2.sexo" name="sexo" class="select-resp">
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
            v-model="form2.data_expedicao"
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
            v-model="form2.cpf"
            name="cpf"
            v-mask="['###.###.###-##']"
          />
        </div>
      </div>

      <div class="col">
        <div class="m5">
          <span class="title-input-blue">Estado Civil*</span>
          <select
            v-model="form2.estado_civil"
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
            v-model="form2.grau_escolaridade"
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
            v-model="form2.ocupaçao"
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
            v-model="form2.religiao"
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
            v-model="form2.apelido"
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
            v-model="form2.cep"
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
            v-model="form2.rua"
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
            v-model="form2.numero"
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
            v-model="form2.bairro"
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
            v-model="form2.cidade"
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
            v-model="form2.uf"
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
            v-model="form2.complemento"
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
            v-model="form2.ponto_referencia"
            name="ponto_referencia"
          />
        </div>
      </div>

      <div class="col">
        <div class="m5">
          <span class="title-input-blue">Zona</span>

          <select v-model="form2.zona" class="select-resp" name="zona">
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
            v-model="form2.whatsapp_1_num"
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
            v-model="form2.whatsapp_1"
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
            v-model="form2.whatsapp_2_num"
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
            v-model="form2.whatsapp_2"
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
  name: "FormColaboradoresStep2",
  props: {
    showForm: Number,
    showView: String,
    colaboradorLista: Object,
    selectedResponsavel: Object,
  },
  methods: {
    buscarCep() {
      axios
        .get("https://viacep.com.br/ws/" + this.form2.cep + "/json/")
        .then((res) => {
          this.form2.uf = res.data.uf;
          this.form2.cidade = res.data.localidade;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  data() {
    return {
      form2: {
        nome_completo: "",
        data_nascimento: "",
        nacionalidade: "Brasileiro",
        rg: "",
        status: "",
        sexo: "",
        data_expedicao: "",
        cpf: "",
        estado_civil: "",
        grau_escolaridade: "",
        ocupaçao: "",
        religiao: "",
        apelido: "",
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
    selectedResponsavel: function (item) {
      const reversedItem = JSON.parse(JSON.stringify(item));

      if (reversedItem.cpf_dependente) {
        this.form2.cpf = reversedItem.cpf_dependente;
        this.form2.data_nascimento = reversedItem.nascimento_dependente;
        this.form2.nome_completo = reversedItem.nome_completo_dependente;
        this.form2.sexo = reversedItem.sexo_dependente;
        this.form2.whatsapp_1_num = reversedItem.telefone_dependente;
        this.form2.whatsapp_1 = reversedItem.whatsapp_dependente;
      } else {
        this.form2.nome_completo = reversedItem.nome_completo;
        this.form2.data_nascimento = reversedItem.data_nascimento;
        this.form2.nacionalidade = reversedItem.nacionalidade;
        this.form2.rg = reversedItem.rg;
        this.form2.orgao_expedicao = reversedItem.orgao_expedicao;
        this.form2.data_expedicao = reversedItem.data_expedicao;
        this.form2.cpf = reversedItem.cpf;
        this.form2.estado_civil = reversedItem.estado_civil;
        this.form2.grau_escolaridade = reversedItem.grau_escolaridade;
        this.form2.ocupaçao = reversedItem.ocupaçao;
        this.form2.religiao = reversedItem.religiao;
        this.form2.apelido = reversedItem.apelido;
        this.form2.rua = reversedItem.rua;
        this.form2.numero = reversedItem.numero;
        this.form2.bairro = reversedItem.bairro;
        this.form2.cep = reversedItem.cep;
        this.form2.cidade = reversedItem.cidade;
        this.form2.uf = reversedItem.uf;
        this.form2.complemento = reversedItem.complemento;
        this.form2.ponto_referencia = reversedItem.ponto_referencia;
        this.form2.zona = reversedItem.zona;
        this.form2.whatsapp_1_num = reversedItem.whatsapp_1_num;
        this.form2.whatsapp_1 = reversedItem.whatsapp_1;
        this.form2.whatsapp_2_num = reversedItem.whatsapp_2_num;
        this.form2.whatsapp_2 = reversedItem.whatsapp_2;
        this.form2.status = reversedItem.status;
      }
    },
  },
};
</script>
