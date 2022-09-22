import './style.sass';

import { FC } from 'react';

export const NotFounded: FC = () => {
  return (
    <div className="notFounded">
      <div className="notFoundedImage" />
      <p className="notFoundedText">Bad Request</p>
      <p className="notFoundedSubTitle">Try to change filters</p>
    </div>
  );
};
