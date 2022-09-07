import React from 'react';
import Button from 'react-bootstrap/Button';

const PlanButton = props => {

    const onClick = plan => {
        localStorage.setItem('plan', plan);
        props.setPlan(plan);
    }
    return(
        <Button 
            style = {{borderColor: '#023188', 
                      color: props.selected ? '#023188' : 'white', 
                      backgroundColor: props.selected ? 'white' : '#023188'
                    }}
            variant={props.selected ? 'primary' : 'outline-primary'}
            onClick={() => onClick(props.plan)}
        >
            {props.plan}
        </Button>
    )
}

export default PlanButton;