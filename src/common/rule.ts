import type { Field, Model } from '@mrleebo/prisma-ast';

import type { z } from 'zod';

import type { RuleConfig } from '#src/common/config.js';
import type {
  FieldViolation,
  ModelViolation,
  NodeViolation,
} from '#src/common/violation.js';

export type Rule = { ruleConfig: RuleConfig; ruleDefinition: RuleDefinition };

/**
 * Context passed to rules.
 */
export type RuleContext<T extends NodeViolation> = {
  fileName: string;
  report: (nodeViolation: T) => void;
};

export type ModelRuleDefinition<T> = {
  ruleName: string;
  configSchema: z.ZodSchema<T>;
  create: (
    config: T,
    context: RuleContext<ModelViolation>,
  ) => ModelRuleInstance;
};

export type ModelRuleInstance = {
  Model: (model: Model) => void;
};

export type FieldRuleDefinition<T> = {
  ruleName: string;
  configSchema: z.ZodSchema<T>;
  create: (
    config: T,
    context: RuleContext<FieldViolation>,
  ) => FieldRuleInstance;
};

export type FieldRuleInstance = {
  Field: (model: Model, field: Field) => void;
};

export type RuleDefinition =
  | ModelRuleDefinition<any>
  | FieldRuleDefinition<any>;
export type RuleInstance = ModelRuleInstance | FieldRuleInstance;
