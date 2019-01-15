export const Types = {
  GET_REQUEST: 'playlist/GET_REQUEST',
  GET_SUCESS: 'playlist/GET_SUCESS',
};

const INITIAL_STATE = {
  data: [],
  loading: false,
};

export default function playlists(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state, loading: true };
    case Types.GET_SUCESS:
      return { ...state, loading: false, data: action.payload.data };
    default:
      return state;
  }
}

export const Creators = {
  getPlaylistsRequest: () => ({ type: Types.GET_REQUEST }),

  getPlaylistsSucess: data => ({
    type: Types.GET_SUCESS,
    payload: { data },
  }),
};
