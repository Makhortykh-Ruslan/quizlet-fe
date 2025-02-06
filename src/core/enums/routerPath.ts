export const RouterPath = {
  QUIZLET: '/quizlet',
} as const;

export type RouterPathType = (typeof RouterPath)[keyof typeof RouterPath];
