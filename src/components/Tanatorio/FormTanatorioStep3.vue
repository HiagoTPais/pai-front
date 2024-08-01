 <template>
  <div v-if="showForm == 3" style="height: 780px">
    <label class="form-title m-3">Causa da Morte</label>

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

              <span class="title-input-blue">Cardíaca</span>

              <input
                class="c1-13"
                type="checkbox"
                v-model="form3.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <span class="title-input-blue">Neural</span>
            </div>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form3.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <span class="title-input-blue">Cerebro Vascular</span>
            </div>

            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form3.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <span class="title-input-blue">Respiratoria</span>
            </div>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form3.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <span class="title-input-blue">Intestinal</span>

              <input
                class="c1-13"
                type="checkbox"
                v-model="form3.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <span class="title-input-blue">Hepatica</span>

              <input
                class="c1-13"
                type="checkbox"
                v-model="form3.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <span class="title-input-blue">Renal</span>
            </div>

            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form3.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <span class="title-input-blue">Sexualmente Transmissivel</span>
            </div>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form3.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <span class="title-input-blue">Neoplasica</span>

              <input
                class="c1-13"
                type="checkbox"
                v-model="form3.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <span class="title-input-blue">Viral</span>
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

              <span class="title-input-blue">Trânsito</span>

              <input
                class="c1-13"
                type="checkbox"
                v-model="form3.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <span class="title-input-blue">Domicilio</span>
            </div>

            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form3.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <span class="title-input-blue">Trabalho</span>

              <input
                class="c1-13"
                type="checkbox"
                v-model="form3.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <span class="title-input-blue">Natural</span>
            </div>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form3.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <span class="title-input-blue">Esportivo</span>

              <input
                class="c1-13"
                type="checkbox"
                v-model="form3.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <span class="title-input-blue">Recreativo</span>
            </div>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form3.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <span class="title-input-blue">Aquatico</span>

              <input
                class="c1-13"
                type="checkbox"
                v-model="form3.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <span class="title-input-blue">Eletrico</span>
            </div>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form3.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <span class="title-input-blue">Quimico</span>

              <input
                class="c1-13"
                type="checkbox"
                v-model="form3.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <span class="title-input-blue">Incêndio</span>
            </div>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form3.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <span class="title-input-blue">Alimentar</span>
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

              <span class="title-input-blue">Homicidio</span>
            </div>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form3.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <span class="title-input-blue">Homicidio par Arma de Fogo</span>
            </div>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form3.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <span class="title-input-blue">Suicidio</span>

              <input
                class="c1-13"
                type="checkbox"
                v-model="form3.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <span class="title-input-blue">Fratricidio</span>
            </div>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form3.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <span class="title-input-blue">Patricidio</span>

              <input
                class="c1-13"
                type="checkbox"
                v-model="form3.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <span class="title-input-blue">Matricidio</span>
            </div>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form3.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <span class="title-input-blue">Filicidio Paterno</span>
            </div>

            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form3.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <span class="title-input-blue">Filicidio Materno</span>
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

                <span class="title-input-blue">Natural</span>
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

                <span class="title-input-blue">Alimentar</span>
              </div>

              <div>
                <input
                  class="c1-13"
                  type="checkbox"
                  v-model="form3.havera_somatoconservacao_avancada"
                  name="havera_somatoconservacao_avancada"
                />

                <span class="title-input-blue">Quimica</span>
              </div>

              <br />

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
        patologica: "",
        acidental: "",
        intensa: "",
        natural: "",
        intoxicação: "",
        patologica_outros: "",
        acidental_outros: "",
        intensa_outros: "",
        natural_outros: "",
        intoxicação_outros: "",
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
