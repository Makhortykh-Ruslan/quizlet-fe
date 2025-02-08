import { QuestionLevel } from './question-level.ts';

export const ActionsName = {
  NEXT_STEP: 'nextStep',
  NEST_QUESTION: 'nextQuestion',
  SELECT_ANSWER: 'selectAnswer',
  RESET: 'reset',
  FINISHED: 'finished',
} as const;

export type ActionsNameType = (typeof ActionsName)[keyof typeof ActionsName];
