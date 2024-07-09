<template>
  <div v-if="showForm == 6">
    <label class="form-title m-3">Dados do Funeral</label>

    <div class="row justify-content-end">
      <div class="col-1">
        <img
          style="width: 42px; height: 40px; cursor: pointer"
          :src="require('../../assets/img/plus.png')"
          @click="addInput()"
        />
      </div>
      <div class="col-1">
        <img
          style="width: 42px; height: 41px; cursor: pointer"
          :src="require('../../assets/img/less.png')"
          @click="removeInput()"
        />
      </div>
    </div>

    <br />

    <div class="scrollbar-y">
      <div class="row" v-for="key in count" :key="key">
        <div class="col-10">
          <div>
            <span class="title-input-blue">Produto/Serviço</span>

            <input
              @blur="setForm7()"
              type="text"
              v-model="values['produto_servico_' + (key - 1)]"
              class="input-resp"
              name="produto_servico"
            />
          </div>
        </div>

        <div class="col-1">
          <div>
            <span class="title-input-blue">Quantidade</span>

            <input
              @blur="setForm7()"
              type="number"
              v-model="values['quantidade_' + (key - 1)]"
              class="input-resp"
              name="quantidade"
            />
          </div>
        </div>

        <div class="col-1">
          <div>
            <span class="title-input-blue">Valor</span>

            <input
              @blur="setForm7()"
              type="text"
              v-model="values['valor_' + (key - 1)]"
              class="input-resp"
              name="valor"
              v-money="money"
            />
          </div>
        </div>
      </div>
    </div>
  </div>

  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">...</div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">
            Close
          </button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
// import axios from "axios";
import { VMoney } from "v-money";
import { mask } from "vue-the-mask";

export default {
  name: "FormColaboradoresStep7",
  props: {
    showForm: Number,
    sendFormNow: Boolean,
    showView: String,
    colaboradorLista: Object,
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
    setForm7() {
      this.form7 = this.values;
    },
  },
  data() {
    return {
      form7: {
        produto_servico: "",
        quantidade: "",
        valor: "",
      },
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
  directives: { money: VMoney, mask },
  watch: {
    sendFormNow: function () {
      this.$emit("set-data-form", this.form7);
    },
  },
};
</script>
