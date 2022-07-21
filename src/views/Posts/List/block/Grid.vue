<template>
  <div class="cards">
    <div class="flex-container">
      <Card v-for="post in posts" :key="post.id" :post="post" />
    </div>
  </div>
</template>

<script>
import Card from "./Card.vue";
export default {
  components: { Card },
  props: {
    posts: {
      type: Array,
    },
  },
};
</script>

<style lang="scss">
.cards {
  position: absolute;
  height: calc(100% - $panel_height * 2);
  width: 100%;
  overflow: scroll;
}

::-webkit-scrollbar {
  background-color: transparent;
  width: 1rem;
}

::-webkit-scrollbar-button {
  display: none;
}

::-webkit-scrollbar-thumb {
  background-color: #babac0;
  border-radius: 1rem;
  border: 0.1rem solid #ffffff;
}

.flex-container {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: stretch;
  flex-basis: 200px;
}
</style>
