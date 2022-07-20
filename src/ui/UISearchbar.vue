<template>
  <div class="search-holder">
    <div class="search-bar">
      <div class="form-holder">
        <input
          type="text"
          v-model="title"
          class="form-control"
          @change="onChange"
          @keyup="onChange"
          placeholder="Search for the post by title..."
        />
        <img class="icon" src="https://super.so/icon/dark/search.svg" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
.search-holder {
  display: block;
  margin: 0 auto;
  width: 60%;
  padding: 0 15px;
  text-align: center;
}

.search-bar {
  .form-holder {
    position: relative;
  }

  .form-control {
    display: block;
    height: 34px;
    padding: 6px 36px;
    font-size: 14px;
    color: #555;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  }
}
.icon {
  position: absolute;
  left: 0;
  margin: 0 1rem;
  top: 50%;
  transform: translateY(-50%) scale(1.1);
  opacity: 0.5;
  width: 17px;
  height: 17px;
  z-index: 2;
}
</style>
