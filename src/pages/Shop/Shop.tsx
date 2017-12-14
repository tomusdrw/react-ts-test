import * as React from 'react';
import './Shop.css';

import { Product, ProductType } from '../../components/Product';
import { Loading } from '../../components/Loading';

import { Header } from './components/Header';

export class Shop extends React.Component {

  state = {
    isError: false,
    isLoading: true,
    products: [] as ProductType[],
    allProducts: [] as ProductType[],
    sort: 'name',
    reverse: false,
    search: ''
  };

  componentDidMount () {
    fetch('products.json')
      .then(res => res.json())
      .then(products => {
        this.setState({
          isLoading: false,
          products,
          allProducts: products
        });
        const { sort, reverse, search } = this.state;
        this.handleSort(sort, reverse);
        this.handleSearch(search);
      })
      .catch(err => {
        this.setState({
          isError: true,
          isLoading: false
        });
      });
  }

  render() {
    const { isLoading, isError, products, sort, search, reverse } = this.state;

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
        <Header
          sort={sort}
          reverse={reverse}
          search={search}
          onSort={this.handleSort}
          onSearch={this.handleSearch}
        />
        {products.map(product => <Product {...product} key={product.id}/>)}
      </div>
    );
  }

  handleSort = (sort: string, reverse: boolean) => {
    this.setState(({ products }: { products: ProductType[] }) => ({
      sort,
      reverse,
      products: products.sort((a, b) => {
        const res = a[sort] === b[sort] ? 0 : a[sort] < b[sort] ? 1 : -1;
        return reverse ? -res : res;
      })
    }));
  }

  handleSearch = (search: string) => {
    this.setState(({ allProducts }: { allProducts: ProductType[] }) => ({
      search,
      products: allProducts.filter(prod => {
        if (!search) {
          return true;
        }

        return prod.name.toLowerCase().indexOf(search) !== -1;
      })
    }));
  }
}
