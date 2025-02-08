import React, { createContext, useContext, ReactNode, useReducer } from 'react';
import { QuizletActionsType } from '../types/actions.ts';
import { ActionsName, QuestionLevel } from '../enums';
import { MOCK_QUESTIONS_MAP } from '../constants';
import { Quiz } from '../interfaces/question.ts';

type AppQuestionState = {
  time: number;
  points: number;
  difficult: string;
  questions: Quiz[];
  questionIdx: number;
  isFinished: boolean;
};

const initialAppQuestionState: AppQuestionState = {
  time: 300,
  points: 0,
  difficult: QuestionLevel.EASY,
  questions: MOCK_QUESTIONS_MAP.get(QuestionLevel.EASY),
  questionIdx: 0,
  isFinished: false,
};

const counterReducer = (
  state: AppQuestionState,
  action: QuizletActionsType,
): AppQuestionState => {
  switch (action.type) {
    case ActionsName.NEXT_STEP:
      return {
        ...state,
        difficult: action.payload.name,
        questions: MOCK_QUESTIONS_MAP.get(action.payload.name),
      };

    case ActionsName.SELECT_ANSWER:
      return {
        ...state,
        points:
          action.payload.name === state.questions[state.questionIdx].answer.name
            ? state.points + 1
            : state.points,
        questionIdx:
          state.questionIdx + 1 === state.questions.length
            ? state.questionIdx
            : state.questionIdx + 1,
        isFinished: state.questionIdx + 1 === state.questions.length,
      };

    case ActionsName.RESET:
      return {
        ...state,
        ...initialAppQuestionState,
      };

    case ActionsName.FINISHED:
      return {
        ...state,
        isFinished: true,
      };

    default:
      return state;
  }
};

interface AppQuizletProviderProps {
  children: ReactNode;
}

interface QuizletContextType {
  state: AppQuestionState;
  dispatch: React.Dispatch<QuizletActionsType>;
}

export const QuizletContext = createContext<QuizletContextType | undefined>(
  undefined,
);

export const AppQuizletProvider: React.FC<AppQuizletProviderProps> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(counterReducer, initialAppQuestionState);

  return (
    <QuizletContext.Provider value={{ state, dispatch }}>
      {children}
    </QuizletContext.Provider>
  );
};

export const useQuizletContext = (): QuizletContextType => {
  const context = useContext(QuizletContext);
  if (!context) {
    throw new Error('useQuizletContext must be used within a QuizletProvider');
  }
  return context;
};
