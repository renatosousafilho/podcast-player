export const initialPlayerState = { book: {} };

export default function player(state = initialPlayerState, action) {
  switch (action.type) {
    case '@player/SET_TRACK': {
      return { ...state, book: action.book };
    }
    default:
      return state;
  }
}
