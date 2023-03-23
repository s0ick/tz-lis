import React from 'react';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom/client';

import {store} from './redux/store';
import {AppPage} from './components/app-page';
import './common/styles/index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <AppPage/>
  </Provider>
);
