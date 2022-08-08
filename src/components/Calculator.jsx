import React, { useState } from 'react';
import ProgressBar from './ProgressBar';
import PlanButton from './PlanButton';
import { PLANS, START_DATE, END_DATE } from '../model/constants';
import './Calculator.scss';

const Calculator = () =>  {

    const [plan, setPlan] = useState(localStorage.getItem('plan') || 'Plan A');
    const [percentage, setPercentage] = useState("0%");
    const [error, setError] = useState(null);

    const getAmount = plan => {
        const today = new Date('November 20 2022');
        const start = new Date(START_DATE);
        const end = new Date(END_DATE);
        if(!error && today < start) {
            setError('Semester has not started yet! Check back later');
        }
        else if(!error && today > end) {
            setError('Semester is over! Check back later');
        }
        else {
            const timeLeft = end-today;
            const total = end-start;
            percentage == "0%" && setPercentage(timeLeft/total*100+"%");
            return parseFloat(timeLeft/total*PLANS[plan]).toFixed(2);
        }
    }
    
    return (
        <div className='calculator' style = {{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            
            <div style ={{marginTop: '5vh', marginBottom: '5vh', display: 'flex', flexDirection: 'row'}}>
                {Object.keys(PLANS).map(planOption => 
                    <div key = {planOption} style = {{margin: '1vh'}}>
                        <PlanButton 
                            plan={planOption} 
                            setPlan={setPlan}
                            selected={planOption == plan}
                        />
                    </div>
                )}
            </div>
            {
                error || 
                <div style = {{fontSize: '3rem', fontWeight: 'bolder', textAlign: 'center'}}>
                    You should have {getAmount(plan)} food points left!
                </div>
                
            }
            <ProgressBar percentage = {percentage} />
        </div>
    )
}

export default Calculator;