import 'gitalk/dist/gitalk.css';

import React from 'react';

import { App } from './src/components';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const wrapRootElement = ({ element }) => <App>{element}</App>;
