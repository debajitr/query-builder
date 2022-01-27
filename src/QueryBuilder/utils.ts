import { QUERY_STRING_SYMBOLS } from './constants';
import { RuleGroup, RuleFieldMetadata } from './types';

export function makeStringQuery(ruleGroups: Array<RuleGroup>, ruleConfig: Array<RuleFieldMetadata>) {
  const finalResult: Array<string> = [];

  ruleGroups.forEach(({ children, conjunction }) => {
    const result: Array<string> = [];

    children.forEach(rule => {
      // @ts-ignore
      if (rule && rule[ruleConfig[0].key] && rule[ruleConfig[1].key] && rule[ruleConfig[2].key]) {
        // @ts-ignore
        result.push(`(${ruleConfig[0].key}.${rule[ruleConfig[0].key]}) ${QUERY_STRING_SYMBOLS[rule[ruleConfig[1].key]]} ${rule[ruleConfig[2].key]}`);
      }
    });

    if(result.length) {
      finalResult.push(result.join(` ${QUERY_STRING_SYMBOLS[conjunction]} `));
    }
  });

  return finalResult.join(` && `);
}
