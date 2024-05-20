<template>
  <div class="form-assistencia">
    <div class="form-navbar-assistencia">
      <DeleteModal
        :visible="this.visibleModal"
        :idBeneficiary="this.idBeneficiary"
        :nameBeneficiary="this.nameBeneficiary"
        @set-beneficiaries-list="setBeneficiarioList"
      />

      <div class="d-flex justify-content-between">
        <div class="d-flex">
          <img
            class="family-img"
            :src="require('../../assets/img/family.png')"
          />
          <div class="d-flex flex-column" style="margin-left: 10px">
            <p class="form-title" style="width: 140%; margin-bottom: 7px">
              CONSULTANDO BENEFICIÁRIOS
            </p>
            <img class="icon-back" :src="require('../../assets/img/eye.png')" />
          </div>
        </div>

        <div class="d-flex">
          <input
            class="search-input"
            v-model="search"
            placeholder="Pesquisar por NOME ou CPF ou ID"
            type="text"
          />

          <img
            class="search-icon"
            :src="require('../../assets/img/search.png')"
            @click="searchBeneficiaries()"
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
              <th>Plano</th>
              <th>Carência</th>
              <th>Seguro</th>
              <th>Jazigo</th>
              <th>Período</th>
              <th>Outros</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="item in beneficiarioList.value"
              :key="item.id"
              class="view-tr"
              :style="
                'color: ' +
                this.statusBeneficiaries[item.status] +
                ' !important;'
              "
            >
              <td>{{ item.protocolo_id }}</td>
              <td>{{ item.nome_completo }}</td>
              <td>{{ item.cpf }}</td>
              <td>{{ item.nome }}</td>
              <td></td>
              <td>{{ item.taxa_rescisao }}</td>
              <td></td>
              <td>{{ item.duracao_contrato }}</td>
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
                <!-- class="btn-action" -->
                <!-- <div v-if="actionsBtn" @mouseover="showActionsBtn()"> -->
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
                    @click="
                      $emit('setShowForm', ['form-assistencia-edit', item.id])
                    "
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
          <div class="m-2 d-flex">
            <p style="margin-right: 5px" class="sphere orange-fire"></p>
            <p style="color: #c86014">A Renovar</p>
          </div>
        </div>

        <div class="d-flex flex-row-reverse" style="margin-right: 18px">
          <paginate
            :page-count="Math.ceil(this.totalItens / 10)"
            :click-handler="setBeneficiarioList"
            :prev-text="'Prev'"
            :next-text="'Next'"
            :container-class="'pagination'"
          >
          </paginate>
        </div>
      </div>

      <div class="d-flex">
        <div class="d-flex">
          <img
            style="width: 45px; height: 40px"
            :src="require('../../assets/img/wheelchair.png')"
          />
          <p style="color: #21509f; margin-top: 8px; margin-right: 12px">
            Material Convalescente em Uso
          </p>
        </div>
        <div class="d-flex">
          <img
            style="width: 45px; height: 40px"
            :src="require('../../assets/img/coffin.png')"
          />
          <p style="color: #21509f; margin-top: 8px; margin-right: 12px">
            Teve Serviço de Luto
          </p>
        </div>
        <div class="d-flex">
          <img
            style="width: 45px; height: 40px"
            :src="require('../../assets/img/cerimonial.png')"
          />
          <p style="color: #21509f; margin-top: 8px; margin-right: 12px">
            Luto Recente
          </p>
        </div>
        <div class="d-flex">
          <img
            style="width: 45px; height: 40px"
            :src="require('../../assets/img/jazigo.png')"
          />
          <p style="color: #21509f; margin-top: 8px; margin-right: 12px">
            Jazigo em Uso
          </p>
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
  name: "ViewAssistencia",
  data() {
    return {
      beneficiarioList: ref([]),
      visibleModal: false,
      actionsBtn: false,
      idBeneficiary: null,
      nameBeneficiary: null,
      statusBeneficiaries: {
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
    this.setBeneficiarioList();
  },

  methods: {
    setCurrentView(idView) {
      this.currentView = idView;
    },

    showActionsBtn() {
      this.actionsBtn = !this.actionsBtn;
    },

    showDeleteModal(id, nome_completo) {
      this.idBeneficiary = id;
      this.nameBeneficiary = nome_completo;
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

    setBeneficiarioList(page = 1) {
      axios
        .get(`${process.env.VUE_APP_API_URL}/beneficiario?page=${page}`)
        .then((res) => {
          this.beneficiarioList.value = res.data.data;
          this.totalItens = res.data.total;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    searchBeneficiaries() {
      axios
        .get(`${process.env.VUE_APP_API_URL}/beneficiario`, {
          params: {
            search: this.search,
          },
        })
        .then((res) => {
          this.beneficiarioList.value = res.data.data;
          this.totalItens = res.data.meta.total;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
