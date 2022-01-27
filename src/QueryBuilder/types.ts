export type SelectProps = {
  id: string,
  label: string,
  options: Array<string>,
  onChange: (value: string) => void,
};

export type ButtonGroupProps = {
  currentValue: Conjunctions,
  buttons: Array<Conjunctions>,
  onChange: (value: Conjunctions) => void,
};

type FieldType = 'Select' | 'Number' | 'String' | 'Date' | 'Boolean';

export type RuleFieldMetadata = {
  key: string,
  label: string,
  defaultValue?: Array<string>,
  type?: FieldType
};

export type FieldBuilderProps = {
  id: string,
  ruleIndex: number,
  config: RuleFieldMetadata,
  updateRule: (index: number, key: string, value: string) => void
};

export type RuleBuilderProps = {
  ruleIndex: number,
  ruleGroupIndex: number,
  ruleConfig: Array<RuleFieldMetadata>,
  updateRule: (index: number, key: string, value: string) => void,
  deleteRule: (index: number) => void
};

type FieldOptions = 'Theme' | 'Sub-theme' | 'Reason' | 'Language' | 'Rating' | 'Time Period';
type ConditionOptions = 'Equals' | 'Does not equal' | 'Like' | 'Not like' | 'Is Empty' | 'Is' | 'Is not';

export type Rule = {
  field?: FieldOptions,
  condition?: ConditionOptions,
  value?: string
  valueMetadata?: RuleFieldMetadata
};

export type Conjunctions = 'AND' | 'OR';

export type RuleGroup = {
  children: Array<Rule | null>,
  conjunction: Conjunctions
};

export type RuleGroupBuilderProps = {
  ruleGroupIndex: number,
  ruleGroup: RuleGroup,
  setRuleGroups: (value: RuleGroup) => void
};

export type InputProps = {
  id: string,
  label: string,
  onChange: (value: string) => void,
};

type QueryBuilderOutput = {
  stringQuery: string,
  ruleGroups: Array<RuleGroup>
};

export type QueryBuilderProps = {
  onChange: (value: QueryBuilderOutput) => void,
};
