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
                  <th>Responssavel</th>
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
                  <td class="pt24">{{ index + 1 }}</td>
                  <td class="pt24">{{ item.responsavel }}</td>
                  <td class="pt24">{{  }}</td>
                  <td class="pt24">{{ item.local }}</td>
                  <td class="pt24">{{ item.jazigo }}</td>
                  <td class="pt24">{{ item.data_hora_sepultamento }}</td>

                  <td>
                    <div class="checkbox-wrapper-13">
                      <input
                        id="c1-13"
                        type="checkbox"
                        @click="selectServico(item)"
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
        .get(`${process.env.VUE_APP_API_URL}/servico-funerario/search`, {
          params: {
            nome_completo: this.nome_completo,
            cpf: this.cpf,
          },
        })
        .then((res) => {
          this.lista_servicos = res.data;
          console.log(this.lista_servicos);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    selectServico(item) {
      console.log(item);
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
  directives: { mask },
};
</script>
