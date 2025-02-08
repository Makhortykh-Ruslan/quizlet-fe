import { JSX, memo } from 'react';
import { Question } from '../../../../core/interfaces/question.ts';
import styles from './ItemQuestion.module.scss';

interface ItemQuestionProps extends Question {
  answer?: Question;
  handleSelectAnswer: any;
}

const ItemQuestion = memo(
  ({ name, id, handleSelectAnswer }: ItemQuestionProps): JSX.Element => {
    return (
      <div
        onClick={() => handleSelectAnswer({ id, name })}
        className={styles.component}
      >
        <p className={styles.text}>{name || '-'}</p>
      </div>
    );
  },
);

export default ItemQuestion;
