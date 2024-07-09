<template>
  <div v-if="showForm == 3">
    <label class="form-title m-3">Dados do Falecido</label>

    <div class="row">
      <div class="col">
        <div class="m5">
          <span class="title-input-blue">Nome Completo do Contratante*</span>

          <input
            type="text"
            class="input-resp"
            v-model="form3.nome_completo"
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
            v-model="form3.data_nascimento"
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
            v-model="form3.nacionalidade"
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
            v-model="form3.rg"
            name="rg"
            v-mask="['##.###.###-##']"
          />
        </div>
      </div>
      <div class="col">
        <div class="m5">
          <span class="title-input-blue">Status do Contratante</span>
          <select
            v-model="form3.status"
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
        <OrgaoExpedicao />
      </div>

      <div class="col">
        <div class="m5">
          <span class="title-input-blue">Data de Expedição*</span>

          <input
            type="date"
            class="input-resp"
            v-model="form3.data_expedicao"
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
            v-model="form3.cpf"
            name="cpf"
            v-mask="['###.###.###-##']"
          />
        </div>
      </div>

      <div class="col">
        <div class="m5">
          <span class="title-input-blue">Estado Civil*</span>
          <select
            v-model="form3.estado_civil"
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
            v-model="form3.grau_escolaridade"
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
            v-model="form3.ocupaçao"
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
            v-model="form3.religiao"
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
            v-model="form3.apelido"
            name="apelido"
          />
        </div>
      </div>
    </div>

    <label class="form-title m-3">Dados Pessoais</label>

    <div class="row">
      <div class="col">
        <div class="m5">
          <span class="title-input-blue">Data e Hora do Falecimento</span>

          <input
            type="datetime-local"
            v-model="form3.data_hora_falecimento"
            class="input-resp"
            name="data_hora_falecimento"
          />
        </div>
      </div>

      <div class="col">
        <div class="m5">
          <span class="title-input-blue">Local do Falecimento</span>

          <input
            type="text"
            v-model="form3.local_falecimento"
            class="input-resp"
            name="local_falecimento"
          />
        </div>
      </div>

      <div class="col">
        <div class="m5">
          <span class="title-input-blue">N da Decraração de Óbito</span>

          <input
            type="text"
            v-model="form3.n_decraracao_obito"
            class="input-resp"
            name="n_decraracao_obito"
          />
        </div>
      </div>

      <div class="col">
        <div class="m5">
          <span class="title-input-blue">Medico Responsável</span>

          <input
            type="text"
            v-model="form3.medico_responsavel"
            class="input-resp"
            name="medico_responsavel"
          />
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <div class="m5">
          <span class="title-input-blue">Situação do Falecimento</span>

          <input
            type="text"
            v-model="form3.situacao_falecimento"
            class="input-resp"
            name="situacao_falecimento"
          />
        </div>
      </div>

      <div class="col">
        <div class="m5">
          <span class="title-input-blue">Causas do Falecimento</span>

          <input
            type="text"
            v-model="form3.causas_falecimento"
            class="input-resp"
            name="causas_falecimento"
          />
        </div>
      </div>

      <div class="col">
        <div class="m5">
          <span class="title-input-blue">Idade</span>

          <input
            type="number"
            v-model="form3.idade"
            class="input-resp"
            name="idade"
          />
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <div class="m5">
          <span class="title-input-blue">Etnia</span>

          <input
            type="text"
            v-model="form3.etnia"
            class="input-resp"
            name="etnia"
          />
        </div>
      </div>

      <div class="col">
        <div class="m5">
          <span class="title-input-blue">Altura</span>

          <input
            type="number"
            v-model="form3.altura"
            class="input-resp"
            name="altura"
          />
        </div>
      </div>

      <div class="col">
        <div class="m5">
          <span class="title-input-blue">Peso</span>

          <input
            type="number"
            v-model="form3.peso"
            class="input-resp"
            name="peso"
          />
        </div>
      </div>

      <div class="col">
        <div class="m5">
          <span class="title-input-blue">Naturalidade</span>

          <input
            type="text"
            v-model="form3.naturalidade"
            class="input-resp"
            name="naturalidade"
          />
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
  name: "FormColaboradoresStep3",
  props: {
    showForm: Number,
    showView: String,
    colaboradorLista: Object,
    selectedFalecido: Object,
  },
  methods: {
    buscarCep() {
      axios
        .get("https://viacep.com.br/ws/" + this.form3.cep + "/json/")
        .then((res) => {
          this.form3.uf = res.data.uf;
          this.form3.cidade = res.data.localidade;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  data() {
    return {
      form3: {
        nome_completo: "",
        data_nascimento: "",
        nacionalidade: "",
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
        data_hora_falecimento: "",
        local_falecimento: "",
        n_decraracao_obito: "",
        medico_responsavel: "",
        situacao_falecimento: "",
        causas_falecimento: "",
        idade: "",
        etnia: "",
        altura: "",
        peso: "",
        naturalidade: "",
      },
    };
  },
  components: {
    OrgaoExpedicao,
  },
  directives: { mask },
  watch: {
    selectedFalecido: function (item) {
      console.log("AAAAAAAAAAAAA");
      console.log(item);
      const reversedItem = JSON.parse(JSON.stringify(item));

      this.form3.nome_completo = reversedItem.nome_completo;
      this.form3.data_nascimento = reversedItem.data_nascimento;
      this.form3.nacionalidade = reversedItem.nacionalidade;
      this.form3.rg = reversedItem.rg;
      this.form3.status = reversedItem.status;
      this.form3.sexo = reversedItem.sexo;
      this.form3.data_expedicao = reversedItem.data_expedicao;
      this.form3.cpf = reversedItem.cpf;
      this.form3.estado_civil = reversedItem.estado_civil;
      this.form3.grau_escolaridade = reversedItem.grau_escolaridade;
      this.form3.ocupaçao = reversedItem.ocupaçao;
      this.form3.religiao = reversedItem.religiao;
      this.form3.apelido = reversedItem.apelido;
      this.form3.data_hora_falecimento = reversedItem.data_hora_falecimento;
      this.form3.local_falecimento = reversedItem.local_falecimento;
      this.form3.n_decraracao_obito = reversedItem.n_decraracao_obito;
      this.form3.medico_responsavel = reversedItem.medico_responsavel;
      this.form3.situacao_falecimento = reversedItem.situacao_falecimento;
      this.form3.causas_falecimento = reversedItem.causas_falecimento;
      this.form3.idade = reversedItem.idade;
      this.form3.etnia = reversedItem.etnia;
      this.form3.altura = reversedItem.altura;
      this.form3.peso = reversedItem.peso;
      this.form3.naturalidade = reversedItem.naturalidade;
    },
  },
};
</script>
