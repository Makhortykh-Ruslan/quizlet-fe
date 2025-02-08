import { Quiz } from '../interfaces/question.ts';
import { MOCK_EASY, MOCK_HARD, MOCK_MEDIUM } from './mock-questions.ts';
import { QuestionLevel } from '../enums';

export const MOCK_QUESTIONS_MAP: Map<any, Quiz[]> = new Map([
  [QuestionLevel.EASY, MOCK_EASY],
  [QuestionLevel.MEDIUM, MOCK_MEDIUM],
  [QuestionLevel.HARD, MOCK_HARD],
]);
