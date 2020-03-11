export const initialPlayerState = { currentBook: {} };

export const playerReducer = (state, action) => {
  console.log(action.type);
  console.log(action.book.title);
  switch (action.type) {
    case 'SET_TRACK':
      return { ...state, currentBook: action.book };
    default:
      return state;
  }
}