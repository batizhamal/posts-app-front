<template>
  <div class="background" v-if="show">
    <div class="popup">
      <header class="popup__header">
        <p class="popup__title">{{ title }}</p>
        <button class="popup__close" @click="$emit('cancel')">X</button>
      </header>
      <div class="popup__content">
        <slot name="content" />
      </div>
      <footer class="popup__footer">
        <slot name="footer" />
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      required: true,
    },
    methods: {
      // cancel() {
      //   this.$emit("cancel");
      // },
    },
  },
};
</script>

<style lang="scss">
.background {
  position: fixed;
  z-index: 32;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  padding: rem(24);
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
}

.popup {
  $self: &;

  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  height: auto;
  width: 600px;
  max-height: 90%;
  max-width: 90%;
  background-color: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 4px rgba(0, 0, 0, 0.6);

  &__header {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    padding: 1rem;
    border-bottom: 1px solid rgb(211, 211, 211);
    height: 1rem;
    position: relative;
  }

  &__title {
    margin: 0;
    font-weight: bold;
  }

  &__close {
    position: absolute;
    top: 0.75rem;
    right: 0.75rem;
    background-color: transparent;
    border-color: transparent;
    width: 1.5rem;
    height: 1.5rem;
    padding: 0;
    &:hover {
      border: 1px solid rgb(139, 139, 139);
    }
  }

  &__content {
    position: relative;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    padding: 1rem;
  }

  &__footer {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-end;
    border-top: 1px solid rgb(211, 211, 211);
    padding: 0.5rem;
  }
}
</style>
