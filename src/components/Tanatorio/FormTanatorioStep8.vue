<template>
  <div v-if="showForm == 8">
    <div class="d-flex m-3">
      <div class="area-pdf pdf-display">
        <iframe
          style="border-radius: 7px"
          :src="srcPdf"
          width="100%"
          height="600px"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from "axios";

export default {
  name: "FormTanatorioStep8",
  props: {
    showForm: Number,
    showView: String,
    contractData: Object,
    contractId: Number,
    srcPdf: String,
  },
  methods: {
    setShowCardVenc(id) {
      this.showCardVenc = id;
    },

    // download() {
    //   axios
    //     .get(
    //       `${process.env.VUE_APP_API_URL}/beneficiario/contrato/download/${this.contractId}`,
    //       {
    //         headers: { "Content-Type": "application/x-www-form-urlencoded" },
    //         responseType: "arraybuffer",
    //       }
    //     )
    //     .then((res) => {
    //       const blob = new Blob([res.data], { type: "application/pdf" });
    //       const url = window.URL.createObjectURL(blob);
    //       var link = document.createElement("a");
    //       link.href = url;
    //       link.target = "_blank";
    //       link.setAttribute("download", "file.pdf");
    //       document.body.appendChild(link);
    //       link.click();
    //     });
    // },
  },

  data() {
    return {
      showCardVenc: 0,
      currentView: 1,
    };
  },
};
</script>