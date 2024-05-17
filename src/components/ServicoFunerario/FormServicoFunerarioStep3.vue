<template>
  <div v-if="showForm == 3">
    <div class="d-flex m1">
      <div>
        <input type="checkbox" v-model="form3.particular" name="particular" />
        <span class="title-input-blue">Contratante</span>
      </div>

      <div>
        <input type="checkbox" v-model="form3.plano" name="plano" />
        <span class="title-input-blue">Dependente</span>
      </div>
    </div>

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
        <div class="m5">
          <span class="title-input-blue">Sexo</span>
          <select v-model="form3.sexo" name="sexo" class="select-resp">
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
          <span class="title-input-blue">Data de Falecimento</span>

          <input
            type="text"
            v-model="form3.nome_completo"
            class="input-resp"
            name="nome_completo"
          />
        </div>
      </div>

      <div class="col">
        <div class="m5">
          <span class="title-input-blue">Hora do Falecimento</span>

          <input
            type="text"
            v-model="form3.cpf"
            class="input-resp"
            name="cpf"
            v-mask="['###.###.###-##']"
          />
        </div>
      </div>

      <div class="col">
        <div class="m5">
          <span class="title-input-blue">Local do Falecimento</span>

          <input
            type="text"
            v-model="form3.rg"
            class="input-resp"
            name="rg"
            v-mask="['##.###.###-##']"
          />
        </div>
      </div>

      <div class="col">
        <div class="m5">
          <span class="title-input-blue">N da Decraração de Óbito</span>

          <input
            type="text"
            v-model="form3.nome_completo"
            class="input-resp"
            name="nome_completo"
          />
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <div class="m5">
          <span class="title-input-blue">Medico Responsável</span>

          <input
            type="text"
            v-model="form3.nome_completo"
            class="input-resp"
            name="nome_completo"
          />
        </div>
      </div>

      <div class="col">
        <div class="m5">
          <span class="title-input-blue">Situação do Falecimento</span>

          <input
            type="text"
            v-model="form3.cpf"
            class="input-resp"
            name="cpf"
            v-mask="['###.###.###-##']"
          />
        </div>
      </div>

      <div class="col">
        <div class="m5">
          <span class="title-input-blue">Causas do Falecimento</span>

          <input
            type="text"
            v-model="form3.rg"
            class="input-resp"
            name="rg"
            v-mask="['##.###.###-##']"
          />
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <div class="m5">
          <span class="title-input-blue">Sexo</span>

          <input
            type="text"
            v-model="form3.nome_completo"
            class="input-resp"
            name="nome_completo"
          />
        </div>
      </div>

      <div class="col">
        <div class="m5">
          <span class="title-input-blue">Idade</span>

          <input
            type="text"
            v-model="form3.cpf"
            class="input-resp"
            name="cpf"
            v-mask="['###.###.###-##']"
          />
        </div>
      </div>

      <div class="col">
        <div class="m5">
          <span class="title-input-blue">Etnia</span>

          <input
            type="text"
            v-model="form3.rg"
            class="input-resp"
            name="rg"
            v-mask="['##.###.###-##']"
          />
        </div>
      </div>
    </div>
        <div class="row">
      <div class="col">
        <div class="m5">
          <span class="title-input-blue">Altura</span>

          <input
            type="text"
            v-model="form3.nome_completo"
            class="input-resp"
            name="nome_completo"
          />
        </div>
      </div>

      <div class="col">
        <div class="m5">
          <span class="title-input-blue">Peso</span>

          <input
            type="text"
            v-model="form3.cpf"
            class="input-resp"
            name="cpf"
            v-mask="['###.###.###-##']"
          />
        </div>
      </div>

      <div class="col">
        <div class="m5">
          <span class="title-input-blue">Naturalidade</span>

          <input
            type="text"
            v-model="form3.rg"
            class="input-resp"
            name="rg"
            v-mask="['##.###.###-##']"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mask } from "vue-the-mask";
import OrgaoExpedicao from "../OrgaoExpedicao"

export default {
  name: "FormColaboradoresStep3",
  props: {
    showForm: Number,
    sendFormNow: Boolean,
    showView: String,
    colaboradorLista: Object,
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
      form3: {},
    };
  },
  components: {
    OrgaoExpedicao,
  },
  directives: { mask },
  watch: {
    sendFormNow: function () {
      this.$emit("set-data-form", this.form3);
    },
  },
};
</script>
