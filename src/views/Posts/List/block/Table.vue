<template>
  <div class="container">
    <table>
      <thead>
        <tr>
          <th>№</th>
          <th>Title</th>
          <th>Body</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(post, index) in posts" :key="`post-${index}`">
          <td>{{ post.id }}</td>
          <td>{{ post.title }}</td>
          <td>{{ post.body }}</td>
          <td
            v-for="(action, actionIndex) in actions(post)"
            :key="`action-${actionIndex}`"
          >
            <UIButton
              v-if="action.if()"
              v-bind="action.props"
              @click="action.click"
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import UIButton from "@/ui/UIButton.vue";
import actions from "./actions";

export default {
  components: { UIButton },
  mixins: [actions],
  props: {
    posts: {
      type: Array,
    },
  },
};
</script>

<style lang="scss">
.container {
  position: absolute;
  height: calc(100% - $panel_height * 2);
  width: 100%;
  overflow: scroll;
}
</style>
