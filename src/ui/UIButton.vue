<template>
  <button :class="classList" @click="$emit('click')">
    <img
      v-if="!loading && icon"
      :src="icon"
      :class="{
        button__icon: true,
        button__icon_hide: loading,
      }"
    />
    <span
      v-if="!loading && title"
      :class="{
        button__text: true,
        button__text_hide: loading,
      }"
      >{{ title }}</span
    >
    <div v-if="loading" class="button__loader">
      <UILoader size="small" border="thin" />
    </div>
  </button>
</template>

<script>
import UILoader from "./UILoader.vue";
export default {
  name: "UIButton",
  components: { UILoader },
  props: {
    title: {
      type: String,
    },
    icon: {
      type: String,
    },
    loading: {
      type: Boolean,
      default: () => false,
    },
    color: {
      type: String,
      default: "grey",
    },
    size: {
      type: String,
      default: "primary",
    },
  },
  computed: {
    classList() {
      return {
        button: true,

        button_grey: this.color == "grey",
        button_red: this.color == "red",
        button_blue: this.color == "blue",
        button_white: this.color == "white",
        button_transparent: this.color == "transparent",
        button_small: this.size == "small",
        button_big: this.size == "big",
        button_square: this.size == "square",
        button_primary: this.size == "primary",
      };
    },
  },
};
</script>

<style lang="scss">
.button {
  $self: &;

  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 2.25rem;
  max-width: 100%;
  max-height: 100%;
  border-color: transparent;
  border-radius: 0.25rem;
  margin: 0 5px;
  cursor: pointer;

  &_grey {
    background-color: rgb(189, 196, 214);
    &:hover {
      background-color: rgb(73, 77, 87);
      color: white;
      transition: 0.5s;
    }
  }

  &_red {
    background-color: rgb(214, 89, 89);
    &:hover {
      background-color: rgb(149, 0, 0);
      color: white;
      transition: 0.5s;
    }
  }

  &_blue {
    background-color: rgb(112, 142, 218);
    &:hover {
      background-color: rgb(35, 44, 70);
      color: white;
      transition: 0.5s;
    }
  }

  &_white {
    background-color: rgba(255, 255, 255, 0.5);
    &:hover {
      background-color: rgb(255, 255, 255);
      transition: 0.5s;
    }
  }

  &_transparent {
    background-color: transparent;
    border-color: transparent;
    &:hover {
      border: 1px solid rgb(139, 139, 139);
    }
  }

  &_primary {
    min-width: 80px;
    width: auto;
  }

  &_small {
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 0.1rem;
  }

  &_big {
    width: 2.5rem;
    height: 2.5rem;
  }

  &_square {
    width: 2.25rem;
    height: 2.25rem;
  }

  &__text {
    position: relative;
    transition: opacity 0.1s ease-in-out;
    white-space: nowrap;
    &_hide {
      opacity: 0;
    }
  }
  &__icon {
    width: 16px;
    height: 16px;
    padding: 3px;
    &_hide {
      opacity: 0;
    }
  }

  &__loader {
    position: relative;
  }
}
</style>
