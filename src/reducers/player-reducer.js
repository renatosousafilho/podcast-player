export const initialPlayerState = { book: {} };

export const playerReducer = (state, action) => {
  console.log("reducer");
  console.log(action.book.title);
  switch (action.type) {
    case 'SET_TRACK':
      return { ...state, book: action.book };
    default:
      return state;
  }
}