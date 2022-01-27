import React from 'react';
import { Select } from './Select';
import { Input } from './Input';
import { FieldBuilderProps } from './types';

function FieldBuilder({ id, ruleIndex, config, updateRule }: FieldBuilderProps) {
  const { key, label, defaultValue, type } = config;

  switch (type) {
    case 'Select':
      return (
        <Select
          id={id}
          label={label}
          options={defaultValue || []}
          onChange={(value) => updateRule(ruleIndex, key, value)}
        />
      );

    case 'Number':
      return (
        <Input
          id={id}
          label={label}
          onChange={(value) => updateRule(ruleIndex, key, value)}
        />
      );

    default:
      return (
        <Select
          id={id}
          label={label}
          options={[]}
          onChange={() => {}}
        />
      );
  }
}

export { FieldBuilder };
