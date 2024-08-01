 <template>
  <div v-if="showForm == 2" style="height: auto;">
    <label class="form-title m-3">Estado Geral do Corpo</label>

    <div class="row">
      <div class="col">
        <div class="checkbox-wrapper-13">
          <div class="small-card-border">
            <label class="form-title">NECROPSIADO</label>

            <input
              class="c1-13"
              type="checkbox"
              v-model="form2.havera_somatoconservacao_avancada"
              name="havera_somatoconservacao_avancada"
            />

            <span class="title-input-blue">Sim</span>

            <input
              class="c1-13"
              type="checkbox"
              v-model="form2.havera_somatoconservacao_avancada"
              name="havera_somatoconservacao_avancada"
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
              v-model="form2.havera_somatoconservacao_avancada"
              name="havera_somatoconservacao_avancada"
            />

            <span class="title-input-blue">Comum</span>

            <input
              class="c1-13"
              type="checkbox"
              v-model="form2.havera_somatoconservacao_avancada"
              name="havera_somatoconservacao_avancada"
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
            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form2.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <span class="title-input-blue">Sim</span>
            </div>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form2.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <span class="title-input-blue">Não</span>
            </div>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form2.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <span class="title-input-blue">Leve</span>
            </div>

            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form2.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <span class="title-input-blue">Moderado</span>
            </div>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form2.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <span class="title-input-blue">Grave</span>
            </div>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form2.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <span class="title-input-blue">Local</span>
            </div>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form2.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <span class="title-input-blue">Multilocal</span>
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
                v-model="form2.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <span class="title-input-blue">Ausente</span>
            </div>

            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form2.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <span class="title-input-blue">Presente</span>
            </div>

            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form2.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <span class="title-input-blue">Leve</span>
            </div>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form2.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <span class="title-input-blue">Moderado</span>
            </div>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form2.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
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
                v-model="form2.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <span class="title-input-blue">Ausente</span>
            </div>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form2.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <span class="title-input-blue">Presente</span>
            </div>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form2.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <span class="title-input-blue">Leve</span>
            </div>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form2.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <span class="title-input-blue">Moderado</span>
            </div>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form2.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
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
        style="width: 41px; height: 40px; cursor: pointer; margin-top: 5px"
        :src="require('../../assets/img/plus.png')"
        @click="novoCard()"
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
                v-model="form2.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <span class="title-input-blue">Presença de Secreção</span>
            </div>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form2.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <span class="title-input-blue">Deterioração</span>
            </div>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form2.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <span class="title-input-blue">Dilaceração</span>
            </div>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form2.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <span class="title-input-blue">Amputado</span>
            </div>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form2.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <span class="title-input-blue">Inchaço</span>
            </div>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form2.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <span class="title-input-blue">Tecido Mole</span>
            </div>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form2.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
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
                v-model="form2.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <span class="title-input-blue">Presença de Secreção</span>
            </div>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form2.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <span class="title-input-blue">Deterioração</span>
            </div>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form2.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <span class="title-input-blue">Dilaceração</span>
            </div>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form2.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <span class="title-input-blue">Amputado</span>
            </div>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form2.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <span class="title-input-blue">Inchaço</span>
            </div>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form2.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <span class="title-input-blue">Tecido Mole</span>
            </div>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form2.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
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
                v-model="form2.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <span class="title-input-blue">Presença de Secreção</span>
            </div>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form2.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <span class="title-input-blue">Deterioração</span>
            </div>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form2.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <span class="title-input-blue">Dilaceração</span>
            </div>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form2.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <span class="title-input-blue">Amputado</span>
            </div>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form2.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <span class="title-input-blue">Inchaço</span>
            </div>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form2.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <span class="title-input-blue">Tecido Mole</span>
            </div>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form2.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
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
                v-model="form2.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <span class="title-input-blue">Presença de Secreção</span>
            </div>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form2.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <span class="title-input-blue">Deterioração</span>
            </div>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form2.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <span class="title-input-blue">Dilaceração</span>
            </div>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form2.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <span class="title-input-blue">Amputado</span>
            </div>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form2.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <span class="title-input-blue">Inchaço</span>
            </div>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form2.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <span class="title-input-blue">Tecido Mole</span>
            </div>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form2.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <span class="title-input-blue">Odor</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-3" v-for="key in count" :key="key">
        <div class="checkbox-wrapper-13">
          <div class="small-card-border">
            <div class="d-flex">
              <input
                name="nome_completo_dependente"
                type="text"
                class="input-resp"
              />
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

              <img
                style="width: 25px; height: 25px; cursor: pointer"
                :src="require('../../assets/img/less.png')"
                @click="removerCard()"
              />
            </div>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form2.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <span class="title-input-blue">Presença de Secreção</span>
            </div>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form2.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <span class="title-input-blue">Deterioração</span>
            </div>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form2.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <span class="title-input-blue">Dilaceração</span>
            </div>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form2.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <span class="title-input-blue">Amputado</span>
            </div>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form2.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <span class="title-input-blue">Inchaço</span>
            </div>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form2.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <span class="title-input-blue">Tecido Mole</span>
            </div>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form2.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <span class="title-input-blue">Odor</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <ShowImage :visible="modalVisible" :msg="campoImagem" />
</template>


<script>
// import axios from "axios";
import { mask } from "vue-the-mask";
import ShowImage from "../Modal/ShowImage";

export default {
  name: "FormTanatorioStep2",
  props: {
    showForm: Number,
    sendFormNow: Boolean,
    showView: String,
  },
  methods: {
    showModalSelectImagen(campo) {
      this.modalVisible = !this.modalVisible;
      this.campoImagem = campo;
    },

    novoCard() {
      this.count++;
    },

    removerCard() {
      this.count--;
    },
  },

  components: {
    ShowImage,
  },

  data() {
    return {
      modalVisible: false,
      campoImagem: "",
      count: 0,
      form2: {
        necropsiado: "",
        postura_corpo: "",
        sinais_decomposição: "",
        sinais_decomposição_local: "",
        sinais_decomposição_grau: "",
        rigidez: "",
        rigidez_grau: "",
        odor: "",
        odor_grau: "",
        olhos: "",
        boca: "",
        ouvido: "",
        toracoabdominal: "",
        regioes_extras: "",
      },
    };
  },

  directives: { mask },

  watch: {
    sendFormNow: function () {
      this.$emit("set-data-form", this.form2);
    },
  },
};
</script>
