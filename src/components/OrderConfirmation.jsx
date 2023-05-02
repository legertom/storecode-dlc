import React from 'react';

const OrderConfirmation = (props) => {
  // You can access the transaction ID using props.match.params.transactionId
  return (
    <div>
      <h1>Order Confirmation</h1>
      {/* Add your order summary, transaction details, and download links here */}
    </div>
  );
};

export default OrderConfirmation;
