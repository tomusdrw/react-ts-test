import * as React from 'react';
import { Link } from 'react-router-dom';
import { Form, StyledText } from 'react-form';

import './Order.css';

export const Order = ({ history }: { history: { push: (x: string) => void } }) => (
  <React.Fragment>
    <Link to="/"><button>Back to Shop</button></Link>
    <h1>Your Order</h1>
    <Form
      validateError={errorValidator}
      onSubmit={() => history.push('/')}
    >
      { formApi => (
        <form onSubmit={formApi.submitForm}>
          <label htmlFor="name">Name</label>
          <StyledText field="name" id="name" />
          <label htmlFor="name">Address</label>
          <StyledText field="address" id="address" />
          <button>Order!</button>
        </form>
      )}
    </Form>
  </React.Fragment>
);

function errorValidator (values: { name: string, address: string }) {
  return {
    name: !values.name ? 'Name cannot be empty' : '',
    address: !values.address ? 'Address cannot be empty' : ''
  };
}
