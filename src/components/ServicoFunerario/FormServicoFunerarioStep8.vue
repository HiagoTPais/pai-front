<template>
  <div v-if="showForm == 7">
    <label class="form-title m-3">Dados dos Cuidados</label>

    <div class="row">
      <div class="col">
        <div class="m5">
          <span class="title-input-blue">Nome do Falecido</span>

          <input
            type="text"
            v-model="form8.nome_completo"
            class="input-resp"
            name="nome_completo"
          />
        </div>
      </div>

      <div class="col">
        <div class="m5">
          <span class="title-input-blue">Causa morte</span>

          <input
            type="text"
            v-model="form8.causa_morte"
            class="input-resp"
            name="causa_morte"
          />
        </div>
      </div>

      <div class="col">
        <div class="m5">
          <span class="title-input-blue">Peso</span>

          <input
            type="text"
            v-model="form8.peso"
            class="input-resp"
            name="peso"
          />
        </div>
      </div>

      <div class="col">
        <div class="m5">
          <span class="title-input-blue">Altura</span>

          <input
            type="text"
            v-model="form8.altura"
            class="input-resp"
            name="altura"
          />
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <div class="m5">
          <span class="title-input-blue">Agenda Funeraria</span>

          <input
            type="text"
            v-model="form8.agenda_funeraria"
            class="input-resp"
            name="agenda_funeraria"
          />
        </div>
      </div>

      <div class="col">
        <div class="m5">
          <span class="title-input-blue">Auxiliar de Agencia Funeraria</span>

          <input
            type="text"
            v-model="form8.auxiliar_agencia_funeraria"
            class="input-resp"
            name="auxiliar_agencia_funeraria"
          />
        </div>
      </div>

      <div class="col">
        <div class="m5">
          <span class="title-input-blue">Hora e data de Inicio</span>

          <input
            type="datetime-local"
            v-model="form8.hora_data_inicio"
            class="input-resp"
            name="hora_data_inicio"
          />
        </div>
      </div>

      <div class="col">
        <div class="m5">
          <span class="title-input-blue">Hora e Data de Termino</span>

          <input
            type="datetime-local"
            v-model="form8.hora_data_termino"
            class="input-resp"
            name="hora_data_termino"
          />
        </div>
      </div>

      <div class="col">
        <div class="m5">
          <span class="title-input-blue">Ocupação</span>

          <input
            type="text"
            v-model="form8.ocupacao"
            class="input-resp"
            name="ocupacao"
          />
        </div>
      </div>

      <div class="col">
        <div class="m5">
          <span class="title-input-blue">Religião</span>

          <input
            type="text"
            v-model="form8.religiao"
            class="input-resp"
            name="religiao"
          />
        </div>
      </div>
    </div>

    <br />

    <div class="row">
      <div class="col">
        <div class="checkbox-wrapper-13">
          <input
            class="c1-13"
            type="checkbox"
            v-model="form8.havera_somatoconservacao_avancada"
            name="havera_somatoconservacao_avancada"
          />
          <label class="form-title">Haverá Somatoconservação Avançada?</label>
        </div>
      </div>

      <div class="col">
        <div class="checkbox-wrapper-13">
          <input
            class="c1-13"
            type="checkbox"
            v-model="form8.corpo_necropsiado"
            name="particular"
          />
          <label class="form-title">Corpo Necropsiado?</label>
        </div>
      </div>
    </div>

    <br />

    <div class="row">
      <div class="col">
        <span class="title-input-blue">Observação</span>
        <textarea
          class="textarea-resp"
          cols="65"
          rows="5"
          v-model="form8.observacao"
        ></textarea>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
import { mask } from "vue-the-mask";

export default {
  name: "FormColaboradoresStep8",
  props: {
    showForm: Number,
    sendFormNow: Boolean,
    showView: String,
    colaboradorLista: Object,
  },
  methods: {},

  data() {
    return {
      form8: {
        nome_completo: "",
        causa_morte: "",
        peso: "",
        altura: "",
        agenda_funeraria: "",
        auxiliar_agencia_funeraria: "",
        hora_data_inicio: "",
        hora_data_termino: "",
        ocupacao: "",
        religiao: "",
        havera_somatoconservacao_avancada: "",
        corpo_necropsiado: "",
        tronco_braquiocefalico: "",
        aorta_abdominal: "",
        carotica_comum_esquerda: "",
        carotica_comum_direita: "",
        subclavia_esquerda: "",
        subclavia_direita: "",
        braquial_esquerda: "",
        braquial_direita: "",
        iliaca_comum_esquerda: "",
        iliaca_comum_direita: "",
        femoral_esquerda: "",
        femoral_direita: "",
        tanatofluido_arterial: "",
        representante: "",
        volume: "",
        injecoes: "",
        outros: "",
        aspiracao_toraco_abdominal: "",
        evisceracao_embalagem: "",
        tanatofluido_arterial_cavidades: "",
        representante_cavidades: "",
        volume_cavidades: "",
        injecoes_cavidades: "",
        outros_cavidades: "",
        injecao_fluido_intradermico: "",
        locais_injecao_fluido_intradermico: "",
        restauracao: "",
        locais_restauracao: "",
        cosmeticos: "",
        locais_cosmeticos: "",
        cosmeticos_utilizados: "",
        translado: "",
        km: "",
        local_final: "",
        para: "",
        velorio: "",
        hora_dia_velorio: "",
        sepultamento: "",
        hora_dia_sepultamento: "",
        observacao: "",
      },
    };
  },
  directives: { mask },
  watch: {
    sendFormNow: function () {
      this.$emit("set-data-form", this.form8);
    },
  },
};
</script>
