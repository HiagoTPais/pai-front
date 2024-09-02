 <template>
  <div v-if="showForm == 7" style="height: 540px">
    <label class="form-title m-3">Observações / Orientações</label>

    <div class="row">
      <div class="col">
        <textarea
          v-model="form7.observacoes"
          name="observacoes"
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
            v-model="form7.hora_inicial_procedimento"
            name="hora_inicial_procedimento"
          />
        </div>
      </div>

      <div class="col">
        <div>
          <span class="title-input-blue">Hora Final do Procedimento</span>
          <input
            type="datetime-local"
            class="input-resp"
            v-model="form7.hora_final_Procedimento"
            name="hora_final_Procedimento"
          />
        </div>
      </div>

      <div class="col">
        <div>
          <span class="title-input-blue">Agente Funerario Responsavel</span>

          <input
            type="text"
            class="input-resp"
            v-model="form7.agente_funerario_responsavel"
            name="agente_funerario_responsavel"
          />
        </div>
      </div>

      <div class="col">
        <div>
          <span class="title-input-blue">Auxiliar do Agente Funerario</span>

          <input
            type="text"
            class="input-resp"
            v-model="form7.auxiliar_agente_funerario"
            name="auxiliar_agente_funerario"
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
  name: "FormTanatorioStep7",
  props: {
    showForm: Number,
    sendFormNow: Boolean,
    showView: String,
    infoTanato: Object,
  },
  methods: {},
  components: {},
  data() {
    return {
      form7: {
        observacoes: "",
        hora_inicial_procedimento: "",
        hora_final_Procedimento: "",
        agente_funerario_responsavel: "",
        auxiliar_agente_funerario: "",
      },
    };
  },
  directives: { mask },
  watch: {
    sendFormNow: function () {
      this.$emit("set-data-form", this.form7);
    },

    infoTanato: function (item) {
      const tanato = JSON.parse(JSON.stringify(item));

      this.form7.observacoes = tanato.data[0].observacoes;
      this.form7.hora_inicial_procedimento = tanato.data[0].hora_inicial_procedimento;
      this.form7.hora_final_Procedimento = tanato.data[0].hora_final_Procedimento;
      this.form7.agente_funerario_responsavel = tanato.data[0].agente_funerario_responsavel;
      this.form7.auxiliar_agente_funerario = tanato.data[0].auxiliar_agente_funerario;
    },
  },
};
</script>
