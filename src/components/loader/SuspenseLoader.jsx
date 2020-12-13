import React, { Suspense } from 'react';

import Loader from './Loader';

const SuspenseLoader = ({ children, Fallback = Loader }) => (
  <Suspense fallback={<Fallback />}>{children}</Suspense>
);

export default SuspenseLoader;
