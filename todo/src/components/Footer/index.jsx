import React from 'react';
import { withRouter } from 'react-router';
import { Button } from 'react-toolbox/lib/button';
import styles from './Footer.css';

const Footer = props => {
  const { pathname } = props.location;
  const showSaveBtn = pathname !== "/" ? styles.visible : styles.invisible;
  const showBtn = !(pathname === "/" || pathname === "/new") ? styles.visible : styles.invisible;
  const statusText = props.done ? 'Re-open' : 'Mark as Done'
  return (
    <footer className={styles.footer}>
      <Button icon="delete" label="Delete" primary raised className={showBtn} onClick={props.onDeletePress}/>
      <Button label={statusText} primary raised  className={showBtn} onClick={props.onDonePress}/>
      <Button label="Save" primary raised className={showSaveBtn} onClick={props.onSavePress}/>
    </footer>
  )
}

export default withRouter(Footer);