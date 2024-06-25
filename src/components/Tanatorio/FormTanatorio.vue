<template>
  <div class="form-assistencia">
    <div class="form-navbar-assistencia">
      <div class="d-flex">
        <img
          class="family-img"
          :src="require('../../assets/img/colaboradores.png')"
        />
        <div class="d-flex flex-column" style="margin-left: 10px">
          <p
            class="form-title"
            style="width: 140%; margin-bottom: 7px; text-align: left"
          >
            CADASTRANDO COLABORADORES
          </p>
          <img
            class="beneficiario-icon"
            :src="require('../../assets/img/beneficiario.png')"
          />
        </div>

        <div class="d-flex" style="margin-left: -18%;">
          <span
            class="nav-icon"
            v-for="(tab, index) in tabs"
            :key="index"
            @click="currentTabs = index + 1"
          >
            {{ tab }}
          </span>
        </div>
      </div>
    </div>
    <div class="form-input-assistencia">
      <form style="height: 750px">
        
      </form>
    </div>
    <div class="form-input-assistencia">
      <form>
        <BtnNextTab
          @click="setNextForm()"
          :currentTabs="currentTabs"
          :hideButton="hideButton"
        />
      </form>
    </div>
  </div>
</template>

<script>
// import axios from "axios";

import BtnNextTab from "../Btn/BtnNextTab";

export default {
  name: "FormTanatorio",
  props: {
    showView: String,
    colaboradorId: Number,
  },
  data() {
    return {
      currentTabs: 1,
      sendForm: false,
      hideButton: false,
      tabs: ["1. Tantorio"],
    };
  },
  components: {
    BtnNextTab,
  },
  emits: ["sendFormNow"],
  methods: {
    setDataForm(formData) {
      this.dataForm.push(formData);

      let values = [];
      let keys = [];
      let obj = {};

      let dependentes = this.dataForm[1];

      // delete this.dataForm[1];

      if (this.dataForm.length == 4) {
        this.dataForm.forEach((element) => {
          for (let key in element) {
            values.push(element[key]);
            keys.push(key);
          }
        });

        for (let i = 0; i < keys.length && i < values.length; i++) {
          obj[keys[i]] = values[i];
        }

        obj["dependentes"] = dependentes;

        this.dataForm = obj;

        if (this.showView == "form-colaboradores-edit") {
          this.updateDateForm(this.dataForm);
        } else {
          this.storeDateForm(this.dataForm);
        }
      }
    },

    setNextForm() {
      this.currentTabs = this.currentTabs + 1;

      if (this.currentTabs > 6) {
        this.currentTabs = 1;
      }

      if (this.currentTabs == 5) {
        this.sendFormNow();
      }
    },

    sendFormNow() {
      this.sendForm = !this.sendForm;
    },
  },
};
</script>
