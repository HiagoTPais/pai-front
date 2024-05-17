<template>
  <div v-if="showForm == 5" style="height: 660px; text-align: left;">
    <div v-if="showView == 'form-assistencia-edit'">
      <label class="form-title m-3">Histórico de Pagamento</label>

      <div class="d-flex">
        <div
          style="border: #21509f solid 2px; border-radius: 15px; margin: 5px"
        >
          <div class="m-1">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>Nº</th>
                  <th>Vencimento</th>
                  <th>Valor</th>
                  <th>Pagamento</th>
                  <th>2ªVia</th>
                  <th>Cobrador</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, i) in itens" :key="i">
                  <td class="pt14blr15">{{ item.n }}</td>
                  <td class="pt14">{{ item.vencimento }}</td>
                  <td class="pt14">{{ item.valor }}</td>
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
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div
          v-if="showCardVenc == 1"
          style="
            width: 47%;
            height: 170px;
            border: #e5081d solid 2px;
            border-radius: 15px;
            background-color: #21509f;
            margin: 5px;
          "
        >
          <div style="margin: 18px">
            <img
              class="pagar"
              style="background-color: #e5081d; margin-bottom: 10px"
              :src="require('../../assets/img/pagar.png')"
            />
            <p style="color: #fff; font-weight: bold">
              Deseja realizar recebimento do pagamento referente ao mês 09/2023?
            </p>
            <div class="d-flex justify-content-between">
              <button
                type="button"
                class="btn-red btn-sm"
                style="width: 70px"
                @click="setShowCardVenc(0)"
              >
                Não
              </button>
              <button
                type="button"
                class="btn-white btn-sm"
                style="margin-right: 8px"
                @click="setShowCardVenc(2)"
              >
                Sim
              </button>
            </div>
          </div>
        </div>

        <div
          v-if="showCardVenc == 2"
          style="
            width: 47%;
            height: 300px;
            border: #21509f solid 2px;
            border-radius: 15px;
            margin: 5px;
          "
        >
          <div style="margin: 18px">
            <div class="d-flex justify-content-between">
              <img
                class="pagar"
                style="background-color: #21509f; margin-bottom: 10px"
                :src="require('../../assets/img/pagar.png')"
              />
              <img
                class="pagar"
                style="background-color: #ffffff; margin-bottom: 10px"
                :src="require('../../assets/img/printer.png')"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="d-flex">
        <div class="m-2 d-flex">
          <p style="margin-right: 5px" class="sphere blue"></p>
          <p style="color: #21509f">Pago</p>
        </div>
        <div class="m-2 d-flex">
          <p style="margin-right: 5px" class="sphere black"></p>
          <p style="color: #000000">A Vencer</p>
        </div>
        <div class="m-2 d-flex">
          <p style="margin-right: 5px" class="sphere red"></p>
          <p style="color: #e5081d">Vencida</p>
        </div>
        <div class="m-2 d-flex">
          <p style="margin-right: 5px" class="sphere orange"></p>
          <p style="color: #c86014">Em Negociação</p>
        </div>
      </div>
    </div>

    <div v-else>
      <div class="d-flex m-3">
        <div class="area-pdf pdf-display">
          <iframe
            style="border-radius: 7px"
            :src="srcPdf"
            width="100%"
            height="600px"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import axios from "axios";

export default {
  name: "FormAssistenciaStep5",
  props: {
    showForm: Number,
    showView: String,
    contractData: Object,
    contractId: Number,
    srcPdf: String,
  },
  methods: {
    setShowCardVenc(id) {
      this.showCardVenc = id;
    },
    download() {
      axios
        .get(`${process.env.VUE_APP_API_URL}/contract/download/${this.contractId}`, {
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          responseType: "arraybuffer",
        })
        .then((res) => {
          const blob = new Blob([res.data], { type: "application/pdf" });
          const url = window.URL.createObjectURL(blob);
          var link = document.createElement("a");
          link.href = url;
          link.target = "_blank";
          link.setAttribute("download", "file.pdf");
          document.body.appendChild(link);
          link.click();
        });
    },
  },
  data() {
    const itens = ref([
      {
        n: "015",
        vencimento: "15/12/2023",
        valor: "R$ 50,00",
        pagamento: "10/08/2023",
        segunda_via: " - ",
        cobrador: "Colaborador 1",
        vencido: "s",
      },
      {
        n: "014",
        vencimento: "15/12/2023",
        valor: "R$ 50,00",
        pagamento: "10/08/2023",
        segunda_via: " - ",
        cobrador: "Colaborador 1",
        vencido: "s",
      },
      {
        n: "013",
        vencimento: "15/12/2023",
        valor: "R$ 50,00",
        pagamento: "10/08/2023",
        segunda_via: " - ",
        cobrador: "Colaborador 1",
        vencido: "s",
      },
      {
        n: "012",
        vencimento: "15/12/2023",
        valor: "R$ 50,00",
        pagamento: "10/08/2023",
        segunda_via: " - ",
        cobrador: "Colaborador 1",
        vencido: "n",
      },
      {
        n: "011",
        vencimento: "15/12/2023",
        valor: "R$ 50,00",
        pagamento: "10/08/2023",
        segunda_via: " - ",
        cobrador: "Colaborador 1",
        vencido: "n",
      },
      {
        n: "010",
        vencimento: "15/12/2023",
        valor: "R$ 50,00",
        pagamento: "10/08/2023",
        segunda_via: " - ",
        cobrador: "Colaborador 1",
        vencido: "n",
      },
      {
        n: "009",
        vencimento: "15/12/2023",
        valor: "R$ 50,00",
        pagamento: "10/08/2023",
        segunda_via: " - ",
        cobrador: "Colaborador 1",
        vencido: "n",
      },
    ]);

    return {
      showCardVenc: 0,
      currentView: 1,
      itens,
    };
  },
};
</script>