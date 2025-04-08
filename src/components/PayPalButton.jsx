// PayPalButton.js
import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const PayPalButton = ({ amount, onSuccess }) => {
  return (
    <PayPalScriptProvider options={{ "client-id": "Ad2SIYs6ZiLqYakgPE2PjBQUDljmn9u0Aiv9lJszVV40VxGQvSAcZikD83w488XczO3yIaDywnAEXJFm" }}>
      <PayPalButtons
        style={{ layout: "vertical" }}
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: amount.toString(), // amount as string
                },
              },
            ],
          });
        }}
        onApprove={(data, actions) => {
          return actions.order.capture().then((details) => {
            onSuccess(details); // Handle success
          });
        }}
      />
    </PayPalScriptProvider>
  );
};

export default PayPalButton;
