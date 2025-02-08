import { ActionsName } from '../enums';
import { Question } from '../interfaces/question.ts';

export type QuizletActionsType =
  | {
      type: ActionsName.NEXT_STEP;
      payload: Question;
    }
  | {
      type: ActionsName.NEST_QUESTION;
      payload: number;
    }
  | {
      type: ActionsName.SELECT_ANSWER;
      payload: Question;
    }
  | {
      type: ActionsName.FINISHED;
    };
