import React from 'react';

const WizardStep = (props) => {

    const {children, onAction, wizardContext, ...other} = props;

    const _children = React.Children.map(children, (child, idx) =>
        React.cloneElement(child, {
            id: child.id,
            wizardContext: wizardContext
        })
    );

    return (
        <div className="wizard-step">
            {_children}
            <WizardStepAction onAction={onAction}/>
        </div>
    );
}

const WizardStepAction = (props) => {
    return (
        <div class="row">
            <div class="col-sm-3">
                <button type="button" className="btn btn-primary" onClick={(e) => props.onAction(1, e)}>Previous
                </button>
                <button type="button" className="btn btn-primary ml-1" onClick={(e) => props.onAction(2, e)}>Next
                </button>
            </div>
        </div>
    );
};

export default WizardStep;