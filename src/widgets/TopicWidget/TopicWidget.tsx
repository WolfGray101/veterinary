import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

import classes from './TopicWidget.module.scss';

import calendarIcon from '../../assets/TopicWidget/icons/calendar-icon.svg';
import commentsIcon from '../../assets/TopicWidget/icons/comments-icon.svg';

interface ITopicWidgetProps {
  title: string,
  content: string,
  creationDate: Date,
  lastUpdateDate: Date,
  name: string,
  commentsCount: number,
}

const TopicWidget: React.FC<ITopicWidgetProps> = ({
  title,
  content,
  creationDate,
  lastUpdateDate,
  name,
  commentsCount }:ITopicWidgetProps): JSX.Element => {
  const [mouseEnter, setMouseEnter] = useState<boolean>(false);

  // При наведении на блок даты возвращаю нужный класс
  const dateClass = mouseEnter ? classes.date__visible : classes.date__hidden;

  // Получаю вьюпорт и отрисовываю дивайдер при ширине > 800
  const divider = window.innerWidth > 800 ? classes.divider : null;

  return (
    <article className={classes.article}>
      <div className={classes.article__contentContainer}>
        <Link to="#" className={classes.article__link}>{title}</Link>
        <p className={classes.article__content}>{content}</p>
      </div>
      <div className={`${classes.article__userInfoContainer} ${divider}`}>
        <img className={classes.article__userAvatar} src='#' alt='' />
        <span className={classes.article__userName}>{name}</span>
      </div>
      <div
        className={`${classes.article__dateContainer} ${divider}`}
        onMouseEnter={() => setMouseEnter(() => true)}
        onMouseLeave={() => setMouseEnter(() => false)}
      >
        <div className={classes.date}>
          <img className={classes.date__icon} src={calendarIcon} alt='Calendar icon' />
          <span className={classes.date__info}>
            {format(creationDate, 'd LLLL, HH:mm', { locale: ru })}
          </span>
        </div>
        <div className={dateClass}>
          <div className={classes.date}>
            <img className={classes.date__icon} src={calendarIcon} alt='Calendar icon' />
            <span className={classes.date__info}>
              {format(creationDate, 'dd.MM.yyyy HH:mm')}
            </span>
          </div>
          <div className={classes.date}>
            <img className={classes.date__icon} src={calendarIcon} alt='Calendar icon' />
            <span className={classes.date__info}>
              {format(lastUpdateDate, 'dd.MM.yyyy HH:mm')}
            </span>
          </div>
        </div>
      </div>
      <div className={`${classes.article__commentsContainer} ${divider}`}>
        <img src={commentsIcon} alt='Comments icon' />
        <span>{commentsCount}</span>
      </div>
    </article>
  );
};

export default TopicWidget;
