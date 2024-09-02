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
                v-model="form3.patologica"
                value="Cardíaca"
              />

              <span class="title-input-blue">Cardíaca</span>

              <input
                class="c1-13"
                type="checkbox"
                v-model="form3.patologica"
                value="Neural"
              />

              <span class="title-input-blue">Neural</span>
            </div>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form3.patologica"
                value="Cerebro Vascular"
              />

              <span class="title-input-blue">Cerebro Vascular</span>
            </div>

            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form3.patologica"
                value="Respiratoria"
              />

              <span class="title-input-blue">Respiratoria</span>
            </div>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form3.patologica"
                value="Intestinal"
              />

              <span class="title-input-blue">Intestinal</span>

              <input
                class="c1-13"
                type="checkbox"
                v-model="form3.patologica"
                value="Hepatica"
              />

              <span class="title-input-blue">Hepatica</span>

              <input
                class="c1-13"
                type="checkbox"
                v-model="form3.patologica"
                value="Renal"
              />

              <span class="title-input-blue">Renal</span>
            </div>

            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form3.patologica"
                value="Sexualmente Transmissivel"
              />

              <span class="title-input-blue">Sexualmente Transmissivel</span>
            </div>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form3.patologica"
                value="Neoplasica"
              />

              <span class="title-input-blue">Neoplasica</span>

              <input
                class="c1-13"
                type="checkbox"
                v-model="form3.patologica"
                value="Viral"
              />

              <span class="title-input-blue">Viral</span>
            </div>
            <br />
            <div>
              <span class="title-input-blue">Outro</span>

              <input
                type="text"
                v-model="form3.patologica_outros"
                class="input-resp"
                name="patologica_outros"
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
                v-model="form3.acidental"
                value="Trânsito"
              />

              <span class="title-input-blue">Trânsito</span>

              <input
                class="c1-13"
                type="checkbox"
                v-model="form3.acidental"
                value="Domicilio"
              />

              <span class="title-input-blue">Domicilio</span>
            </div>

            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form3.acidental"
                value="Trabalho"
              />

              <span class="title-input-blue">Trabalho</span>

              <input
                class="c1-13"
                type="checkbox"
                v-model="form3.acidental"
                value="Natural"
              />

              <span class="title-input-blue">Natural</span>
            </div>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form3.acidental"
                value="Esportivo"
              />

              <span class="title-input-blue">Esportivo</span>

              <input
                class="c1-13"
                type="checkbox"
                v-model="form3.acidental"
                value="Recreativo"
              />

              <span class="title-input-blue">Recreativo</span>
            </div>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form3.acidental"
                value="Aquatico"
              />

              <span class="title-input-blue">Aquatico</span>

              <input
                class="c1-13"
                type="checkbox"
                v-model="form3.acidental"
                value="Eletrico"
              />

              <span class="title-input-blue">Eletrico</span>
            </div>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form3.acidental"
                value="Quimico"
              />

              <span class="title-input-blue">Quimico</span>

              <input
                class="c1-13"
                type="checkbox"
                v-model="form3.acidental"
                value="Incêndio"
              />

              <span class="title-input-blue">Incêndio</span>
            </div>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form3.acidental"
                value="Alimentar"
              />

              <span class="title-input-blue">Alimentar</span>
            </div>
            <br />
            <div>
              <span class="title-input-blue">Outro</span>

              <input
                type="text"
                v-model="form3.acidental_outros"
                class="input-resp"
                name="acidental_outros"
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
                v-model="form3.intensa"
                value="Homicidio"
              />

              <span class="title-input-blue">Homicidio</span>
            </div>

            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form3.intensa"
                value="Suicidio"
              />

              <span class="title-input-blue">Suicidio</span>

              <input
                class="c1-13"
                type="checkbox"
                v-model="form3.intensa"
                value="Fratricidio"
              />

              <span class="title-input-blue">Fratricidio</span>
            </div>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form3.intensa"
                value="Patricidio"
              />

              <span class="title-input-blue">Patricidio</span>

              <input
                class="c1-13"
                type="checkbox"
                v-model="form3.intensa"
                value="Matricidio"
              />

              <span class="title-input-blue">Matricidio</span>
            </div>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form3.intensa"
                value="Filicidio Paterno"
              />

              <span class="title-input-blue">Filicidio Paterno</span>
            </div>

            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form3.intensa"
                value="Filicidio Materno"
              />

              <span class="title-input-blue">Filicidio Materno</span>
            </div>
            <br />
            <div>
              <span class="title-input-blue">Outro</span>

              <input
                type="text"
                v-model="form3.intensa_outros"
                class="input-resp"
                name="intensa_outros"
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
                  v-model="form3.natural"
                  value="natural"
                />

                <span class="title-input-blue">Natural</span>
              </div>

              <br />

              <label class="form-title">INTOXICACÃO</label>

              <div>
                <input
                  class="c1-13"
                  type="checkbox"
                  v-model="form3.intoxicacao"
                  value="Alimentar"
                />

                <span class="title-input-blue">Alimentar</span>
              </div>

              <div>
                <input
                  class="c1-13"
                  type="checkbox"
                  v-model="form3.intoxicacao"
                  value="Quimica"
                />

                <span class="title-input-blue">Quimica</span>
              </div>

              <br />

              <div>
                <span class="title-input-blue">Declaração de Obito N</span>

                <input
                  type="text"
                  v-model="form3.n_declaracao_obito"
                  class="input-resp"
                  name="n_declaracao_obito"
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
import { ref } from "vue";
import { mask } from "vue-the-mask";

export default {
  name: "FormTanatorioStep3",
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
      form3: {
        patologica: ref([]),
        acidental: ref([]),
        intensa: ref([]),
        natural: ref([]),
        intoxicacao: ref([]),
        patologica_outros: "",
        acidental_outros: "",
        intensa_outros: "",
        intoxicacao_outros: "",
        n_declaracao_obito: "",
      },
    };
  },
  directives: { mask },
  watch: {
    sendFormNow: function () {
      this.$emit("set-data-form", this.form3);
    },

    infoTanato: function (item) {
      const tanato = JSON.parse(JSON.stringify(item));

      if (tanato) {
        this.form3.patologica.push(tanato.data[0].patologica);
        this.form3.acidental.push(tanato.data[0].acidental);
        this.form3.intensa.push(tanato.data[0].intensa);
        this.form3.natural.push(tanato.data[0].natural);
        this.form3.intoxicacao.push(tanato.data[0].intoxicacao);
        this.form3.patologica_outros = tanato.data[0].patologica_outros;
        this.form3.acidental_outros = tanato.data[0].acidental_outros;
        this.form3.intensa_outros = tanato.data[0].intensa_outros;
        this.form3.intoxicacao_outros = tanato.data[0].intoxicacao_outros;
        this.form3.n_declaracao_obito = tanato.data[0].n_declaracao_obito;
      }
    },
  },
};
</script>
