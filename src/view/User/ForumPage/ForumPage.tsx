import classes from './ForumPage.module.scss';

function ForumPage() {
  return (
    <section className={classes.wrapper}>
      <div className={classes.contentContainer}>
        <header className={classes.headerContainer}>
          <h1 className={classes.pageTitle}>
            Форум
          </h1>
        </header>
        <main className={classes.content}>
          <ul className={classes.content__list} />
        </main>
      </div>
    </section>
  );
}

export default ForumPage;
