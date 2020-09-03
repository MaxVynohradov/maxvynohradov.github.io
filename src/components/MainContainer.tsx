import React, { FC } from 'react';

export const MainContainer: FC = ({ children }) => {
  return (
    <div>
      <p>Main container</p>
      {children}
    </div>
  );
};
