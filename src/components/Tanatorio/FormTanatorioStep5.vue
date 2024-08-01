 <template>
  <div v-if="showForm == 5" style="height: 820px">
    <label class="form-title m-3">Somatoconservação</label>

    <div class="row">
      <div class="col">
        <div class="checkbox-wrapper-13" style="width: 98%">
          <div class="card-border">
            <label class="form-title">INJEÇÃO ARTERIAL</label>

            <div>
              <span class="title-input-blue">Tronco Braquiocefalico:</span>

              <input
                class="c1-13"
                type="checkbox"
                v-model="form5.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />
            </div>

            <div>
              <span class="title-input-blue">Aorta Abdominal:</span>

              <input
                class="c1-13"
                type="checkbox"
                v-model="form5.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />
            </div>

            <div>
              <span class="title-input-blue">Carotida:</span>

              <input
                class="c1-13"
                type="checkbox"
                v-model="form5.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <span class="title-input-blue">Esquerda</span>

              <input
                class="c1-13"
                type="checkbox"
                v-model="form5.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <span class="title-input-blue">Direira</span>
            </div>

            <div>
              <span class="title-input-blue">Subclavia:</span>

              <input
                class="c1-13"
                type="checkbox"
                v-model="form5.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <span class="title-input-blue">Esquerda</span>

              <input
                class="c1-13"
                type="checkbox"
                v-model="form5.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <span class="title-input-blue">Direira</span>
            </div>

            <div>
              <span class="title-input-blue">Braquial:</span>

              <input
                class="c1-13"
                type="checkbox"
                v-model="form5.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <span class="title-input-blue">Esquerda</span>

              <input
                class="c1-13"
                type="checkbox"
                v-model="form5.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <span class="title-input-blue">Direira</span>
            </div>

            <div>
              <span class="title-input-blue">Iliaca Comum:</span>

              <input
                class="c1-13"
                type="checkbox"
                v-model="form5.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <span class="title-input-blue">Esquerda</span>

              <input
                class="c1-13"
                type="checkbox"
                v-model="form5.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <span class="title-input-blue">Direira</span>
            </div>

            <div>
              <span class="title-input-blue">Femoral:</span>

              <input
                class="c1-13"
                type="checkbox"
                v-model="form5.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <span class="title-input-blue">Esquerda</span>

              <input
                class="c1-13"
                type="checkbox"
                v-model="form5.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <span class="title-input-blue">Direira</span>
            </div>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="checkbox-wrapper-13" style="width: 98%; margin-left: 1%">
          <div class="card-border">
            <label class="form-title">TRATAMENTO CAVITARIO</label>

            <div>
              <span class="title-input-blue">Aspiração Torax-Abdômen:</span>

              <input
                class="c1-13"
                type="checkbox"
                v-model="form5.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <span class="title-input-blue">Sim</span>

              <input
                class="c1-13"
                type="checkbox"
                v-model="form5.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <span class="title-input-blue">Não</span>
            </div>
            <div>
              <span class="title-input-blue">Embrulho de Visceras:</span>

              <input
                class="c1-13"
                type="checkbox"
                v-model="form5.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <span class="title-input-blue">Sim</span>

              <input
                class="c1-13"
                type="checkbox"
                v-model="form5.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <span class="title-input-blue">Não</span>
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="checkbox-wrapper-13" style="width: 98%; margin-left: -1%">
          <div class="card-border">
            <label class="form-title">OUTROS</label>

            <div>
              <span class="title-input-blue"
                >Pré Injeção de Fluido Solvente Descoagulante:</span
              >
            </div>

            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form5.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <span class="title-input-blue">Sim</span>

              <input
                class="c1-13"
                type="checkbox"
                v-model="form5.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <span class="title-input-blue">Não</span>
            </div>

            <div>
              <span class="title-input-blue"
                >Injeção Hipodermico em Areas Obstruidas:</span
              >
            </div>

            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form5.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <span class="title-input-blue">Sim</span>

              <input
                class="c1-13"
                type="checkbox"
                v-model="form5.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <span class="title-input-blue">Não</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row" style="margin: 4px">
      <div class="col">
        <div class="small-card-border">
          <div>
            <span class="title-input-blue">Fluido Arterial</span>

            <input
              type="text"
              class="input-resp"
              v-model="form5.nome_completo"
              name="nome_completo"
            />
          </div>

          <div>
            <span class="title-input-blue">Volume (Litros)</span>

            <input
              type="text"
              class="input-resp"
              v-model="form5.nome_completo"
              name="nome_completo"
            />
          </div>

          <div>
            <span class="title-input-blue">N de Aplicações</span>

            <input
              type="text"
              class="input-resp"
              v-model="form5.nome_completo"
              name="nome_completo"
            />
          </div>

          <div>
            <span class="title-input-blue">Marca do Produto</span>

            <input
              type="text"
              class="input-resp"
              v-model="form5.nome_completo"
              name="nome_completo"
            />
          </div>
        </div>
      </div>

      <div class="col">
        <div class="small-card-border">
          <div>
            <span class="title-input-blue">Fluido Cavidade</span>

            <input
              type="text"
              class="input-resp"
              v-model="form5.nome_completo"
              name="nome_completo"
            />
          </div>

          <div>
            <span class="title-input-blue">Volume (Litros)</span>

            <input
              type="text"
              class="input-resp"
              v-model="form5.nome_completo"
              name="nome_completo"
            />
          </div>

          <div>
            <span class="title-input-blue">N de Aplicações</span>

            <input
              type="text"
              class="input-resp"
              v-model="form5.nome_completo"
              name="nome_completo"
            />
          </div>

          <div>
            <span class="title-input-blue">Marca do Produto</span>

            <input
              type="text"
              class="input-resp"
              v-model="form5.nome_completo"
              name="nome_completo"
            />
          </div>
        </div>
      </div>

      <div class="col">
        <div class="small-card-border">
          <div>
            <span class="title-input-blue">Fluido</span>

            <input
              type="text"
              class="input-resp"
              v-model="form5.nome_completo"
              name="nome_completo"
            />
          </div>

          <div>
            <span class="title-input-blue">Volume (Litros)</span>

            <input
              type="text"
              class="input-resp"
              v-model="form5.nome_completo"
              name="nome_completo"
            />
          </div>

          <div>
            <span class="title-input-blue">N de Aplicações</span>

            <input
              type="text"
              class="input-resp"
              v-model="form5.nome_completo"
              name="nome_completo"
            />
          </div>

          <div>
            <span class="title-input-blue">Marca do Produto</span>

            <input
              type="text"
              class="input-resp"
              v-model="form5.nome_completo"
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
      form5: {
        tronco_braquiocefalico: "",
        aorta_abdominal: "",
        carotida: "",
        subclavia: "",
        braquial: "",
        iliaca_comum: "",
        femoral: "",
        aspiracao_torax_abdomen: "",
        embrulho_visceras: "",
        pre_injeção_fluido_solvente_descoagulante: "",
        injecao_hipodermico_areas_obstruidas: "",
        fluido_arterial: "",
        volume_arterial: "",
        n_aplicacoes_arterial: "",
        marca_produto_arterial: "",
        fluido_cavidade: "",
        volume_cavidade: "",
        n_aplicacoes_cavidade: "",
        marca_produto_cavidade: "",
        fluido_injecao: "",
        volume_injecao: "",
        n_aplicacoes_injecao: "",
        marca_produto_injecao: "",
      },
    };
  },
  directives: { mask },
  watch: {
    sendFormNow: function () {
      this.$emit("set-data-form", this.form5);
    },
  },
};
</script>
