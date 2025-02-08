import * as React from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { JSX } from 'react';
import Button from '@mui/material/Button';
import { MOCK_LEVEL_LIST } from '../../../../core/constants';
import styles from './SimpleDialog.module.scss';

type Color =
  | 'secondary'
  | 'success'
  | 'error'
  | 'inherit'
  | 'primary'
  | 'info'
  | 'warning';

export interface SimpleDialogProps {
  open: boolean;
  onClose: (value: any) => void;
}

export const SimpleDialog: (props: SimpleDialogProps) => JSX.Element = (
  props: SimpleDialogProps,
) => {
  const { onClose, open } = props;

  const handleListItemClick = (value: any): void => {
    onClose(value);
  };

  const handleCloseModal = (): void => {
    onClose(false);
  };

  return (
    <Dialog onClose={handleCloseModal} open={open}>
      <DialogTitle>Select level</DialogTitle>
      <div className={styles.component}>
        {MOCK_LEVEL_LIST.map((el) => (
          <Button
            key={el.id}
            variant="outlined"
            color={el.color as Color}
            onClick={() => handleListItemClick(el)}
          >
            {el.name}
          </Button>
        ))}
      </div>
    </Dialog>
  );
};
