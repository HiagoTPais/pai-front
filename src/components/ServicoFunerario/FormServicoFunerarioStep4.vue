<template>
  <div v-if="showForm == 4">
    <div class="d-flex">
      <label class="form-title m-3">Dados da Cerimonia</label>
      <img
        style="width: 41px; height: 40px; cursor: pointer; margin-top: 5px"
        :src="require('../../assets/img/plus.png')"
        @click="modalNovoSalao()"
      />
    </div>

    <div class="row">
      <div class="col">
        <div class="checkbox-wrapper-13" style="margin-left: -10px">
          <input
            id="c1-13"
            type="checkbox"
            name="havera_uso_salao_homenagem"
            v-model="form4.havera_uso_salao_homenagem"
          />
          <label class="form-title" for="c1-13"
            >Haverá uso do Salão de Homenagem?</label
          >
        </div>
        <div>
          <span class="title-input-blue">Salão de Homenagem</span>

          <select
            v-model="form4.salao_homenagem"
            name="salao_homenagem"
            class="select-resp"
          >
            <option>Salão da Empresa</option>
            <option>Salão de Terceiro</option>
            <option>Residência</option>
          </select>
        </div>
      </div>

      <div class="col">
        <div class="checkbox-wrapper-13" style="margin-left: -10px">
          <input
            id="c1-13"
            type="checkbox"
            name="havera_assistencia_copa"
            v-model="form4.havera_assistencia_copa"
          />
          <label class="form-title" for="c1-13"
            >Haverá Assistência de Copa?</label
          >
        </div>
        <div>
          <span class="title-input-blue">Colaborador</span>

          <select
            v-model="form4.colaborador"
            name="colaborador"
            class="select-resp"
          >
            <option>Colaborador</option>
          </select>
        </div>
      </div>
    </div>

    <label class="form-title m-3">Local do Velorio</label>

    <div class="row">
      <div class="col">
        <div class="m5">
          <span class="title-input-blue">CEP*</span>
          <input
            type="text"
            class="input-resp"
            v-model="form4.cep"
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
            v-model="form4.rua"
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
            v-model="form4.numero"
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
            v-model="form4.bairro"
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
            v-model="form4.cidade"
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
            v-model="form4.uf"
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
            v-model="form4.complemento"
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
            v-model="form4.ponto_referencia"
            name="ponto_referencia"
          />
        </div>
      </div>

      <div class="col">
        <div class="m5">
          <span class="title-input-blue">Zona</span>

          <select v-model="form4.zona" name="zona" class="select-resp">
            <option>Urbana</option>
            <option>Rural</option>
          </select>
        </div>
      </div>

      <div class="col">
        <div class="m5">
          <span class="title-input-blue">Horario de Inicio</span>
          <input
            type="text"
            class="input-resp"
            v-model="form4.horario_inicio"
            name="horario_inicio"
          />
        </div>
      </div>
    </div>

    <div class="d-flex justify-content-between m1">
      <div class="checkbox-wrapper-13" style="margin-left: -10px">
        <input
          id="c1-13"
          type="checkbox"
          name="havera_homenagem"
          v-model="form4.havera_homenagem"
        />
        <label class="form-title" for="c1-13"
          >Haverá Cerimonia de Homenagem?</label
        >
      </div>
    </div>

    <div v-if="form4.havera_homenagem">
      <label class="form-title m-3">Dados da Homenagem</label>

      <div class="row">
        <div class="col">
          <div class="m5">
            <span class="title-input-blue">Era muito conhecido?</span>

            <input
              type="text"
              v-model="form4.era_muito_conhecido"
              class="input-resp"
              name="era_muito_conhecido"
            />
          </div>
        </div>

        <div class="col">
          <div class="m5">
            <span class="title-input-blue">Era muito religioso?</span>

            <input
              type="text"
              v-model="form4.era_muito_religioso"
              class="input-resp"
              name="era_muito_religioso"
            />
          </div>
        </div>

        <div class="col">
          <div class="m5">
            <span class="title-input-blue">Quantos filhos?</span>

            <input
              type="text"
              v-model="form4.quantos_filhos"
              class="input-resp"
              name="quantos_filhos"
            />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="m5">
            <span class="title-input-blue">Oque gostava de fazer?</span>

            <input
              type="text"
              v-model="form4.oque_gostava_fazer"
              class="input-resp"
              name="oque_gostava_fazer"
            />
          </div>
        </div>

        <div class="col">
          <div class="m5">
            <span class="title-input-blue">Como se sentia ao fazer?</span>

            <input
              type="text"
              v-model="form4.como_sentia"
              class="input-resp"
              name="como_sentia"
            />
          </div>
        </div>

        <div class="col">
          <div class="m5">
            <span class="title-input-blue"
              >Qual lição de vida deixou para você?</span
            >

            <input
              type="text"
              v-model="form4.qual_licao_deixou"
              class="input-resp"
              name="qual_licao_deixou"
            />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="m1">
            <span class="title-input-blue"
              >Como você pode descrever como ele(a) era para você?</span
            >

            <input
              type="text"
              v-model="form4.como_voce_descrever"
              class="input-resp"
              name="como_voce_descrever"
            />
          </div>
        </div>
      </div>

      <label class="form-title m-3">Anotações</label>

      <div class="row">
        <div class="col" style="margin: 1%">
          <textarea
            v-model="form4.anotacoes"
            name="anotacoes"
            class="textarea-resp"
            cols="124"
            rows="5"
          ></textarea>
        </div>
      </div>
    </div>
  </div>
  <NovoSalaoModal :msg="message" :visible="modalVisible" />
</template>

<script>
import axios from "axios";
import { mask } from "vue-the-mask";
import NovoSalaoModal from "../Modal/NovoSalaoModal";

export default {
  name: "FormColaboradoresStep4",
  props: {
    showForm: Number,
    sendFormNow: Boolean,
    showView: String,
    colaboradorLista: Object,
  },
  methods: {
    buscarCep() {
      axios
        .get("https://viacep.com.br/ws/" + this.form4.cep + "/json/")
        .then((res) => {
          this.form4.uf = res.data.uf;
          this.form4.cidade = res.data.localidade;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    modalNovoSalao() {
      this.modalVisible = !this.modalVisible;
      this.message = "Salão de Homenagem";
    },
  },
  components: {
    NovoSalaoModal,
  },
  data() {
    return {
      modalVisible: false,
      message: "",
      form4: {
        havera_uso_salao_homenagem: false,
        havera_homenagem: false,
        havera_assistencia_copa: false,
        salao_homenagem: "",
        colaborador: "",
        cep: "",
        rua: "",
        numero: "",
        bairro: "",
        cidade: "",
        uf: "",
        complemento: "",
        ponto_referencia: "",
        zona: "",
        horario_inicio: "",
        era_muito_conhecido: "",
        era_muito_religioso: "",
        quantos_filhos: "",
        oque_gostava_fazer: "",
        como_sentia: "",
        qual_licao_deixou: "",
        como_voce_descrever: "",
        anotacoes: "",
      },
    };
  },
  directives: { mask },
  watch: {
    sendFormNow: function () {
      this.$emit("set-data-form", this.form4);
    },
  },
};
</script>
