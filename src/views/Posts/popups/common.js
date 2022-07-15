export default {
  methods: {
    clearQuery() {
      const exists = Object.keys(this.$route.query).some((it) =>
        ["showDeletePopup", "postId", "showCreatePopup"].includes(it)
      );

      if (!exists) {
        return;
      }

      this.$router.replace({
        path: this.$route.path,
        query: {},
      });
    },
  },
};
