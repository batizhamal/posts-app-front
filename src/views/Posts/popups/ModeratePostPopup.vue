<template>
  <UIPopup title="Create post" :show="show" @cancel="cancel">
    <template v-slot:content>
      <UIForm>
        <label form="title">Enter title:</label>
        <input name="title" type="text" v-model="form.title" />

        <label for="body">Enter post body:</label>
        <textarea name="body" v-model="form.body" />
      </UIForm>
    </template>

    <template v-slot:footer>
      <UIButton title="Cancel" color="grey" @click="cancel" />
      <UIButton title="Post" color="blue" @click="post" :loading="loading"
    /></template>
  </UIPopup>
</template>

<script>
import UIPopup from "@/ui/UIPopup.vue";
import UIButton from "@/ui/UIButton.vue";
import UIForm from "@/ui/UIForm.vue";
import common from "./common";
import { addPost } from "@/api/posts";

export default {
  mixins: [common],
  components: { UIPopup, UIButton, UIForm },
  created() {
    this.clearQuery();
  },
  data: () => ({
    show: false,
    loading: false,
    form: Object,
  }),
  watch: {
    "$route.query.showCreatePopup"(val) {
      if (val) {
        this.show = true;
      }
    },
  },
  created() {
    this.emptyForm();
  },
  methods: {
    cancel() {
      this.show = false;
      this.clearQuery();
    },
    emptyForm() {
      this.form = {
        title: "",
        body: "",
      };
    },
    async post() {
      this.loading = true;
      try {
        this.$store.commit("addPost", this.form);
        await addPost(this.form);
      } catch (error) {
        console.warn(error);
      } finally {
        this.loading = false;
        this.show = false;
        this.$router.replace("/");
        this.$router.go();
      }
    },
  },
};
</script>
