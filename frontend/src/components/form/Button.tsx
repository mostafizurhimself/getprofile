import classNames from 'classnames';
import React from 'react';

interface Props {
    type?: "button" | "submit",
    className?: string
};

const Button: React.FC<Props> = ({ type = "submit", children, className }) => {
    return (
        <button type={type} className={classNames(['px-6 py-2 flex items-center rounded-full', className])}>
            {children}
        </button>
    );
};

export default Button;
