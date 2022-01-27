import React from 'react';
import { ButtonGroup } from './ButtonGroup';
import { RuleBuilder } from './RuleBuilder';
import { FIELD_VALUE_TYPE_MAPPING, RULE_CONFIG } from './constants';
import { RuleGroupBuilderProps, Conjunctions } from './types';

function RuleGroupBuilder({ ruleGroupIndex, ruleGroup, setRuleGroups }: RuleGroupBuilderProps) {
  const createRule = () => {
    setRuleGroups({ ...ruleGroup, children: [...ruleGroup.children, {}] });
  }
  const updateRule = (index: number, key: string, value: string) => {
    const newRules = [...ruleGroup.children];
    const newRule = {...ruleGroup.children[index]};

    // @ts-ignore
    newRule[key] = value;
    // @ts-ignore
    newRule.valueMetadata = { key: 'value', label: 'Criteria', ...FIELD_VALUE_TYPE_MAPPING[newRule.field] };
    newRules[index] = newRule;
    setRuleGroups({ ...ruleGroup, children: newRules });
  };
  const deleteRule = (index: number) => {
    const newRules = [...ruleGroup.children];
    newRules[index] = null;
    setRuleGroups({ ...ruleGroup, children: newRules });
  };
  const setAndOr = (value: Conjunctions) => {
    setRuleGroups({ ...ruleGroup, conjunction: value });
  };

  return (
    <div className="bg-gray-700 p-6 rounded border border-gray-500 mb-8">
      <ButtonGroup currentValue={ruleGroup.conjunction} buttons={['AND', 'OR']} onChange={setAndOr} />

      {ruleGroup.children.map((rule, ruleIndex) => {
        if (rule === null) {
          return rule;
        }
        else {
          const newRuleConfig = [...RULE_CONFIG];
          if (rule.valueMetadata) {
            newRuleConfig[2] = { ...rule.valueMetadata };
          }
          return (
            <RuleBuilder
              key={`${ruleGroupIndex}-${ruleIndex}`}
              ruleConfig={newRuleConfig}
              updateRule={updateRule}
              deleteRule={deleteRule}
              ruleIndex={ruleIndex}
              ruleGroupIndex={ruleGroupIndex}
            />
          );
        }
      })}

      <button className="mt-8 px-4 py-2 bg-indigo-600 text-white rounded" onClick={createRule}>Add filter</button>
    </div>
  );
}

export { RuleGroupBuilder };
