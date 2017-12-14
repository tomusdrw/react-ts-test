import * as React from 'react';
import { Link } from 'react-router-dom';

export const Order = () => (
  <React.Fragment>
    <Link to="/"><button>Back to Shop</button></Link>
    <h1>Your Order</h1>
  </React.Fragment>
);
