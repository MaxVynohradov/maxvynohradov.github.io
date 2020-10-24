import './src/themes/gittalk.css';
import './src/themes/deckgoHighlightCode.css';
import './src/fonts/fonts.css';

import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader';
import React from 'react';

import { App } from './src/components';

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(cacheNames.map(cacheName => caches.delete(cacheName)));
    }),
  );
});

deckDeckGoHighlightElement();

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const wrapRootElement = ({ element }) => <App>{element}</App>;
