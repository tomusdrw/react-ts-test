import * as React from 'react';
import './Shop.css';

import { Product, ProductType } from '../../components/Product';
import { Loading } from '../../components/Loading';

export class Shop extends React.Component {

  state = {
    isError: false,
    isLoading: true,
    products: [] as Array<ProductType>
  };

  componentDidMount () {
    fetch('products.json')
      .then(res => res.json())
      .then(products => {
          this.setState({
            isLoading: false,
            products
          });
      })
      .catch(err => {
        this.setState({
          isError: true,
          isLoading: false
        });
      });
  }

  render() {
    const { isLoading, isError, products } = this.state;

    if (isLoading) {
      return (
        <Loading fullscreen={true} />
      );
    }

    // TODO [ToDr] Nicer component
    if (isError) {
      return (
        <h1>Error loading products.</h1>
      );
    }

    return (
      <div className="shop">
        {products.map(product => <Product {...product} key={product.id}/>)}
      </div>
    );
  }
}
