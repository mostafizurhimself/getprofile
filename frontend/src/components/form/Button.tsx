import classNames from 'classnames';
import React from 'react';

interface Props {
  type?: 'button' | 'submit';
  className?: string;
  children: React.ReactNode;
}

const Button: React.FC<Props> = ({ type = 'submit', children, className }) => {
  return (
    <button type={type} className={classNames(['btn', className])}>
      {children}
    </button>
  );
};

export default Button;
