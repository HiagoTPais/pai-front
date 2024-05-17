<template>
  <div v-if="showForm == 6" style="height: 660px; text-align: left">
    <div v-if="showView == 'form-assistencia-edit'">
      <label class="form-title m-3">Histórico de Beneficiario</label>

      <div style="border: #21509f solid 2px; border-radius: 15px">
        <div class="m-1">
          <table class="table table-striped">
            <thead>
              <tr>
                <th>Protocolo</th>
                <th>Nº</th>
                <th>Data</th>
                <th>Serviço</th>
                <th>Valor</th>
                <th>Vencimento</th>
                <th>Pagamento</th>
                <th>2ªVia</th>
                <th>Cobrador</th>
                <th>Atendente</th>
                <th>Avaliação</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, i) in itens" :key="i">
                <td class="pt14blr15">{{ item.protocolo }}</td>
                <td class="pt14">{{ item.n }}</td>
                <td class="pt14">{{ item.data }}</td>
                <td class="pt14">{{ item.servico }}</td>
                <td class="pt14">{{ item.valor }}</td>
                <td class="pt14">{{ item.vencimento }}</td>
                <td class="pt14">
                  <img
                    class="pagar"
                    :src="require('../../assets/img/pagar.png')"
                    :style="
                      item.vencido == 's'
                        ? { backgroundColor: '#000000' }
                        : { backgroundColor: '#E5081D' }
                    "
                    @click="setShowCardVenc(1)"
                  />
                </td>
                <td class="pt14">{{ item.segunda_via }}</td>
                <td class="pt14">{{ item.cobrador }}</td>
                <td class="pt14">{{ item.atendente }}</td>
                <td class="pt14">{{ item.avaliacao }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="d-flex">
        <div class="m-2 d-flex">
          <p style="margin-right: 5px" class="sphere black"></p>
          <p style="color: #000000">A Vencer</p>
        </div>
        <div class="m-2 d-flex">
          <p style="margin-right: 5px" class="sphere blue"></p>
          <p style="color: #21509f">Pago</p>
        </div>
        <div class="m-2 d-flex">
          <p style="margin-right: 5px" class="sphere red"></p>
          <p style="color: #e5081d">Vencida</p>
        </div>
        <div class="m-2 d-flex">
          <p style="margin-right: 5px" class="sphere light-green"></p>
          <p style="color: #97d356">Em Andamento</p>
        </div>
        <div class="m-2 d-flex">
          <p style="margin-right: 5px" class="sphere green"></p>
          <p style="color: #00b456">Finalizado</p>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="d-flex justify-content-center">
        <div class="d-flex flex-column">
          <div class="text-suc">
            <h2>Beneficiários Cadastrados com Sucesso</h2>
            <h2>Protocolo ID – {{ this.protocoloId }}</h2>
            <p>Cadastrado às 16:10:05 de 24/05/2023 por Fulana de Tal</p>
          </div>
          <div class="d-flex justify-content-end">
            <button
              type="button"
              class="btn-blue m-3"
              id="next-button"
              @click="$emit('closeForm')"
            >
              Fechar
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
import axios from "axios";
import { ref } from "vue";

export default {
  name: "FormAssistenciaStep6",
  emits: ["closeForm"],
  props: {
    showForm: Number,
    showView: String,
    beneficiaryList: Object,
  },
  data() {
    const itens = ref([]);

    return {
      currentView: 1,
      protocoloId: "",
      itens,
    };
  },
  methods: {
    getHistoricoBeneficiario(id) {
      axios
        .get(`${process.env.VUE_APP_API_URL}/get-historico-beneficiario/${id}`)
        .then((res) => {
          this.itens = res.data;
        });
    },
  },
  beforeMount() {
    this.getHistoricoBeneficiario(5);
  },
  watch: {
    beneficiaryList: function (beneficiaryList) {
      console.log(beneficiaryList);
    },
  },
};
</script>
