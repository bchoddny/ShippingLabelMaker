import React from 'react';
import Wizard from '../../components/wizard/wizard';
import ShippingLabelStepHeader from './shippingLabelStepHeader';
import ShippingLabelMakerSteps from './shippingLabelMakerSteps';
import {useEffect} from 'react';
import {useState} from 'react';
import ShippingLabel from './shippingLabel';

const ShippingLabelMaker = () => {
    const [showShippingLabel, setShowShippingLabel] = useState(false);
    const [wizardContext, setWizardContext] = useState({});

    const onComplete = () => {
        setShowShippingLabel(true);
    };

    const onPrint = () => {
        setShowShippingLabel(false);
        setWizardContext({});
    };

    const header = <ShippingLabelStepHeader />;
    return (
        <div>
            {!showShippingLabel &&
            <Wizard header={header} steps={ShippingLabelMakerSteps} wizardContext={wizardContext} onComplete={onComplete}/>
            }

            {showShippingLabel &&
            <ShippingLabel shippingLabelInfo={wizardContext} onPrint={onPrint}/>
            }
        </div>
    );
};

export default ShippingLabelMaker;
