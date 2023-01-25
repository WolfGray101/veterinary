import { ReactNode } from 'react';
import classes from '../../styles/cardWidget.module.scss';

type PropsType = {
  props: ReactNode;
};

function CardWidget({ props }: PropsType): JSX.Element {
  return (
    <div className={classes.card}>
      <div className={classes.cardContent}>
        <div className={classes.cardDecorativeLine} />
        {props}
      </div>
    </div>
  );
}

export default CardWidget;
