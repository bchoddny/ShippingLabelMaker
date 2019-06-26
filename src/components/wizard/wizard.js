import React from 'react';
import {useState} from 'react';
import WizardStep from './wizardStep';
import constants from '../../constants';
import wizardCss from './wizard.css';

const Wizard = (props) => {
    const [stepIndex, setStepIndex] = useState(0),
        {header, steps, wizardContext, ...other} = props;

    const onAction = (action) => {

        if (constants.ACTION_TYPE.PREVIOUS === action) {
            let prevIndex = stepIndex - 1;
            if (prevIndex < 0) {
                return;
            }
            setStepIndex(stepIndex - 1);
        }
        else if (constants.ACTION_TYPE.NEXT === action) {
            let nextIndex = stepIndex + 1;
            if (nextIndex === steps.length) {
                console.log(wizardContext);
                props.onComplete();
            }
            setStepIndex(stepIndex + 1);
        }
    };

    const ProgressBar = () => {
        const width = ((stepIndex) / props.steps.length * 100) + '%';
        return (
            <div className="progress">
                <div className="progress-bar" role="progressbar" style={{width: width}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        );
    };

    return (
        <div className="wizard">
            {header}
            <ProgressBar />
            <WizardStep onAction={onAction} wizardContext={wizardContext}>
                {steps[stepIndex]}
            </WizardStep>
        </div>
    );
};

export default Wizard;
