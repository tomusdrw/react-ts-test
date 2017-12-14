import * as React from 'react';
import './Loading.css';

interface Props {
  fullscreen: boolean;
}

export class Loading extends React.Component<Props> {

  static defaultProps = {
    fullscreen: false
  };

  state = {
    displayed: false
  };

  timeout: number;

  componentDidMount () {
    this.timeout = setTimeout(
      () => this.setState({ displayed: true }),
      100
    );
  }

  componentWillUnmount () {
    clearTimeout(this.timeout);
  }

  render () {
    if (!this.state.displayed) {
      return null;
    }

    const { fullscreen } = this.props;

    return (
      <div className={`loading ${ fullscreen ? 'fullscreen' : ''}`}>
        <div>
          Loading<span>.</span><span>.</span><span>.</span>
        </div>
      </div>
    );
  }
}
