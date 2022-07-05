<!-- TODO: Make the DeletePopup's size dynamic, so that it shrinks if the screen gets smaller -->
<template>
  <div class="background" v-if="show">
    <div class="popup">
      <div class="popup_header">
        <p class="popup_text header">Delete post</p>
        <button class="popup_button-close" @click="onClick(false)">X</button>
      </div>
      <hr class="solid" />
      <p class="popup_text">
        Are you sure you want to delete post
        <span style="font-weight: bold">№{{ $route.query.postId }}?</span>
      </p>
      <hr class="solid" />
      <div class="buttons">
        <button class="popup_button grey-button" @click="onClick(true)">
          OK
        </button>
        <button class="popup_button red-button" @click="onClick(false)">
          Cancel
        </button>
      </div>
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
      const exists = Object.keys(this.$route.query).some((it) =>
        ["showDeletePopup", "postId"].includes(it)
      );

      if (!exists) {
        return;
      }

      this.$router.push({
        query: {},
      });
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

<style scoped>
.background {
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 32;
}
.popup {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 150px;
  background-color: white;
  border-radius: 8px;
  text-align: center;
  box-shadow: 4px rgba(0, 0, 0, 0.6);
}
.popup_text {
  display: block;
  margin: auto auto;
  padding-left: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  text-align: left;
}
.popup_header {
  display: block;
}
.header {
  font-weight: bold;
  padding-top: 10px;
  padding-bottom: 0px;
  margin-bottom: 3px;
  display: inline-block;
}
.buttons {
  display: block;
  margin: auto auto;
  margin-top: 5px;
}
.popup_button {
  height: 35px;
  width: 80px;
  border: 2px solid transparent;
  border-radius: 10px;
  color: black;
  cursor: pointer;
  display: inline-block;
  margin: 0 5px;
}
.popup_button-close {
  margin-left: 460px;
  display: inline-block;
  background-color: transparent;
  border-color: transparent;
}
.popup_button-close:hover {
  border: 1px solid rgb(139, 139, 139);
}
.red-button {
  background-color: rgb(214, 89, 89);
}
.grey-button {
  background-color: rgb(189, 196, 214);
}
.red-button:hover {
  background-color: rgb(149, 0, 0);
  color: white;
  transition: 0.5s;
}
.grey-button:hover {
  background-color: rgb(35, 44, 70);
  color: white;
  transition: 0.5s;
}
hr.solid {
  border-top: 1px solid rgb(211, 211, 211);
}
</style>
