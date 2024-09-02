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
                v-model="form5.tronco_braquiocefalico"
                value="Sim"
              />
            </div>

            <div>
              <span class="title-input-blue">Aorta Abdominal:</span>

              <input
                class="c1-13"
                type="checkbox"
                v-model="form5.aorta_abdominal"
                value="Sim"
              />
            </div>

            <div>
              <span class="title-input-blue">Carotida:</span>

              <input
                class="c1-13"
                type="checkbox"
                v-model="form5.carotida"
                value="Esquerda"
              />

              <span class="title-input-blue">Esquerda</span>

              <input
                class="c1-13"
                type="checkbox"
                v-model="form5.carotida"
                value="Direira"
              />

              <span class="title-input-blue">Direira</span>
            </div>

            <div>
              <span class="title-input-blue">Subclavia:</span>

              <input
                class="c1-13"
                type="checkbox"
                v-model="form5.subclavia"
                value="Esquerda"
              />

              <span class="title-input-blue">Esquerda</span>

              <input
                class="c1-13"
                type="checkbox"
                v-model="form5.subclavia"
                value="Direira"
              />

              <span class="title-input-blue">Direira</span>
            </div>

            <div>
              <span class="title-input-blue">Braquial:</span>

              <input
                class="c1-13"
                type="checkbox"
                v-model="form5.braquial"
                value="Esquerda"
              />

              <span class="title-input-blue">Esquerda</span>

              <input
                class="c1-13"
                type="checkbox"
                v-model="form5.braquial"
                value="Direira"
              />

              <span class="title-input-blue">Direira</span>
            </div>

            <div>
              <span class="title-input-blue">Iliaca Comum:</span>

              <input
                class="c1-13"
                type="checkbox"
                v-model="form5.iliaca_comum"
                value="Esquerda"
              />

              <span class="title-input-blue">Esquerda</span>

              <input
                class="c1-13"
                type="checkbox"
                v-model="form5.iliaca_comum"
                value="Direira"
              />

              <span class="title-input-blue">Direira</span>
            </div>

            <div>
              <span class="title-input-blue">Femoral:</span>

              <input
                class="c1-13"
                type="checkbox"
                v-model="form5.femoral"
                value="Esquerda"
              />

              <span class="title-input-blue">Esquerda</span>

              <input
                class="c1-13"
                type="checkbox"
                v-model="form5.femoral"
                value="Direira"
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
              <div>
                <span class="title-input-blue">Aspiração Torax-Abdômen:</span>
              </div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form5.aspiracao_torax_abdomen"
                value="Sim"
              />

              <span class="title-input-blue">Sim</span>

              <input
                class="c1-13"
                type="checkbox"
                v-model="form5.aspiracao_torax_abdomen"
                value="Não"
              />

              <span class="title-input-blue">Não</span>
            </div>
            <div>
              <div>
                <span class="title-input-blue">Embrulho de Visceras:</span>
              </div>

              <input
                class="c1-13"
                type="checkbox"
                v-model="form5.embrulho_visceras"
                value="Sim"
              />

              <span class="title-input-blue">Sim</span>

              <input
                class="c1-13"
                type="checkbox"
                v-model="form5.embrulho_visceras"
                value="Não"
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
              <span class="title-input-blue">
                Pré Injeção de Fluido Solvente Descoagulante:
              </span>
            </div>

            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form5.pre_injecao_fluido_solvente_descoagulante"
                value="Sim"
              />

              <span class="title-input-blue">Sim</span>

              <input
                class="c1-13"
                type="checkbox"
                v-model="form5.pre_injecao_fluido_solvente_descoagulante"
                value="Não"
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
                v-model="form5.injecao_hipodermico_areas_obstruidas"
                value="Sim"
              />

              <span class="title-input-blue">Sim</span>

              <input
                class="c1-13"
                type="checkbox"
                v-model="form5.injecao_hipodermico_areas_obstruidas"
                value="Não"
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
              v-model="form5.fluido_arterial"
            />
          </div>

          <div>
            <span class="title-input-blue">Volume (Litros)</span>

            <input
              type="text"
              class="input-resp"
              v-model="form5.volume_arterial"
            />
          </div>

          <div>
            <span class="title-input-blue">N de Aplicações</span>

            <input
              type="text"
              class="input-resp"
              v-model="form5.n_aplicacoes_arterial"
            />
          </div>

          <div>
            <span class="title-input-blue">Marca do Produto</span>

            <input
              type="text"
              class="input-resp"
              v-model="form5.marca_produto_arterial"
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
              v-model="form5.fluido_cavidade"
            />
          </div>

          <div>
            <span class="title-input-blue">Volume (Litros)</span>

            <input
              type="text"
              class="input-resp"
              v-model="form5.volume_cavidade"
            />
          </div>

          <div>
            <span class="title-input-blue">N de Aplicações</span>

            <input
              type="text"
              class="input-resp"
              v-model="form5.n_aplicacoes_cavidade"
            />
          </div>

          <div>
            <span class="title-input-blue">Marca do Produto</span>

            <input
              type="text"
              class="input-resp"
              v-model="form5.marca_produto_cavidade"
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
              v-model="form5.fluido_injecao"
            />
          </div>

          <div>
            <span class="title-input-blue">Volume (Litros)</span>

            <input
              type="text"
              class="input-resp"
              v-model="form5.volume_injecao"
            />
          </div>

          <div>
            <span class="title-input-blue">N de Aplicações</span>

            <input
              type="text"
              class="input-resp"
              v-model="form5.n_aplicacoes_injecao"
            />
          </div>

          <div>
            <span class="title-input-blue">Marca do Produto</span>

            <input
              type="text"
              class="input-resp"
              v-model="form5.marca_produto_injecao"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { ref } from "vue";
import { mask } from "vue-the-mask";

export default {
  name: "FormTanatorioStep5",
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
      form5: {
        tronco_braquiocefalico: ref([]),
        aorta_abdominal: ref([]),
        carotida: ref([]),
        subclavia: ref([]),
        braquial: ref([]),
        iliaca_comum: ref([]),
        femoral: ref([]),
        aspiracao_torax_abdomen: ref([]),
        embrulho_visceras: ref([]),
        pre_injecao_fluido_solvente_descoagulante: ref([]),
        injecao_hipodermico_areas_obstruidas: ref([]),
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

    infoTanato: function (item) {
      const tanato = JSON.parse(JSON.stringify(item));

      if (tanato) {
        this.form5.tronco_braquiocefalico.push(
          tanato.data[0].tronco_braquiocefalico
        );
        this.form5.aorta_abdominal.push(tanato.data[0].aorta_abdominal);
        this.form5.carotida.push(tanato.data[0].carotida);
        this.form5.subclavia.push(tanato.data[0].subclavia);
        this.form5.braquial.push(tanato.data[0].braquial);
        this.form5.iliaca_comum.push(tanato.data[0].iliaca_comum);
        this.form5.femoral.push(tanato.data[0].femoral);
        this.form5.aspiracao_torax_abdomen.push(
          tanato.data[0].aspiracao_torax_abdomen
        );
        this.form5.embrulho_visceras.push(tanato.data[0].embrulho_visceras);
        this.form5.pre_injecao_fluido_solvente_descoagulante.push(
          tanato.data[0].pre_injecao_fluido_solvente_descoagulante
        );
        this.form5.injecao_hipodermico_areas_obstruidas.push(
          tanato.data[0].injecao_hipodermico_areas_obstruidas
        );

        this.form5.fluido_arterial = tanato.data[0].fluido_arterial;
        this.form5.volume_arterial = tanato.data[0].volume_arterial;
        this.form5.n_aplicacoes_arterial = tanato.data[0].n_aplicacoes_arterial;
        this.form5.marca_produto_arterial =
          tanato.data[0].marca_produto_arterial;
        this.form5.fluido_cavidade = tanato.data[0].fluido_cavidade;
        this.form5.volume_cavidade = tanato.data[0].volume_cavidade;
        this.form5.n_aplicacoes_cavidade = tanato.data[0].n_aplicacoes_cavidade;
        this.form5.marca_produto_cavidade =
          tanato.data[0].marca_produto_cavidade;
        this.form5.fluido_injecao = tanato.data[0].fluido_injecao;
        this.form5.volume_injecao = tanato.data[0].volume_injecao;
        this.form5.n_aplicacoes_injecao = tanato.data[0].n_aplicacoes_injecao;
        this.form5.marca_produto_injecao = tanato.data[0].marca_produto_injecao;
      }
    },
  },
};
</script>
