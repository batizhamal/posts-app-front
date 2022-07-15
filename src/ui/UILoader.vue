<template>
  <div :class="classList"></div>
</template>

<script>
/** Обычная крутилка которая показывает что приложение обрабатывает что-либо */
export default {
  name: "UILoader",
  props: {
    size: {
      type: String,
      default: "big",
    },
    border: String,
    center: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classList() {
      return {
        loader: true,

        loader_big: this.size == "big",
        loader_small: this.size == "small",
        loader_thin: this.border == "thin",
        loader_page_center: this.center,
      };
    },
  },
};
</script>

<style lang="scss">
.loader {
  $self: &;
  border: 5px solid #f3f3f3;
  border-top: 5px solid rgb(170, 170, 170);
  border-radius: 50%;
  animation: spin 2s linear infinite;
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto auto;

  &_big {
    width: 60px;
    height: 60px;
  }

  &_small {
    width: 10px;
    height: 10px;
  }

  &_thin {
    border: 2px solid #f3f3f3;
    border-top: 2px solid rgb(170, 170, 170);
  }

  &_page_center {
    position: absolute;
    top: 0;
    left: 0;
    margin: 35% 47%;
  }
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
