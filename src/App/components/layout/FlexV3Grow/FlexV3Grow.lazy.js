import React, { lazy, Suspense } from 'react';

const LazyFlexV3Grow = lazy(() => import('./FlexV3Grow'));

const FlexV3Grow = props => (
  <Suspense fallback={null}>
    <LazyFlexV3Grow {...props} />
  </Suspense>
);

export default FlexV3Grow;
