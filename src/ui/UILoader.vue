<template>
  <div class="loader" :style="computedSize"></div>
</template>

<script>
/** Обычная крутилка которая показывает что приложение обрабатывает что-либо */
export default {
  name: "UILoader",
  props: {
    size: {
      type: [Number, String],
      default: 60,
    },
  },
  computed: {
    computedSize() {
      return this.size
        ? `width:${Number.parseInt(this.size) / 16}rem;height:${
            Number.parseInt(this.size) / 16
          }rem;`
        : false;
    },
  },
};
</script>

<style>
.loader {
  border: 5px solid #f3f3f3; /* Light grey */
  border-top: 5px solid rgb(170, 170, 170); /* Blue */
  border-radius: 50%;
  /* width: 60px;
  height: 60px; */
  animation: spin 2s linear infinite;
  margin: auto auto;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
