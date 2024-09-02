<template>
  <div class="card-container">
    <div class="card-links" v-if="showCardLinks['assistencia']">
      <div class="square-link" @click="$emit('setShowForm', 'form-assistencia')">
        <img class="beneficiario" :src="require('../assets/img/beneficiario.png')" />
      </div>
      <div class="square-link" @click="$emit('setShowForm', 'view-assistencia')">
        <img class="beneficiario" :src="require('../assets/img/eye.png')" />
      </div>
      <div class="square-link" @click="$emit('setShowForm', 'payment-assistencia')">
          <img class="beneficiario" :src="require('../assets/img/pagar.png')" />
      </div>
      <div class="square-link" @click="$emit('setShowForm', 'heart-assistencia')">
         <img class="beneficiario" :src="require('../assets/img/heart.png')" />
      </div>
      <div class="square-link" @click="$emit('setShowForm', 'dashboard-assistencia')">
         <img class="beneficiario" :src="require('../assets/img/dashboard.png')" />
      </div>
    </div>
    <div class="card-nav" @click="showLinks('assistencia')" 
      :style="{ backgroundColor: cardBackgroundColor['assistencia'], color: cardColor['assistencia'] }">
      <img v-if="!showCardLinks['assistencia']" :src="require('../assets/img/family.png')" />
      <img v-else :src="require('../assets/img/family-white.png')" />
      <p class="card-nav-title">Beneficiarios</p>
    </div>
  </div>

  <div class="card-container">
    <div class="card-links" v-if="showCardLinks['colaboradores']">
      <div class="square-link" @click="$emit('setShowForm', 'form-colaboradores')">
        <img class="beneficiario" :src="require('../assets/img/beneficiario.png')" />
      </div>
      <div class="square-link" @click="$emit('setShowForm', 'view-colaboradores')">
        <img class="beneficiario" :src="require('../assets/img/eye.png')" />
      </div>
      <div class="square-link" @click="$emit('setShowForm', 'payment-colaboradores')">
          <img class="beneficiario" :src="require('../assets/img/pagar.png')" />
      </div>
      <div class="square-link" @click="$emit('setShowForm', 'heart-colaboradores')">
         <img class="beneficiario" :src="require('../assets/img/heart.png')" />
      </div>
      <div class="square-link" @click="$emit('setShowForm', 'dashboard-colaboradores')">
         <img class="beneficiario" :src="require('../assets/img/dashboard.png')" />
      </div>
    </div>
    <div class="card-nav" @click="showLinks('colaboradores')" 
      :style="{ backgroundColor: cardBackgroundColor['colaboradores'], color: cardColor['colaboradores'] }">
      <img v-if="!showCardLinks['colaboradores']" :src="require('../assets/img/colaboradores.png')" />
      <img v-else :src="require('../assets/img/colaboradores-white.png')" />
      <p class="card-nav-title">Colaboradores</p>
    </div>
  </div>

  <div class="card-container">
    <div class="card-links" v-if="showCardLinks['funeraria']">
      <div class="square-link" @click="$emit('setShowForm', 'form-servico-funerario')">
        <img class="beneficiario" :src="require('../assets/img/beneficiario.png')" />
      </div>
      <div class="square-link" @click="$emit('setShowForm', 'view-servico-funerario')">
        <img class="beneficiario" :src="require('../assets/img/eye.png')" />
      </div>
      <div class="square-link" @click="$emit('setShowForm', 'payment-servico-funerario')">
          <img class="beneficiario" :src="require('../assets/img/pagar.png')" />
      </div>
      <div class="square-link" @click="$emit('setShowForm', 'dashboard-servico-funerario')">
         <img class="beneficiario" :src="require('../assets/img/dashboard.png')" />
      </div>
    </div>
    <div class="card-nav" @click="showLinks('funeraria')" 
      :style="{ backgroundColor: cardBackgroundColor['funeraria'], color: cardColor['funeraria'] }">
      <img v-if="!showCardLinks['funeraria']" :src="require('../assets/img/funeraria.png')" />
      <img v-else :src="require('../assets/img/funeraria-white.png')" />
      <p class="card-nav-title">Serviço Funerario</p>
    </div>
  </div>

  <div class="card-container">
    <div class="card-links" v-if="showCardLinks['tanatorio']">
      <div class="square-link" @click="$emit('setShowForm', 'form-tanatorio')">
        <img class="beneficiario" :src="require('../assets/img/beneficiario.png')" />
      </div>
      <div class="square-link" @click="$emit('setShowForm', 'view-tanatorio')">
        <img class="beneficiario" :src="require('../assets/img/eye.png')" />
      </div>
      <div class="square-link" @click="$emit('setShowForm', 'dashboard-tanatorio')">
        <img class="beneficiario" :src="require('../assets/img/dashboard.png')" />
      </div>
    </div>
    <div class="card-nav" @click="showLinks('tanatorio')" 
      :style="{ backgroundColor: cardBackgroundColor['tanatorio'], color: cardColor['tanatorio'] }">
      <img class="tanatorio-icon" v-if="!showCardLinks['tanatorio']" :src="require('../assets/img/tanatorio.png')" />
      <img class="tanatorio-icon" v-else :src="require('../assets/img/tanatorio-white.png')" />
      <p class="card-nav-title">Tanatório Tanatopraxia</p>
    </div>
  </div>
  
</template>

<script>
export default {
  name: "CardNav",
  data() {
    return {
      showCardLinks: {
        "assistencia": false,
        "colaboradores": false,
        "funeraria": false,
        "tanatorio": false
      },
      cardBackgroundColor: {
        "assistencia": "#ffffff",
        "colaboradores": "#ffffff",
        "funeraria": "#ffffff",
        "tanatorio": "#ffffff"
      },
      cardColor: {
        "assistencia": "#17369c",
        "colaboradores": "#17369c",
        "funeraria": "#17369c",
        "tanatorio": "#17369c"
      },
    };
  },
  emits: ['setShowForm'],
  methods: {
    showLinks(elem) {
      this.showCardLinks[elem] = !this.showCardLinks[elem];
      
      if (this.showCardLinks[elem]) {
        this.cardBackgroundColor[elem] = "#17369c";
        this.cardColor[elem] = "#ffffff";
      } else {
        this.cardBackgroundColor[elem] = "#ffffff";
        this.cardColor[elem] = "#17369c";
      }
    },
  },
};
</script>
