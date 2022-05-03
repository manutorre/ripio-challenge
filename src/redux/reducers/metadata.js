import * as Consts from "../../consts";

const initialState = {
  local_currency: { ticker: "ARS", symbol: "$", name: "pesos" },
  user_currencies: {
    BTC: 1,
    AXS: 3000,
    BAT: 1200,
  },
  error: "",
  movements: [],
  commission_charge: 0.01,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case Consts.SET_USER_CURRENCIES:
      return {
        ...state,
        user_currencies: action.currencies,
      };
    case Consts.SET_USER_SINGLE_CURRENCY:
      return {
        ...state,
        user_currencies: { ...state.user_currencies, ...action.currency },
      };
    case Consts.SET_ERROR:
      return {
        ...state,
        error: action.error,
      };
    case Consts.CLEAN_ERROR:
      return {
        ...state,
        error: "",
      };
    case Consts.ADD_MOVEMENT:
      return {
        ...state,
        movements: [...state.movements, action.movement],
      };
  }
  return state;
};
