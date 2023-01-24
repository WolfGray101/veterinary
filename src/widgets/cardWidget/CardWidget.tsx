import classes from '../../styles/cardWidget.module.scss';

function CardWidget(): JSX.Element {
  const users = true;
  const item = users ? (
    <>
      <div className={classes.card}>
        <span>Super Cool Project</span>
      </div>
      <div className={classes.card}>
        <span>Cool Project!!!!!!!!!!!</span>
      </div>
    </>
    
  ) : (
    <div className={classes.card}>
      <span>Cool Project!!!!!!!!!!!</span>
    </div>
  );

  return (
    <div className={classes.main}>
      <h3>users</h3>
      <div className={classes.cardList}>
        {item}
      </div>
    </div>);
}

export default CardWidget;
