 <template>
  <div v-if="showForm == 5" style="height: 820px">
    <label class="form-title m-3">Somatoconservação</label>

    <div class="row">
      <div class="col">
        <div class="checkbox-wrapper-13">
          <div class="card-border">
            <label class="form-title">INJEÇÃO ARTERIAL</label>

            <div>
              <samp class="title-input-blue">Tronco Braquiocefalico:</samp>

              <input
                class="c1-13"
                type="checkbox"
                v-model="form1.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />
            </div>

            <div>
              <samp class="title-input-blue">Aorta Abdominal:</samp>

              <input
                class="c1-13"
                type="checkbox"
                v-model="form1.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />
            </div>

            <div>
              <samp class="title-input-blue">Carotida:</samp>

              <input
                class="c1-13"
                type="checkbox"
                v-model="form1.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <samp class="title-input-blue">Esquerda</samp>

              <input
                class="c1-13"
                type="checkbox"
                v-model="form1.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <samp class="title-input-blue">Direira</samp>
            </div>

            <div>
              <samp class="title-input-blue">Subclavia:</samp>

              <input
                class="c1-13"
                type="checkbox"
                v-model="form1.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <samp class="title-input-blue">Esquerda</samp>

              <input
                class="c1-13"
                type="checkbox"
                v-model="form1.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <samp class="title-input-blue">Direira</samp>
            </div>

            <div>
              <samp class="title-input-blue">Braquial:</samp>

              <input
                class="c1-13"
                type="checkbox"
                v-model="form1.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <samp class="title-input-blue">Esquerda</samp>

              <input
                class="c1-13"
                type="checkbox"
                v-model="form1.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <samp class="title-input-blue">Direira</samp>
            </div>

            <div>
              <samp class="title-input-blue">Iliaca Comum:</samp>

              <input
                class="c1-13"
                type="checkbox"
                v-model="form1.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <samp class="title-input-blue">Esquerda</samp>

              <input
                class="c1-13"
                type="checkbox"
                v-model="form1.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <samp class="title-input-blue">Direira</samp>
            </div>

            <div>
              <samp class="title-input-blue">Femoral:</samp>

              <input
                class="c1-13"
                type="checkbox"
                v-model="form1.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <samp class="title-input-blue">Esquerda</samp>

              <input
                class="c1-13"
                type="checkbox"
                v-model="form1.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <samp class="title-input-blue">Direira</samp>
            </div>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="checkbox-wrapper-13">
          <div class="card-border">
            <label class="form-title">OUTROS CONSERVANTES</label>

            <div>
              <samp class="title-input-blue">Pó Conservantes:</samp>

              <input
                class="c1-13"
                type="checkbox"
                v-model="form1.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <samp class="title-input-blue">Sim</samp>

              <input
                class="c1-13"
                type="checkbox"
                v-model="form1.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <samp class="title-input-blue">Não</samp>
            </div>
            <div>
              <samp class="title-input-blue">Gel Conservantes:</samp>

              <input
                class="c1-13"
                type="checkbox"
                v-model="form1.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <samp class="title-input-blue">Sim</samp>

              <input
                class="c1-13"
                type="checkbox"
                v-model="form1.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <samp class="title-input-blue">Não</samp>
            </div>
            <div>
              <samp class="title-input-blue">Cauterizante:</samp>

              <input
                class="c1-13"
                type="checkbox"
                v-model="form1.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <samp class="title-input-blue">Sim</samp>

              <input
                class="c1-13"
                type="checkbox"
                v-model="form1.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <samp class="title-input-blue">Não</samp>
            </div>
            <div>
              <samp class="title-input-blue">Alcool 70:</samp>

              <input
                class="c1-13"
                type="checkbox"
                v-model="form1.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <samp class="title-input-blue">Sim</samp>

              <input
                class="c1-13"
                type="checkbox"
                v-model="form1.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <samp class="title-input-blue">Não</samp>
            </div>
            <div>
              <samp class="title-input-blue">Glicerina:</samp>

              <input
                class="c1-13"
                type="checkbox"
                v-model="form1.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <samp class="title-input-blue">Sim</samp>

              <input
                class="c1-13"
                type="checkbox"
                v-model="form1.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <samp class="title-input-blue">Não</samp>
            </div>
            <div>
              <samp class="title-input-blue">Hipoclorito:</samp>

              <input
                class="c1-13"
                type="checkbox"
                v-model="form1.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <samp class="title-input-blue">Sim</samp>

              <input
                class="c1-13"
                type="checkbox"
                v-model="form1.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <samp class="title-input-blue">Não</samp>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-6">
        <div class="checkbox-wrapper-13">
          <div class="small-card-border">
            <label class="form-title">OUTROS</label>

            <div>
              <samp class="title-input-blue"
                >Pré Injeção de Fluido Solvente Descoagulante:</samp
              >

              <input
                class="c1-13"
                type="checkbox"
                v-model="form1.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <samp class="title-input-blue">Sim</samp>

              <input
                class="c1-13"
                type="checkbox"
                v-model="form1.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <samp class="title-input-blue">Não</samp>
            </div>

            <div>
              <samp class="title-input-blue"
                >Injeção Hipodermico em Areas Obstruidas:</samp
              >

              <input
                class="c1-13"
                type="checkbox"
                v-model="form1.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <samp class="title-input-blue">Sim</samp>

              <input
                class="c1-13"
                type="checkbox"
                v-model="form1.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <samp class="title-input-blue">Não</samp>
            </div>
          </div>
        </div>
      </div>
      <div class="col-4">
        <div class="checkbox-wrapper-13">
          <div class="small-card-border">
            <label class="form-title">TRATAMENTO CAVITARIO</label>

            <div>
              <samp class="title-input-blue">Aspiração Torax-Abdômen:</samp>

              <input
                class="c1-13"
                type="checkbox"
                v-model="form1.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <samp class="title-input-blue">Sim</samp>

              <input
                class="c1-13"
                type="checkbox"
                v-model="form1.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <samp class="title-input-blue">Não</samp>
            </div>
            <div>
              <samp class="title-input-blue">Embrulho de Visceras:</samp>

              <input
                class="c1-13"
                type="checkbox"
                v-model="form1.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <samp class="title-input-blue">Sim</samp>

              <input
                class="c1-13"
                type="checkbox"
                v-model="form1.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <samp class="title-input-blue">Não</samp>
            </div>
          </div>
        </div>
      </div>
      <div class="col-2">
        <div class="checkbox-wrapper-13">
          <div class="small-card-border">
            <samp class="title-input-blue">Invalucro P/ Exumação:</samp>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form1.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <samp class="title-input-blue">Sim</samp>
            </div>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form1.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <samp class="title-input-blue">Não</samp>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row" style="margin: 4px">
      <div class="col">
        <div class="small-card-border">
          <label class="form-title">FLUIDO ARTERIAL</label>

          <div>
            <span class="title-input-blue">Volume (Litros)</span>

            <input
              type="text"
              class="input-resp"
              v-model="form1.nome_completo"
              name="nome_completo"
            />
          </div>

          <div>
            <span class="title-input-blue">N de Aplicações</span>

            <input
              type="text"
              class="input-resp"
              v-model="form1.nome_completo"
              name="nome_completo"
            />
          </div>

          <div>
            <span class="title-input-blue">Marca do Produto</span>

            <input
              type="text"
              class="input-resp"
              v-model="form1.nome_completo"
              name="nome_completo"
            />
          </div>
        </div>
      </div>

      <div class="col">
        <div class="small-card-border">
          <label class="form-title">FLUIDO CAVIDADE</label>

          <div>
            <span class="title-input-blue">Volume (Litros)</span>

            <input
              type="text"
              class="input-resp"
              v-model="form1.nome_completo"
              name="nome_completo"
            />
          </div>

          <div>
            <span class="title-input-blue">N de Aplicações</span>

            <input
              type="text"
              class="input-resp"
              v-model="form1.nome_completo"
              name="nome_completo"
            />
          </div>

          <div>
            <span class="title-input-blue">Marca do Produto</span>

            <input
              type="text"
              class="input-resp"
              v-model="form1.nome_completo"
              name="nome_completo"
            />
          </div>
        </div>
      </div>

      <div class="col">
        <div class="small-card-border">
          <label class="form-title">FLUIDO</label>

          <div>
            <span class="title-input-blue">Volume (Litros)</span>

            <input
              type="text"
              class="input-resp"
              v-model="form1.nome_completo"
              name="nome_completo"
            />
          </div>

          <div>
            <span class="title-input-blue">N de Aplicações</span>

            <input
              type="text"
              class="input-resp"
              v-model="form1.nome_completo"
              name="nome_completo"
            />
          </div>

          <div>
            <span class="title-input-blue">Marca do Produto</span>

            <input
              type="text"
              class="input-resp"
              v-model="form1.nome_completo"
              name="nome_completo"
            />
          </div>
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
      form1: {
        nome: "",
        idade: "",
        peso: "",
        altura: "",
        data_hora_obito: "",
        data_hora_atendimeto: "",
        local_obito: "",
        historico_pessoa: "",
        antecedentes_saude: "",
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
