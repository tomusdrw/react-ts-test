import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import { Router } from './Router';

ReactDOM.render(
  <Router />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
