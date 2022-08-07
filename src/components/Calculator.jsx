import React from 'react';
import ProgressBar from './ProgressBar';
import { PLANS, START_DATE_FALL22, END_DATE_FALL22 } from '../model/constants';


const Calculator = () =>  {

    const foodPointsEstimate = 0;
    
    return (
        <div>
            <ProgressBar/>
            You should have {foodPointsEstimate} food points left bitch
        </div>
    )
}

export default Calculator;