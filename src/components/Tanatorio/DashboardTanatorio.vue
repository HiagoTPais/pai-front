<template>
  <div class="form-assistencia">
    <div class="form-navbar-assistencia">
      <div class="d-flex justify-content-between">
        <div class="d-flex">
          <img
            class="family-img"
            :src="require('../../assets/img/tanatorio.png')"
          />
          <div class="d-flex flex-column" style="margin-left: 10px">
            <p class="form-title" style="margin-bottom: 7px">
              DASHBOARD TANATORIO
            </p>
            <img
              class="icon-back"
              :src="require('../../assets/img/dashboard.png')"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="form-input-assistencia">
      <div class="d-flex">
        <div>
          <div class="card-dashboard card-dashboard-number">
            <div class="d-flex justify-content-center">
              <p
                class="form-title"
                style="margin-top: 10px; margin-bottom: -5px"
              >
                Nº atendimentos
              </p>
            </div>
            <hr />
            <div class="d-flex justify-content-center">
              <p class="number-card">{{ this.atendimentos }}</p>
            </div>
          </div>
          <div class="card-dashboard card-dashboard-number">
            <div class="d-flex justify-content-center">
              <p
                class="form-title"
                style="margin-top: 10px; margin-bottom: -5px"
              >
                Nº necropsiado
              </p>
            </div>
            <hr />
            <div class="d-flex justify-content-center">
              <p class="number-card">{{ this.necropsiado }}</p>
            </div>
          </div>
          <div class="card-dashboard card-dashboard-number">
            <div class="d-flex justify-content-center">
              <p
                class="form-title"
                style="margin-top: 10px; margin-bottom: -5px"
              >
                Nº normais
              </p>
            </div>
            <hr />
            <div class="d-flex justify-content-center">
              <p class="number-card">{{ this.normais }}</p>
            </div>
          </div>
          <div class="card-dashboard card-dashboard-number">
            <div class="d-flex justify-content-center">
              <p
                class="form-title"
                style="margin-top: 10px; margin-bottom: -5px"
              >
                Nº decomposição
              </p>
            </div>
            <hr />
            <div class="d-flex justify-content-center">
              <p class="number-card">{{ this.decomposicao }}</p>
            </div>
          </div>
        </div>
        <div class="d-flex flex-wrap">
          <div class="card-dashboard" style="width: 530px; height: 320px">
            <p class="form-title m-3">
              Atendimento Funerário por Agente Funerário
            </p>
            <Bar :data="atendimentoAgenteFunerario" :options="chartOptions" />
          </div>
          <div class="card-dashboard" style="width: 530px; height: 320px">
            <p class="form-title m-3">
              Atendimento Funerário por Auxiliar de Agente Funerário
            </p>
            <Bar
              :data="atendimentoAuxiliarAgenteFunerario"
              :options="chartOptions"
            />
          </div>
          <div class="card-dashboard" style="width: 530px; height: 320px">
            <p class="form-title m-3">Media de Idade</p>
            <Bar :data="mediaIdade" :options="chartOptions" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
import axios from "axios";

import { Bar } from "vue-chartjs";
// import { Pie } from "vue-chartjs";
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
  name: "DashboardTanatorio",

  components: { Bar },

  data() {
    return {
      atendimentos: 0,
      necropsiado: 0,
      normais: 0,
      decomposicao: 0,
      n_idade: [],
      idade: [],

      chartOptions: {
        responsive: true,
      },

      mediaIdade: {
        labels: this.n_idade,
        datasets: [
          {
            label: "",
            backgroundColor: "#21509f",
            data: this.idade,
          },
        ],
      },

      atendimentoAuxiliarAgenteFunerario: {
        labels: [
          "Nicolau Raposo",
          "Henrique Castro",
          "Miguel Simões",
          "Carlos Oliveira",
          "Rodrigo Costa",
          "Eduardo Silva",
          "Carlos Castro",
          "Sérgio Machado",
          "Gabriel Cruz",
        ],
        datasets: [
          {
            label: "",
            backgroundColor: "#21509f",
            data: [40, 20, 12, 39, 10, 40, 39, 80, 40],
          },
        ],
      },

      atendimentoAgenteFunerario: {
        labels: [
          "Inês Ramos",
          "Alexandra Moreira",
          "Cristina Martins",
          "Teresa Correia",
          "Daniela Jesus",
          "Laura Lopes",
          "Carolina Raposo",
          "Susana Neves",
          "Daniela Almeida",
        ],
        datasets: [
          {
            label: "",
            backgroundColor: "#21509f",
            data: [40, 20, 12, 39, 10, 40, 39, 80, 40],
          },
        ],
      },
    };
  },

  beforeMount() {
    this.getInfoTanatorio();
  },

  methods: {
    getInfoTanatorio() {
      axios.get(`${process.env.VUE_APP_API_URL}/tanatorio/info`).then((res) => {
        this.atendimentos = res.data.atendimentos;
        this.necropsiado = res.data.necropsiado;
        this.normais = res.data.normais;
        this.decomposicao = res.data.decomposicao;
        
        res.data.n_idade.forEach((element) => {
          this.n_idade.push(element.n_idade);
        });
        
        res.data.idade.forEach((element) => {
          this.idade.push(element.idade);
        });

        // console.log(JSON.parse(JSON.stringify(this.idade)));
        // console.log(JSON.parse(JSON.stringify(this.n_idade)));
      });
    },
  },
};
</script>
