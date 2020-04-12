import React, {useEffect,Fragment} from 'react';
import store from "../../store";
import {getCorona} from "../../actions/coronaAction";
import {useSelector} from "react-redux";
import Spinner from "../layout/Spinner";
const Corona = () => {
    useEffect(()=>{
        store.dispatch(getCorona());
    },[]);
    const coronasArray = useSelector(state => state.corona.coronas);
    const loading = useSelector(state => state.corona.loading);
    console.log(coronasArray);
    return (
        <div>
            <table className={'table'}>
                <thead>
                    <tr>
                        <th>State</th>
                        <th>Country</th>
                        <th>Latest total cases</th>
                    </tr>
                </thead>
                <tbody>
                {loading === false && coronasArray !== null ? (<Fragment><Spinner/></Fragment> )
                    : coronasArray.map(corona => {
                    return <tr key={corona.id}>
                        <td>{corona.state}</td>
                        <td>{corona.country}</td>
                        <td>{corona.latestTotalCases}</td>
                    </tr>
                })}
                </tbody>
            </table>
        </div>
    );
};

export default Corona;