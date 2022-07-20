<template>
  <UIPopup title="Delete post" :show="show" @cancel="cancel">
    <template v-slot:content>
      <span
        >Are you sure you want to delete post
        <span style="font-weight: bold">№{{ $route.query.postId }}?</span></span
      >
    </template>

    <template v-slot:footer>
      <UIButton title="OK" :loading="loading" color="blue" @click="done" />
      <UIButton title="Cancel" color="red" @click="cancel" />
    </template>
  </UIPopup>
</template>

<script>
import UIPopup from "@/ui/UIPopup.vue";
import UIButton from "@/ui/UIButton.vue";
import { deletePost } from "@/api/posts";
import common from "./common";

export default {
  mixins: [common],
  components: { UIPopup, UIButton },
  created() {
    this.clearQuery();
  },
  data: () => ({
    show: false,
    loading: false,
  }),
  watch: {
    "$route.query.showDeletePopup"(val) {
      if (val) {
        this.show = true;
      }
    },
  },
  methods: {
    cancel() {
      this.show = false;
      this.clearQuery();
    },
    async done() {
      this.loading = true;
      try {
        console.log("inside try");
        await deletePost(this.$route.query.postId);
        // this.$store.commit("deletePost", this.$route.query.postId);

        this.show = false;
        this.$router.replace("/");
        this.$router.go();
      } catch (error) {
        console.log("inside catch");

        this.show = false;
        this.clearQuery();

        this.$notify({
          warn: true,
          title: "Delete post",
          text: "Deleting post was unsuccessfull",
        });
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>
