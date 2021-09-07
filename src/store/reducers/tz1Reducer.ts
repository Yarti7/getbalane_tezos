import {Tz1Action, Tz1ActionTypes, Tz1State} from "../../types/tz1";


const initialState: Tz1State = {
    tz1s: [384882937],
    pkh: ["tz1Q8SvcHjBBihikyoEqg7bFCYwQafEU2iqb"],
    loading: false,
    
    error: null
}


export  const tz1Reducer = (state= initialState, action: Tz1Action): Tz1State => {

    switch (action.type)
    {
        case Tz1ActionTypes.FETCH_TZ1:
            return {...state, loading: true, error: null}
        case Tz1ActionTypes.FETCH_TZ1_SUCCESS:
            return {...state,
                loading: false,
                error: null,
                tz1s: [...state.tz1s, action.payload],
                pkh: [...state.pkh, action.pkh]}

        case Tz1ActionTypes.FETCH_TZ1_ERROR:
            return {...state, loading: false, error: action.payload, tz1s: [], pkh: []}

        default:
            return state

    }

}