import * as React from 'react';
import { render } from 'react-dom';
import * as sinon from 'sinon';

import { Shop } from './Shop';

it('renders without crashing', done => {
  const server = sinon.fakeServer.create();
  server.respondWith('GET', 'products.json', JSON.stringify([]));
  render(<Shop />, document.createElement('div'));
  server.respond();
  server.restore();
  
  setImmediate(done);
});
