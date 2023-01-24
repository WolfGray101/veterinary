import classes from '../../styles/cardWidget.module.scss';

function CardWidget(): JSX.Element {
  const users = true;
  const item = users ? (
    <div className={classes.card}>
      <div className={classes.cardDecorativeLine} />
      <div className={classes.cardContent}>
        <span className={classes.title_cardContent}>Super Cool Project</span>
        <p className={classes.body_cardContent}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. viverra.</p>
      </div>
    </div>
  ) : (
    <div className={classes.card}>
      <div className={classes.cardDecorativeLine} />
      <div className={classes.cardContent}>
        <ul>
          <li className={classes.userInfo_cardContent}>Mr.Hassan Magdy</li>
          <li className={classes.userInfo_cardContent}>birthdate 2022-12-20</li>
          <li className={classes.userInfo_cardContent}>Tel : 369 258 147</li>
          <li className={classes.userInfo_cardContent}>Email: link / notify</li>
          <li className={classes.userInfo_cardContent}>Disc :  link / notify</li>
          <li className={classes.userInfo_cardContent}>Telegram: link / notify</li>
          <li className={classes.userInfo_cardContent}>Tel : 369 258 147</li>
          <li className={classes.userInfo_cardContent}>Email: link / notify</li>
          <li className={classes.userInfo_cardContent}>Disc :  link / notify</li>
          <li className={classes.userInfo_cardContent}>Telegram: link / notify</li>
        </ul>
      </div>
      <img
        src='https://static.productionready.io/images/smiley-cyrus.jpg'
        // onError={(e) => {
        //   e.target.src = 'https://static.productionready.io/images/smiley-cyrus.jpg';
        // }}
        alt="author"
      />
    </div>
  );

  return (
    <div className={classes.main}>
      <h3 className={classes.mainTitle}>Admin</h3>
      <div className={classes.cardList}>
        {item}
      </div>
    </div>
  );
}

export default CardWidget;
