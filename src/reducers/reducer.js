let SET_COUNT = "SET_COUNT"
const defaultParam = {
  items: [],
  isFetching: true,
  count: 0,
}

export default function getItems(state = defaultParam, action) {
  switch (action.type) {
    case SET_COUNT:
      return {
        ...state,
        count: action.payload,
      }
    default:
      return state
  }
}
export const setCount = (count) => ({ type: SET_COUNT, payload: count })
