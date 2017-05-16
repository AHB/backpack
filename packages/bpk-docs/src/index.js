import React from 'react';
import ReactDOM from 'react-dom';
import Helmet from 'react-helmet';
import ReactDOMServer from 'react-dom/server';
import { Router, RouterContext, match, browserHistory, createMemoryHistory } from 'react-router';

import routes from './routes';
import template from './template';
import { extractAssets } from './webpackStats';

if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  const root = document.getElementById('react-mount');

  ReactDOM.render(React.createElement(Router, {
    history: browserHistory,
    onUpdate: () => window.scrollTo(0, 0),
    routes,
  }), root);
}

export default ((locals, callback) => {
  const history = createMemoryHistory();
  const location = history.createLocation(locals.path);
  const assets = extractAssets(locals.webpackStats);

  match({ routes, location, history }, (error, redirectLocation, props) => {
    if (error) {
      return callback(error);
    }

    if (redirectLocation) {
      return callback(error, `<script>window.location = '${redirectLocation.pathname}';</script>`);
    }

    const html = ReactDOMServer.renderToStaticMarkup(React.createElement(RouterContext, props));
    const head = Helmet.rewind();

    return callback(error, template({ head, html, assets }));
  });
});
