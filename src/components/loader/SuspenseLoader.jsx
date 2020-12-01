import React, { Suspense } from 'react';

import Loader from './Loader';

const  SuspenseLoader = ({ children, Fallback = Loader }) => {
    return <Suspense fallback={<Fallback/>}>{children}</Suspense>;
}

export default SuspenseLoader