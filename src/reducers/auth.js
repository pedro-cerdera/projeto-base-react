import Resources from "../resources";
import { Actions as RemoteConfigActions } from "./remoteConfig";

const initialState = {
  authData: null,
  isLoading: false,
  error: null,
};

const Types = {
  AUTH_SAVE: "@auth/SAVE",
  AUTH_SET_LOADING: "@auth/SET_LOADING",
  AUTH_SET_ERROR: "@auth/SET_ERROR",
  AUTH_RESET: "@auth/RESET",
};

export const Actions = {
  saveAuth: auth => ({ type: Types.AUTH_SAVE, payload: auth }),
  login: (email, password) => async (dispatch, getState) => {
    dispatch({ type: Types.AUTH_RESET });
    dispatch({ type: Types.AUTH_SET_LOADING, payload: true });
    const { data } = await Resources.User.login(email, password);

    if (!data.success) {
      dispatch({ type: Types.AUTH_SET_ERROR, payload: data });
      const errorsMessage = getState().RemoteConfigReducer.configs.login.errors;
      alert(errorsMessage[data.status] || errorsMessage.default);
    } else {
      dispatch(Actions.saveAuth(data));
      dispatch(RemoteConfigActions.reset());
      localStorage.setItem("id_user", data.id_user);
      localStorage.setItem("token", data.token);
    }

    dispatch({ type: Types.AUTH_SET_LOADING, payload: false });
  },
  register: ({ name, userName, email, password, phone }) => async (
    dispatch,
    getState
  ) => {
    dispatch({ type: Types.AUTH_RESET });
    dispatch({ type: Types.AUTH_SET_LOADING, payload: true });
    const { data } = await Resources.User.register(
      name,
      userName,
      email,
      password,
      phone
    );

    if (!data.success) {
      dispatch({ type: Types.AUTH_SET_ERROR, payload: data });
      const errorsMessage = getState().RemoteConfigReducer.configs.register
        .errors;
      alert(errorsMessage[data.status] || errorsMessage.default);
    } else {
      dispatch(Actions.saveAuth(data));
      dispatch(RemoteConfigActions.reset());
      localStorage.setItem("id_user", data.id_user);
      localStorage.setItem("token", data.token);
    }

    dispatch({ type: Types.AUTH_SET_LOADING, payload: false });
  },
  recover: email => async (dispatch, getState) => {
    dispatch({ type: Types.AUTH_RESET });
    dispatch({ type: Types.AUTH_SET_LOADING, payload: true });
    const { data } = await Resources.User.recover(email);

    if (!data.success) {
      dispatch({ type: Types.AUTH_SET_ERROR, payload: data });
      const errorsMessage = getState().RemoteConfigReducer.configs.recover
        .errors;
      alert(errorsMessage[data.status] || errorsMessage.default);
    } else {
      dispatch(Actions.saveAuth(data));
      alert("Token enviado em seu email");
    }
    dispatch({ type: Types.AUTH_SET_LOADING, payload: false });
  },
  loadStart: () => async (dispatch, getState) => { },
  logout: () => async (dispatch, getState) => { },
  reset: () => ({ type: Types.AUTH_RESET }),
};

export const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.AUTH_SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case Types.AUTH_SAVE:
      return {
        ...state,
        authData: action.payload,
      };
    case Types.AUTH_SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case Types.AUTH_RESET:
      return initialState;

    default:
      return { ...state };
  }
};
