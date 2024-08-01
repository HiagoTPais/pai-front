 <template>
  <div v-if="showForm == 6" style="height: 600px">
    <label class="form-title m-3">Materiais</label>

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

    <div class="scrollbar-y" style="max-height: 600px">
      <div class="row" v-for="key in count" :key="key">
        <div class="col-11">
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
      </div>
    </div>
  </div>
</template>


<script>
import { VMoney } from "v-money";
import { mask } from "vue-the-mask";

export default {
  name: "FormTanatorioStep1",
  props: {
    showForm: Number,
    sendFormNow: Boolean,
    showView: String,
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
  components: {},
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
      this.$emit("set-data-form", this.form1);
    },
  },
};
</script>
