import React from 'react';

const ShippingLabel = (props) => {
    return (
        <div>
            <div className="shippingLabel">
                <div>
                    <label><b>Sender</b></label>
                    <div>
                        <label>Name: </label>
                        <label>{props.shippingLabelInfo.from.name}</label>
                    </div>
                    <div>
                        <label>Street: </label>
                        <label>{props.shippingLabelInfo.from.street}</label>
                    </div>
                    <div>
                        <label>City: </label>
                        <label>{props.shippingLabelInfo.from.city}</label>
                    </div>
                    <div>
                        <label>State: </label>
                        <label>{props.shippingLabelInfo.from.state}</label>
                    </div>
                    <div>
                        <label>Zip: </label>
                        <label>{props.shippingLabelInfo.from.zip}</label>
                    </div>
                </div>
                <div>
                    <label><b>Receiver</b></label>
                    <div>
                        <label>Name: </label>
                        <label>{props.shippingLabelInfo.to.name}</label>
                    </div>
                    <div>
                        <label>Street: </label>
                        <label>{props.shippingLabelInfo.to.street}</label>
                    </div>
                    <div>
                        <label>City: </label>
                        <label>{props.shippingLabelInfo.to.city}</label>
                    </div>
                    <div>
                        <label>State: </label>
                        <label>{props.shippingLabelInfo.to.state}</label>
                    </div>
                    <div>
                        <label>Zip: </label>
                        <label>{props.shippingLabelInfo.to.zip}</label>
                    </div>
                </div>
            </div>
            <div className="shippingLabel">
                <div>
                    <label><b>Weight</b></label>
                    <div>
                        <label>Weight: </label>
                        <label>{props.shippingLabelInfo.weight.weight}</label>
                    </div>
                </div>
                <div>
                    <label><b>Shipping</b></label>
                    <div>
                        <label>Shipping Choice: </label>
                        <label>{props.shippingLabelInfo.shippingOption.shippingOption}</label>
                    </div>
                </div>
            </div>
            <button className="primary" onClick={props.onPrint}>Print</button>
        </div>
    );
}
export default ShippingLabel;
