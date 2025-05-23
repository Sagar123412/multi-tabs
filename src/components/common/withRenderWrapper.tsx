import React from 'react';

const withRenderWrapper = (Component: React.ComponentType<any>) => {
  return (props: any) => (
    <div className="tab-wrapper">
      <Component {...props} />
    </div>
  );
};

export default withRenderWrapper;
