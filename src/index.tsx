import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import { Shop } from './pages/Shop';

ReactDOM.render(
  <Shop />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
