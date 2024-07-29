 <template>
  <div v-if="showForm == 4" style="height: 600px;">
    <label class="form-title m-3">Tanatopraxia</label>
    
    <div class="row">
      <div class="col">
        <div class="checkbox-wrapper-13">
          <label class="form-title">HIGIENIZAÇÃO CORPORAL</label>

          <input
            class="c1-13"
            type="checkbox"
            v-model="form4.havera_somatoconservacao_avancada"
            name="havera_somatoconservacao_avancada"
          />

          <samp class="title-input-blue">Sim</samp>

          <input
            class="c1-13"
            type="checkbox"
            v-model="form4.havera_somatoconservacao_avancada"
            name="havera_somatoconservacao_avancada"
          />

          <samp class="title-input-blue">Não</samp>
        </div>
      </div>
      <div class="col">
        <div class="checkbox-wrapper-13">
          <label class="form-title">SOMATOCONSERVAÇÃO</label>

          <input
            class="c1-13"
            type="checkbox"
            v-model="form4.havera_somatoconservacao_avancada"
            name="havera_somatoconservacao_avancada"
          />

          <samp class="title-input-blue">Sim</samp>

          <input
            class="c1-13"
            type="checkbox"
            v-model="form4.havera_somatoconservacao_avancada"
            name="havera_somatoconservacao_avancada"
          />

          <samp class="title-input-blue">Não</samp>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="checkbox-wrapper-13">
          <label class="form-title">TAMPONAMENTO</label>

          <input
            class="c1-13"
            type="checkbox"
            v-model="form4.havera_somatoconservacao_avancada"
            name="havera_somatoconservacao_avancada"
          />

          <samp class="title-input-blue">Sim</samp>

          <input
            class="c1-13"
            type="checkbox"
            v-model="form4.havera_somatoconservacao_avancada"
            name="havera_somatoconservacao_avancada"
          />

          <samp class="title-input-blue">Não</samp>
        </div>
      </div>
      <div class="col">
        <div class="checkbox-wrapper-13">
          <label class="form-title">FECHAMENTO BUCO MAXILO</label>

          <input
            class="c1-13"
            type="checkbox"
            v-model="form4.havera_somatoconservacao_avancada"
            name="havera_somatoconservacao_avancada"
          />

          <samp class="title-input-blue">Sutura</samp>

          <input
            class="c1-13"
            type="checkbox"
            v-model="form4.havera_somatoconservacao_avancada"
            name="havera_somatoconservacao_avancada"
          />

          <samp class="title-input-blue">Colagem</samp>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="checkbox-wrapper-13">
          <label class="form-title">SECAGEM / FECHAMENTO OCULAR</label>

          <input
            class="c1-13"
            type="checkbox"
            v-model="form4.havera_somatoconservacao_avancada"
            name="havera_somatoconservacao_avancada"
          />

          <samp class="title-input-blue">Sim</samp>

          <input
            class="c1-13"
            type="checkbox"
            v-model="form4.havera_somatoconservacao_avancada"
            name="havera_somatoconservacao_avancada"
          />

          <samp class="title-input-blue">Não</samp>
        </div>
      </div>
      <div class="col">
        <div class="checkbox-wrapper-13">
          <label class="form-title">REPARAÇÃO CORPORAL</label>

          <input
            class="c1-13"
            type="checkbox"
            v-model="form4.havera_somatoconservacao_avancada"
            name="havera_somatoconservacao_avancada"
          />

          <samp class="title-input-blue">Simples</samp>

          <input
            class="c1-13"
            type="checkbox"
            v-model="form4.havera_somatoconservacao_avancada"
            name="havera_somatoconservacao_avancada"
          />

          <samp class="title-input-blue">Moderada</samp>
          <input
            class="c1-13"
            type="checkbox"
            v-model="form4.havera_somatoconservacao_avancada"
            name="havera_somatoconservacao_avancada"
          />

          <samp class="title-input-blue">Complexa</samp>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="checkbox-wrapper-13">
          <label class="form-title">REPARAÇÃO FACIAL</label>

          <input
            class="c1-13"
            type="checkbox"
            v-model="form4.havera_somatoconservacao_avancada"
            name="havera_somatoconservacao_avancada"
          />

          <samp class="title-input-blue">Simples</samp>

          <input
            class="c1-13"
            type="checkbox"
            v-model="form4.havera_somatoconservacao_avancada"
            name="havera_somatoconservacao_avancada"
          />

          <samp class="title-input-blue">Moderada</samp>
          <input
            class="c1-13"
            type="checkbox"
            v-model="form4.havera_somatoconservacao_avancada"
            name="havera_somatoconservacao_avancada"
          />

          <samp class="title-input-blue">Complexa</samp>
        </div>
      </div>
      <div class="col">
        <div class="checkbox-wrapper-13">
          <label class="form-title">CABELO</label>

          <input
            class="c1-13"
            type="checkbox"
            v-model="form4.havera_somatoconservacao_avancada"
            name="havera_somatoconservacao_avancada"
          />

          <samp class="title-input-blue">Aparar</samp>

          <input
            class="c1-13"
            type="checkbox"
            v-model="form4.havera_somatoconservacao_avancada"
            name="havera_somatoconservacao_avancada"
          />

          <samp class="title-input-blue">Raspar</samp>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="checkbox-wrapper-13">
          <label class="form-title">BARBA</label>

          <input
            class="c1-13"
            type="checkbox"
            v-model="form4.havera_somatoconservacao_avancada"
            name="havera_somatoconservacao_avancada"
          />

          <samp class="title-input-blue">Aparar</samp>

          <input
            class="c1-13"
            type="checkbox"
            v-model="form4.havera_somatoconservacao_avancada"
            name="havera_somatoconservacao_avancada"
          />

          <samp class="title-input-blue">Raspar</samp>
        </div>
      </div>
      <div class="col">
        <div class="checkbox-wrapper-13">
          <label class="form-title">BIGODE</label>

          <input
            class="c1-13"
            type="checkbox"
            v-model="form4.havera_somatoconservacao_avancada"
            name="havera_somatoconservacao_avancada"
          />

          <samp class="title-input-blue">Aparar</samp>

          <input
            class="c1-13"
            type="checkbox"
            v-model="form4.havera_somatoconservacao_avancada"
            name="havera_somatoconservacao_avancada"
          />

          <samp class="title-input-blue">Raspar</samp>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="checkbox-wrapper-13">
          <label class="form-title">CORTE DE UNHAS</label>

          <input
            class="c1-13"
            type="checkbox"
            v-model="form4.havera_somatoconservacao_avancada"
            name="havera_somatoconservacao_avancada"
          />

          <samp class="title-input-blue">Sim</samp>

          <input
            class="c1-13"
            type="checkbox"
            v-model="form4.havera_somatoconservacao_avancada"
            name="havera_somatoconservacao_avancada"
          />

          <samp class="title-input-blue">Não</samp>
        </div>
      </div>
      <div class="col">
        <div class="checkbox-wrapper-13">
          <label class="form-title">LIMPEZA E HIDRATAÇÃO FACIAL</label>

          <input
            class="c1-13"
            type="checkbox"
            v-model="form4.havera_somatoconservacao_avancada"
            name="havera_somatoconservacao_avancada"
          />

          <samp class="title-input-blue">Sim</samp>

          <input
            class="c1-13"
            type="checkbox"
            v-model="form4.havera_somatoconservacao_avancada"
            name="havera_somatoconservacao_avancada"
          />

          <samp class="title-input-blue">Não</samp>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="checkbox-wrapper-13">
          <label class="form-title">MAQUIAGEM</label>

          <input
            class="c1-13"
            type="checkbox"
            v-model="form4.havera_somatoconservacao_avancada"
            name="havera_somatoconservacao_avancada"
          />

          <samp class="title-input-blue">Sim</samp>

          <input
            class="c1-13"
            type="checkbox"
            v-model="form4.havera_somatoconservacao_avancada"
            name="havera_somatoconservacao_avancada"
          />

          <samp class="title-input-blue">Não</samp>
        </div>
      </div>
      <div class="col">
        <div class="checkbox-wrapper-13">
          <label class="form-title">ORNAMENTAÇÃO</label>

          <input
            class="c1-13"
            type="checkbox"
            v-model="form4.havera_somatoconservacao_avancada"
            name="havera_somatoconservacao_avancada"
          />

          <samp class="title-input-blue">Natural</samp>

          <input
            class="c1-13"
            type="checkbox"
            v-model="form4.havera_somatoconservacao_avancada"
            name="havera_somatoconservacao_avancada"
          />

          <samp class="title-input-blue">Artificial</samp>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="checkbox-wrapper-13">
          <label class="form-title">VEU</label>

          <input
            class="c1-13"
            type="checkbox"
            v-model="form4.havera_somatoconservacao_avancada"
            name="havera_somatoconservacao_avancada"
          />

          <samp class="title-input-blue">Padrão</samp>

          <input
            class="c1-13"
            type="checkbox"
            v-model="form4.havera_somatoconservacao_avancada"
            name="havera_somatoconservacao_avancada"
          />

          <samp class="title-input-blue">Medio</samp>

          <input
            class="c1-13"
            type="checkbox"
            v-model="form4.havera_somatoconservacao_avancada"
            name="havera_somatoconservacao_avancada"
          />

          <samp class="title-input-blue">Luxo</samp>
        </div>
      </div>
      <div class="col">
        <div class="checkbox-wrapper-13">
          <label class="form-title">VESTE</label>

          <input
            class="c1-13"
            type="checkbox"
            v-model="form4.havera_somatoconservacao_avancada"
            name="havera_somatoconservacao_avancada"
          />

          <samp class="title-input-blue">Padrão</samp>

          <input
            class="c1-13"
            type="checkbox"
            v-model="form4.havera_somatoconservacao_avancada"
            name="havera_somatoconservacao_avancada"
          />

          <samp class="title-input-blue">Medio</samp>

          <input
            class="c1-13"
            type="checkbox"
            v-model="form4.havera_somatoconservacao_avancada"
            name="havera_somatoconservacao_avancada"
          />

          <samp class="title-input-blue">Luxo</samp>
        </div>
      </div>
    </div>
    
  </div>
</template>


<script>
// import axios from "axios";
import { mask } from "vue-the-mask";

export default {
  name: "FormTanatorioStep4",
  props: {
    showForm: Number,
    sendFormNow: Boolean,
    showView: String,
  },
  methods: {},
  components: {},
  data() {
    return {
      form4: {},
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
