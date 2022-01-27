import React from 'react';
import { SelectProps } from './types';

function Select({ id, label, options, onChange }: SelectProps) {
  return (
    <div>
      <label className="block text-left text-white" htmlFor={id}>{label}</label>

      <select
        disabled={options.length === 0}
        id={id}
        className="border rounded bg-gray-600 text-white p-2 mt-2 border-gray-500 w-full"
        onChange={(e) => onChange(e.currentTarget.value)}
      >
        <option value="">Select {label}</option>
        {options.map(option => (<option key={option} value={option}>{option}</option>))}
      </select>
    </div>
  );
}

export { Select };
