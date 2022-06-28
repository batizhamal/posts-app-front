export const fetchUsers = () => {
  return new Promise((resolve, _) => {
    setTimeout(() => {
      const users = [
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
      ];
      resolve(users);
    }, 1000);
  });
};

export const fetchUser = async (id) => {
  return (await fetchUsers()).find((user) => user.id == id);
};
