<template>
  <div class="background" v-if="show">
    <div class="popup">
      <p>
        Are you sure you want to delete post
        <span style="font-weight: bold">№{{ $route.query.postId }}</span>
      </p>
      <button @click="onClick(true)">OK</button>
      <button @click="onClick(false)">Cancel</button>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.clearQuery();
  },
  data: () => ({
    show: false,
  }),
  watch: {
    "$route.query.showDeletePopup"(val) {
      if (val) {
        this.show = true;
      }
    },
  },
  methods: {
    clearQuery() {
      const keys = Object.keys(this.$route.query);
      if (keys.some((it) => ["showDeletePopup", "postId"].includes(it))) {
        this.$router.push({
          query: {},
        });
      }
    },
    onClick(canDelete) {
      if (canDelete) {
        this.$store.commit("deletePost", this.$route.query.postId);
      }
      this.show = false;
      this.clearQuery();
    },
  },
};
</script>

<style>
.background {
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>
