let initialState = [
  {
    id: 1,
    name: "Dinh Phuc Nguyen",
    username: "dpnguyen",
    email: "dpnguyen@gmail.com",
    phoneNumber: "1123123213",
    type: "VIP",
  },
  {
    id: 2,
    name: "Nguyen Dinh Phuc",
    username: "nguyendp",
    email: "nguyendp@gmail.com",
    phoneNumber: "1123123213",
    type: "VIP",
  },
];

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "CREATE_USER":
      state.push(payload);
      console.log(state);
      return [...state];

    case "DELETE_USER": {
      const index = state.findIndex((item) => {
        return item.username === payload;
      });

      state.splice(index, 1);
      return [...state];
    }

    case "UPDATE_USER": {
      const index = state.findIndex((item) => {
        return item.username === payload.username;
      });

      state[index] = payload;
      return [...state];
    }
    default:
      return state;
  }
};

export default reducer;
