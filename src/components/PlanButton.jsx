import React from 'react';
import Button from 'react-bootstrap/Button';

const PlanButton = props => {

    const onClick = plan => {
        localStorage.setItem('plan', plan);
        props.setPlan(plan);
    }
    return(
        <Button 
            variant={props.selected ? 'primary' : 'outline-primary'}
            onClick={() => onClick(props.plan)}
        >
            {props.plan}
        </Button>
    )
}

export default PlanButton;