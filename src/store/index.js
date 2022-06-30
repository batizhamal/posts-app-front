import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state() {
    return {
      users: [
        {
          id: 1,
          name: "John",
          age: 20,
        },
        {
          id: 2,
          name: "Alex",
          age: 23,
        },
        {
          id: 3,
          name: "Bati",
          age: 19,
        },
        {
          id: 4,
          name: "Sam",
          age: 22,
        },
        {
          id: 5,
          name: "Bob",
          age: 25,
        },
      ],
    };
  },
  getters: {
    getUserById: (state) => (id) => {
      return state.users.find((user) => user.id == id);
    },
  },
  mutations: {
    addUser(state, user) {
      const nextId = Math.max(...state.users.map((user) => user.id)) + 1;
      state.users.push({ id: nextId, name: user.name, age: user.age });
    },
    deleteUser(state, id) {
      state.users.splice(
        state.users.findIndex((user) => user.id == id),
        1
      );
    },
  },
});
