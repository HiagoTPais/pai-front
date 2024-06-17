<template>
  <div class="form-assistencia">
    <div class="form-navbar-assistencia">
      <div class="d-flex justify-content-between">
        <div class="d-flex">
          <img
            class="family-img"
            :src="
              deleteMode
                ? require('../../assets/img/family-red.png')
                : require('../../assets/img/family.png')
            "
          />
          <div class="d-flex flex-column" style="margin-left: 10px">
            <p
              class="form-title"
              :style="!deleteMode ? { color: '#21509F' } : { color: '#e5081d' }"
              style="margin-bottom: 7px"
            >
              COBRAR/BAIXAR/GERAR
            </p>
            <img
              class="icon-back"
              :style="
                !deleteMode
                  ? { backgroundColor: '#21509F' }
                  : { backgroundColor: '#e5081d' }
              "
              :src="require('../../assets/img/pagar.png')"
            />
          </div>
        </div>

        <div>
          <input
            class="search-input"
            v-model="search"
            placeholder="Pesquisar por NOME ou CPF ou ID"
            type="text"
          />

          <div style="position: absolute;" v-for="(item, i) in beneficiariosLista" :key="i">
            <p>{{ item.nome_completo }}</p>
          </div>

          <img
            @click="searchNomeBeneficiario()"
            class="search-icon"
            style="margin-top: 2px"
            :src="require('../../assets/img/search.png')"
          />

          <img
            class="icon-back icon-mar"
            :style="
              !deleteMode
                ? { backgroundColor: '#21509F' }
                : { backgroundColor: '#e5081d' }
            "
            style="margin-left: 22px"
            @click="setDeleteMode()"
            :src="require('../../assets/img/erase.png')"
          />

          <img
            class="icon-back icon-mar"
            @click="showEditarPagamentoModal()"
            :src="require('../../assets/img/pencil.png')"
          />

          <img
            class="icon-back icon-mar"
            @click="showGerarPagamentoModal()"
            :src="require('../../assets/img/plus-math-icon.png')"
          />
        </div>

        <div
          class="item"
          v-for="beneficiario in beneficiarioLista"
          :key="beneficiario"
        >
          <p>{{ beneficiario.nome_completo }}</p>
        </div>
        <!-- <div class="item error" v-if="input && !filteredList().length">
          <p>No results found!</p>
        </div> -->
      </div>
    </div>
    <div class="form-input-assistencia">
      <div class="m-3">
        <label
          class="form-title"
          :style="!deleteMode ? { color: '#21509F' } : { color: '#e5081d' }"
          >Histórico de Pagamento
        </label>
      </div>
      <div class="m-3">
        <table class="table table-striped">
          <thead>
            <tr>
              <th></th>
              <th>Nº</th>
              <th>ID</th>
              <th>Nome</th>
              <th>Tipo</th>
              <th>Vencimento</th>
              <th>Valor</th>
              <th>Pagamento</th>
              <th>2ªVia</th>
              <th>Cobrador</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, i) in pagamentoLista" :key="i">
              <td class="pt14blr15">
                <input
                  class="checkbox-pop"
                  :value="item.protocolo_id"
                  v-on:input="addProtocoloLista(this)"
                  type="checkbox"
                />
              </td>
              <td class="pt14">{{ i + 1 }}</td>
              <td class="pt14">{{ item.protocolo_id }}</td>
              <td class="pt14">{{ item.nome_completo }}</td>
              <td class="pt14">{{ item.type }}</td>
              <td class="pt14">{{ item.date_due }}</td>
              <td class="pt14">R$ {{ item.value }}</td>
              <td class="pt14">
                <input class="checkbox-pop" type="checkbox" />
              </td>
              <td class="pt14">
                <img
                  style="height: 25px; width: 25px"
                  :src="require('../../assets/img/paper.png')"
                />
              </td>
              <td class="brr15">{{ item.collector }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="d-flex flex-row-reverse" style="margin-right: 18px">
        <paginate
          style="margin-top: 5%"
          :page-count="Math.ceil(this.totalItens / 8)"
          :click-handler="searchBeneficiariesPayments"
          :prev-text="'Prev'"
          :next-text="'Next'"
          :container-class="'pagination'"
        >
        </paginate>
      </div>

      <div class="d-flex d-flex justify-content-between">
        <div class="d-flex m-3">
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

        <div style="margin-right: 35px !important">
          <EraseModal
            :msg="
              !deleteMode
                ? 'Deseja realizar recebimento de 100,00 referente a 2 parcelas do mês 10/2023 a 11/2023?'
                : 'Deseja realizar cancelamento de 50,00 referente a 1 parcelas 15/10/2023 do mês R$ 50,00 11/2023?'
            "
            :deleteMode="deleteMode"
            :visible="false"
            :showView="showView"
          />
        </div>
        <div>
          <EditarPagamento
            :visibleGerarPagamento="this.visibleGerarPagamento"
            :pagamentoLista="pagamentoLista"
          />
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
import Paginate from "vuejs-paginate-next";
import axios from "axios";
import { ref } from "vue";
import EraseModal from "../Modal/EraseModal";
import EditarPagamento from "../Modal/EditarPagamento.vue";

export default {
  name: "PaymentAssistencia",

  data() {
    return {
      search: null,
      totalItens: null,
      visibleGerarPagamento: false,
      protocoloLista: [],
      deleteMode: false,
      beneficiariosLista: ref([]),
      pagamentoLista: ref([]),
      input: ref(""),
    };
  },

  components: {
    EraseModal,
    EditarPagamento,
    Paginate,
  },
  emits: ["setShowForm"],
  methods: {
    addProtocoloLista(event) {
      console.log(event);
      // this.protocoloLista += event.target.value;
      // console.log(this.pagamentoLista);
    },

    searchBeneficiariesPayments() {
      axios
        .get(`${process.env.VUE_APP_API_URL}/pagamento`, {
          params: {
            search: this.search,
          },
        })
        .then((res) => {
          this.pagamentoLista = res.data.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    searchNomeBeneficiario() {
      // console.log(this.search);
      axios
        .get(`${process.env.VUE_APP_API_URL}/beneficiario`, {
          params: {
            search: this.search,
          },
        })
        .then((res) => {
          this.beneficiariosLista = res.data.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    showGerarPagamentoModal() {
      this.visibleGerarPagamento = !this.visibleGerarPagamento;
    },

    showEditarPagamentoModal() {
      this.visibleGerarPagamento = !this.visibleGerarPagamento;
    },
  },
};
</script>