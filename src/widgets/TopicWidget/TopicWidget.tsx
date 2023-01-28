import classes from './TopicWidget.module.scss';

// interface CommentDtoList {
//   id: number,
//   content: string,
//   dateTime: Date,
//   likes: number,
//   dislike: number,
// }
//
// interface ITopicStarter {
//   id: number,
//   email: string,
//   firstname: string,
//   lastname: string,
// }
//
interface ITopicWidgetProps {
  title: string,
  content: string,
  creationDate: Date,
  lastUpdateDate: Date,
  name: string,
  commentsCount: number,
}

const TopicWidget = ({ title, content, creationDate, lastUpdateDate, name, commentsCount }:ITopicWidgetProps): JSX.Element => (
  <article className={classes.article}>
    <div className={classes.articleContentContainer}>
      <h2 className={classes.articleTitle}>{title}</h2>
      <p className={classes.articleContent}>{content}</p>
    </div>
    <div className={classes.articleUserInfoContainer}>
      <img className={classes.articleUserAvatar} src='#' alt='User avatar' />
      <span>{name}</span>
    </div>
    <div className={classes.articleDateContainer}>
      <span>{creationDate}</span>
      <span>{lastUpdateDate}</span>
    </div>
    <div className={classes.articleCommentsContainer}>
      <img src='#' alt='Comments icon' />
      <span>{commentsCount}</span>
    </div>
  </article>
);
