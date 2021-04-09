// action creaters

export const dummyAction = (name) => {
  return {
    type: "DUMMY_ACTION",
    payload: name,
  };
};
