<template>
  <div v-if="showForm == 7">
    <label class="form-title m-3">Dados de Somatoconservação</label>

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
      <div class="col card-tanato">
        <label class="form-title m-3">Pontos de Injeção Arterial</label>

        <div class="checkbox-wrapper-13">
          <label class="form-title">Tronco Braquiocefalico: </label>
          <input
            class="c1-13"
            v-model="form8.tronco_braquiocefalico"
            type="checkbox"
            name="particular"
          />
        </div>

        <div class="checkbox-wrapper-13">
          <label class="form-title">Aorta abdominal: </label>
          <input
            class="c1-13"
            v-model="form8.aorta_abdominal"
            type="checkbox"
            name="aorta_abdominal"
          />
        </div>

        <div class="checkbox-wrapper-13">
          <div class="d-flex">
            <label class="form-title">Carotica Comum:</label>
            <div>
              <input
                class="c1-13"
                v-model="form8.carotica_comum_esquerda"
                type="checkbox"
                name="carotica_comum_esquerda"
              />
              <label class="form-title">Esquerda</label>
            </div>
            <div>
              <input
                class="c1-13"
                v-model="form8.carotica_comum_direita"
                type="checkbox"
                name="carotica_comum_direita"
              />
              <label class="form-title">Direita</label>
            </div>
          </div>
        </div>

        <div class="checkbox-wrapper-13">
          <div class="d-flex">
            <label class="form-title">Subclavia: </label>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form8.subclavia_esquerda"
                name="subclavia_esquerda"
              />
              <label class="form-title">Esquerda</label>
            </div>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form8.subclavia_direita"
                name="subclavia_direita"
              />
              <label class="form-title">Direita</label>
            </div>
          </div>
        </div>

        <div class="checkbox-wrapper-13">
          <div class="d-flex">
            <label class="form-title">Braquial: </label>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form8.braquial_esquerda"
                name="braquial_esquerda"
              />
              <label class="form-title">Esquerda</label>
            </div>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form8.braquial_direita"
                name="braquial_direita"
              />
              <label class="form-title">Direita</label>
            </div>
          </div>
        </div>

        <div class="checkbox-wrapper-13">
          <div class="d-flex">
            <label class="form-title">Iliaca Comum: </label>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form8.iliaca_comum_esquerda"
                name="iliaca_comum_esquerda"
              />
              <label class="form-title">Esquerda</label>
            </div>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form8.iliaca_comum_direita"
                name="iliaca_comum_direita"
              />
              <label class="form-title">Direita</label>
            </div>
          </div>
        </div>

        <div class="checkbox-wrapper-13">
          <div class="d-flex">
            <label class="form-title">Femoral: </label>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form8.femoral_esquerda"
                name="femoral_esquerda"
              />
              <label class="form-title">Esquerda</label>
            </div>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form8.femoral_direita"
                name="femoral_direita"
              />
              <label class="form-title">Direita</label>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="m5">
              <span class="title-input-blue">Tanatofluido Arterial</span>
              <input
                type="text"
                class="input-resp"
                v-model="form8.tanatofluido_arterial"
                name="tanatofluido_arterial"
              />
            </div>
          </div>

          <div class="col">
            <div class="m5">
              <span class="title-input-blue">Representante</span>
              <input
                type="text"
                class="input-resp"
                v-model="form8.representante"
                name="representante"
              />
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col">
            <div class="m5">
              <span class="title-input-blue">Volume</span>
              <input
                type="text"
                class="input-resp"
                v-model="form8.volume"
                name="volume"
              />
            </div>
          </div>
          <div class="col">
            <div class="m5">
              <span class="title-input-blue">Injeções</span>
              <input
                type="text"
                class="input-resp"
                v-model="form8.injecoes"
                name="injecoes"
              />
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col">
            <div class="m5">
              <span class="title-input-blue">Outros</span>
              <input
                type="text"
                class="input-resp"
                v-model="form8.outros"
                name="outros"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="col card-tanato">
        <label class="form-title m-3">Tratamentos das Cavidades</label>

        <div class="checkbox-wrapper-13">
          <label class="form-title">Aspiração Tóraco Abdominal: </label>
          <input
            class="c1-13"
            type="checkbox"
            v-model="form8.aspiracao_toraco_abdominal"
            name="aspiracao_toraco_abdominal"
          />
        </div>

        <div class="checkbox-wrapper-13">
          <label class="form-title">Evisceração e Embalagem:</label>
          <input
            class="c1-13"
            type="checkbox"
            v-model="form8.evisceracao_embalagem"
            name="evisceracao_embalagem"
          />
        </div>

        <div class="row">
          <div class="col">
            <div class="m5">
              <span class="title-input-blue">Tanatofluido Arterial</span>
              <input
                type="text"
                class="input-resp"
                v-model="form8.tanatofluido_arterial_cavidades"
                name="tanatofluido_arterial_cavidades"
              />
            </div>
          </div>

          <div class="col">
            <div class="m5">
              <span class="title-input-blue">Representante</span>
              <input
                type="text"
                class="input-resp"
                v-model="form8.representante_cavidades"
                name="representante_cavidades"
              />
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col">
            <div class="m5">
              <span class="title-input-blue">Volume</span>
              <input
                type="text"
                class="input-resp"
                v-model="form8.volume_cavidades"
                name="volume_cavidades"
              />
            </div>
          </div>
          <div class="col">
            <div class="m5">
              <span class="title-input-blue">Injeções</span>
              <input
                type="text"
                class="input-resp"
                v-model="form8.injecoes_cavidades"
                name="injecoes_cavidades"
              />
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col">
            <div class="m5">
              <span class="title-input-blue">Outros</span>
              <input
                type="text"
                class="input-resp"
                v-model="form8.outros_cavidades"
                name="outros_cavidades"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col card-tanato">
        <label class="form-title m-3">Estetica</label>

        <div class="checkbox-wrapper-13">
          <div class="d-flex">
            <label class="form-title">Injeção de Fluído Intradérmico:</label>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form8.injecao_fluido_intradermico"
                name="injecao_fluido_intradermico"
              />
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col">
            <div class="m5">
              <span class="title-input-blue">Locais</span>
              <input
                type="text"
                class="input-resp"
                v-model="form8.locais_injecao_fluido_intradermico"
                name="locais_injecao_fluido_intradermico"
              />
            </div>
          </div>
        </div>

        <div class="checkbox-wrapper-13">
          <div class="d-flex">
            <label class="form-title">Restauração:</label>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form8.restauracao"
                name="restauracao"
              />
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col">
            <div class="m5">
              <span class="title-input-blue">Locais</span>
              <input
                type="text"
                class="input-resp"
                v-model="form8.locais_restauracao"
                name="locais_restauracao"
              />
            </div>
          </div>
        </div>

        <div class="checkbox-wrapper-13">
          <div class="d-flex">
            <label class="form-title">Cosméticos:</label>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form8.cosmeticos"
                name="cosmeticos"
              />
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col">
            <div class="m5">
              <span class="title-input-blue">Locais</span>
              <input
                type="text"
                class="input-resp"
                v-model="form8.locais_cosmeticos"
                name="locais_cosmeticos"
              />
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col">
            <div class="m5">
              <span class="title-input-blue">Cosméticos Utilizados</span>
              <input
                type="text"
                class="input-resp"
                v-model="form8.cosmeticos_utilizados"
                name="nome_completo"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="col card-tanato">
        <label class="form-title m-3">Informações Complementares</label>

        <div class="checkbox-wrapper-13">
          <div class="d-flex">
            <label class="form-title">Translado:</label>
            <div>
              <input
                class="c1-13"
                type="checkbox"
                v-model="form8.translado"
                name="translado"
              />
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col">
            <div class="m5">
              <span class="title-input-blue">Km</span>
              <input
                type="text"
                class="input-resp"
                v-model="form8.km"
                name="km"
              />
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col">
            <div class="m5">
              <span class="title-input-blue">Local</span>
              <input
                type="text"
                class="input-resp"
                v-model="form8.local_final"
                name="local_final"
              />
            </div>
          </div>

          <div class="col">
            <div class="m5">
              <span class="title-input-blue">Para</span>
              <input
                type="text"
                class="input-resp"
                v-model="form8.para"
                name="para"
              />
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col">
            <div class="m5">
              <span class="title-input-blue">Velório</span>
              <input
                type="text"
                class="input-resp"
                v-model="form8.velorio"
                name="velorio"
              />
            </div>
          </div>

          <div class="col">
            <div class="m5">
              <span class="title-input-blue">Hrs. Dia</span>
              <input
                type="datetime-local"
                class="input-resp"
                v-model="form8.hora_dia_velorio"
                name="hora_dia_velorio"
              />
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col">
            <div class="m5">
              <span class="title-input-blue">Sepultamento</span>
              <input
                type="text"
                class="input-resp"
                v-model="form8.sepultamento"
                name="sepultamento"
              />
            </div>
          </div>
          <div class="col">
            <div class="m5">
              <span class="title-input-blue">Hrs. Dia</span>
              <input
                type="datetime-local"
                class="input-resp"
                v-model="form8.hora_dia_sepultamento"
                name="hora_dia_sepultamento"
              />
            </div>
          </div>
        </div>
      </div>

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
