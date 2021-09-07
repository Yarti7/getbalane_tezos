import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {fetchTz1} from "../store/action-creators/tz1";
import {store} from "../store";

const Tz1List: React.FC = () => {

    const {tz1s, error, loading, pkh} = useTypedSelector(state => state.tz1);
    const dispatch = useDispatch();
    const [pkhs, setPkh] = useState('');

    useEffect(() => {
        fetchTz1(pkh)
    }, [setPkh])


    if (loading) {
        return <h1>Загрузка...</h1>
    }

    if (error) {
        return <h1>{error}</h1>
    }

    //console.log(store.getState())
    // console.log("pkh:", pkh)

    return (
        <div>
            <div>
                <input placeholder="Enter your pkh here..." style={{"width": "300px"}}
                       value={pkhs}
                       onChange={(e) => setPkh(e.target.value)}/>
                <button onClick={() =>
                    dispatch(fetchTz1(pkhs))}>ADD
                </button>
            </div>
            <div>

                {tz1s.map((tz1sitem, i) =>
                    <div key={tz1sitem} >
                        {pkh[i]} | {tz1sitem / 1000000}
                    </div>
                )}


            </div>
        </div>
    );
}

export default Tz1List;