<template>
  <div v-if="showForm == 3">
    <label class="form-title m-3"> Dados Contratação </label>

    <div class="d-flex justify-content-between">
      <div class="foto">
        <PictureInput
          ref="pictureInput"
      
          height="216"
          
          accept="image/jpeg,image/png"
          size="10"
          button-class="btn"
          :custom-strings="{
            upload: '',
            drag: '',
          }"
          @change="onChangeImg"
        ></PictureInput>
        <!-- <div class="d-flex justify-content-center align-content-center">
          <img
            :src="require('../../assets/img/images-icon.png')"
            style="width: 100px; height: 100px; margin-top: 25%"
          />
        </div> -->
      </div>

      <div style="margin-left: 1%">
        <div class="row">
          <div class="col">
            <div class="m5">
              <span class="title-input-blue">Forma de Contratação</span>
              <select
                class="select-resp"
                v-model="form3.forma_contratacao"
                name="forma_contratacao"
              >
                <option>Carteira Assinada</option>
                <option>Estágio</option>
                <option>Jovem Aprendiz</option>
                <option>Teceirização</option>
              </select>
            </div>
          </div>

          <div class="col">
            <div class="m5">
              <span class="title-input-blue">CBO</span>

              <input
                type="text"
                class="input-resp"
                v-model="form3.cbo"
                name="cbo"
              />
            </div>
          </div>
          <div class="col">
            <div class="m5">
              <span class="title-input-blue">Data de Pagamento</span>

              <input
                type="date"
                class="input-resp"
                v-model="form3.data_pagamento"
                name="data_pagamento"
              />
            </div>
          </div>
          <div class="col">
            <div class="m5">
              <span class="title-input-blue">Tipo de Contrato</span>

              <select
                class="select-resp"
                v-model="form3.tipo_contrato"
                name="tipo_contrato"
              >
                <option>Contrato de Experiéncia</option>
                <option>Contrato por Prazo Determinado</option>
                <option>Contrato por Prazo Indeterminado</option>
                <option>Contrato de Trabalho Intermitente</option>
              </select>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col">
            <div class="m5">
              <span class="title-input-blue">Entidade/Pessoa</span>

              <select
                class="select-resp"
                v-model="form3.entidade_pessoa"
                name="entidade_pessoa"
              >
                <option>Pessoa Física</option>
                <option>Pessoa Jurídica</option>
              </select>
            </div>
          </div>

          <div class="col">
            <div class="m5">
              <span class="title-input-blue">CPF/CNPJ</span>

              <input
                type="text"
                class="input-resp"
                v-model="form3.cpf_cnpj"
                name="cpf_cnpj"
                maxlength="14"
                @focus="retirarFormatacao()"
                @blur="formatarCampo()"
              />
            </div>
          </div>

          <div class="col">
            <div class="m5">
              <span class="title-input-blue">CTPS</span>

              <input
                type="text"
                class="input-resp"
                v-model="form3.ctps"
                name="ctps"
              />
            </div>
          </div>

          <div class="col">
            <div class="m5">
              <span class="title-input-blue">PIS</span>

              <input
                type="text"
                class="input-resp"
                v-model="form3.pis"
                name="pis"
              />
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col">
            <div class="m5">
              <span class="title-input-blue">Reservista</span>

              <input
                type="text"
                class="input-resp"
                v-model="form3.reservista"
                name="reservista"
              />
            </div>
          </div>

          <div class="col">
            <div class="m5">
              <span class="title-input-blue" style="margin-left: 1%"
                >Função</span
              >

              <select
                class="select-resp"
                v-model="form3.funcao"
                name="funcao"
              ></select>
            </div>
          </div>

          <div class="col">
            <div class="m5">
              <span class="title-input-blue">Cargo</span>

              <input
                type="text"
                class="input-resp"
                v-model="form3.cargo"
                name="cargo"
              />
            </div>
          </div>
          <div class="col">
            <div class="m5">
              <span class="title-input-blue">Carga Horária</span>

              <input
                type="text"
                class="input-resp"
                v-model="form3.carga_horaria"
                name="carga_horaria"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <br />
    <div class="row">
      <div class="col">
        <div class="m5">
          <span class="title-input-blue">Salário Base</span>

          <input
            type="text"
            class="input-resp"
            v-money="money"
            v-model="form3.salario_base"
            name="salario_base"
          />
        </div>
      </div>

      <div class="col">
        <div class="m5">
          <span class="title-input-blue">Salário Família</span>

          <input
            type="text"
            class="input-resp"
            v-money="money"
            v-model="form3.salario_familia"
            name="salario_familia"
          />
        </div>
      </div>

      <div class="col">
        <div class="m5">
          <span class="title-input-blue">Periculosidade</span>

          <input
            type="text"
            class="input-resp"
            v-money="money"
            v-model="form3.periculosidade"
            name="periculosidade"
          />
        </div>
      </div>

      <div class="col">
        <div class="m5">
          <span class="title-input-blue">Insalubridade</span>

          <input
            type="text"
            class="input-resp"
            v-money="money"
            v-model="form3.insalubridade"
            name="insalubridade"
          />
        </div>
      </div>

      <div class="col">
        <div class="m5">
          <span class="title-input-blue">Adicional Noturno</span>

          <input
            type="text"
            class="input-resp"
            v-money="money"
            v-model="form3.adicional_noturno"
            name="adicional_noturno"
          />
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <div class="m5">
          <span class="title-input-blue">Auxílio Transporte</span>

          <input
            type="text"
            class="input-resp"
            v-money="money"
            v-model="form3.auxilio_transporte"
            name="auxilio_transporte"
          />
        </div>
      </div>

      <div class="col">
        <div class="m5">
          <span class="title-input-blue">Auxílio Alimentação</span>

          <input
            type="text"
            class="input-resp"
            v-money="money"
            v-model="form3.auxilio_alimentacao"
            name="auxilio_alimentacao"
          />
        </div>
      </div>

      <div class="col">
        <div class="m5">
          <span class="title-input-blue">Auxílio Moradia</span>

          <input
            type="text"
            class="input-resp"
            v-money="money"
            v-model="form3.auxilio_moradia"
            name="auxilio_moradia"
          />
        </div>
      </div>

      <div class="col">
        <div class="m5">
          <span class="title-input-blue">Titulo de Eleitor</span>

          <input
            type="text"
            class="input-resp"
            v-model="form3.titulo_eleitor"
            name="titulo_eleitor"
          />
        </div>
      </div>

      <div class="col">
        <div class="m5">
          <span class="title-input-blue">Comissão</span>

          <input
            type="text"
            class="input-resp"
            v-model="form3.comissao"
            name="comissao"
          />
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <div class="m5">
          <span class="title-input-blue">Setor/Departamento</span>

          <input
            type="text"
            class="input-resp"
            v-model="form3.setor_departamento"
            name="setor_departamento"
          />
        </div>
      </div>

      <div class="col">
        <div class="m5">
          <span class="title-input-blue">CNAE</span>

          <input
            type="text"
            class="input-resp"
            v-model="form3.cnae"
            name="cnae"
          />
        </div>
      </div>
      <div class="col">
        <div class="m5">
          <span class="title-input-blue">Remuneração</span>

          <select
            class="select-resp"
            v-model="form3.remuneracao"
            name="remuneracao"
          ></select>
        </div>
      </div>

      <div class="col">
        <div class="m5">
          <span class="title-input-blue">Contrato Anexo</span>

          <input
            type="text"
            class="input-resp"
            v-model="form3.contrato_anexo"
            name="contrato_anexo"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { VMoney } from "v-money";
import { mask } from "vue-the-mask";
import PictureInput from "vue-picture-input";

export default {
  name: "FormColaboradoresStep3",
  props: {
    sendFormNow: Boolean,
    showForm: Number,
    contratoData: Object,
  },
  components: {
    PictureInput,
  },
  data() {
    return {
      form3: {
        forma_contratacao: "",
        tipo_contrato: "",
        entidade_pessoa: "",
        cpf_cnpj: "",
        ctps: "",
        pis: "",
        titulo_eleitor: "",
        reservista: "",
        cbo: "",
        funcao: "",
        cargo: "",
        carga_horaria: "",
        data_pagamento: "",
        salario_base: "",
        salario_familia: "",
        periculosidade: "",
        insalubridade: "",
        adicional_noturno: "",
        auxilio_transporte: "",
        auxilio_alimentacao: "",
        auxilio_moradia: "",
        comissao: "",
        remuneracao: "",
        contrato_anexo: "",
        setor_departamento: "",
        cnae: "",
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
  methods: {
    onChangeImg(image) {
      if (image) {
        this.image = image;
      } else {
        console.log("FileReader API not supported: use the <form>, Luke!");
      }
    },
    formatarCampo() {
      if (this.form3.cpf_cnpj.length <= 11) {
        this.form3.cpf_cnpj = this.form3.cpf_cnpj.replace(
          /(\d{3})(\d{3})(\d{3})(\d{2})/g,
          "$1.$2.$3-$4"
        );
      } else {
        this.form3.cpf_cnpj = this.form3.cpf_cnpj.replace(
          /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g,
          "$1.$2.$3/$4-$5"
        );
      }
    },
    retirarFormatacao() {
      this.form3.cpf_cnpj = this.form3.cpf_cnpj.replace(/(\.|\/|-)/g, "");
    },
  },
  watch: {
    sendFormNow: function () {
      this.$emit("set-data-form", this.form3);
    },
    contratoData: function () {
      const reversedContratoData = JSON.parse(
        JSON.stringify(this.contratoData)
      );

      this.forma_contratacao = reversedContratoData.data[0].forma_contratacao;
      this.tipo_contrato = reversedContratoData.data[0].tipo_contrato;
      this.entidade_pessoa = reversedContratoData.data[0].entidade_pessoa;
      this.cpf_cnpj = reversedContratoData.data[0].cpf_cnpj;
      this.ctps = reversedContratoData.data[0].ctps;
      this.pis = reversedContratoData.data[0].pis;
      this.titulo_eleitor = reversedContratoData.data[0].titulo_eleitor;
      this.reservista = reversedContratoData.data[0].reservista;
      this.cbo = reversedContratoData.data[0].cbo;
      this.funcao = reversedContratoData.data[0].funcao;
      this.cargo = reversedContratoData.data[0].cargo;
      this.carga_horaria = reversedContratoData.data[0].carga_horaria;
      this.data_pagamento = reversedContratoData.data[0].data_pagamento.replace("-", "");
      this.salario_base = reversedContratoData.data[0].salario_base;
      this.salario_familia = reversedContratoData.data[0].salario_familia;
      this.periculosidade = reversedContratoData.data[0].periculosidade;
      this.insalubridade = reversedContratoData.data[0].insalubridade;
      this.adicional_noturno = reversedContratoData.data[0].adicional_noturno;
      this.auxilio_transporte = reversedContratoData.data[0].auxilio_transporte;
      this.auxilio_alimentacao = reversedContratoData.data[0].auxilio_alimentacao;
      this.auxilio_moradia = reversedContratoData.data[0].auxilio_moradia;
      this.comissao = reversedContratoData.data[0].comissao;
      this.remuneracao = reversedContratoData.data[0].remuneracao;
      this.contrato_anexo = reversedContratoData.data[0].contrato_anexo;
      this.setor_departamento = reversedContratoData.data[0].setor_departamento;
      this.cnae = reversedContratoData.data[0].cnae;
    },
  },
  directives: { money: VMoney, mask },
};
</script>
