import { RuleFieldMetadata } from './types';

export const FIELD_VALUE_TYPE_MAPPING = {
  'Theme': {
    defaultValue: ['Offers', 'Performance', 'Platform'],
    type: 'Select'
  },
  'Sub-theme': {
    defaultValue: ['Offers', 'Performance', 'Platform'],
    type: 'Select'
  },
  'Reason': {
    defaultValue: ['Offers', 'Performance', 'Platform'],
    type: 'Select'
  },
  'Language': {
    defaultValue: ['Offers', 'Performance', 'Platform'],
    type: 'Select'
  },
  'Rating': {
    type: 'Number'
  },
  'Time Period': {
    defaultValue: ['Offers', 'Performance', 'Platform'],
    type: 'Select'
  }
};

export const RULE_CONFIG: Array<RuleFieldMetadata> = [
  {
    key: 'field',
    label: 'Field',
    defaultValue: ['Theme', 'Sub-theme', 'Reason', 'Language', 'Rating', 'Time Period'],
    type: 'Select'
  },
  {
    key: 'condition',
    label: 'Condition',
    defaultValue: ['Equals', 'Does not equal', 'Like', 'Not like', 'Is Empty', 'Is', 'Is not'],
    type: 'Select'
  },
  {
    key: 'value',
    label: 'Criteria'
  }
];

export const QUERY_STRING_SYMBOLS = {
  'Equals': '==',
  'Does not equal': '!=',
  'Like': 'Like',
  'Not like': 'Not like',
  'Is Empty': 'Is Empty',
  'Is': 'Is',
  'Is not': 'Is not',
  'AND': '&&',
  'OR': '||'
};
