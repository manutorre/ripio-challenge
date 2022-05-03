import * as Consts from "../../consts";

const initialState = {
  rates: [],
  currencies: [],
  loading: false,
  success: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case Consts.SET_RATES:
      return {
        ...state,
        rates: action.rates,
      };
    case Consts.SET_CURRENCIES:
      return {
        ...state,
        currencies: action.currencies,
      };
    case Consts.SET_LOADING:
      return {
        ...state,
        loading: action.loading,
      };
    case Consts.SET_SUCCESS:
      return {
        ...state,
        success: action.success,
      };
  }
  return state;
};
