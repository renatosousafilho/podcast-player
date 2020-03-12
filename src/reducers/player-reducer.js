export const initialPlayerState = { book: {} };

export const playerReducer = (state, action) => {
  switch (action.type) {
    case 'SET_TRACK':
      return { ...state, book: action.book };
    default:
      return state;
  }
}