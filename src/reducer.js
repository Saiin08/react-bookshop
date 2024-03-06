export default function reducer(state, action) {
  switch (action.type) {
    case "currency/set":
      return {
        ...state,
        currency: action.payload,
      };

    case "currency/reset":
      return {
        ...state,
        currency: "EUR",
      };
  }

  return state;
}
