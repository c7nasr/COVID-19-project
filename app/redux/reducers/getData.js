import { GET_TODAY, CALCULATE_INCREASE_RECOVERED, NEXT_FIVE_DAYS_CASES, NEXT_FIVE_DAYS_DEATH, GET_DATES, GET_PAST } from "../actions/types";

const initState = {
  dates:{}
};
export default getData = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_TODAY:
      return { ...state, payload };
    case CALCULATE_INCREASE_RECOVERED:
      return {...state,increase_in_recovered:payload}
    case NEXT_FIVE_DAYS_CASES:
      return {...state,next_days_cases:payload}
    case NEXT_FIVE_DAYS_DEATH:
      return {...state,next_days_death:payload}
    case GET_DATES:
      return {...state,dates:payload}
    case GET_PAST:
      return {...state,past:payload}

    default:
      return state;
  }
};
