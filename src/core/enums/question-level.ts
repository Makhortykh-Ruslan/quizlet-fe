export const QuestionLevel = {
  EASY: 'easy',
  MEDIUM: 'medium',
  HARD: 'hard',
} as const;

export type QuestionLevelType =
  (typeof QuestionLevel)[keyof typeof QuestionLevel];
