import { JSX, memo, useCallback, useEffect, useState } from 'react';
import { useQuizletContext } from '../../core/contexts/AppContext.tsx';
import { ActionsName } from '../../core/enums';
import { Question } from '../../core/interfaces/question.ts';
import ItemQuestion from './components/Question/ItemQuestion.tsx';
import styles from './Quizlet.module.scss';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

const Quizlet = memo(() => {
  const { state, dispatch } = useQuizletContext();
  const navigate = useNavigate();
  const [time, setTime] = useState<number>(state.time);

  const { options, question } = state.questions[state.questionIdx];

  const handleSelectAnswer = useCallback(
    (payload: Question): void => {
      dispatch({
        type: ActionsName.SELECT_ANSWER,
        payload,
      });
    },
    [dispatch],
  );

  const handleReturnFirstStep = (): void => {
    dispatch({ type: ActionsName.RESET });
    navigate(-1);
  };

  useEffect(() => {
    if (state.isFinished) return;

    const timer = setInterval(() => {
      setTime((prev) => {
        const result = prev - 1;
        if (!result) {
          setTimeout(() => dispatch({ type: ActionsName.FINISHED }), 0);
        }
        return result;
      });
    }, 1000);

    return (): void => {
      clearInterval(timer);
    };
  }, [state.isFinished]);

  const parseTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    return `${minutes}`.padStart(2, '0') + ':' + `${seconds}`.padStart(2, '0');
  };

  const getResultMessage = (score): string => {
    if (score < 5) {
      return 'Very bad! 😞 You need to prepare better. Try again!';
    } else if (score >= 5 && score < 8) {
      return "Not bad, but there's room for improvement! 📚 Keep practicing!";
    } else if (score >= 8 && score < 10) {
      return "Almost perfect! 🏆 Just one or two mistakes. You're on the right track!";
    } else {
      return "Wow, you got all the answers right! 🚀🔥 You're a real pro! 🏆😎";
    }
  };

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <p className={styles.time}>{parseTime(time)}</p>
        <p className={styles.difficult}>Level: {state.difficult}</p>
        <Button
          onClick={handleReturnFirstStep}
          variant="contained"
          color="success"
        >
          Change difficult
        </Button>
      </header>

      <main className={styles.main}>
        <p className={styles.title}>Score: {state.points}</p>
        {!state.isFinished && <p className={styles.question}>{question}</p>}
        {!state.isFinished &&
          options.map((el) => (
            <ItemQuestion
              handleSelectAnswer={handleSelectAnswer}
              key={el.id}
              id={el.id}
              name={el.name}
            />
          ))}
        {state.isFinished && (
          <p className={styles.title}>{getResultMessage(state.points)}</p>
        )}
      </main>
    </div>
  );
});

export default Quizlet;
