<template>
  <div class="form-assistencia">
    <div class="form-navbar-assistencia">
      <div class="d-flex">
        <div class="d-flex">
          <img
            class="family-img"
            :src="require('../../assets/img/tanatorio.png')"
          />
          <div class="d-flex flex-column" style="margin-left: 10px">
            <p class="form-title" style="width: 195%; margin-bottom: 7px">
              CONSULTANDO TANATORIO
            </p>
            <img
              style="
                height: 40px;
                width: 40px;
                background-color: #21509f;
                border-radius: 6px;
              "
              :src="require('../../assets/img/eye.png')"
            />
          </div>

          <div class="d-flex" style="margin-left: 107%">
            <input
              class="search-input"
              placeholder="Pesquisar por NOME ou CPF ou ID"
              type="text"
            />

            <img
              class="search-icon"
              :src="require('../../assets/img/search.png')"
            />
          </div>
        </div>
      </div>
      <div class="form-input-assistencia">
        <div class="m-3" style="height: 577px">
          <table class="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nome Do Obito</th>
                <th>Causa Morte</th>
                <th>Idade</th>
                <th>Agente Funerario</th>
                <th>Axiliar de Funerario</th>
                <th>Data</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(item, index) in tanatorioList"
                :key="index"
                :id="`main-row-${index}`"
                class="view-tr"
              >
                <td>{{ index + 1 }}</td>
                <td>{{ item.nome_completo }}</td>
                <td>{{ item.idade }} Anos</td>
                <td>{{ item.nome_completo }}</td>
                <td>{{ item.idade }} Anos</td>
                <td>{{ item.peso }} Kg</td>
                <td>{{ item.altura }} Cm</td>
                <td>
                  <img
                    class="eye-table"
                    :src="require('../../assets/img/eye.png')"
                    @click="
                      $emit('setShowForm', ['form-tanatorio-edit', item.id])
                    "
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="d-flex flex-row-reverse" style="margin-right: 18px">
          <paginate
            :page-count="Math.ceil(this.totalItens / 10)"
            :click-handler="searchServico"
            :prev-text="'Prev'"
            :next-text="'Next'"
            :container-class="'pagination'"
          >
          </paginate>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import paginate from "vuejs-paginate-next";
import axios from "axios";
import { ref } from "vue";

export default {
  name: "ViewTanatorio",
  props: {
    showView: String,
    colaboradoreId: Number,
  },
  data() {
    return {
      tanatorioList: ref([]),
      visibleModal: false,
      actionsBtn: false,
      idTanatorio: null,
      totalItens: null,
      search: null,
      currentView: 1,
    };
  },

  components: {
    paginate,
  },

  emits: ["setShowForm"],

  methods: {
    searchServico(page = 1) {
      axios
        .get(`${process.env.VUE_APP_API_URL}/tanatorio?page=${page}`)
        .then((res) => {
          this.tanatorioList = res.data.data;
          this.totalItens = res.data.total;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    setCurrentView(idView) {
      this.currentView = idView;
    },

    showActionsBtn() {
      this.actionsBtn = !this.actionsBtn;
    },
  },

  beforeMount() {
    this.searchServico();
  },
};
</script>
