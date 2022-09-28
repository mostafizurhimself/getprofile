import classNames from 'classnames';
import React from 'react';

type Props = {
  color?:
    | 'primary'
    | 'green'
    | 'red'
    | 'orange'
    | 'amber'
    | 'yellow'
    | 'lime'
    | 'emerald'
    | 'teal'
    | 'cyan'
    | 'sky'
    | 'blue'
    | 'indigo'
    | 'purple'
    | 'fuchsia'
    | 'pink'
    | 'rose';
  progress: number;
};

const bgColor = {
  primary: 'bg-primary-500',
  green: 'bg-green-500',
  red: 'bg-red-500',
  orange: 'bg-orange-500',
  amber: 'bg-amber-400',
  yellow: 'bg-yellow-400',
  lime: 'bg-lime-500',
  emerald: 'bg-emerald-500',
  teal: 'bg-teal-500',
  cyan: 'bg-cyan-500',
  sky: 'bg-sky-500',
  blue: 'bg-blue-500',
  indigo: 'bg-indigo-500',
  purple: 'bg-purple-500',
  fuchsia: 'bg-fuchsia-500',
  pink: 'bg-pink-500',
  rose: 'bg-rose-500',
};

const ProgressBar = ({ color = 'primary', progress }: Props) => {
  return (
    <div className="h-3 w-full overflow-hidden rounded-md bg-gray-200">
      <div className={classNames('h-3', bgColor[color])} style={{ width: `${progress}%` }}></div>
    </div>
  );
};

export default ProgressBar;
