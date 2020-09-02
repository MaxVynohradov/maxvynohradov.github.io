import React from 'react';

import App from './src/components/App';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const wrapRootElement = ({ element }) => <App>{element}</App>;
