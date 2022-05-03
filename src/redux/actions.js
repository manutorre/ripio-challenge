import * as Consts from "../consts";
import axios from "axios";

//remote actions

const setRates = (rates) => {
  return { type: Consts.SET_RATES, rates };
};

export const getRates = () => {
  return { type: Consts.GET_RATES };
};

export const getCurrencies = () => {
  return { type: Consts.GET_CURRENCIES };
};
const setCurrencies = (currencies) => {
  return { type: Consts.SET_CURRENCIES, currencies };
};

const setLoading = (loading) => {
  return { type: Consts.SET_LOADING, loading };
};

const setSuccess = (success) => {
  return { type: Consts.SET_SUCCESS, success };
};

export const setUserCurrencies = (currencies) => {
  return { type: Consts.SET_USER_CURRENCIES, currencies };
};

export const setUserSingleCurrency = (currency) => {
  return { type: Consts.SET_USER_SINGLE_CURRENCY, currency };
};

export const setError = (error) => {
  return { type: Consts.SET_ERROR, error };
};

export const cleanError = () => {
  return { type: Consts.CLEAN_ERROR };
};

export const addMovement = (movement) => {
  return { type: Consts.ADD_MOVEMENT, movement };
};
//async action creators

export const getRemoteData = () => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      dispatch(getRates());
      dispatch(getCurrencies());
      const [{ data: rates }, { data: currencies }] = await axios.all([
        axios.get(Consts.ARratesEndpoint),
        axios.get(Consts.currenciesEndpoint),
      ]);
      dispatch(setRates(rates));
      dispatch(setCurrencies(currencies));
      dispatch(setSuccess(true));
    } catch (err) {
      dispatch(setSuccess(false));
    } finally {
      dispatch(setLoading(false));
    }
  };
};

export const convert = (from, to, fromValue, calculated, fromRate) => {
  return async (dispatch, getState) => {
    const {
      user_currencies: userCurrencies,
      local_currency: localCurrency,
      commission_charge: charges,
    } = getState().metadata;
    if (fromValue <= [userCurrencies[from]]) {
      dispatch(
        setUserSingleCurrency({
          [from]: userCurrencies[from] - fromValue,
        })
      );
      dispatch(
        setUserSingleCurrency({
          [to]: userCurrencies[to]
            ? userCurrencies[to] + calculated
            : calculated,
        })
      );
      dispatch(cleanError());
      dispatch(
        addMovement({
          date: new Date().toLocaleDateString(),
          kind: "Conversión",
          method: "web",
          state: "completed",
          charge: `${localCurrency.ticker} ${localCurrency.symbol}${(
            fromRate.buy_rate *
            fromValue *
            charges
          ).toLocaleString("es-AR", { maximumFractionDigits: 2 })}`,
          amount: `${localCurrency.ticker} ${localCurrency.symbol} ${(
            fromValue * fromRate.sell_rate
          ).toLocaleString("es-AR", { maximumFractionDigits: 2 })}`,
        })
      );
    } else {
      dispatch(
        setError(`No tiene suficiente ${from} para realizar la operación`)
      );
    }
  };
};
