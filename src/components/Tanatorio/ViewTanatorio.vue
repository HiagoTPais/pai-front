<template>
  <div class="form-assistencia">
    <div class="form-navbar-assistencia">

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
          <table class="table table-striped"></table>
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
        <!-- <div class="d-flex flex-row-reverse" style="margin-right: 18px">
          <paginate
            :page-count="Math.ceil(this.totalItens / 10)"
            :click-handler="setColaboradoresList"
            :prev-text="'Prev'"
            :next-text="'Next'"
            :container-class="'pagination'"
          >
          </paginate>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
// import Paginate from "vuejs-paginate-next";
// import axios from "axios";
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
  components: {},

  emits: ["setShowForm"],
  
  methods: {
    setCurrentView(idView) {
      this.currentView = idView;
    },

    showActionsBtn() {
      this.actionsBtn = !this.actionsBtn;
    },
  },
};
</script>
