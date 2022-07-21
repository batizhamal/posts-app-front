<template>
  <div class="search-bar">
    <div class="search-bar__input">
      <input
        type="text"
        v-model="title"
        @change="onChange"
        @keyup="onChange"
        placeholder="Search for the post by title..."
      />
    </div>
    <div class="search-bar__button">
      <UIButton
        @click="onChange"
        size="square"
        color="grey"
        icon="https://super.so/icon/dark/search.svg"
      />
    </div>
  </div>
</template>

<script>
import UIButton from "./UIButton.vue";
export default {
  components: { UIButton },
  data: () => {
    return {
      title: "",
    };
  },
  methods: {
    onChange() {
      this.$emit("search", this.title);
    },
  },
};
</script>

<style lang="scss">
.search-bar {
  $self: &;

  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: start;
  justify-content: stretch;
  color: #333;
  width: 100rem;
  max-width: 100%;
  height: 2.25rem;
  margin-left: 5px;

  &__input {
    position: relative;
    height: 2.25rem;
    width: 100%;
    max-width: 100%;
  }

  &__button {
    border-radius: 0.25rem;
    border: 0.06rem solid #d4d4d4;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-left: 0;
    position: relative;
    display: flex;
    align-items: center;
  }
}

.search-bar__button > button {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  margin: 0;
}

.search-bar__input > input {
  border-radius: 0.25rem;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border: 0.06rem solid #d4d4d4;
  height: 2.25rem;
  padding: 0 0.6rem;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: flex-start;
  justify-content: stretch;
  width: 100%;
  max-width: 100%;
  margin: 0;

  &:focus {
    outline: none;
  }
}
</style>
