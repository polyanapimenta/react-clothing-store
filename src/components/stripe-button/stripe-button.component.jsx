import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
  const priceForStripe = price * 100;
  const publishableKey = process.env.REACT_STRIPE_PUBLISHABLE_KEY

  const onToken = token => {
    console.log(token);
    alert("Payment Successful");
  }

  return (
    <StripeCheckout 
      label="Pay Now"
      name="React Clothing Store Ltda."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton;