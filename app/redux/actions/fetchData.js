import { GET_TODAY, CALCULATE_INCREASE_RECOVERED ,NEXT_FIVE_DAYS_CASES,NEXT_FIVE_DAYS_DEATH,GET_DATES,GET_PAST} from "./types";
import axiosConfig from "../../api/axios.config";
import moment from 'moment';

export const getToday =  () => async dispatch => {
 
  const today  = await axiosConfig.get("/now")
 
  dispatch({
    type: GET_TODAY,
    payload: today.data.data
  });


};
export const calcRecovered =  () => async dispatch => {
 
    const recover  = await axiosConfig.get("past")
    dispatch({
      type: CALCULATE_INCREASE_RECOVERED,
      payload: recover.data.data[0].dischargedCount - recover.data.data[1].dischargedCount
    });
  
  };
  
export const predictionCases = () => async dispatch =>{
  const predictionCasesGET  = await axiosConfig.get("prediction")
  const data = predictionCasesGET.data.data.slice(-5)
  
  const dates = data.map((e) => moment(e.date).format("D")).sort((a, b) => a - b)

  const totals = data.map((t) => t.total).sort((a, b) => a - b)
  const totalsDeath = data.map((t) => t.deathCount).sort((a, b) => a - b)

 
  const next = {
     dates,
    totals
  }

  const nextDeath = {
  totalsDeath
 }
  dispatch({
    type: NEXT_FIVE_DAYS_CASES,
    payload: next
  });


  dispatch({
    type: NEXT_FIVE_DAYS_DEATH,
    payload: nextDeath
  });
}

export const history  = () => async dispatch =>{
  const getPast  = await axiosConfig.get("past")
  const PandemicStart = getPast.data.data.slice(-1)[0].countDate
  var a = moment();
  var b = moment(PandemicStart);
  const pandemicStartAtDays = a.diff(b, 'days')
  const pandemicStartAtDate = moment(PandemicStart).format("MMMM Do YYYY")

  let FirstDeathAndRecover = getPast.data.data.find((e) =>{
    return e.deathCount == 2
  }).countDate
  FirstDeathAndRecover = moment(FirstDeathAndRecover).format("MMMM Do YYYY")

  let FirstDeathAndRecoverAtDays = getPast.data.data.find((e) =>{
    return e.deathCount == 2
  }).countDate
  FirstDeathAndRecoverAtDays = a.diff(FirstDeathAndRecoverAtDays, 'days')

  
  const dates = {
    pandemicStartAtDays,
pandemicStartAtDate,
FirstDeathAndRecover,
FirstDeathAndRecoverAtDays
  }
  dispatch({
    type: GET_DATES,
    payload: dates
  });
  const yesterday  = getPast.data.data[0]

dispatch({
  type: GET_PAST,
  payload: yesterday
});  

}