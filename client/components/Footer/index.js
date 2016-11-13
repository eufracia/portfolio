
import React from 'react';
import styles from './style.css';

import ActionBar from '../ActionBar';

export default () => <div className={styles.root}>
  <ActionBar />
  <p className={styles.copyright}>© 2016 <span className={styles.initial}>EUFRACIA</span>.
  All rights reserved.</p>
</div>
