 import { TezosToolkit } from '@taquito/taquito';
 import {Tz1ActionTypes} from "../../types/tz1";
 import {Dispatch} from "redux";

 const Tezos = new TezosToolkit('https://mainnet-node.madfish.solutions');


export const fetchTz1 = (pkh: string) => {
    return async (dispatch: Dispatch) => {
       try {
         //  dispatch({type: Tz1ActionTypes.FETCH_TZ1});
           const response = await Tezos.tz.getBalance(pkh)
           console.log(response.c);
           console.log(pkh);
           dispatch({type: Tz1ActionTypes.FETCH_TZ1_SUCCESS, payload: response.c, pkh: pkh});
       } catch (e) {
           dispatch({type: Tz1ActionTypes.FETCH_TZ1_ERROR, payload: 'Произошла ошибка'});
       }
    }

}