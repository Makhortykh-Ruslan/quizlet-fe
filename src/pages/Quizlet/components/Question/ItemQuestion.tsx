import { JSX, memo } from 'react';
import { Question } from '../../../../core/interfaces/question.ts';
import styles from './ItemQuestion.module.scss';

interface ItemQuestionProps extends Question {
  answer?: Question;
}

const ItemQuestion = memo(
  ({ name, id, onClick }: ItemQuestionProps): JSX.Element => {
    return (
      <div onClick={() => onClick({ id, name })} className={styles.component}>
        <p className={styles.text}>{name || '-'}</p>
      </div>
    );
  },
);

export default ItemQuestion;
