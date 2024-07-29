 <template>
  <div v-if="showForm == 2" style="height: 800px">
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

            <samp class="title-input-blue">Sim</samp>

            <input
              class="c1-13"
              type="checkbox"
              v-model="form2.havera_somatoconservacao_avancada"
              name="havera_somatoconservacao_avancada"
            />

            <samp class="title-input-blue">Não</samp>
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

            <samp class="title-input-blue">Comum</samp>

            <input
              class="c1-13"
              type="checkbox"
              v-model="form2.havera_somatoconservacao_avancada"
              name="havera_somatoconservacao_avancada"
            />

            <samp class="title-input-blue">Incomum</samp>
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

              <samp class="title-input-blue">Sim</samp>
            </div>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form2.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <samp class="title-input-blue">Não</samp>
            </div>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form2.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <samp class="title-input-blue">Leve</samp>
            </div>

            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form2.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <samp class="title-input-blue">Moderado</samp>
            </div>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form2.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <samp class="title-input-blue">Grave</samp>
            </div>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form2.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <samp class="title-input-blue">Local</samp>
            </div>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form2.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <samp class="title-input-blue">Multilocal</samp>
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

              <samp class="title-input-blue">Ausente</samp>
            </div>

            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form2.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <samp class="title-input-blue">Presente</samp>
            </div>

            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form2.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <samp class="title-input-blue">Leve</samp>
            </div>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form2.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <samp class="title-input-blue">Moderado</samp>
            </div>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form2.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <samp class="title-input-blue">Avançada</samp>
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

              <samp class="title-input-blue">Ausente</samp>
            </div>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form2.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <samp class="title-input-blue">Presente</samp>
            </div>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form2.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <samp class="title-input-blue">Leve</samp>
            </div>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form2.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <samp class="title-input-blue">Moderado</samp>
            </div>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form2.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <samp class="title-input-blue">Forte</samp>
            </div>
          </div>
        </div>
      </div>
    </div>

    <label class="form-title m-3">Regiões Especificas do Corpo</label>

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

              <samp class="title-input-blue">Presença de Secreção</samp>
            </div>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form2.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <samp class="title-input-blue">Deterioração</samp>
            </div>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form2.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <samp class="title-input-blue">Dilaceração</samp>
            </div>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form2.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <samp class="title-input-blue">Amputado</samp>
            </div>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form2.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <samp class="title-input-blue">Inchaço</samp>
            </div>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form2.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <samp class="title-input-blue">Tecido Mole</samp>
            </div>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form2.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <samp class="title-input-blue">Odor</samp>
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

              <samp class="title-input-blue">Presença de Secreção</samp>
            </div>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form2.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <samp class="title-input-blue">Deterioração</samp>
            </div>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form2.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <samp class="title-input-blue">Dilaceração</samp>
            </div>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form2.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <samp class="title-input-blue">Amputado</samp>
            </div>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form2.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <samp class="title-input-blue">Inchaço</samp>
            </div>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form2.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <samp class="title-input-blue">Tecido Mole</samp>
            </div>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form2.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <samp class="title-input-blue">Odor</samp>
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

              <samp class="title-input-blue">Presença de Secreção</samp>
            </div>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form2.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <samp class="title-input-blue">Deterioração</samp>
            </div>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form2.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <samp class="title-input-blue">Dilaceração</samp>
            </div>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form2.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <samp class="title-input-blue">Amputado</samp>
            </div>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form2.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <samp class="title-input-blue">Inchaço</samp>
            </div>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form2.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <samp class="title-input-blue">Tecido Mole</samp>
            </div>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form2.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <samp class="title-input-blue">Odor</samp>
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

              <samp class="title-input-blue">Presença de Secreção</samp>
            </div>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form2.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <samp class="title-input-blue">Deterioração</samp>
            </div>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form2.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <samp class="title-input-blue">Dilaceração</samp>
            </div>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form2.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <samp class="title-input-blue">Amputado</samp>
            </div>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form2.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <samp class="title-input-blue">Inchaço</samp>
            </div>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form2.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <samp class="title-input-blue">Tecido Mole</samp>
            </div>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form2.havera_somatoconservacao_avancada"
                name="havera_somatoconservacao_avancada"
              />

              <samp class="title-input-blue">Odor</samp>
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
  },
  components: {
    ShowImage,
  },
  data() {
    return {
      modalVisible: false,
      campoImagem: "",
      form2: {
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
      this.$emit("set-data-form", this.form2);
    },
  },
};
</script>
