import React, { lazy, Suspense } from 'react';

const LazyMemeThumbnail = lazy(() => import('./MemeThumbnail'));

const MemeThumbnail = props => (
  <Suspense fallback={null}>
    <LazyMemeThumbnail {...props} />
  </Suspense>
);

export default MemeThumbnail;
