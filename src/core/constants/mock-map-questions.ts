import { QuestionLevel } from '../enums/question-level.ts';
import { Question } from '../interfaces/question.ts';
import { MOCK_EASY, MOCK_HARD, MOCK_MEDIUM } from './mock-questions.ts';

export const MOCK_QUESTIONS_MAP: Record<QuestionLevel, Question[]> = new Map([
  [QuestionLevel.EASY, MOCK_EASY],
  [QuestionLevel.MEDIUM, MOCK_MEDIUM],
  [QuestionLevel.HARD, MOCK_HARD],
]);
