// Redux Action Types
export const UPDATE_USER = "UPDATE_USER";

// Redux Action Creators
export const updateUser = (userData) => ({
  type: UPDATE_USER,
  payload: userData,
});
