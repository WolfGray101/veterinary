import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

import classes from './TopicWidget.module.scss';

import {
  calendarIcon,
  commentsIcon,
  editIcon,
} from '../../assets/TopicWidget/icons';
import { IUserInfoDto } from '../../types/UserDTO/UserDTO';

interface ICommentDtoList {
  id: number,
  content: string,
  dataTime: Date,
  likes: number,
  dislike: number,
  userInfoDto: IUserInfoDto,
}

interface ITopicWidgetProps {
  id: number,
  title: string,
  content: string,
  creationDate: Date,
  lastUpdateDate: Date,
  topicStarter: IUserInfoDto,
  commentDtoList: ICommentDtoList[],
}

const TopicWidget: React.FC<ITopicWidgetProps> = ({
  id,
  title,
  content,
  creationDate,
  lastUpdateDate,
  topicStarter,
  commentDtoList }:ITopicWidgetProps): JSX.Element => {
  const [mouseEnter, setMouseEnter] = useState<boolean>(false);

  // При наведении на блок даты возвращаю нужный класс
  const dateClass = mouseEnter ? classes.date__visible : classes.date__hidden;

  // Получаю вьюпорт и отрисовываю дивайдер при ширине > 800
  const divider = window.innerWidth > 699.98 ? classes.divider : null;

  return (
    <article key={id} className={classes.article}>
      <div className={classes.article__contentContainer}>
        <Link to="#" className={classes.article__link}>{title}</Link>
        <p className={classes.article__content}>{content}</p>
      </div>
      <div className={`${classes.article__userInfoContainer} ${divider}`}>
        <img className={classes.article__userAvatar} src='#' alt='User avatar' />
        <span className={classes.article__userName}>
          {`${topicStarter.firstname} ${topicStarter.lastname}`}
        </span>
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
            {/* Не нашел иконку в файле, поставил заглушку -> запросить иконку у куратора проекта */}
            <img className={classes.date__icon} src={editIcon} alt='Calendar icon' />
            <span className={classes.date__info}>
              {format(lastUpdateDate, 'dd.MM.yyyy HH:mm')}
            </span>
          </div>
        </div>
      </div>
      <div className={`${classes.article__commentsContainer} ${divider}`}>
        <img src={commentsIcon} alt='Comments icon' />
        <span>{commentDtoList.length}</span>
      </div>
    </article>
  );
};

export default TopicWidget;
