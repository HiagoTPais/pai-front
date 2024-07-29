 <template>
  <div v-if="showForm == 1" style="height: 450px">
    <label class="form-title m-3">Dados do Obito</label>
    <div class="row">
      <div class="col-4">
        <div>
          <span class="title-input-blue">Nome Completo</span>

          <input
            type="text"
            class="input-resp"
            v-model="form1.nome"
            name="nome"
          />
        </div>
      </div>

      <div class="col-1">
        <div>
          <span class="title-input-blue">Idade</span>

          <input
            type="number"
            class="input-resp"
            v-model="form1.idade"
            name="idade"
          />
        </div>
      </div>

      <div class="col-1">
        <div>
          <span class="title-input-blue">Peso</span>

          <input
            type="text"
            class="input-resp"
            v-model="form1.peso"
            name="peso"
          />
        </div>
      </div>

      <div class="col-1">
        <div>
          <span class="title-input-blue">Altura</span>

          <input
            type="text"
            class="input-resp"
            v-model="form1.altura"
            name="altura"
          />
        </div>
      </div>

      <div class="col">
        <div>
          <span class="title-input-blue">Data e Hora do Obito</span>
          <input
            type="datetime-local"
            class="input-resp"
            v-model="form1.data_hora_obito"
            name="data_hora_obito"
          />
        </div>
      </div>

      <div class="col">
        <div>
          <span class="title-input-blue">Data e Hora do Atendimeto</span>
          <input
            type="datetime-local"
            class="input-resp"
            v-model="form1.data_hora_atendimeto"
            name="data_hora_atendimeto"
          />
        </div>
      </div>
    </div>

    <br />

    <div class="row">
      <div class="col">
        <span class="title-input-blue"
          >Historico Pessoal / Antecedentes de Saude</span
        >

        <textarea
          v-model="form1.historico_pessoa"
          name="historico_pessoa"
          class="textarea-resp"
          rows="5"
        ></textarea>
      </div>
    </div>
  </div>
</template>


<script>
// import axios from "axios";
import { mask } from "vue-the-mask";

export default {
  name: "FormTanatorioStep1",

  props: {
    showForm: Number,
    sendFormNow: Boolean,
    showView: String,
  },

  methods: {},

  components: {},

  data() {
    return {

      form1: {
        nome: "",
        idade: "",
        peso: "",
        altura: "",
        data_hora_obito: "",
        data_hora_atendimeto: "",
        local_obito: "",
        historico_pessoa: "",
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
</script>
