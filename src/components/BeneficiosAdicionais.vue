<template>
  <div class="col">
    <label class="form-title" style="margin-bottom: 5%">
      Benefícios Adicionais
    </label>

    <div class="scrollbar-ben">
      <div class="d-flex" v-for="key in count" :key="key">
        <select
          v-model="values['beneficio_adicional-' + (key - 1)]"
          name="beneficio_adicional"
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
          v-model="values['valor-' + (key - 1)]"
          :id="key"
          class="input-resp"
          placeholder="R$ Valor"
          v-money="money"
          @blur="setValoresAdicionais(key)"
        />
        <img
          style="width: 45px; height: 40px; cursor: pointer"
          :src="require('../assets/img/plus.png')"
          @click="addInput()"
        />
        <img
          style="width: 45px; height: 43px; cursor: pointer"
          :src="require('../assets/img/less.png')"
          @click="removeInput()"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { VMoney } from "v-money";
import { mask } from "vue-the-mask";

export default {
  name: "BeneficiosAdicionais",

  data() {
    return {
      count: 1,
      values: {},
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

  props: {
    sendForm: Boolean,
    valuesBen: Object,
    countBen: Number
  },

  methods: {
    addInput() {
      this.count++;
    },

    removeInput() {
      if (this.count != 1) {
        this.count--;
      }
    },

    setValoresAdicionais(key) {
      console.log(key);
    },
  },
  
  directives: { mask, money: VMoney },

  watch: {
    sendForm: function () {
      this.$emit("set-beneficios-adicionais", this.values);
    },

    valuesBen: function(item) {
      this.values = item
    },

    countBen: function(item) {
      console.log(item);
      this.count = item
    }
  },
};
</script>
