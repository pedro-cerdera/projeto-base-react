import firebase from "firebase/app";
import "firebase/remote-config";

const initialState = {
  configs: {},
  isLoading: false,
  isLoaded: false,
  error: null,
};

const Types = {
  REMOTE_CONFIG_SAVE: "@remote_config/SAVE",
  REMOTE_CONFIG_SET_LOADING: "@remote_config/SET_LOADING",
  REMOTE_CONFIG_SET_LOADED: "@remote_config/SET_LOADED",
  REMOTE_CONFIG_SET_ERROR: "@remote_config/SET_ERROR",
  REMOTE_CONFIG_RESET: "@remote_config/RESET",
};

export const Actions = {
  start: key => async dispatch => {
    try {
      dispatch({ type: Types.REMOTE_CONFIG_SET_LOADING, payload: true });
      const remoteConfig = firebase.remoteConfig();
      remoteConfig.settings = {
        minimumFetchIntervalMillis: 1,
      };
      await remoteConfig.fetch(1);
      const data = remoteConfig.getValue(key);
      dispatch({
        type: Types.REMOTE_CONFIG_SAVE,
        payload: JSON.parse(data._value),
      });
    } catch (e) {
      dispatch({ type: Types.REMOTE_CONFIG_SET_ERROR, payload: e.message });
    } finally {
      dispatch({ type: Types.REMOTE_CONFIG_SET_LOADING, payload: false });
      dispatch({ type: Types.REMOTE_CONFIG_SET_LOADED, payload: true });
    }
  },
  reset: () => ({ type: Types.REMOTE_CONFIG_RESET }),
};

export const RemoteConfigReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.REMOTE_CONFIG_SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case Types.REMOTE_CONFIG_SET_LOADED:
      return {
        ...state,
        isLoaded: action.payload,
      };
    case Types.REMOTE_CONFIG_SAVE:
      return {
        ...state,
        configs: {
          ...state.configs,
          ...action.payload,
        },
      };
    case Types.REMOTE_CONFIG_SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case Types.REMOTE_CONFIG_RESET:
      return initialState;

    default:
      return { ...state };
  }
};
