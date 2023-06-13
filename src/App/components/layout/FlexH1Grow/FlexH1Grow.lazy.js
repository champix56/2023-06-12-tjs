import React, { lazy, Suspense } from 'react';

const LazyFlexH1Grow = lazy(() => import('./FlexH1Grow'));

const FlexH1Grow = props => (
  <Suspense fallback={null}>
    <LazyFlexH1Grow {...props} />
  </Suspense>
);

export default FlexH1Grow;
