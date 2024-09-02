 <template>
  <div v-if="showForm == 0" style="height: 600px">
    <label class="form-title m-3">Buscar Serviço Funerario</label>

    <div class="row">
      <div class="col">
        <div class="form-input-assistencia">
          <div class="m-3" style="height: 300px">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Responsável</th>
                  <th>Falecido</th>
                  <th>Jazigo</th>
                  <th>Local</th>
                  <th>Data do Sepultamento</th>
                  <th>Selecionar</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(item, index) in lista_servicos"
                  :key="index"
                  :id="`main-row-${index}`"
                  class="view-tr"
                >
                  <td>{{ index + 1 }}</td>
                  <td>{{ item.responsavel }}</td>
                  <td>{{ item.felecido}}</td>
                  <td>{{ item.local }}</td>
                  <td>{{ item.jazigo }}</td>
                  <td>{{ item.data_hora_sepultamento }}</td>

                  <td>
                    <div class="checkbox-wrapper-13" style="margin: 0">
                      <input
                        id="c1-13"
                        type="checkbox"
                        @click="selectTanato(item)"
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
import axios from "axios";
import { mask } from "vue-the-mask";

export default {
  name: "FormTanatorioStep1",

  props: {
    showForm: Number,
    sendFormNow: Boolean,
    showView: String,
  },

  methods: {
    searchServico() {
      axios
        .get(`${process.env.VUE_APP_API_URL}/servico-funerario`)
        .then((res) => {
          this.lista_servicos = res.data;
          console.log(this.lista_servicos);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    selectTanato(item) {
        this.$emit("select-tanato", item);
    },
  },

  components: {},

  data() {
    return {
      lista_servicos: [],
      nome_completo: "Josefa Maria dos Montes Fernandes",
      cpf: "",
    };
  },

  beforeMount() {
    this.searchServico();
  },

  directives: { mask },
};
</script>
