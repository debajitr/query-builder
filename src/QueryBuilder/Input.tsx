import React from 'react';
import { InputProps } from './types';

function Input({ id, label, onChange }: InputProps) {
  return (
    <div>
      <label className="block text-left text-white" htmlFor={id}>{label}</label>

      <input
        id={id}
        className="border rounded bg-gray-600 text-white p-2 mt-2 border-gray-500 w-full"
        onChange={(e) => onChange(e.currentTarget.value)}
      />
    </div>
  );
}

export { Input };
