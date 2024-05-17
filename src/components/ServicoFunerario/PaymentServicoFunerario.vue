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

          <img
            @click="searchBeneficiaries()"
            class="search-icon"
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
            :src="require('../../assets/img/pencil.png')"
          />

          <img
            class="icon-back icon-mar"
            :src="require('../../assets/img/refresh-white.png')"
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
              <th>Nº</th>
              <th>ID</th>
              <th>Nome</th>
              <th>Tipo</th>
              <th>Vencimento</th>
              <th>Valor</th>
              <th></th>
              <th>Pagamento</th>
              <th>2ªVia</th>
              <th>Cobrador</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, i) in paymentHistory.value" :key="i">
              <td class="pt14blr15">{{ item.id }}</td>
              <td class="pt14">{{ item.identification }}</td>
              <td class="pt14">{{ item.name }}</td>
              <td class="pt14">{{ item.type }}</td>
              <td class="pt14">{{ item.invoice_due_date }}</td>
              <td class="pt14">{{ item.value }}</td>
              <td class="pt14">
                <input class="checkbox-pop" type="checkbox" id="check2" />
              </td>
              <td class="pt14">{{ item.payment }}</td>
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
          :click-handler="setPaymentHistory"
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
      </div>
    </div>
  </div>
</template>
  
<script>
import Paginate from "vuejs-paginate-next";
import axios from "axios";
import { ref } from "vue";
import EraseModal from "../Modal/EraseModal";

export default {
  name: "PaymentServicoFunerario",

  data() {
    return {
      search: null,
      totalItens: null,
      deleteMode: false,
      paymentHistory: ref([]),
      beneficiarioLista: ref([]),
      input: ref(""),
    };
  },
  components: {
    EraseModal,
    Paginate,
  },
  emits: ["setShowForm"],
  methods: {
    searchBeneficiaries() {
      axios
        .get(`${process.env.VUE_APP_API_URL}/beneficiaries`, {
          params: {
            search: this.search,
          },
        })
        .then((res) => {
          console.log(res.data);
          this.beneficiarioLista = res.data.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>