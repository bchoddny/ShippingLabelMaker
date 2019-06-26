import React from 'react';
import StepsCss from './shippingLabelMakerSteps.css';
import {useState} from 'react';

const FromAddress = (props) => {
    if (!props.wizardContext.from) {
        props.wizardContext.from = {
            name: '',
            street: '',
            city: '',
            state: '',
            zip: ''
        }
    }
    const [address, setAddress] = useState(props.wizardContext.from);

    const handleInputChange = (event) => {
        let addressObj = Object.assign({}, address);
        addressObj[event.target.name] = event.target.value;
        setAddress(addressObj);
        props.wizardContext.from = addressObj;
    };
    return (
        <form name="from">
            <div className="form-group row">
                <label className="col-sm-2 col-form-label"><b>Sender Detail:</b></label>
            </div>
            <div className="form-group row">
                <label for="name" className="col-sm-2 col-form-label">Name</label>
                <div className="col-sm-5">
                    <input type="text" className="form-control" name="name" id="name" value={address.name} onChange={handleInputChange}/>
                </div>
            </div>
            <div className="form-group row">
                <label for="street" className="col-sm-2 col-form-label">Street</label>
                <div className="col-sm-5">
                    <input type="text" className="form-control" name="street" value={address.street} onChange={handleInputChange}/>
                </div>
            </div>

            <div className="form-group row">
                <label for="city" className="col-sm-2 col-form-label">City</label>
                <div className="col-sm-5">
                    <input type="text" className="form-control" name="city" value={address.city} onChange={handleInputChange}/>
                </div>
            </div>

            <div className="form-group row">
                <label for="state" className="col-sm-2 col-form-label">State</label>
                <div className="col-sm-5">
                    <input type="text" className="form-control" name="state" value={address.state} onChange={handleInputChange}/>
                </div>
            </div>

            <div className="form-group row">
                <label for="zip" className="col-sm-2 col-form-label">Zip</label>
                <div className="col-sm-5">
                    <input type="text" className="form-control" name="zip" value={address.zip} onChange={handleInputChange}/>
                </div>
            </div>
        </form>
    );
};

const ToAddress = (props) => {

    if (!props.wizardContext.to) {
        props.wizardContext.to = {
            name: '',
            street: '',
            city: '',
            state: '',
            zip: ''
        }
    }
    const [address, setAddress] = useState(props.wizardContext.to);

    const handleInputChange = (event) => {
        let addressObj = Object.assign({}, address);
        addressObj[event.target.name] = event.target.value;
        setAddress(addressObj);
        props.wizardContext.to = addressObj;
    };
    return (
        <form name="to" className="steps">
            <div className="form-group row">
                <label className="col-sm-2 col-form-label"><b>Receiver Detail:</b></label>
            </div>
            <div className="form-group row">
                <label for="name" className="col-sm-2 col-form-label">Name</label>
                <div className="col-sm-5">
                    <input type="text" className="form-control" name="name" id="name" value={address.name} onChange={handleInputChange}/>
                </div>
            </div>
            <div className="form-group row">
                <label for="street" className="col-sm-2 col-form-label">Street</label>
                <div className="col-sm-5">
                    <input type="text" className="form-control" name="street" value={address.street} onChange={handleInputChange}/>
                </div>
            </div>

            <div className="form-group row">
                <label for="city" className="col-sm-2 col-form-label">City</label>
                <div className="col-sm-5">
                    <input type="text" className="form-control" name="city" value={address.city} onChange={handleInputChange}/>
                </div>
            </div>

            <div className="form-group row">
                <label for="state" className="col-sm-2 col-form-label">State</label>
                <div className="col-sm-5">
                    <input type="text" className="form-control" name="state" value={address.state} onChange={handleInputChange}/>
                </div>
            </div>

            <div className="form-group row">
                <label for="zip" className="col-sm-2 col-form-label">Zip</label>
                <div className="col-sm-5">
                    <input type="text" className="form-control" name="zip" value={address.zip} onChange={handleInputChange}/>
                </div>
            </div>
        </form>
    );
};


const Weight = (props) => {

    if (!props.wizardContext.weight) {
        props.wizardContext.weight = {
            weight: ''
        }
    }
    const [weight, setWeight] = useState(props.wizardContext.weight);


    const handleInputChange = (event) => {
        let weightObj = Object.assign({}, weight);
        weightObj[event.target.name] = event.target.value;
        setWeight(weightObj);
        props.wizardContext.weight = weightObj;
    };
    return (
        <form name="weight" className="steps">
            <label>
                Weight:
                <input type="text" name="weight" value={weight.weight} onChange={handleInputChange}/>
            </label>
        </form>
    );
};


const Shipping = (props) => {

    if (!props.wizardContext.shippingOption) {
        props.wizardContext.shippingOption = {
            shippingOption: ''
        }
    }
    const [shippingOption, setShippingOption] = useState(props.wizardContext.shippingOption);

    const handleInputChange = (event) => {
        let shippingObj = Object.assign({}, shippingOption);
        shippingObj[event.target.name] = event.target.value;
        setShippingOption(shippingObj);
        props.wizardContext.shippingOption = shippingObj;
    };
    return (
        <form name="shipping" className="steps">
            <label>
                Weight:
                <select name="shippingOption" value={shippingOption.shippingOption} onChange={handleInputChange}>
                    <option value="1">Ground</option>
                    <option value="2">Priority</option>
                </select>
            </label>
        </form>
    );
};


const _getWizardSteps = () => {
    return [
        <FromAddress/>,
        <ToAddress/>,
        <Weight />,
        <Shipping />,
    ];
};

export default _getWizardSteps();
