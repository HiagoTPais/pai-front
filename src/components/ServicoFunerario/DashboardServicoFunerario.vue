<template>
  <div class="form-assistencia">
    <div class="form-navbar-assistencia">
      <div class="d-flex justify-content-between">
        <div class="d-flex">
          <img
            class="family-img"
            :src="require('../../assets/img/family.png')"
          />
          <div class="d-flex flex-column" style="margin-left: 10px">
            <p
              class="form-title"
              :style="!deleteMode ? { color: '#21509F' } : { color: '#e5081d' }"
              style="width: 140%; margin-bottom: 7px"
            >
              ANALISANDO BENEFICIARIOS
            </p>
            <img
              class="icon-back"
              :src="require('../../assets/img/dashboard.png')"
              :style="
                !deleteMode
                  ? { backgroundColor: '#21509F' }
                  : { backgroundColor: '#e5081d' }
              "
            />
          </div>
        </div>
      </div>
    </div>
    <div class="form-input-assistencia">
      <div class="d-flex">
        <div class="card-dashboard">
          <div class="card-text">
            <div class="d-flex justify-content-between">
              <p class="card-title">Informação</p>
              <p class="card-title">Valor</p>
            </div>
            <br /><br />
            <div class="d-flex justify-content-between">
              <p>Total Contratantes</p>
              <p>89</p>
            </div>
            <div class="d-flex justify-content-between">
              <p>Total Beneficiario</p>
              <p>45</p>
            </div>
            <div class="d-flex justify-content-between">
              <p>Numero Mensalidades Pagas</p>
              <p>28</p>
            </div>
            <div class="d-flex justify-content-between">
              <p>Numero de Mensalidades Pagas</p>
              <p>45</p>
            </div>
            <div class="d-flex justify-content-between">
              <p>Ticket Medio</p>
              <p>32</p>
            </div>
          </div>
        </div>
        <div class="card-dashboard" style="width: 550px">
          <div class="d-flex">
            <div>
              <Pie
                id="my-chart-id-4"
                :options="chartOptions"
                :data="clientesDados"
              />
            </div>
            <div class="d-flex flex-column" style="padding-top: 5%">
              <div class="m3">
                <button type="button" class="btn-dc">CADÊNCIA</button>
              </div>
              <div class="m3">
                <button type="button" class="btn-dc">CONVALECÊNCIA</button>
              </div>
              <div class="m3">
                <button type="button" class="btn-dc">A RENOVAR</button>
              </div>
              <div class="m3">
                <button type="button" class="btn-dc">EM NEGOCIAÇÃO</button>
              </div>
              <div class="m3">
                <button type="button" class="btn-dc">LUTO RECENTE</button>
              </div>
              <div class="m3">
                <button type="button" class="btn-dc">FUNERAL</button>
              </div>
            </div>
          </div>
          <div class="card-text">
            <div class="d-flex justify-content-between">
              <p>Total de Clientes</p>
              <p>150</p>
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex">
        <div class="card-dashboard" style="width: 720px">
          <p class="form-title m-3">Fachetaria Beneficiarios</p>
          <Bar :data="dadosfachetariaBeneficiarios" :options="chartOptions" />
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
import { Bar } from "vue-chartjs";
import { Pie } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  ArcElement,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale
);

export default {
  name: "DashboardServicoFunerario",
  components: { Bar, Pie },
  data() {
    return {
      chartData: {
        labels: ["January", "February", "March"],
        datasets: [{ data: [40, 20, 12] }],
      },
      chartOptions: {
        responsive: true,
      },

      dadosfachetariaBeneficiarios: {
        labels: ["20", "30", "40", "50", "60", "70", "80", "90", "100"],
        datasets: [
          {
            label: "Masculino",
            backgroundColor: "#00D8FF",
            data: [40, 20, 12, 39, 10, 40, 39, 80, 40],
          },
          {
            label: "Feminino",
            backgroundColor: "#DD1B16",
            data: [40, 20, 12, 39, 10, 40, 39, 80, 40],
          },
        ],
      },

      clientesDados: {
        labels: [
          "Clientes Ativos",
          "Clientes a Suspender",
          "Clientes Resem Suspenssos",
          "Clientes Cadastrados",
        ],
        datasets: [
          {
            backgroundColor: ["#41B883", "#E46651", "#00D8FF", "#DD1B16"],
            data: [40, 20, 80, 10],
          },
        ],
      },
    };
  },
  created() {
    this.setDataChart();
  },
  methods: {
    setDataChart() {
      console.log("AAAAAAAAAAA");
    },
  },
};
</script>
