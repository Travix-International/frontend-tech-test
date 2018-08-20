import React from 'react';
import { withRouter } from 'react-router';
import { Button } from 'react-toolbox/lib/button';
import styles from './Footer.css';

const Footer = props => {
  const { pathname } = props.location;
  const saveBtnClass = pathname !== "/" ? styles.visible : styles.invisible;
  const btnClass = !(pathname === "/" || pathname === "/new") ? styles.visible : styles.invisible;
  const statusText = props.done ? 'Re-open' : 'Mark as Done';
  return (
    <footer className={styles.footer}>
      <Button icon="delete" label="Delete" primary raised className={btnClass} onClick={props.onDeletePress}/>
      <Button label={statusText} primary raised  className={btnClass} onClick={props.onDonePress}/>
      <Button label="Save" primary raised className={saveBtnClass} onClick={props.onSavePress}/>
    </footer>
  );
}

export default withRouter(Footer);