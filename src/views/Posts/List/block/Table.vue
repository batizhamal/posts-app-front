<template>
  <div class="container">
    <table class="table">
      <thead>
        <tr>
          <th class="table__head">№</th>
          <th class="table__head">Title</th>
          <th class="table__head">Body</th>
          <th class="table__head">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(post, index) in posts" :key="`post-${index}`">
          <td class="table__col">{{ post.id }}</td>
          <td class="table__col">{{ post.title }}</td>
          <td class="table__col">{{ post.body }}</td>

          <div
            v-for="(action, actionIndex) in actions(post)"
            :key="`action-${actionIndex}`"
          >
            <td class="table__col actions">
              <UIButton
                v-if="action.if()"
                v-bind="action.props"
                @click="action.click"
              />
            </td>
          </div>
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

.table {
  $self: &;
  position: relative;
  border-collapse: collapse;
  table-layout: fixed;
  width: 100%;

  &__head {
    position: sticky;
    top: 0;
    z-index: 2;
    height: 3rem;
    box-shadow: inset 0 -0.5px 0 0 #d4d4d4;
    text-align: left;
    background-color: #f2f2f2;
  }

  &__head,
  &__col {
    padding: 0 0.75rem;
  }
}

.actions {
}

tr:nth-child(even) {
  background-color: #f8f8f8;
}
</style>
