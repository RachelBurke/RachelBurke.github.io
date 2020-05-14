import React from 'react';
import ReactDOM from 'react-dom';
import withReduxFeatures from './withReduxFeatures';
import * as serviceWorker from './serviceWorker';

import App from './components/App';
import css from '../styles/style.styl';

const WrappedApp = withReduxFeatures(App);

ReactDOM.render(<WrappedApp />, document.getElementById('root'));

serviceWorker.unregister();
