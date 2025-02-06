import { QuestionLevelType } from '../enums/question-level.ts';

export interface Question {
  id: number;
  level: QuestionLevelType;
  question: string;
  options: string[];
  answer: string;
}
