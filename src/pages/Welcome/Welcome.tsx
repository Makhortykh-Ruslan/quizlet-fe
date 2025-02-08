import { JSX, useState } from 'react';
import { useQuizletContext } from '../../core/contexts/AppContext.tsx';
import { ActionsName, RouterPath } from '../../core/enums';
import { useNavigate } from 'react-router-dom';
import styles from './Welcome.module.scss';
import Button from '@mui/material/Button';
import { SimpleDialog } from './components/SimpleDialog/SimpleDialog.tsx';

const Welcome: () => JSX.Element = () => {
  const [open, setOpen] = useState(false);
  const { dispatch } = useQuizletContext();
  const navigate = useNavigate();

  const handleClickOpen = (): void => {
    setOpen(true);
  };

  const handleClose = (value: string): void => {
    setOpen(false);

    if (!value) return;

    dispatch({ type: ActionsName.NEXT_STEP, payload: value });
    navigate(RouterPath.QUIZLET);
  };

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Welcome</h1>
      <p className={styles.subtitle}>It is a quizlet about React</p>
      <Button onClick={handleClickOpen} variant="contained">
        Start Quiz
      </Button>
      <SimpleDialog open={open} onClose={handleClose} />
    </div>
  );
};

export default Welcome;
