import { QuestionLevelType } from '../enums';

export interface Question {
  name: string;
  id: string | number;
}

export interface Quiz {
  id: number;
  level: QuestionLevelType;
  question: string;
  options: Question[];
  answer: Question;
}
