import React from 'react';
import { ButtonGroupProps } from './types';

function ButtonGroup({ currentValue, buttons, onChange }: ButtonGroupProps) {
  const getRadiusClass = (index: number, buttonCount: number) => {
    if (index === 0) return 'rounded-l';
    if (index + 1 === buttonCount) return 'rounded-r';
    return
  };

  return (
    <div>
      {buttons.map((value, index) => (
        <button
          key={value}
          className={`border ${getRadiusClass(index, buttons.length)} text-white p-2 border-gray-500 ${currentValue === value ? 'bg-indigo-600' : 'bg-gray-600'}`}
          onClick={() => onChange(value)}>
          {value}
        </button>
      ))}
    </div>
  );
}

export { ButtonGroup };
