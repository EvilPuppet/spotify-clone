export const Types = {
  GET_REQUEST: 'playlistDetails/GET_REQUEST',
  GET_SUCESS: 'playlistDetails/GET_SUCESS',
};

const INITIAL_STATE = {
  data: {},
  loading: false,
};

export default function playlistDetails(state = INITIAL_STATE, action) {
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
  getPlaylistsDetailsRequest: id => ({ type: Types.GET_REQUEST, payload: { id } }),

  getPlaylistsDetailsSucess: data => ({
    type: Types.GET_SUCESS,
    payload: { data },
  }),
};
