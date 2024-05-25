<template>
  <div class="form-assistencia">
    <div class="form-navbar-assistencia">
      <AlertForm :show="showAlert" :msg="msgAlert" :type="typeAlert" />

      <div class="d-flex">
        <img class="family-img" :src="require('../../assets/img/family.png')" />
        <div class="d-flex flex-column">
          <p class="form-title">{{ titleModule }}</p>

          <img
            class="icon-back"
            :src="require('../../assets/img/heart.png')"
            @click="setFirstModule()"
          />
        </div>

        <div class="d-flex nav-form">
          <input
            v-model="search"
            class="search-input"
            v-if="currentModule == '1'"
            placeholder="Pesquisar por NOME ou CPF ou ID"
            type="text"
          />

          <img
            @click="searchPlan()"
            v-if="currentModule == '1'"
            class="search-icon"
            :src="require('../../assets/img/search.png')"
          />

          <img
            v-if="currentModule == '1'"
            class="icon-back icon-mar"
            style="margin-top: 34px; margin-left: 24px"
            @click="setFirstModule()"
            :src="require('../../assets/img/new.png')"
          />
        </div>
      </div>
    </div>

    <div class="form-input-assistencia" v-if="currentModule == 1">
      <div class="m-3" style="height: 530px">
        <table class="table table-striped">
          <thead>
            <tr>
              <th>Nº</th>
              <th>Título</th>
              <th>Tipo</th>
              <!-- <th>Valor</th>
              <th>Idade</th>
              <th>Carência</th>
              <th>Pessoas</th>
              <th>Duração</th> -->
              <!-- <th>Benefícios</th> -->
            </tr>
          </thead>
          <tbody>
            <tr class="view-tr" v-for="(item, i) in planList.value" :key="i">
              <td class="pt14blr15">{{ i + 1 }}</td>
              <td class="pt14">{{ item.nome }}</td>
              <td class="pt14">{{ item.tipo }}</td>
              <td class="brr15">
                <img
                  class="eye-table"
                  :src="require('../../assets/img/eye.png')"
                  @click="setFirstModule(item.id)"
                />
              </td>
            </tr>
          </tbody>
        </table>

        <div class="d-flex flex-row-reverse" style="margin-right: 18px">
          <paginate
            :page-count="Math.ceil(this.totalItens / 8)"
            :click-handler="setPlanList"
            :prev-text="'Prev'"
            :next-text="'Next'"
            :container-class="'pagination'"
          >
          </paginate>
        </div>
      </div>

      <div class="d-flex justify-content-between">
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
        </div>
      </div>

      <div class="d-flex">
        <div class="d-flex justify-content-between">
          <div class="d-flex">
            <img
              class="icon-heart"
              :src="require('../../assets/img/wheelchair.png')"
            />
            <p class="text-heart">Material Convalescente</p>
          </div>

          <div class="d-flex">
            <img
              class="icon-heart"
              :src="require('../../assets/img/coffin.png')"
            />
            <p class="text-heart">Funeral</p>
          </div>

          <div class="d-flex">
            <img
              class="icon-heart"
              :src="require('../../assets/img/jazigo.png')"
            />
            <p class="text-heart">Jazigo</p>
          </div>
        </div>
      </div>
    </div>

    <div class="form-input-assistencia" v-if="currentModule == 2">
      <div>
        <div class="d-flex justify-content-between">
          <label class="form-title">Informações Gerais do Plano</label>
        </div>

        <div class="row">
          <div class="col">
            <div class="m5">
              <span class="title-input-blue">Título do Plano</span>

              <input
                type="text"
                class="input-resp"
                v-model="form.nome"
                name="nome"
              />
            </div>
          </div>

          <div class="col">
            <div class="m5">
              <span class="title-input-blue">Tipo do Plano</span>
              <input
                type="text"
                class="input-resp"
                v-model="form.tipo"
                name="tipo"
              />
            </div>
          </div>

          <div class="col">
            <div class="m5">
              <span class="title-input-blue">R$ Taxa de Adesão</span>
              <input
                type="text"
                class="input-resp"
                v-model="form.taxa_adesao"
                name="taxa_adesao"
                v-money="money"
              />
            </div>
          </div>

          <div class="col">
            <div class="m5">
              <span class="title-input-blue">R$ Valor do Plano/mês</span>
              <input
                type="text"
                class="input-resp"
                v-model="form.valor_plano_mes"
                name="valor_plano_mes"
                v-money="money"
              />
            </div>
          </div>

          <div class="col">
            <div class="m5">
              <span class="title-input-blue">Duração do Contrato</span>
              <input
                type="text"
                class="input-resp"
                v-model="form.duracao_contrato"
                name="duracao_contrato"
              />
            </div>
          </div>

          <div class="col">
            <div class="m5">
              <span class="title-input-blue">R$ Taxa de Rescisão</span>
              <input
                type="text"
                class="input-resp"
                v-model="form.taxa_rescisao"
                name="taxa_rescisao"
                v-money="money"
              />
            </div>
          </div>
        </div>

        <div class="d-flex justify-content-between">
          <label class="form-title">Beneficiários</label>
        </div>

        <div class="row">
          <div class="col-3">
            <div class="m3">
              <span class="title-input-blue">Nº mínimo (1)</span>
              <input
                type="text"
                v-model="form.n_min"
                name="n_min"
                class="input-resp"
              />
            </div>
          </div>

          <div class="col-3">
            <div class="m3">
              <span class="title-input-blue">Nº máximo (x)</span>
              <input
                type="text"
                v-model="form.n_max"
                name="n_max"
                class="input-resp"
              />
            </div>
          </div>

          <div class="col-6">
            <div class="m08">
              <span class="title-input-blue">Beneficiários</span>
              <input
                type="text"
                class="input-resp"
                style="width: 98%"
                v-model="form.beneficiarios"
                name="beneficiarios"
                placeholder="Pai, mãe, filhos solteiros, filhos casados, sogros, netos, primos, tios, irmãos, amigos, ..."
              />
            </div>
          </div>
        </div>

        <br />
        <div class="d-flex">
          <label class="form-title">Descrição</label>
        </div>

        <div class="d-flex">
          <textarea
            class="textarea-resp"
            v-model="form.descricao"
            name="descricao"
            cols="150"
            rows="5"
          ></textarea>
        </div>

        <br />

        <div class="d-flex justify-content-between">
          <div class="col">
            <label class="form-title" style="margin-bottom: 5%">
              Benefícios Adicionais
            </label>

            <div class="d-flex" v-for="key in count" :key="key">
              <select
                v-model="values"
                name="beneficio_adicional"
                @blur="setBeneficiosAdicionais()"
                class="select-resp"
              >
                <option>Transporte Adicional</option>
                <option>Materiais P/ Convalescência</option>
                <option>Clube de Vantagens</option>
                <option>Salão de Homenagens 24Hrs</option>
                <option>Somatoconservação</option>
                <option>Traslado Nacional</option>
                <option>Seguro Titular</option>
              </select>

              <input
                type="text"
                style="width: 40%"
                v-model="values"
                :id="key"
                class="input-resp"
                placeholder="R$ Valor"
                v-money="money"
              />

              <img
                class="plus"
                :src="require('../../assets/img/plus.png')"
                @click="addInput()"
              />
              <img
                class="less"
                :src="require('../../assets/img/less.png')"
                @click="removeInput()"
              />
            </div>
          </div>

          <div class="col">
            <div class="row align-items-start">
              <div class="col">
                <label class="form-title"> Faixa Etaria </label>
              </div>
              
              <div class="col">
                <label class="form-title"> Carência </label>
              </div>

              <div class="col">
                <label class="form-title"> Assistência </label>
              </div>

              <div class="col">
                <label class="form-title"> </label>
              </div>
            </div>

            <div
              class="row align-items-center"
              v-for="key in faixaCount"
              :key="key"
            >
              <div class="col">
                <input
                  type="text"
                  v-model="valor_carencia['faixa_etaria-' + key]"
                  :id="key"
                  class="input-resp"
                />
              </div>
              <div class="col">
                <input
                  type="text"
                  v-model="valor_carencia['carencia-' + key]"
                  :id="key"
                  class="input-resp"
                />
              </div>
              <div class="col">
                <input
                  type="text"
                  v-model="valor_carencia['assistencia-' + key]"
                  :id="key"
                  class="input-resp"
                />
              </div>

              <div class="col">
                <img
                  class="plus"
                  :src="require('../../assets/img/plus.png')"
                  @click="addFaixa()"
                />
                <img
                  class="less"
                  :src="require('../../assets/img/less.png')"
                  @click="removeFaixa()"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="d-flex">
          <button
            class="btn-blue m-3"
            type="button"
            v-if="titleModule == 'CRIAR PLANO ASSISTENCIAL'"
            @click="sendNewPlan()"
          >
            Cadastrar
          </button>

          <button
            class="btn-blue m-3"
            type="button"
            v-if="titleModule == 'EDITAR PLANO ASSISTENCIAL'"
            @click="sendUpdatePlan()"
          >
            Editar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
import Paginate from "vuejs-paginate-next";
import AlertForm from "../AlertForm.vue";
import axios from "axios";
import { ref } from "vue";
import { VMoney } from "v-money";
import { mask } from "vue-the-mask";

export default {
  name: "HeartAssistencia",
  data() {
    return {
      search: "",
      currentModule: 1,
      count: 1,
      faixaCount: 1,
      totalItens: null,
      planList: ref({ data: [] }),
      showAlert: false,
      msgAlert: "O contrato esta sendo gerado, aguarde...",
      typeAlert: "alert-info",
      titleModule: "PLANOS ASSISTENCIAIS",
      plan_id: null,
      form: {
        nome: "",
        tipo: "",
        taxa_adesao: "",
        valor_plano_mes: "",
        duracao_contrato: "",
        taxa_rescisao: "",
        n_min: "",
        n_max: "",
        beneficiarios: "",
        descricao: "",
        beneficio_adicional: "",
      },
      values: [],
      valor_carencia: {},
      money: {
        decimal: ",",
        thousands: ".",
        prefix: "R$ ",
        suffix: " ",
        precision: 2,
        masked: false,
      },
    };
  },
  directives: { mask, money: VMoney },
  components: {
    Paginate,
    AlertForm,
  },
  emits: ["setShowForm"],
  methods: {
    addInput() {
      if (this.count < 5) {
        this.count++;
      }
    },

    removeInput() {
      if (this.count != 1) {
        this.count--;
      }
    },

    addFaixa() {
      if (this.faixaCount < 5) {
        this.faixaCount++;
      }
    },

    removeFaixa() {
      if (this.faixaCount != 1) {
        this.faixaCount--;
      }
    },

    changeModule(moduleId) {
      this.currentModule = moduleId;
    },

    setFirstModule(id_plan = null) {
      if (this.currentModule == 1) {
        this.currentModule = 2;
        this.titleModule = "CRIAR PLANO ASSISTENCIAL";

        if (id_plan) {
          this.plan_id = id_plan;

          this.titleModule = "EDITAR PLANO ASSISTENCIAL";

          this.getPlan(id_plan);

          this.getAdditionalBenefits(id_plan);
        }
      } else {
        this.currentModule = 1;
      }
    },

    sendNewPlan() {
      this.showAlert = true;

      axios
        .post(`${process.env.VUE_APP_API_URL}/planos/store`, { data: this.form })
        .then((response) => {
          console.log(response);
          this.msgAlert = "O plano foi cadastrado com sucesso.";
          this.typeAlert = "alert-success";
        });

      setTimeout(() => {
        this.showAlert = false;
      }, 4000);
    },

    sendUpdatePlan() {
      this.showAlert = true;

      axios
        .put(`${process.env.VUE_APP_API_URL}/planos/update/${this.plan_id}`, {
          data: this.form,
        })
        .then((res) => {
          console.log(res);
          this.msgAlert = "O plano foi alterado com sucesso.";
          this.typeAlert = "alert-success";
        });

      setTimeout(() => {
        this.showAlert = false;
      }, 4000);
    },

    setPlanList(page = 1) {
      axios
        .get(`${process.env.VUE_APP_API_URL}/planos?page=${page}`)
        .then((res) => {
          this.planList.value = res.data.data;
          this.totalItens = res.data.meta.total;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    getPlan(id_plan) {
      axios
        .get(`${process.env.VUE_APP_API_URL}/planos/get-plan/${id_plan}`)
        .then((res) => {
          this.form.nome = res.data[0].nome;
          this.form.tipo = res.data[0].tipo;
          this.form.taxa_adesao = res.data[0].taxa_adesao;
          this.form.valor_plano_mes = res.data[0].valor_plano_mes;
          this.form.duracao_contrato = res.data[0].duracao_contrato;
          this.form.taxa_rescisao = res.data[0].taxa_rescisao;
          this.form.n_min = res.data[0].n_min;
          this.form.n_max = res.data[0].n_max;
          this.form.beneficiarios = res.data[0].beneficiarios;
          this.form.descricao = res.data[0].descricao;
          this.form.beneficio_adicional = res.data[0].beneficio_adicional;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    getAdditionalBenefits(id_plan) {
      axios
        .get(
          `${process.env.VUE_APP_API_URL}/planos/get-additional-benefits/${id_plan}`
        )
        .then((res) => {
          console.log(res);
          this.values = res.data;
          // res.data.forEach((item, key) => {
          //   this.values["beneficio_adicional-" + key] = item.beneficio_adicional;
          //   this.values["valor-" + key] = item.valor;
          // });
        })
        .catch((error) => {
          console.log(error);
        });

      console.log(this.values);
      this.count = this.values.length;
    },

    searchPlan() {
      axios
        .get(`${process.env.VUE_APP_API_URL}/plans`, {
          params: {
            search: this.search,
          },
        })
        .then((res) => {
          this.planList.value = res.data.data;
          this.totalItens = res.data.meta.total;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    setBeneficiosAdicionais() {
      this.form.beneficio_adicional = this.values;
    },
  },

  onMounted() {
    this.getPost();
  },

  beforeMount() {
    this.setPlanList();
  },
};
</script>
