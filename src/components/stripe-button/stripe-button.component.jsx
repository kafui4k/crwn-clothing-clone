import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;

    const pubishableKey =
        'pk_test_51GqqppHNVkRDXRYk4vcEiOR4Ek5tZZnKDpbRhUWy1Nr1E6VbapJH9MDus4IWUaUQsfe9Afwzm69ofJFDhCbN3nmT00z4YQc5Qh';

    const onToken = (token) => {
        console.log(token);
        alert('Payment Successful');
    };

    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={pubishableKey}
        />
    );
};

export default StripeCheckoutButton;
