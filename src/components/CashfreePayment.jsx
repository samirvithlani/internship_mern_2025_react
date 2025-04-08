import React, { useEffect, useState } from "react";
import axios from "axios";

const CashfreePayment = () => {
  const [sdkLoaded, setSdkLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://sdk.cashfree.com/js/ui/2.0.0/cashfree.sandbox.js";
    script.async = true;
    script.onload = () => {
      console.log("✅ Cashfree SDK loaded");
      setSdkLoaded(true);
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const initiatePayment = async () => {
    const orderDetails = {
      order_id: "order_" + Date.now(),
      order_amount: 100,
      customer_email: "testuser@example.com",
      customer_name: "Test User",
      customer_phone: "9999999999",
    };

    try {
      const { data } = await axios.post("http://localhost:3000/payment/payment", orderDetails);
      console.log("Backend Response:", data);

      if (!data.payment_session_id) {
        alert("❌ No payment_session_id received");
        return;
      }

      const cashfree = new window.Cashfree();
     
      cashfree.drop(
        {
          paymentSessionId: data.payment_session_id, // Make sure this is uncommented and set properly
        },
        {
          layout: "POPUP",
          container: "cf-dropin-container",
          components: ["order-details", "card", "upi", "paylater", "netbanking", "wallet"],
      
          // 👇 REQUIRED CALLBACK
          onPaymentSuccess: (data) => {
            console.log("✅ Payment Success:", data);
            alert("Payment Successful!");
            // You can redirect or do any post-payment logic here
          },
      
          // 👇 OPTIONAL CALLBACKS
          onPaymentFailure: (data) => {
            console.log("❌ Payment Failed:", data);
            alert("Payment Failed!");
          },
          onPaymentCancel: (data) => {
            console.log("⚠️ Payment Cancelled:", data);
          },
        }
      );
      
      
    } catch (error) {
      console.error("Payment Error:", error);
      alert("Payment Failed");
    }
  };

  return (
    <div>
      <h3>💰 Cashfree Payment Integration</h3>
      <button onClick={initiatePayment} disabled={!sdkLoaded}>
        {sdkLoaded ? "Pay Now" : "Loading..."}
      </button>
      <div id="cf-dropin-container" style={{ marginTop: "20px" }}></div>
    </div>
  );
};

export default CashfreePayment;
