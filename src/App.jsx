import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import HomePage from './components/HomePage';
import DigitalGoodsListing from './components/DigitalGoodsListing';
import DigitalGoodDetails from './components/DigitalGoodDetails';
import ShoppingCart from './components/ShoppingCart';
import Checkout from './components/Checkout';
import OrderConfirmation from './components/OrderConfirmation';
import Register from './components/Register';
import Login from './components/Login';
import AccountDashboard from './components/AccountDashboard';
import AccountEdit from './components/AccountEdit';
import OrderHistory from './components/OrderHistory';
import PasswordResetRequest from './components/PasswordResetRequest';
import PasswordReset from './components/PasswordReset';
import CreateDigitalGood from './components/CreateDigitalGood';
import Contact from './components/Home/Contact';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" exact component={HomePage} />
          <Route path="/digital-goods" exact component={DigitalGoodsListing} />
          <Route path="/digital-goods/:id" component={DigitalGoodDetails} />
          <Route path="/cart" component={ShoppingCart} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/order-confirmation/:transactionId" component={OrderConfirmation} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/account" component={AccountDashboard} />
          <Route path="/account/edit" component={AccountEdit} />
          <Route path="/account/orders" component={OrderHistory} />
          <Route path="/forgot-password" component={PasswordResetRequest} />
          <Route path="/reset-password/:token" component={PasswordReset} />
          <Route path="/contact" component={Contact} />
        </Routes>
        <CreateDigitalGood />
      </div>
    </Router>
  );
};

export default App;
