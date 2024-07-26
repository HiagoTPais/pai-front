<template>
  <div class="form-assistencia">
    <div class="form-navbar-assistencia">
      <DeleteModal
        :visible="this.visibleModal"
        :idBeneficiary="this.idBeneficiary"
        :nameBeneficiary="this.nameBeneficiary"
        @set-beneficiaries-list="setServicoList"
      />

      <div class="d-flex">
        <div class="d-flex">
          <img
            class="family-img"
            :src="require('../../assets/img/funeraria.png')"
          />
          <div class="d-flex flex-column" style="margin-left: 10px">
            <p class="form-title" style="width: 270%; margin-bottom: 7px">
              CONSULTANDO SERVIÇOS FUNERARIOS
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
                <th>Falecido</th>
                <th>Responsável</th>
                <th>Cidade</th>
                <th>Data e Hora</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(item, index) in servicoList.value"
                :key="item.id"
                class="view-tr"
              >
                <td>{{ index + 1 }}</td>
                <td>{{ item.falecido }}</td>
                <td>{{ item.responsavel }}</td>
                <td>{{ item.cidade }}</td>
                <td>{{ item.data_hora_sepultamento }}</td>
                <td style="text-align: right; width: 120px">
                  <div class="btn-action">
                    <img
                      class="eye-table"
                      :src="require('../../assets/img/eye.png')"
                      @click="$emit('setShowForm', ['form-servico-edit', item.id])"
                    />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="d-flex flex-row-reverse" style="margin-right: 18px">
          <paginate
            :page-count="Math.ceil(this.totalItens / 10)"
            :click-handler="setServicoList"
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
  name: "ViewServicoFunerario",
  props: {
    showView: String,
    colaboradoreId: Number,
  },
  data() {
    return {
      servicoList: ref([]),
      visibleModal: false,
      actionsBtn: false,
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
    this.setServicoList();
  },
  methods: {
    setCurrentView(idView) {
      this.currentView = idView;
    },
    showActionsBtn() {
      this.actionsBtn = !this.actionsBtn;
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
    setServicoList(page = 1) {
      axios
        .get(`${process.env.VUE_APP_API_URL}/servico-funerario?page=${page}`)
        .then((res) => {
          // console.log(res);
          this.servicoList.value = res.data.data;
          this.totalItens = res.data.total;

          console.log(this.servicoList.value);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
