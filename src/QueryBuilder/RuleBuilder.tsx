import React from 'react';
import { FieldBuilder } from './FieldBuilder';
import { DeleteIcon } from './DeleteIcon';
import { RuleBuilderProps } from './types';

function RuleBuilder({ ruleIndex, ruleGroupIndex, ruleConfig, updateRule, deleteRule }: RuleBuilderProps) {
  return (
    <div className="flex flex-row mt-4">
      {ruleConfig.map((config, ruleItemIndex) => (
        <div className="mr-8 basis-1/4" key={`${ruleGroupIndex}-${ruleIndex}-${ruleItemIndex}`}>
          <FieldBuilder id={`${ruleGroupIndex}-${ruleIndex}-${ruleItemIndex}`} ruleIndex={ruleIndex} config={config} updateRule={updateRule} />
        </div>
      ))}

      {ruleIndex === 0 ? null: (
        <div className="relative">
          <button className="absolute bottom-0 left-0 bg-gray-600 rounded p-1.5" onClick={() => deleteRule(ruleIndex)}>
            <DeleteIcon />
          </button>
        </div>
      )}
    </div>
  );
}

export { RuleBuilder };
