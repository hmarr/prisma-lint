import type { RuleDefinition } from '#src/common/rule.js';
import fieldNameMappingSnakeCase from '#src/rules/field-name-mapping-snake-case.js';
import fieldOrder from '#src/rules/field-order.js';
import forbidField from '#src/rules/forbid-field.js';
import forbidRequiredIgnoredField from '#src/rules/forbid-required-ignored-field.js';
import modelNameGrammaticalNumber from '#src/rules/model-name-grammatical-number.js';
import modelNameMappingSnakeCase from '#src/rules/model-name-mapping-snake-case.js';
import modelNamePrefix from '#src/rules/model-name-prefix.js';
import requireFieldIndex from '#src/rules/require-field-index.js';
import requireFieldType from '#src/rules/require-field-type.js';
import requireField from '#src/rules/require-field.js';

export default [
  fieldNameMappingSnakeCase,
  fieldOrder,
  forbidField,
  forbidRequiredIgnoredField,
  modelNameGrammaticalNumber,
  modelNameMappingSnakeCase,
  modelNamePrefix,
  requireField,
  requireFieldIndex,
  requireFieldType,
] satisfies RuleDefinition[];
