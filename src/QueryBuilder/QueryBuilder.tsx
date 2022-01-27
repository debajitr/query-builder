import React, { useState, useEffect } from 'react';
import { RuleGroupBuilder } from './RuleGroupBuilder';
import { RULE_CONFIG } from './constants';
import { QueryBuilderProps, RuleGroup } from './types';
import { makeStringQuery } from './utils';

function QueryBuilder({ onChange }: QueryBuilderProps) {
  const [stringQuery, setStringQuery] = useState<string>('');
  const [ruleGroups, setRuleGroups] = useState<Array<RuleGroup>>([{ children: [{}], conjunction: 'AND' }]);
  const createRuleGroup = () => {
    setRuleGroups([...ruleGroups, { children: [{}], conjunction: 'AND' }]);
  };
  const updateRuleGroup = (index: number, value: RuleGroup) => {
    const newRuleGroups = [...ruleGroups];
    newRuleGroups[index] = value;
    setRuleGroups(newRuleGroups);
  };
  useEffect(() => {
    const queryString = makeStringQuery(ruleGroups, RULE_CONFIG);
    setStringQuery(queryString);
    onChange({ stringQuery: queryString, ruleGroups });
  }, [ruleGroups]);

  return (
    <div className="max-w-5xl m-auto p-8">
      <div className="bg-indigo-400 text-white rounded px-4 py-2 mb-8">
        <b>Query: </b>{stringQuery}
      </div>

      {ruleGroups.map((ruleGroup, ruleGroupIndex) => {
        if (ruleGroup === null) {
          return ruleGroup;
        }
        else {
          return (
            <RuleGroupBuilder
              key={`${ruleGroupIndex}`}
              ruleGroupIndex={ruleGroupIndex}
              ruleGroup={ruleGroup}
              setRuleGroups={(value) => updateRuleGroup(ruleGroupIndex, value)}
            />
          );
        }
      })}

      <button className="mt-8 px-4 py-2 bg-indigo-600 text-white rounded" onClick={createRuleGroup}>Add new group filter</button>
    </div>
  );
}

export { QueryBuilder };
