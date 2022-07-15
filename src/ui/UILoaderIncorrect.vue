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
    border: {
      type: [Number, String],
      default: 5,
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
    computedBorderWidth() {
      return this.border
        ? `border-width:${Number.parseInt(
            this.border
          )}px;border-top-width:${Number.parseInt(this.border)}px;`
        : false;
    },
  },
};
</script>

<style>
.loader {
  /* border: 5px solid #f3f3f3; */
  border-style: solid;
  border-color: #f3f3f3;
  /* border-top: 5px solid rgb(170, 170, 170); */
  border-top-style: solid;
  border-top-color: rgb(170, 170, 170);
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
