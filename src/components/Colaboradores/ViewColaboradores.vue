<template>
  <div class="form-assistencia">
    <div class="form-navbar-assistencia">
       <DeleteModal
        :visible="this.visibleModal"
        :idBeneficiary="this.idBeneficiary"
        :nameBeneficiary="this.nameBeneficiary"
        @set-beneficiaries-list="setcolaboradoresList"
      />

      <div class="d-flex">
        <div class="d-flex">
          <img
            class="family-img"
            :src="require('../../assets/img/colaboradores.png')"
          />
          <div class="d-flex flex-column" style="margin-left: 10px">
            <p class="form-title" style="width: 195%; margin-bottom: 7px">
              CONSULTANDO COLABORADORES
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

          <div class="d-flex" style="margin-left: 90%">
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
                <th>Nome</th>
                <th>CPF</th>
                <th>Remuneração</th>
                <th>Férias</th>
                <th>Período</th>
                <th>Outros</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="item in colaboradoresList.value"
                :key="item.id"
                class="view-tr"
                :style="
                  'color: ' +
                  this.statusColaborador['ATIVO'] +
                  ' !important;'
                "
              >
                <td>{{ item.protocolo_id }}</td>
                <td>{{ item.nome_completo }}</td>
                <td>{{ item.cpf }}</td>
                <td>{{ item.remuneracao }}</td>
                <td>{{ item.ferias }}</td>
                <td>{{ item.periodo }}</td>
                <td>{{ item.outros }}</td>
                <td>
                  <img
                    class="icon-table"
                    :src="
                      item.status == 'CANCELADO'
                        ? require('../../assets/img/wheelchair-cancelado.png')
                        : require('../../assets/img/wheelchair.png')
                    "
                  />
                  <img
                    class="icon-table"
                    :src="
                      item.status == 'CANCELADO'
                        ? require('../../assets/img/coffin-cancelado.png')
                        : require('../../assets/img/coffin.png')
                    "
                  />
                  <img
                    class="icon-table"
                    :src="
                      item.status == 'CANCELADO'
                        ? require('../../assets/img/cerimonial-cancelado.png')
                        : require('../../assets/img/cerimonial.png')
                    "
                  />
                  <img
                    class="icon-table"
                    :src="
                      item.status == 'CANCELADO'
                        ? require('../../assets/img/jazigo-cancelado.png')
                        : require('../../assets/img/jazigo.png')
                    "
                  />
                  <img
                    class="icon-table"
                    style="width: 55px; height: 30px"
                    :src="require('../../assets/img/cadeado.png')"
                  />
                </td>
                <td style="text-align: right; width: 120px">
                  <div class="btn-action">
                    <img
                      class="eye-table"
                      v-if="item.status == 'CANCELADO'"
                      @click="showDeleteModal(item.id, item.nome_completo)"
                      :style="
                        item.status == 'CANCELADO'
                          ? { backgroundColor: '#e5081d' }
                          : {}
                      "
                      :src="require('../../assets/img/no.png')"
                    />
                    <img
                      class="eye-table"
                      :style="
                        item.status == 'CANCELADO'
                          ? { backgroundColor: '#e5081d' }
                          : {}
                      "
                      :src="require('../../assets/img/eye.png')"
                      @click="$emit('setShowForm', ['form-colaboradores-edit', item.id])"
                    />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="d-flex justify-content-between">
          <div class="d-flex">
            <div class="m-2 d-flex">
              <p style="margin-right: 5px" class="sphere blue"></p>
              <p style="color: #21509f">Ativo</p>
            </div>
            <div class="m-2 d-flex">
              <p style="margin-right: 5px" class="sphere black"></p>
              <p style="color: #000000">Suspenso</p>
            </div>
            <div class="m-2 d-flex">
              <p style="margin-right: 5px" class="sphere red"></p>
              <p style="color: #e5081d">Cancelado</p>
            </div>
            <div class="m-2 d-flex">
              <p style="margin-right: 5px" class="sphere orange"></p>
              <p style="color: #c86014">Em Negociação</p>
            </div>
          </div>
        </div>
        <div class="d-flex flex-row-reverse" style="margin-right: 18px">
          <paginate
            :page-count="Math.ceil(this.totalItens / 10)"
            :click-handler="setColaboradoresList"
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
import DeleteModal from "../Modal/DeleteModal.vue";
import Paginate from "vuejs-paginate-next";
import axios from "axios";
import { ref } from "vue";

export default {
  name: "ViewColaboradores",
  props: {
    showView: String,
    colaboradoreId: Number,
  },
  data() {
    return {
      colaboradoresList: ref([]),
      visibleModal: false,
      actionsBtn: false,
      idColaborador: null,
      nameColaborador: null,
      statusColaborador: {
        ATIVO: "#21509F",
        SUSPENSO: "#000000",
        CANCELADO: "#E5081D",
        EMNEGOCIACAO: "#C86014",
        ARENOVAR: "#FC6600",
      },
      totalItens: null,
      search: null,
      currentView: 1,
    };
  },
  components: {
    Paginate,
    DeleteModal,
  },
  emits: ["setShowForm"],

  beforeMount() {
    this.setColaboradoresList();
  },

  methods: {
    setCurrentView(idView) {
      this.currentView = idView;
    },

    showActionsBtn() {
      this.actionsBtn = !this.actionsBtn;
    },

    showDeleteModal(id, nome_completo) {
      this.idColaboradores = id;
      this.nameColaboradores = nome_completo;
      this.visibleModal = !this.visibleModal;
    },

    setNextView() {
      this.currentView = this.currentView + 1;

      if (this.currentView > 6) {
        this.currentView = 1;
      }
    },

    closeView() {
      this.$emit("setShowViewOrCard");
      this.setNextView();
    },

    setColaboradoresList(page = 1) {
      axios
        .get(`${process.env.VUE_APP_API_URL}/colaborador?page=${page}`)
        .then((res) => {
          this.colaboradoresList.value = res.data.data;
          this.totalItens = res.data.total;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    searchColaboradores() {
      axios
        .get(`${process.env.VUE_APP_API_URL}/colaborador`, {
          params: {
            search: this.search,
          },
        })
        .then((res) => {
          this.colaboradoresList.value = res.data.data;
          this.totalItens = res.data.meta.total;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
