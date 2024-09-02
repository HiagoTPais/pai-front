 <template>
  <div v-if="showForm == 2" style="height: auto">
    <label class="form-title m-3">Estado Geral do Corpo</label>

    <div class="row">
      <div class="col">
        <div class="checkbox-wrapper-13">
          <div class="small-card-border">
            <label class="form-title">NECROPSIADO</label>

            <input
              class="c1-13"
              type="checkbox"
              value="Sim"
              v-model="form2.necropsiado"
            />

            <span class="title-input-blue">Sim</span>

            <input
              class="c1-13"
              type="checkbox"
              value="Não"
              v-model="form2.necropsiado"
            />

            <span class="title-input-blue">Não</span>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="checkbox-wrapper-13">
          <div class="small-card-border">
            <label class="form-title">POSTURA DO CORPO</label>

            <input
              class="c1-13"
              type="checkbox"
              v-model="form2.postura_corpo"
              value="Comum"
            />

            <span class="title-input-blue">Comum</span>

            <input
              class="c1-13"
              type="checkbox"
              v-model="form2.postura_corpo"
              value="Incomum"
            />

            <span class="title-input-blue">Incomum</span>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="checkbox-wrapper-13">
          <div class="card-border">
            <label class="form-title">SINAIS DE DECOMPOSIÇÃO</label>
            <img
              style="
                width: 25px;
                height: 25px;
                cursor: pointer;
                margin-left: 5px;
              "
              :src="require('../../assets/img/images-icon.png')"
              @click="showModalSelectImagen('decomposicao')"
            />

            <div style="display: flex">
              <div>
                <div>
                  <span class="form-title m-3">Existe</span>
                </div>
                <div>
                  <input
                    class="c1-13"
                    type="checkbox"
                    v-model="form2.sinais_decomposicao"
                    value="Sim"
                  />

                  <span class="title-input-blue">Sim</span>
                </div>
                <div>
                  <input
                    class="c1-13"
                    type="checkbox"
                    v-model="form2.sinais_decomposicao"
                    value="Não"
                  />

                  <span class="title-input-blue">Não</span>
                </div>
              </div>

              <div>
                <div>
                  <span class="form-title m-3">Grau</span>
                </div>
                <div>
                  <input
                    class="c1-13"
                    type="checkbox"
                    v-model="form2.sinais_decomposicao_grau"
                    value="Grave"
                  />

                  <span class="title-input-blue">Grave</span>
                </div>

                <div>
                  <input
                    class="c1-13"
                    type="checkbox"
                    v-model="form2.sinais_decomposicao_grau"
                    value="Leve"
                  />

                  <span class="title-input-blue">Leve</span>
                </div>

                <div>
                  <input
                    class="c1-13"
                    type="checkbox"
                    v-model="form2.sinais_decomposicao_grau"
                    value="Moderado"
                  />

                  <span class="title-input-blue">Moderado</span>
                </div>
              </div>

              <div>
                <div>
                  <span class="form-title m-3">Disposição</span>
                </div>
                <div>
                  <input
                    class="c1-13"
                    type="checkbox"
                    v-model="form2.sinais_decomposicao_local"
                    value="Local"
                  />

                  <span class="title-input-blue">Local</span>
                </div>

                <div>
                  <input
                    class="c1-13"
                    type="checkbox"
                    v-model="form2.sinais_decomposicao_local"
                    value="Multilocal"
                  />

                  <span class="title-input-blue">Multilocal</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="checkbox-wrapper-13">
          <div class="card-border">
            <label class="form-title">RIGIDEZ</label>
            <img
              style="
                width: 25px;
                height: 25px;
                cursor: pointer;
                margin-left: 5px;
              "
              :src="require('../../assets/img/images-icon.png')"
              @click="showModalSelectImagen('rigidez')"
            />

            <div>
              <input
                class="c1-13"
                type="checkbox"
                value="Ausente"
                v-model="form2.rigidez"
              />

              <span class="title-input-blue">Ausente</span>
            </div>

            <div>
              <input
                class="c1-13"
                type="checkbox"
                value="Presente"
                v-model="form2.rigidez"
              />

              <span class="title-input-blue">Presente</span>
            </div>

            <div>
              <input
                class="c1-13"
                type="checkbox"
                value="Leve"
                v-model="form2.rigidez_grau"
              />

              <span class="title-input-blue">Leve</span>
            </div>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                value="Moderado"
                v-model="form2.rigidez_grau"
              />

              <span class="title-input-blue">Moderado</span>
            </div>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                value="Avançada"
                v-model="form2.rigidez_grau"
              />

              <span class="title-input-blue">Avançada</span>
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="checkbox-wrapper-13">
          <div class="card-border">
            <label class="form-title">ODOR</label>
            <img
              style="
                width: 25px;
                height: 25px;
                cursor: pointer;
                margin-left: 5px;
              "
              :src="require('../../assets/img/images-icon.png')"
              @click="showModalSelectImagen('odor')"
            />

            <div>
              <input
                class="c1-13"
                type="checkbox"
                value="Ausente"
                v-model="form2.odor"
              />

              <span class="title-input-blue">Ausente</span>
            </div>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                value="Presente"
                v-model="form2.odor"
              />

              <span class="title-input-blue">Presente</span>
            </div>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                value="Leve"
                v-model="form2.odor_grau"
              />

              <span class="title-input-blue">Leve</span>
            </div>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                value="Moderado"
                v-model="form2.odor_grau"
              />

              <span class="title-input-blue">Moderado</span>
            </div>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                value="Forte"
                v-model="form2.odor_grau"
              />

              <span class="title-input-blue">Forte</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="d-flex">
      <label class="form-title m-3">Regiões Especificas do Corpo</label>

      <img
        style="width: 40px; height: 40px; cursor: pointer; margin-top: 5px"
        :src="require('../../assets/img/plus.png')"
        @click="novoCard()"
      />

      <img
        style="width: 40px; height: 40px; cursor: pointer; margin-top: 5px"
        :src="require('../../assets/img/less.png')"
        @click="removerCard()"
      />
    </div>

    <div class="row">
      <div class="col">
        <div class="checkbox-wrapper-13">
          <div class="card-border">
            <label class="form-title">OLHOS</label>
            <img
              style="
                width: 25px;
                height: 25px;
                cursor: pointer;
                margin-left: 5px;
              "
              :src="require('../../assets/img/images-icon.png')"
              @click="showModalSelectImagen('olhos')"
            />
            <div>
              <input
                class="c1-13"
                type="checkbox"
                value="Presença de Secreção"
                v-model="form2.olhos"
              />

              <span class="title-input-blue">Presença de Secreção</span>
            </div>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                value="Deterioração"
                v-model="form2.olhos"
              />

              <span class="title-input-blue">Deterioração</span>
            </div>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                value="Dilaceração"
                v-model="form2.olhos"
              />

              <span class="title-input-blue">Dilaceração</span>
            </div>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                value="Amputado"
                v-model="form2.olhos"
              />

              <span class="title-input-blue">Amputado</span>
            </div>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                value="Inchaço"
                v-model="form2.olhos"
              />

              <span class="title-input-blue">Inchaço</span>
            </div>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                value="Tecido Mole"
                v-model="form2.olhos"
              />

              <span class="title-input-blue">Tecido Mole</span>
            </div>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                value="Odor"
                v-model="form2.olhos"
              />

              <span class="title-input-blue">Odor</span>
            </div>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="checkbox-wrapper-13">
          <div class="card-border">
            <label class="form-title">BOCA</label>
            <img
              style="
                width: 25px;
                height: 25px;
                cursor: pointer;
                margin-left: 5px;
              "
              :src="require('../../assets/img/images-icon.png')"
              @click="showModalSelectImagen('boca')"
            />
            <div>
              <input
                class="c1-13"
                type="checkbox"
                value="Presença de Secreção"
                v-model="form2.boca"
              />

              <span class="title-input-blue">Presença de Secreção</span>
            </div>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                value="Deterioração"
                v-model="form2.boca"
              />

              <span class="title-input-blue">Deterioração</span>
            </div>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                value="Dilaceração"
                v-model="form2.boca"
              />

              <span class="title-input-blue">Dilaceração</span>
            </div>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                value="Amputado"
                v-model="form2.boca"
              />

              <span class="title-input-blue">Amputado</span>
            </div>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                value="Inchaço"
                v-model="form2.boca"
              />

              <span class="title-input-blue">Inchaço</span>
            </div>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                value="Tecido Mole"
                v-model="form2.boca"
              />

              <span class="title-input-blue">Tecido Mole</span>
            </div>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                value="Odor"
                v-model="form2.boca"
              />

              <span class="title-input-blue">Odor</span>
            </div>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="checkbox-wrapper-13">
          <div class="card-border">
            <label class="form-title">OUVIDO</label>
            <img
              style="
                width: 25px;
                height: 25px;
                cursor: pointer;
                margin-left: 5px;
              "
              :src="require('../../assets/img/images-icon.png')"
              @click="showModalSelectImagen('ouvido')"
            />
            <div>
              <input
                class="c1-13"
                type="checkbox"
                value="Presença de Secreção"
                v-model="form2.ouvido"
              />

              <span class="title-input-blue">Presença de Secreção</span>
            </div>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                value="Deterioração"
                v-model="form2.ouvido"
              />

              <span class="title-input-blue">Deterioração</span>
            </div>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                value="Dilaceração"
                v-model="form2.ouvido"
              />

              <span class="title-input-blue">Dilaceração</span>
            </div>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                value="Amputado"
                v-model="form2.ouvido"
              />

              <span class="title-input-blue">Amputado</span>
            </div>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                value="Inchaço"
                v-model="form2.ouvido"
              />

              <span class="title-input-blue">Inchaço</span>
            </div>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                value="Tecido Mole"
                v-model="form2.ouvido"
              />

              <span class="title-input-blue">Tecido Mole</span>
            </div>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                value="Odor"
                v-model="form2.ouvido"
              />

              <span class="title-input-blue">Odor</span>
            </div>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="checkbox-wrapper-13">
          <div class="card-border">
            <label class="form-title">TORACOABDOMINAL</label>
            <img
              style="
                width: 25px;
                height: 25px;
                cursor: pointer;
                margin-left: 5px;
              "
              :src="require('../../assets/img/images-icon.png')"
              @click="showModalSelectImagen('toracoabdominal')"
            />
            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form2.toracoabdominal"
                value="Presença de Secreção"
              />

              <span class="title-input-blue">Presença de Secreção</span>
            </div>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form2.toracoabdominal"
                value="Deterioração"
              />

              <span class="title-input-blue">Deterioração</span>
            </div>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form2.toracoabdominal"
                value="Dilaceração"
              />

              <span class="title-input-blue">Dilaceração</span>
            </div>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form2.toracoabdominal"
                value="Amputado"
              />

              <span class="title-input-blue">Amputado</span>
            </div>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form2.toracoabdominal"
                value="Inchaço"
              />

              <span class="title-input-blue">Inchaço</span>
            </div>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form2.toracoabdominal"
                value="Tecido Mole"
              />

              <span class="title-input-blue">Tecido Mole</span>
            </div>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form2.toracoabdominal"
                value="Odor"
              />

              <span class="title-input-blue">Odor</span>
            </div>
          </div>
        </div>
      </div>

      <OutrosLocais
        :idTanator="idTanator"
        :sendCardNow="sendcard"
        :newcard="newcard"
        @set-outros-locais="setOutrosLocais"
      />
    </div>
  </div>

  <ShowImage
    :visible="modalVisible"
    :msg="campoImagem"
    @set-imagens="setImagens"
  />
</template>


<script>
import { ref } from "vue";
import { mask } from "vue-the-mask";
import ShowImage from "../Modal/ShowImage";
import OutrosLocais from "../OutrosLocais";

export default {
  name: "FormTanatorioStep2",

  props: {
    showForm: Number,
    sendFormNow: Boolean,
    showView: String,
    infoTanato: Object,
  },

  data() {
    return {
      modalVisible: false,
      campoImagem: "",
      newcard: 0,
      sendcard: "",
      sendForm: false,
      idTanator: null,
      form2: {
        necropsiado: ref([]),
        postura_corpo: ref([]),
        sinais_decomposicao: ref([]),
        sinais_decomposicao_local: ref([]),
        sinais_decomposicao_grau: ref([]),
        rigidez: ref([]),
        rigidez_grau: ref([]),
        odor: ref([]),
        odor_grau: ref([]),
        olhos: ref([]),
        boca: ref([]),
        ouvido: ref([]),
        toracoabdominal: ref([]),
        imagens: ref([]),
        outras_regioes: ref([]),
      },
    };
  },

  components: {
    ShowImage,
    OutrosLocais,
  },

  methods: {
    showModalSelectImagen(campo) {
      this.modalVisible = !this.modalVisible;

      this.campoImagem = campo;
    },

    setImagens(item) {
      this.form2.imagens.push(item);
    },

    novoCard() {
      this.newcard++;
    },

    removerCard() {
      this.newcard--;
    },

    setOutrosLocais(item) {
      this.form2.outras_regioes = JSON.parse(JSON.stringify(item));
    },
  },

  watch: {
    sendFormNow: function () {
      this.$emit("set-data-form", this.form2);
    },

    infoTanato: function (item) {
      const tanato = JSON.parse(JSON.stringify(item));

      if (tanato) {
        this.idTanator = tanato.data[0].id;

        this.form2.necropsiado.push(tanato.data[0].necropsiado);
        this.form2.postura_corpo.push(tanato.data[0].postura_corpo);
        this.form2.sinais_decomposicao.push(tanato.data[0].sinais_decomposicao);
        this.form2.sinais_decomposicao_local.push(tanato.data[0].sinais_decomposicao_local);
        this.form2.sinais_decomposicao_grau.push(tanato.data[0].sinais_decomposicao_grau);
        this.form2.rigidez.push(tanato.data[0].rigidez);
        this.form2.rigidez_grau.push(tanato.data[0].rigidez_grau);
        this.form2.odor.push(tanato.data[0].odor);
        this.form2.odor_grau.push(tanato.data[0].odor_grau);
        this.form2.olhos.push(tanato.data[0].olhos);
        this.form2.boca.push(tanato.data[0].boca);
        this.form2.ouvido.push(tanato.data[0].ouvido);
        this.form2.toracoabdominal.push(tanato.data[0].toracoabdominal);
      }
    },
  },

  directives: { mask },
};
</script>
