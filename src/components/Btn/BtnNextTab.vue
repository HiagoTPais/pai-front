<template>
  <div>
    <div class="d-flex justify-content-end">
      <button
        type="button"
        class="btn-blue m-3"
        id="next-button"
        @click="$emit('@click')"
      >
        Proximo
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "BtnNextTab",
};
</script>

