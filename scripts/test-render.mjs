import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { HelmetProvider } from 'react-helmet-async';
import App from '../src/App.jsx';

const helmetContext = {};
const html = renderToString(
  React.createElement(HelmetProvider, { context: helmetContext },
    React.createElement(StaticRouter, { location: '/' },
      React.createElement(App)
    )
  )
);
console.log('Rendered HTML length:', html.length);
console.log(html.slice(0, 2000));
