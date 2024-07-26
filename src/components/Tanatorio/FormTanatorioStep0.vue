 <template>
  <div v-if="showForm == 0" style="height: auto">
    <label class="form-title m-3">Buscar Serviço Funerario</label>

    <div class="row">
      <div class="col">
        <div class="m5">
          <span class="title-input-blue">Nome Falecido</span>

          <input
            type="text"
            v-model="form0.nome_completo"
            class="input-resp"
            name="nome_completo"
          />
        </div>
      </div>

      <div class="col">
        <div class="m5">
          <span class="title-input-blue">CPF</span>

          <input
            type="text"
            v-model="form0.cpf"
            class="input-resp"
            name="cpf"
            v-mask="['###.###.###-##']"
          />
        </div>
      </div>
    </div>

    <div class="row" style="margin: 4px">
      <div class="col">
        <button
          type="button"
          @click="searchBeneficiarios()"
          class="btn btn-blue"
        >
          Buscar
        </button>
      </div>
    </div>

    <br />
    <br />
    <br />

    <div class="row">
      <div class="col">
        <div class="form-input-assistencia">
          <div class="m-3" style="height: 300px">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nome</th>
                  <th>Data de Nascimento</th>
                  <th>Telefone</th>
                  <th>CPF</th>
                  <th>RG</th>
                  <th>Responsavel</th>
                  <th>Falecido</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(item, index) in lista_beneficiarios"
                  :key="index"
                  :id="`main-row-${index}`"
                  class="view-tr"
                >
                  <td class="pt24">{{ index + 1 }}</td>
                  <td class="pt24">{{ item.nome_completo }}</td>
                  <td class="pt24">{{ item.data_nascimento }}</td>
                  <td class="pt24">{{ item.whatsapp_1 }}</td>
                  <td class="pt24">{{ item.cpf }}</td>
                  <td class="pt24">{{ item.rg }}</td>
                  <td>
                    <div class="checkbox-wrapper-13">
                      <input
                        id="c1-13"
                        type="checkbox"
                        @click="selectResponsavel(item)"
                      />
                    </div>
                  </td>
                  <td>
                    <div class="checkbox-wrapper-13">
                      <input
                        id="c1-13"
                        type="checkbox"
                        @click="selectFalecido(item)"
                      />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
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
      form0: {},
    };
  },
  directives: { mask },
  watch: {
    sendFormNow: function () {
      this.$emit("set-data-form", this.form7);
    },
  },
};
</script>
