 <template>
  <div v-if="showForm == 3">
    <label class="form-title m-3">Estado do Corpo</label>

    <div class="row">
      <div class="col">
        <div class="checkbox-wrapper-13">
          <div class="card-border" style="height: auto">
            <label class="form-title">PATOLOGICA</label>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form3.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <samp class="title-input-blue">Cardíaca</samp>

              <input
                class="c1-13"
                type="checkbox"
                v-model="form3.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <samp class="title-input-blue">Neural</samp>
            </div>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form3.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <samp class="title-input-blue">Cerebro Vascular</samp>
            </div>

            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form3.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <samp class="title-input-blue">Respiratoria</samp>
            </div>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form3.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <samp class="title-input-blue">Intestinal</samp>

              <input
                class="c1-13"
                type="checkbox"
                v-model="form3.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <samp class="title-input-blue">Hepatica</samp>

              <input
                class="c1-13"
                type="checkbox"
                v-model="form3.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <samp class="title-input-blue">Renal</samp>
            </div>

            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form3.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <samp class="title-input-blue">Sexualmente Transmissivel</samp>
            </div>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form3.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <samp class="title-input-blue">Neoplasica</samp>

              <input
                class="c1-13"
                type="checkbox"
                v-model="form3.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <samp class="title-input-blue">Viral</samp>
            </div>
            <br />
            <div>
              <span class="title-input-blue">Outro</span>

              <input
                type="text"
                v-model="form3.nome_completo"
                class="input-resp"
                name="nome_completo"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="checkbox-wrapper-13">
          <div class="card-border" style="height: auto">
            <label class="form-title">ACIDENTAL</label>

            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form3.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <samp class="title-input-blue">Trânsito</samp>

              <input
                class="c1-13"
                type="checkbox"
                v-model="form3.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <samp class="title-input-blue">Domicilio</samp>
            </div>

            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form3.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <samp class="title-input-blue">Trabalho</samp>

              <input
                class="c1-13"
                type="checkbox"
                v-model="form3.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <samp class="title-input-blue">Natural</samp>
            </div>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form3.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <samp class="title-input-blue">Esportivo</samp>

              <input
                class="c1-13"
                type="checkbox"
                v-model="form3.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <samp class="title-input-blue">Recreativo</samp>
            </div>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form3.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <samp class="title-input-blue">Aquatico</samp>

              <input
                class="c1-13"
                type="checkbox"
                v-model="form3.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <samp class="title-input-blue">Eletrico</samp>
            </div>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form3.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <samp class="title-input-blue">Quimico</samp>

              <input
                class="c1-13"
                type="checkbox"
                v-model="form3.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <samp class="title-input-blue">Incêndio</samp>
            </div>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form3.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <samp class="title-input-blue">Alimentar</samp>
            </div>
            <br />
            <div>
              <span class="title-input-blue">Outro</span>

              <input
                type="text"
                v-model="form3.nome_completo"
                class="input-resp"
                name="nome_completo"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="checkbox-wrapper-13">
          <div class="card-border" style="height: auto">
            <label class="form-title">INTENSA</label>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form3.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <samp class="title-input-blue">Homicidio</samp>
            </div>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form3.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <samp class="title-input-blue">Homicidio par Arma de Fogo</samp>
            </div>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form3.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <samp class="title-input-blue">Suicidio</samp>

              <input
                class="c1-13"
                type="checkbox"
                v-model="form3.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <samp class="title-input-blue">Fratricidio</samp>
            </div>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form3.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <samp class="title-input-blue">Patricidio</samp>

              <input
                class="c1-13"
                type="checkbox"
                v-model="form3.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <samp class="title-input-blue">Matricidio</samp>
            </div>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form3.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <samp class="title-input-blue">Filicidio Paterno</samp>
            </div>

            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form3.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <samp class="title-input-blue">Filicidio Materno</samp>
            </div>
            <br />
            <div>
              <span class="title-input-blue">Outro</span>

              <input
                type="text"
                v-model="form3.nome_completo"
                class="input-resp"
                name="nome_completo"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-4">
          <div class="checkbox-wrapper-13">
            <div class="card-border" style="height: auto">
              <label class="form-title">NATURAL</label>

              <div>
                <input
                  class="c1-13"
                  type="checkbox"
                  v-model="form3.havera_somatoconservacao_avancada"
                  name="havera_somatoconservacao_avancada"
                />

                <samp class="title-input-blue">Natural</samp>
              </div>

              <br />

              <label class="form-title">INTOXICAÇÃO</label>

              <div>
                <input
                  class="c1-13"
                  type="checkbox"
                  v-model="form3.havera_somatoconservacao_avancada"
                  name="havera_somatoconservacao_avancada"
                />

                <samp class="title-input-blue">Alimentar</samp>
              </div>

              <div>
                <input
                  class="c1-13"
                  type="checkbox"
                  v-model="form3.havera_somatoconservacao_avancada"
                  name="havera_somatoconservacao_avancada"
                />

                <samp class="title-input-blue">Quimica</samp>
              </div>
              
              <br>

              <div>
                <span class="title-input-blue">Declaração de Obito N</span>

                <input
                  type="text"
                  v-model="form3.nome_completo"
                  class="input-resp"
                  name="nome_completo"
                />
              </div>
            </div>
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
  name: "FormTanatorioStep3",
  props: {
    showForm: Number,
    sendFormNow: Boolean,
    showView: String,
  },
  methods: {},
  components: {},
  data() {
    return {
      form3: {
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
      this.$emit("set-data-form", this.form3);
    },
  },
};
</script>
