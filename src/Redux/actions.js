//* increaseAction Action always after what we have to name
export const increaseAction = (payload) => ({
  type: "INCREASE", // type is always in capital letters
  payload: payload, // when key value is same we can write only one
});

export const decreaseAction = (payload) => ({
  type: "DECREASE",
  payload: payload,
});
