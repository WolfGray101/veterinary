import { format, parseJSON } from 'date-fns';

import { ICommentDto } from 'types/UserDTO/UserDTO';
import { useAppSelector } from 'hooks/redux';
import { ru } from 'date-fns/locale';

import fingerUp from 'assets/CommentWidget/FingerUp.svg';
import busya from 'assets/CommentWidget/Busya.jpg';

import classes from './CommentWidget.module.scss';

const CommentWidget = ({ content, dateTime, likes, dislike, UserInfoDto }: ICommentDto): JSX.Element => {
  const user = useAppSelector((state) => state.user);
  const authorName = `${UserInfoDto.firstname} ${UserInfoDto.lastname}`;
  const date = format(parseJSON(dateTime), 'd LLLL yyyy', { locale: ru });

  return (
    <li className={classes.comment__container}>
      <div className={classes.authorInfo}>
        <img src={busya} alt="Author avatar" />
        <a href='#'><span>{authorName}</span></a>
      </div>
      <div className={classes.content__container}>
        <div className={classes.date}><span>{date}</span></div>
        <div className={classes.content}>
          <p>{content}</p>
          <div className={classes.content__controller}>
            <button className={classes.edit}><span>Edit</span></button>
            <button className={classes.delete}><span>Delete</span></button>
          </div>
        </div>
        <div className={classes.likes__controller}>
          <button className={classes.like}>
            <img src={fingerUp} alt="Put like" />
            <span>{likes}</span>
          </button>
          <button className={classes.dislike}>
            <img src={fingerUp} alt="Put dislike" />
            <span>{dislike}</span>
          </button>
        </div>
      </div>
    </li>
  );
};

export default CommentWidget;
