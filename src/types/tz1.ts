
export interface  Tz1State {
    tz1s: any[];
    pkh: any;
    loading: boolean;
    error: null | string;
}

export enum Tz1ActionTypes {
    FETCH_TZ1 = "FETCH_TZ1",
    FETCH_TZ1_SUCCESS = "FETCH_TZ1_SUCCESS",
    FETCH_TZ1_ERROR = "FETCH_TZ1_ERROR"
}

interface FetchTz1Action {
    type: Tz1ActionTypes.FETCH_TZ1;
}

interface FetchTz1SuccessAction {
    type: Tz1ActionTypes.FETCH_TZ1_SUCCESS;
    payload: any[];
    pkh: string;
}

interface FetchTz1ErrorAction {
    type: Tz1ActionTypes.FETCH_TZ1_ERROR;
    payload: string;
}

export type Tz1Action =  FetchTz1Action | FetchTz1ErrorAction | FetchTz1SuccessAction;