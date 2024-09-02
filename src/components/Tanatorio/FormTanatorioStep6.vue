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
      <div
        class="row small-card-border"
        style="margin: 15px"
        v-for="key in count"
        :key="key"
      >
        <div class="col-11">
          <div>
            <span class="title-input-blue">Produto/Serviço</span>

            <input
              @blur="setForm6()"
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
              @blur="setForm6()"
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
import axios from "axios";
import { VMoney } from "v-money";
import { mask } from "vue-the-mask";

export default {
  name: "FormTanatorioStep6",

  props: {
    showForm: Number,
    sendFormNow: Boolean,
    showView: String,
    infoTanato: Object,
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

    setForm6() {
      this.form6 = this.values;
    },

    getMaterias(id) {
      axios
        .get(`${process.env.VUE_APP_API_URL}/tanatorio/get-materias/${id}`)
        .then((res) => {
          this.materias = res.data;

          console.log("LISTA DE MATERIAIS");
          console.log(this.materias);

          this.count = this.materias.length;

          this.materias.forEach((item, key) => {
            this.values["produto_servico_" + key] = item["produto"] ? item["produto"] : "";
            this.values["quantidade_" + key] = item["quantidade"] ? item["quantidade"] : "";
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },

  data() {
    return {
      form6: {
        produto_servico: "",
        quantidade: "",
        valor: "",
      },
      idTanator: null,
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
      this.$emit("set-data-form", this.form6);
    },

    infoTanato: function (item) {
      const tanato = JSON.parse(JSON.stringify(item));

      if (tanato) {
        this.idTanator = tanato.data[0].id;

        this.getMaterias(this.idTanator);
      }
    },
  },
};
</script>
