// Asynchronous Actiom Creator
import jsonPlaceholder from "../apis/jsonPlaceholder";

// This code causes error because browser convert es6 into es5 due to async await syntax

// const fetchPosts = async () => {
//   const response = await jsonPlaceholder.get("/posts");
//   return {
//     type: "FETCH_POSTS",
//     payload: response,
//   };
// };

export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceholder.get("/posts"); // waits until the request resolved
  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

export const fetchUsers = (id) => async (dispatch, getState) => {
  console.log(id);
  const response = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({ type: "FETCH_USERS", payload: response.data });
  //   console.log(getState());
};
