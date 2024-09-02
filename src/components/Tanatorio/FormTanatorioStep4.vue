 <template>
  <div v-if="showForm == 4" style="height: 600px">
    <label class="form-title m-3">Tanatopraxia</label>

    <div class="row">
      <div class="col">
        <div class="checkbox-wrapper-13">
          <label class="form-title">HIGIENIZAÇÃO CORPORAL</label>

          <input
            class="c1-13"
            type="checkbox"
            v-model="form4.higienizacao_corporal"
            value="Sim"
          />

          <span class="title-input-blue">Sim</span>

          <input
            class="c1-13"
            type="checkbox"
            v-model="form4.higienizacao_corporal"
            value="Não"
          />

          <span class="title-input-blue">Não</span>
        </div>
      </div>
      <div class="col">
        <div class="checkbox-wrapper-13">
          <label class="form-title">SOMATOCONSERVAÇÃO</label>

          <input
            class="c1-13"
            type="checkbox"
            v-model="form4.somatoconservacao"
            value="Sim"
          />

          <span class="title-input-blue">Sim</span>

          <input
            class="c1-13"
            type="checkbox"
            v-model="form4.somatoconservacao"
            value="Não"
          />

          <span class="title-input-blue">Não</span>
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
            v-model="form4.tamponamento"
            value="Sim"
          />

          <span class="title-input-blue">Sim</span>

          <input
            class="c1-13"
            type="checkbox"
            v-model="form4.tamponamento"
            value="Não"
          />

          <span class="title-input-blue">Não</span>
        </div>
      </div>
      <div class="col">
        <div class="checkbox-wrapper-13">
          <label class="form-title">FECHAMENTO BUCO MAXILO</label>

          <input
            class="c1-13"
            type="checkbox"
            v-model="form4.fechamento_buco_maxilo"
            value="Sutura"
          />

          <span class="title-input-blue">Sutura</span>

          <input
            class="c1-13"
            type="checkbox"
            v-model="form4.fechamento_buco_maxilo"
            value="Colagem"
          />

          <span class="title-input-blue">Colagem</span>
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
            v-model="form4.secagem_fechamento_ocular"
            value="Sim"
          />

          <span class="title-input-blue">Sim</span>

          <input
            class="c1-13"
            type="checkbox"
            v-model="form4.secagem_fechamento_ocular"
            value="Não"
          />

          <span class="title-input-blue">Não</span>
        </div>
      </div>
      <div class="col">
        <div class="checkbox-wrapper-13">
          <label class="form-title">REPARAÇÃO CORPORAL</label>

          <input
            class="c1-13"
            type="checkbox"
            v-model="form4.reparacao_corporal"
            value="Simples"
          />

          <span class="title-input-blue">Simples</span>

          <input
            class="c1-13"
            type="checkbox"
            v-model="form4.reparacao_corporal"
            value="Moderada"
          />

          <span class="title-input-blue">Moderada</span>
          <input
            class="c1-13"
            type="checkbox"
            v-model="form4.reparacao_corporal"
            value="Complexa"
          />

          <span class="title-input-blue">Complexa</span>
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
            v-model="form4.reparacao_facial"
            value="Simples"
          />

          <span class="title-input-blue">Simples</span>

          <input
            class="c1-13"
            type="checkbox"
            v-model="form4.reparacao_facial"
            value="Moderada"
          />

          <span class="title-input-blue">Moderada</span>
          <input
            class="c1-13"
            type="checkbox"
            v-model="form4.reparacao_facial"
            value="Complexa"
          />

          <span class="title-input-blue">Complexa</span>
        </div>
      </div>
      <div class="col">
        <div class="checkbox-wrapper-13">
          <label class="form-title">CABELO</label>

          <input
            class="c1-13"
            type="checkbox"
            v-model="form4.cabelo"
            value="Aparar"
          />

          <span class="title-input-blue">Aparar</span>

          <input
            class="c1-13"
            type="checkbox"
            v-model="form4.cabelo"
            value="Raspar"
          />

          <span class="title-input-blue">Raspar</span>
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
            v-model="form4.barba"
            value="Aparar"
          />

          <span class="title-input-blue">Aparar</span>

          <input
            class="c1-13"
            type="checkbox"
            v-model="form4.barba"
            value="Raspar"
          />

          <span class="title-input-blue">Raspar</span>
        </div>
      </div>
      <div class="col">
        <div class="checkbox-wrapper-13">
          <label class="form-title">BIGODE</label>

          <input
            class="c1-13"
            type="checkbox"
            v-model="form4.bigode"
            value="Aparar"
          />

          <span class="title-input-blue">Aparar</span>

          <input
            class="c1-13"
            type="checkbox"
            v-model="form4.bigode"
            value="Raspar"
          />

          <span class="title-input-blue">Raspar</span>
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
            v-model="form4.corte_unhas"
            value="Sim"
          />

          <span class="title-input-blue">Sim</span>

          <input
            class="c1-13"
            type="checkbox"
            v-model="form4.corte_unhas"
            value="Não"
          />

          <span class="title-input-blue">Não</span>
        </div>
      </div>
      <div class="col">
        <div class="checkbox-wrapper-13">
          <label class="form-title">LIMPEZA E HIDRATAÇÃO FACIAL</label>

          <input
            class="c1-13"
            type="checkbox"
            v-model="form4.limpeza_hidratacao_facial"
            value="Sim"
          />

          <span class="title-input-blue">Sim</span>

          <input
            class="c1-13"
            type="checkbox"
            v-model="form4.limpeza_hidratacao_facial"
            value="Não"
          />

          <span class="title-input-blue">Não</span>
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
            v-model="form4.maquiagem"
            value="Sim"
          />

          <span class="title-input-blue">Sim</span>

          <input
            class="c1-13"
            type="checkbox"
            v-model="form4.maquiagem"
            value="Não"
          />

          <span class="title-input-blue">Não</span>
        </div>
      </div>
      <div class="col">
        <div class="checkbox-wrapper-13">
          <label class="form-title">ORNAMENTAÇÃO</label>

          <input
            class="c1-13"
            type="checkbox"
            v-model="form4.ornamentacao"
            value="Natural"
          />

          <span class="title-input-blue">Natural</span>

          <input
            class="c1-13"
            type="checkbox"
            v-model="form4.ornamentacao"
            value="Artificial"
          />

          <span class="title-input-blue">Artificial</span>
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
            v-model="form4.veu"
            value="Padrão"
          />

          <span class="title-input-blue">Padrão</span>

          <input
            class="c1-13"
            type="checkbox"
            v-model="form4.veu"
            value="Medio"
          />

          <span class="title-input-blue">Medio</span>

          <input
            class="c1-13"
            type="checkbox"
            v-model="form4.veu"
            value="Luxo"
          />

          <span class="title-input-blue">Luxo</span>
        </div>
      </div>
      <div class="col">
        <div class="checkbox-wrapper-13">
          <label class="form-title">VESTE</label>

          <input
            class="c1-13"
            type="checkbox"
            v-model="form4.veste"
            value="Padrão"
          />

          <span class="title-input-blue">Padrão</span>

          <input
            class="c1-13"
            type="checkbox"
            v-model="form4.veste"
            value="Medio"
          />

          <span class="title-input-blue">Medio</span>

          <input
            class="c1-13"
            type="checkbox"
            v-model="form4.veste"
            value="Luxo"
          />

          <span class="title-input-blue">Luxo</span>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { ref } from "vue";
import { mask } from "vue-the-mask";

export default {
  name: "FormTanatorioStep4",
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
      form4: {
        higienizacao_corporal: ref([]),
        somatoconservacao: ref([]),
        tamponamento: ref([]),
        fechamento_buco_maxilo: ref([]),
        secagem_fechamento_ocular: ref([]),
        reparacao_corporal: ref([]),
        reparacao_facial: ref([]),
        cabelo: ref([]),
        barba: ref([]),
        bigode: ref([]),
        corte_unhas: ref([]),
        limpeza_hidratacao_facial: ref([]),
        maquiagem: ref([]),
        ornamentacao: ref([]),
        veu: ref([]),
        veste: ref([]),
      },
    };
  },
  directives: { mask },
  watch: {
    sendFormNow: function () {
      this.$emit("set-data-form", this.form4);
    },

    infoTanato: function (item) {
      const tanato = JSON.parse(JSON.stringify(item));

      if (tanato) {
        this.form4.higienizacao_corporal.push(tanato.data[0].higienizacao_corporal);
        this.form4.somatoconservacao.push(tanato.data[0].somatoconservacao);
        this.form4.tamponamento.push(tanato.data[0].tamponamento);
        this.form4.fechamento_buco_maxilo.push(tanato.data[0].fechamento_buco_maxilo);
        this.form4.secagem_fechamento_ocular.push(tanato.data[0].secagem_fechamento_ocular);
        this.form4.reparacao_corporal.push(tanato.data[0].reparacao_corporal);
        this.form4.reparacao_facial.push(tanato.data[0].reparacao_facial);
        this.form4.cabelo.push(tanato.data[0].cabelo);
        this.form4.barba.push(tanato.data[0].barba);
        this.form4.bigode.push(tanato.data[0].bigode);
        this.form4.corte_unhas.push(tanato.data[0].corte_unhas);
        this.form4.limpeza_hidratacao_facial.push(tanato.data[0].limpeza_hidratacao_facial);
        this.form4.maquiagem.push(tanato.data[0].maquiagem);
        this.form4.ornamentacao.push(tanato.data[0].ornamentacao);
        this.form4.veu.push(tanato.data[0].veu);
        this.form4.veste.push(tanato.data[0].veste);
      }
    },
  },
};
</script>
