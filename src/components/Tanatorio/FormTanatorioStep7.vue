 <template>
  <div v-if="showForm == 7">
    <label class="form-title m-3">Observações / Orientações</label>

    <div class="row">
      <div class="col">
        <textarea
          v-model="form7.antecedentes_saude"
          name="antecedentes_saude"
          class="textarea-resp"
          rows="10"
        ></textarea>
      </div>
    </div>

    <br />

    <div class="row">
      <div class="col">
        <div>
          <span class="title-input-blue">Hora Inicial do Procedimento</span>
          <input
            type="datetime-local"
            class="input-resp"
            v-model="form7.data_hora_obito"
            name="data_hora_obito"
          />
        </div>
      </div>

      <div class="col">
        <div>
          <span class="title-input-blue">Hora Final do Procedimento</span>
          <input
            type="datetime-local"
            class="input-resp"
            v-model="form7.data_hora_procedimento"
            name="data_hora_procedimento"
          />
        </div>
      </div>

      <div class="col">
        <div>
          <span class="title-input-blue">Agente Funerario Responsavel</span>

          <input
            type="text"
            class="input-resp"
            v-model="form7.nome"
            name="nome"
          />
        </div>
      </div>

      <div class="col">
        <div>
          <span class="title-input-blue">Auxiliar do Agente Funerario</span>

          <input
            type="text"
            class="input-resp"
            v-model="form7.altura"
            name="altura"
          />
        </div>
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
      form7: {
        nome: "",
        idade: "",
        peso: "",
        altura: "",
        data_hora_obito: "",
        data_hora_procedimento: "",
        local_obito: "",
        historico_pessoa: "",
        antecedentes_saude: "",
      },
    };
  },
  directives: { mask },
  watch: {
    sendFormNow: function () {
      this.$emit("set-data-form", this.form7);
    },
  },
};
</script>
