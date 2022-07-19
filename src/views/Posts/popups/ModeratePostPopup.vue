<template>
  <UIPopup title="Create post" :show="show" @cancel="cancel">
    <template v-slot:content>
      <UIForm>
        <UIInput
          label="Enter title:"
          id="title"
          name="title"
          v-model="form.title"
        />

        <UITextarea
          label="Enter post body:"
          id="body"
          name="body"
          v-model="form.body"
        />
      </UIForm>
    </template>

    <template v-slot:footer>
      <UIButton title="Cancel" color="grey" @click="cancel" />
      <UIButton title="Save" color="blue" @click="submit" :loading="loading"
    /></template>
  </UIPopup>
</template>

<script>
import UIPopup from "@/ui/UIPopup";
import UIButton from "@/ui/UIButton";
import UIForm from "@/ui/UIForm";
import UIInput from "@/ui/UIInput";
import UITextarea from "@/ui/UITextarea";
import { addPost, editPost } from "@/api/posts";
import common from "./common";
import { cloneDeep } from "lodash";

export default {
  mixins: [common],
  components: { UIPopup, UIButton, UIForm, UIInput, UITextarea },
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
        const { post } = this.$route.params;
        this.form = post ? cloneDeep(post) : this.getForm();
      }
    },
  },
  methods: {
    cancel() {
      this.show = false;
      this.clearQuery();
    },
    getForm() {
      return {
        title: "",
        body: "",
      };
    },
    async submit() {
      this.loading = true;

      try {
        if (this.form.id) {
          await editPost(this.form.id, this.form);
        } else {
          await addPost(this.form);
        }

        this.show = false;
        this.$router.replace("/");
        this.$router.go();
      } catch (error) {
        console.warn(error);
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>
