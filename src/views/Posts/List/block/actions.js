import router from "@/router";

export default {
  methods: {
    actions(post) {
      return [
        {
          if: () => {
            return true;
          },
          click: () => {
            router.push({
              name: "info",
              params: { id: post.id },
            });
          },
          props: {
            icon: "https://super.so/icon/light/eye.svg",
            size: "square",
            color: "grey",
          },
        },
        {
          if: () => {
            return true;
          },
          click: () => {
            router.push({
              query: {
                showCreatePopup: true,
              },
              params: {
                post: post,
              },
            });
          },
          props: {
            icon: "https://super.so/icon/light/edit-2.svg",
            size: "square",
            color: "blue",
          },
        },
        {
          if: () => {
            return true;
          },
          click: () => {
            router.push({
              query: {
                showDeletePopup: true,
                postId: post.id,
              },
            });
          },
          props: {
            icon: "https://super.so/icon/light/trash-2.svg",
            size: "square",
            color: "red",
          },
        },
      ];
    },
  },
};
