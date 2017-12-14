import * as React from 'react';
import './Product.css';

class Description extends React.Component<{ description: string }, { expanded: boolean }> {

  state = {
    expanded: false
  };

  handleToggle = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  }

  render () {
    const { description } = this.props;

    if (this.state.expanded) {
      return (
        <p>
          {description}
          <a onClick={this.handleToggle}> less</a>
        </p>
      );
    }

    return (
      <p>
        {description.slice(0, 64)}
        <a onClick={this.handleToggle}> more...</a>
      </p>
    );
  }
}

export interface ProductType {
  id: number;
  name: string;
  price: number;
  description: string;
  isSpecial: boolean;
}

export const Product = ({ id, name, price, description, isSpecial }: ProductType) => (
  <div className={`product ${isSpecial ? 'special' : ''}`}>
    <img src={`https://xpla.org/ext/lorempixel/250/250/technics/${id}`} />
    <h3>{name}</h3>
    <Description {...{description}} />
    <h4 className="price">{(price / 100).toFixed(2)} zł</h4>
  </div>
);
