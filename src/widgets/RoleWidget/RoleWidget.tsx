import { useState } from 'react';
import classes from './RoleWidget.module.scss';
import bellIcon from '../../assets/img/RoleWidget/bell-outlined.svg';
import arrowIcon from '../../assets/img/RoleWidget/arrow-down.svg';
import userAvatar from '../../assets/img/RoleWidget/logo-usr-mini.webp';

interface IRoleWidgetProps {
  name?: string,
  role?: string,
  image?: string,
}

const RoleWidget = ({ name = 'NoName', role = 'NoRole', image = userAvatar }: IRoleWidgetProps): JSX.Element => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = ():void => {
    setVisible((prev) => !prev);
  };

  const exitButtonClass = visible ? classes.btn_logout_visible : classes.btn_logout_invisible;

  return (
    <div className={classes.roleWidget__container}>
      <button className={classes.btn_notifications}><img src={bellIcon} alt="Notifications" /></button>
      <div className={classes.divider} />
      <div className={classes.userInfo}>
        <p className={classes.userInfo__name}>{name}</p>
        <p className={classes.userInfo__role}>{role}</p>
      </div>
      <button className={classes.btn_arrowDown} onClick={toggleVisible} type='button'>
        <img src={arrowIcon} alt="Expand" />
      </button>
      <img className={classes.userAvatar} src={image} alt="Profile avatar" />
      <button className={`${classes.btn_logout} ${exitButtonClass}`} type='button'>
        <span>Выход</span>
      </button>
    </div>
  );
};

export default RoleWidget;
