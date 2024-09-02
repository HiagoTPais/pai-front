<template>
  <div v-if="OpenClose">
    <div class="modal-mask-img-upload">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header"></div>
          <div class="modal-body">
            <img
              v-if="listImg[this.campoImagem]"
              :src="listImg[this.campoImagem]"
              style="width: 410px"
            />
          </div>
          <div class="modal-footer justify-content-between">
            <button
              type="button"
              @click="OpenCloseSet()"
              class="btn-blue btn-sm"
              style="width: 70px"
            >
              Fechar
            </button>

            <button type="button" @click="removeImage()" class="btn-red">
              Remover
            </button>

            <label for="file-upload" class="custom-file-upload">Buscar</label>

            <input
              type="file"
              id="file-upload"
              @change="onFileChange(item, $event)"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  name: "ShowImage",

  props: {
    visible: Boolean,
    showView: String,
    deleteMode: Boolean,
    msg: String,
    sendForm: Boolean,
  },

  data() {
    return {
      OpenClose: this.visible,

      ShowButtonDelete: this.showView,

      campoImagem: "",

      listImg: {
        decomposicao: "",
        rigidez: "",
        odor: "",
        olhos: "",
        boca: "",
        ouvido: "",
        toracoabdominal: "",
      },
    };
  },

  methods: {
    OpenCloseSet() {
      this.OpenClose = !this.OpenClose;
    },

    onFileChange(item, e) {
      var files = e.target.files || e.dataTransfer.files;

      if (!files.length) return;

      this.createImage(item, files[0]);
    },

    createImage(item, file) {
      var reader = new FileReader();

      reader.onload = (e) => {
        this.listImg[this.campoImagem] = e.target.result;
      };

      reader.readAsDataURL(file);

      console.log(this.listImg);
    },

    removeImage() {
      this.listImg[this.campoImagem] = false;
    },
  },

  watch: {
    sendForm: function () {
      this.$emit("set-imagens", this.listImg);
    },

    visible: function (newVal, oldVal) {
      this.OpenClose = newVal;
      console.log("new " + newVal + "==" + oldVal);
    },

    msg: function (msg) {
      this.campoImagem = msg;
    },
  },
};
</script>
